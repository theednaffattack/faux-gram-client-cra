import React from "react";
import uuidv4 from "uuid/v4";
import dFormat from "date-fns/format";
import axios from "axios";

import CreateThreadAndAddMessageToThread from "./create-thread-and-add-message-to-thread";
import AddMessageToThread from "./add-message-to-thread";
import { IChatFormProps, IChatFormState } from "./types";

const { log } = console;

export const inputStyles = {
  display: "none"
};

class ChatForm extends React.Component<IChatFormProps, IChatFormState> {
  fileInputRef: React.RefObject<HTMLInputElement>;
  constructor(props: IChatFormProps) {
    super(props);

    this.fileInputRef = React.createRef();

    this.handleClearFilePreview = this.handleClearFilePreview.bind(this);
    this.openFileDialog = this.openFileDialog.bind(this);
    this.fileListToArray = this.fileListToArray.bind(this);
    this.makeObjectUrls = this.makeObjectUrls.bind(this);
    this.makeBlobUrls = this.makeBlobUrls.bind(this);
    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.dataUriToBlob = this.dataUriToBlob.bind(this);
    this.handleRemoveIndividualImagePreview = this.handleRemoveIndividualImagePreview.bind(
      this
    );
    this.getS3Signature = this.getS3Signature.bind(this);

    this.uploadToS3 = this.uploadToS3.bind(this);
    this.makeBlobUrlsFromReference = this.makeBlobUrlsFromReference.bind(this);
    this.formatFilename = this.formatFilename.bind(this);

    this.state = {
      files: []
    };
  }

  formatFilename = (file: any) => {
    console.log("Filename", file);
    const filename = file.name;

    const date = dFormat(new Date(), "YYYYMMDD");

    const randomString = Math.random()
      .toString(36)
      .substring(2, 7);

    const fileExtension = file.type.substring(
      file.type.lastIndexOf("/") + 1,
      file.type.length
    );

    const cleanFileName = filename.toLowerCase().replace(/[^a-z0-9]/g, "-");

    const restrictedLengthCleanFileName = cleanFileName.substring(0, 40);

    log(
      "restrictedLengthCleanFileName".toUpperCase(),
      restrictedLengthCleanFileName
    );
    log("randomString & fileExtension".toUpperCase(), {
      randomString,
      fileExtension
    });

    const newFilename = `${date}-${randomString}-${restrictedLengthCleanFileName}.${fileExtension}`;

    return newFilename;
  };

  async makeBlobUrlsFromReference(myFile: any) {
    return await fetch(myFile)
      .then(r => r.blob())
      .then(blobFile => {
        console.log({ myFile });

        const getFileName = this.state.files
          .filter(aFile => aFile.blobUrl === myFile)
          .map(theFile => theFile.name)[0];
        console.log({ getFileName });

        console.log({
          teams: new File([blobFile], getFileName, {
            type: myFile.type
          })
        });
        return new File([blobFile], getFileName, {
          type: myFile.type
        });
      });

    // return await Promise.all(
    //   self.state.files.map(async myFile => {
    //     return await fetch(myFile)
    //       .then(r => r.blob())
    //       .then(
    //         blobFile =>
    //           new File([blobFile], uuidv4(), {
    //             type: "image/png"
    //           })
    //       );
    //   })
    // );
  }

  uploadToS3 = async ({ file, signedRequest }: any) => {
    const options = {
      headers: {
        "Content-Type": "image/png"
      }
    };
    console.log("look at theFile", file);

    const theFile = await this.makeBlobUrlsFromReference(file);

    console.log("look at theFile", theFile);

    let s3ReturnInfo = await axios
      .put(signedRequest, theFile, options)
      .catch(error => console.error({ error }));

    console.log("s3ReturnInfo".toUpperCase(), s3ReturnInfo);

    return s3ReturnInfo;
  };

  async getS3Signature() {
    const { files } = this.state;
    const { signS3Mutation } = this.props;

    const preppedFiles = files.map(file => {
      return { filename: file.name, filetype: file.type };
    });

    if (!files || !files[0]) return;

    console.log("Files".toUpperCase(), files);
    console.log("preppedFiles".toUpperCase(), preppedFiles);
    const response = await signS3Mutation({
      variables: {
        files: [...preppedFiles]
      }
    });

    const { signatures } = response.data.signS3;
    let s3Uploads = await Promise.all(
      signatures.map(async (signature: any, signatureIndex: number) => {
        console.log({ signature, signatureIndex });
        return await this.uploadToS3({
          file: files[signatureIndex].blobUrl,
          signedRequest: signature.signedRequest
        }).catch(error => console.error(JSON.stringify({ ...error }, null, 2)));
      })
    );

    console.log("signatures?");
    console.log(signatures);
    console.log("s3Uploads?");
    console.log(s3Uploads);

    return signatures;

    // this needs to be a call to create Post?
    // probably wrap w/ mutation component from outside and pass in
    // const graphqlResponse = await this.props.createChampion({
    //   variables: {
    //     name,
    //     pictureUrl: url
    //   }
    // });
  }

  handleRemoveIndividualImagePreview(index: number) {
    this.setState(prevState => {
      let newFiles = prevState.files.filter(function(file, fileIndex) {
        return fileIndex !== index;
      });
      return {
        files: newFiles
      };
    });
  }

  handleClearFilePreview() {
    this.setState({
      files: []
    });
  }

  openFileDialog() {
    if (this.props.disabled) return;
    if (this.fileInputRef && this.fileInputRef.current) {
      this.fileInputRef.current.click();
    }
  }

  fileListToArray(list: any) {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list[i]);
    }
    return array;
  }

  makeObjectUrls(someArray: any) {
    // return someArray.map((file: any) => URL.createObjectURL(file));

    return someArray.map((file: any) => {
      const {
        lastModified,
        lastModifiedDate,

        size,
        type,
        webkitRelativePath
      } = file;

      return {
        blobUrl: URL.createObjectURL(file),
        lastModified,
        lastModifiedDate,
        name: this.formatFilename(file),
        size,
        type,
        webkitRelativePath
      };
    });
  }

  async makeBlobUrls() {
    const self = this;

    return await Promise.all(
      self.state.files.map(async myFile => {
        return await fetch(myFile)
          .then(r => r.blob())
          .then(
            blobFile =>
              new File([blobFile], uuidv4(), {
                type: "image/png"
              })
          );
      })
    );
  }

  onFilesAdded(evt: any) {
    if (this.props.disabled) return;

    evt && evt.preventDefault();

    let array;

    if (evt && evt.target) {
      array = this.fileListToArray(evt.target.files);
      const previewFiles = this.makeObjectUrls(array);

      this.setState({
        files: [...previewFiles]
      });
    } else {
      array = this.fileListToArray(evt);
      const previewFiles = this.makeObjectUrls(array);

      this.setState({
        files: [...previewFiles]
      });
    }

    // if (this.onFilesAdded) {
    //   this.props.onFilesAdded(array);
    // }
  }

  dataUriToBlob(dataURI: any) {
    // convert base64 to raw binary data held in a string
    // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
    log("datauri".toUpperCase(), dataURI);
    var byteString = atob(dataURI.split(",")[1]);

    // separate out the mime component
    var mimeString = dataURI
      .split(",")[0]
      .split(":")[1]
      .split(";")[0];

    // write the bytes of the string to an ArrayBuffer
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    //Old Code
    //write the ArrayBuffer to a blob, and you're done
    //var bb = new BlobBuilder();
    //bb.append(ab);
    //return bb.getBlob(mimeString);

    //New Code
    let newBlob = new Blob([ab], { type: mimeString });

    log("view state files and names".toUpperCase());
    log(this.state.files);
    // log(this.state.fileNames);

    const finalFile = new File([newBlob], this.state.files[0], {
      type: "image/png"
    });

    log("newBlob");
    log(URL.createObjectURL(newBlob));

    log("finalFile");
    log(URL.createObjectURL(finalFile));

    return finalFile;
  }

  // componentDidMount() {
  //   this.props.handleSetLastMessenger();
  //   this.props.handleSetLastMessage();
  // }

  render() {
    const {
      chatEmoji,
      disabled,
      emojiPickerVisible,
      handleThreadSelection,
      handleEngageMicrophoneClick,
      handleOpenEmojiMenuClick,
      sentTo,
      threadId,
      selectedThreadId,
      newThreadInvitees,
      newThreadDisabled
    } = this.props;
    return (
      <>
        {selectedThreadId ? (
          <AddMessageToThread
            chatEmoji={chatEmoji}
            disabled={disabled}
            emojiPickerVisible={emojiPickerVisible}
            files={this.state.files}
            fileInputRef={this.fileInputRef}
            getS3Signature={this.getS3Signature}
            handleClearFilePreview={this.handleClearFilePreview}
            handleEngageMicrophoneClick={handleEngageMicrophoneClick}
            handleOpenEmojiMenuClick={handleOpenEmojiMenuClick}
            handleRemoveIndividualImagePreview={
              this.handleRemoveIndividualImagePreview
            }
            makeBlobUrls={this.makeBlobUrls}
            newThreadInvitees={newThreadInvitees}
            onFilesAdded={this.onFilesAdded}
            openFileDialog={this.openFileDialog}
            sentTo={sentTo}
            threadId={threadId}
          />
        ) : (
          <CreateThreadAndAddMessageToThread
            chatEmoji={chatEmoji}
            emojiPickerVisible={emojiPickerVisible}
            fileInputRef={this.fileInputRef}
            files={this.state.files}
            getS3Signature={this.getS3Signature}
            handleClearFilePreview={this.handleClearFilePreview}
            handleEngageMicrophoneClick={handleEngageMicrophoneClick}
            handleOpenEmojiMenuClick={handleOpenEmojiMenuClick}
            handleRemoveIndividualImagePreview={
              this.handleRemoveIndividualImagePreview
            }
            handleThreadSelection={handleThreadSelection}
            makeBlobUrls={this.makeBlobUrls}
            newThreadDisabled={newThreadDisabled}
            newThreadInvitees={newThreadInvitees}
            onFilesAdded={this.onFilesAdded}
            openFileDialog={this.openFileDialog}
            sentTo={sentTo}
            threadId={threadId}
          />
        )}
      </>
    );
  }
}

export default ChatForm;
