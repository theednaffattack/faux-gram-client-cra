import React from "react";
import { Formik, Field, FieldArray } from "formik";
import * as Yup from "yup";
// import { Image } from "rebass";

import { InputField } from "./fields/input-field";
import {
  Button,
  Card,
  Flex,
  Icon,
  Image,
  MaxFlex,
  Text,
  AbFlex
} from "./styled-rebass";
import Thumb from "./thumb";
import DragAndDrop from "./drag-and-drop";
import { Label } from "./styled-rebass";
import DropZone, { inputStyles } from "./dropzone";
import { SignS3Component } from "../generated/graphql";
import DropZoneContainer from "./dropzone-container";
import ImagePreview from "./image-preview";
import { Container, PosedFlash } from "./posed-components";

const { log } = console;

const CreatePostSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  text: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  images: Yup.array().required("Required")
});

// text: "",
// title: "",
// // pic: null,
// images: [...imageFiles],
// user: me

export interface ICreatePostFormProps {
  //   handleFormUpload: any;
  files: any[];
  handleDrop?: any;
  handlePost: any;
  me: any;
  fileInputKey?: string;
  setPreviewImageRef?: any;

  mutationSignS3: any;
  dataSignS3: any;
  errorSignS3: any;
  loadingSignS3: any;
  disabled: boolean;

  handleRemoveIndividualImagePreview: any;
  handleClearFilePreview: any;

  getSignature: any;

  fileListToArray: any;

  // files={this.state.files}
  // handlePost={this.handlePost}
  // me={this.props.me}
  // fileInputKey={this.state.fileInputKey}
  // mutationSignS3={signS3}
  // dataSignS3={dataSignS3}
  // errorSignS3={errorSignS3}
  // loadingSignS3={loadingSignS3}
  // disabled={this.state.disabled}
  // handleClearFilePreview={this.handleClearFilePreview}
  openFileDialog: any;
  onDragOver: any;
  onDragLeave: any;
  onDrop: any;
  fileInputRef: React.RefObject<HTMLInputElement>;
  onFilesAdded: any;
  highlight: boolean;

  dataCreatePost: any;
  errorCreatePost: any;
  loadingCreatePost: any;
}

interface ICreatePostFormValues {
  user: any;
  text: string;
  title: string;
  images: string[];
}

function CreatePostForm({
  files,
  handlePost,
  me,

  fileInputKey,
  mutationSignS3,
  dataSignS3,
  errorSignS3,
  loadingSignS3,
  disabled,
  openFileDialog,
  onDragOver,
  onDragLeave,
  onDrop,
  fileInputRef,
  onFilesAdded,
  highlight,
  getSignature,

  handleRemoveIndividualImagePreview,
  handleClearFilePreview,
  fileListToArray,

  dataCreatePost,
  errorCreatePost,
  loadingCreatePost
}: ICreatePostFormProps) {
  const imageFiles =
    files.length > 0 ? files.map(imageFile => imageFile.name) : [];
  return (
    <Formik
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handlePost}
      initialValues={{
        text: "",
        title: "",
        // pic: null,
        images: [...imageFiles],
        user: me
      }}
      validationSchema={CreatePostSchema}
    >
      {({ errors, handleSubmit, setFieldValue, touched, values }) => {
        // setFieldValue("images", imageFiles);

        return (
          <Flex width={1} flexDirection="column" alignItems="center">
            {/* <Flex minHeight="300px" width="450px">
              <DropZone
                // openFileDialog={this.openFileDialog}
                // onDragOver={this.onDragOver}
                // onDragLeave={this.onDragLeave}
                // onDrop={this.onDrop}
                // fileInputRef={this.fileInputRef}
                // onFilesAdded={this.onFilesAdded}
                // highlight={this.state.highlight}
                // getSignature={this.getSignature}

                // mutationSignS3={mutationSignS3}
                // dataSignS3={dataSignS3}
                // errorSignS3={errorSignS3}
                // loadingSignS3={loadingSignS3}
                disabled={disabled}
                files={files}
                handleClearFilePreview={handleClearFilePreview}
                openFileDialog={openFileDialog}
                onDragOver={onDragOver}
                onDragLeave={onDragLeave}
                onDrop={onDrop}
                fileInputRef={fileInputRef}
                onFilesAdded={onFilesAdded}
                highlight={highlight}
                getSignature={getSignature}
              />
            </Flex> */}
            <form onSubmit={handleSubmit} style={{ width: "100%" }}>
              <Flex flexDirection="column" width={[1, 1, 1]}>
                <Flex
                  alignItems="center"
                  flexDirection="column"
                  width={[1, 1, 1]}
                >
                  <FieldArray
                    name="images"
                    render={arrayHelpers => (
                      <MaxFlex
                        id="clickable-overlay"
                        bg={highlight ? "rgb(188,185,236)" : "#fff"}
                        width={values.images.length === 0 ? "350px" : 1}
                        // border="2px dashed rgb(187, 186, 186)"
                        border={values.images.length === 0 ? "lime" : ""}
                        minHeight={["350px"]}
                        maxHeight={
                          values.images.length === 0 ? "350px" : "auto"
                        }
                        style={{
                          borderRadius: values.images.length === 0 ? "50%" : "",
                          fontSize: "16px",
                          cursor: disabled ? "default" : "pointer"
                        }}
                        onClick={event => {
                          const { target, currentTarget } = event;
                          // event.preventDefault();
                          openFileDialog();
                          console.log({ currentTarget, target });
                          // console.log("opening the file dialog".toUpperCase());
                          // console.log({ event });
                          // console.log({ target: event.target });
                        }}
                        onDragOver={onDragOver}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                      >
                        <label>
                          <input
                            onChange={onFilesAdded}
                            style={inputStyles}
                            multiple
                            ref={fileInputRef}
                            type="file"
                          />
                        </label>
                        <Flex width={1} flexWrap="wrap">
                          {imageFiles &&
                          imageFiles.length > 0 &&
                          values.images.length < imageFiles.length
                            ? imageFiles.map(imageFile =>
                                arrayHelpers.push(imageFile)
                              )
                            : ""}
                          {values.images && values.images.length > 0
                            ? values.images.map((image, index) => (
                                <Flex
                                  key={index}
                                  width={1 / 2}
                                  flexDirection="column"
                                  flex="1 1 auto"
                                  style={{
                                    position: "relative"
                                  }}
                                >
                                  <AbFlex position="absolute" top={0} right={0}>
                                    <Button
                                      width={0.18}
                                      id={`remove-${index}`}
                                      className="btn-remove"
                                      bg="transparent"
                                      borderRadius="50%"
                                      fontSize="2em"
                                      type="button"
                                      onClick={event => {
                                        event.stopPropagation();
                                        log(
                                          "event.target from button",
                                          event.target
                                        );
                                        log(
                                          "event.target from button",
                                          event.currentTarget
                                        );
                                        handleRemoveIndividualImagePreview(
                                          index
                                        );
                                        arrayHelpers.remove(index);
                                      }} // remove a friend from the list
                                      style={{
                                        cursor: "pointer"
                                      }}
                                    >
                                      <span role="img">
                                        <Icon
                                          name="close"
                                          fill="rebeccapurple"
                                        />
                                      </span>
                                    </Button>
                                  </AbFlex>

                                  <Card
                                    fontSize={6}
                                    fontWeight="bold"
                                    width={[1, 1, 1]}
                                    // backgroundImage={`url(${files[index].blobUrl})`}
                                    // p={5}
                                    my={5}
                                    // bg="#f6f6ff"
                                    bg="blue"
                                    borderRadius={8}
                                    boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
                                  >
                                    <Flex
                                      flexDirection="column"
                                      width={[1, 1, 1]}
                                    >
                                      {files[index] ? (
                                        <Image
                                          height="auto"
                                          src={files[index].blobUrl}
                                        />
                                      ) : (
                                        ""
                                      )}
                                      {/* <ImagePreview imageFiles={files} /> */}
                                      {/* <Button
                                  type="button"
                                  onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
                                >
                                  +
                                </Button> */}

                                      <Text>Alt Text</Text>
                                      <Flex width={1}>
                                        <Field
                                          component={InputField}
                                          name={`images.${index}`}
                                        />
                                      </Flex>
                                    </Flex>
                                  </Card>
                                </Flex>
                              ))
                            : // <Button
                              //   type="button"
                              //   onClick={() => arrayHelpers.push("")}
                              // >
                              //   {/* show this when user has removed all friends from the list */}
                              //   Add an image
                              // </Button>
                              ""}
                        </Flex>

                        {/* <Field id="images" name="images">
                      {({ field, form }: any) => {
                        log({ form });
                        log("field", { field });
                        log({ imageFiles });
                        return (
                          <input
                            id="images"
                            name="images"
                            ref={fileInputRef}
                            type="file"
                            // onChange={onFilesAdded}
                            value={field.value}
                            onChange={event => {
                              console.log(
                                "I got the value correctly from my child: ",
                                event.currentTarget.value
                              );
                              const daFiles: string[] = fileListToArray(
                                event.target.files
                              ).map((file: any) => file.name);

                              log({ daFiles });
                              // Manually set Formik values.location and trigger validation
                              onFilesAdded(event);
                              // form.handleChange(event);
                              setFieldValue("images", daFiles);
                              // onFilesAdded(event);
                            }}
                            style={inputStyles}
                            multiple
                          />
                        );
                      }}
                    </Field>
                     */}
                      </MaxFlex>
                    )}
                  />
                  {errors.images && touched.images ? (
                    <div>
                      <PosedFlash color="rebeccapurple">
                        {errors.images}
                      </PosedFlash>
                    </div>
                  ) : null}
                </Flex>
                {/* <Button type="button" onClick={getSignature}>
                  Upload to S3
                </Button> */}
                {/* <Flex flexWrap="wrap" width={[1, 1, 1]}>
                  <ImagePreview imageFiles={files} />
                </Flex> */}
                {/* <Button
                  type="button"
                  onClick={() => {
                    setFieldValue("images", []);
                    handleClearFilePreview();
                  }}
                >
                  Clear `Files` State
                </Button> */}
              </Flex>
              <Field
                id="title"
                name="title"
                placeholder="title this post"
                component={InputField}
              />

              <Field
                id="text"
                name="text"
                placeholder="say a few words"
                component={InputField}
              />
              <Field
                id="user"
                name="user"
                type="hidden"
                component={InputField}
              />
              {/* <Field
                id="images"
                name="images" */}
              {/* // value={imageFiles}
                // component={InputField} 
*/}

              {/* 
              <Label>
                +
                <input
                  key={fileInputKey}
                  id="pic"
                  name="pic"
                  type="file"
                  placeholder=""
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    if (
                      event.currentTarget &&
                      event.currentTarget &&
                      event.currentTarget.files &&
                      event.currentTarget.files[0]
                    ) {
                      setFieldValue("pic", event.currentTarget.files[0]);
                    }
                    return;
                  }}
                  style={{
                    position: "absolute",
                    height: "1px",
                    width: "1px",
                    overflow: "hidden",
                    clip: "rect(1px 1px 1px 1px)"
                  }}
                />
              </Label> */}

              <Button type="submit">submit</Button>

              <Button type="button" onClick={handleClearFilePreview}>
                Clear `Files` State
              </Button>
            </form>
          </Flex>
        );
      }}
    </Formik>
  );
}

export default CreatePostForm;

{
  /* <DragAndDrop handleDrop={handleDrop}>
                <Thumb file={values.pic} />

                {setPreviewImageRef ? (
                  <Image width="100%" ref={setPreviewImageRef} alt="" src="" />
                ) : (
                  ""
                )}
              </DragAndDrop> */
}
