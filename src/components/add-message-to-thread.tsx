import React from "react";
import { Formik, Field } from "formik";

import { Picker } from "emoji-mart";
import "./emoji-mart.css";

import { AddMessageToThreadComponent } from "../generated/graphql";
import { Flex, AbFlex, MinButton } from "./styled-rebass";
// import ImagePreview from "./messages-image-preview";
import ImagePreview from "./messages-image-preview_v2";
import { ChatField } from "../components/fields/chat-input-field";
import IconAddFile from "./add-file-icon";
import SmileyIcon from "./custom-icon";

export const inputStyles = {
  display: "none"
};

export interface IAddMessageToThreadProps {
  chatEmoji: string;
  disabled: boolean;
  emojiPickerVisible: boolean;
  handleEngageMicrophoneClick: any;
  handleOpenEmojiMenuClick: any;
  sentTo: any;
  threadId: string;

  handleClearFilePreview: any;
  handleRemoveIndividualImagePreview: any;
  files: any[];
  openFileDialog: any;
  fileInputRef: any;
  onFilesAdded: any;
  makeBlobUrls: any;
  newThreadInvitees: any[];
  getS3Signature: any;
}

const isBrowser = typeof window !== "undefined";

function AddMessageToThread({
  chatEmoji,
  disabled,
  emojiPickerVisible,
  handleEngageMicrophoneClick,
  handleOpenEmojiMenuClick,
  sentTo,
  threadId,
  handleClearFilePreview,
  handleRemoveIndividualImagePreview,
  files,
  openFileDialog,
  fileInputRef,
  onFilesAdded,
  makeBlobUrls,
  newThreadInvitees,
  getS3Signature
}: IAddMessageToThreadProps) {
  return (
    <AddMessageToThreadComponent>
      {(
        addMessageToThread
        // ,
        // {
        //   data: dataAddMessage,
        //   error: errorAddMessage,
        //   loading: loadingAddMessage
        // }
      ) => {
        return (
          <Formik
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={async (data, { setErrors, resetForm }) => {
              let dataForSubmitting;

              if (files && files.length > 0) {
                const imagesAreUploadedToS3 = await getS3Signature();

                console.log("imagesAreUploadedToS3".toUpperCase());
                console.log({ imagesAreUploadedToS3 });

                // let preppedImages = imagesAreUploadedToS3.map(
                //   (image: any) => image.url
                // );

                // let someFiles = await makeBlobUrls();
                dataForSubmitting = {
                  threadId,
                  sentTo,
                  invitees: newThreadInvitees.map(person => person.id),
                  message: data.message,
                  images: imagesAreUploadedToS3.map((image: any) => image.url)
                };
              } else {
                dataForSubmitting = {
                  threadId,
                  sentTo,
                  invitees: newThreadInvitees.map(person => person.id),
                  message: data.message
                };
              }

              let response;

              try {
                response = await addMessageToThread({
                  variables: dataForSubmitting
                  // we don't update here because of subscriptions
                });
              } catch (error) {
                const displayErrors: { [key: string]: string } = {};

                let myErrors = error.graphQLErrors; //.extensions.exception.validationErrors;

                myErrors.forEach((errorThing: any) => {
                  displayErrors[errorThing.path[0]] = errorThing.message;
                });
                // myErrors.forEach((validationError: any) => {
                //   Object.values(validationError.constraints).forEach(
                //     (message: any) => {
                //       displayErrors[validationError.property] = message;
                //     }
                //   );
                // });

                return setErrors(displayErrors);

                // return setErrors({
                //   chat: "invalid character?"
                // });
              }

              if (response && response.data) {
                // setErrors({
                //   chat: "invalid character?"
                // });

                resetForm({
                  threadId,
                  sentTo,
                  message: chatEmoji,
                  images: []
                });

                handleClearFilePreview();
                return;
              }
            }}
            initialValues={{
              threadId,
              sentTo,
              message: "",
              images: [...files]
            }}
          >
            {({
              handleChange,
              handleSubmit,
              setFieldValue,
              resetForm,
              values,
              ...args
            }) => {
              const myChange = (e: any) => {
                setFieldValue("message", values.message + chatEmoji);

                return handleChange(e);
              };

              return (
                <Flex width={[1, 1, 1]} border="2px pink dashed">
                  <Flex
                    width={[1, 1, 1]}
                    mr="auto"
                    // alignItems="center"
                    flexDirection="column"
                    style={{ position: "relative" }}
                  >
                    <ImagePreview
                      values={values}
                      resetForm={resetForm}
                      handleClearFilePreview={handleClearFilePreview}
                      handleRemoveIndividualImagePreview={
                        handleRemoveIndividualImagePreview
                      }
                      imageFiles={files}
                    />
                    <Flex width={[1, 1, 1]}>
                      <form
                        action=""
                        onSubmit={handleSubmit}
                        style={{ width: "100%" }}
                      >
                        <button type="submit" style={{ display: "none" }} />
                        <Field
                          id="message"
                          name="message"
                          label="message"
                          placeholder="Type something to send..."
                          type="text"
                          width="100%"
                          color="#504aa4"
                          border={0}
                          fontSize="1.1em"
                          disabled={disabled}
                          component={ChatField}
                          onChange={(e: any) => {
                            // alert(e);
                            myChange(e);
                            // handleChatFieldChange(values.message);
                            // setFormValues({
                            //   ...formValues,
                            //   [fieldName]: targetEl.value
                            // });
                            // return handleChange(e);
                          }}
                          // onChange={e => {
                          //   myChange(e);
                          //   return handleChange(e);
                          // }}

                          // onChange={onChange}
                          // InputProps={{ onChange: onChange }}
                        />

                        <Field
                          id="sentTo"
                          name="sentTo"
                          label="sentTo"
                          value={sentTo}
                          placeholder="Send to..."
                          type="hidden"
                          width="100%"
                          color="#504aa4"
                          border={0}
                          fontSize="1.1em"
                          component={ChatField}
                        />

                        <Field
                          id="threadId"
                          name="threadId"
                          label="threadId"
                          value={threadId}
                          placeholder="Thread ID..."
                          type="hidden"
                          width="100%"
                          color="#504aa4"
                          border={0}
                          fontSize="1.1em"
                          component={ChatField}
                        />
                      </form>

                      <Flex style={{ position: "relative" }}>
                        <AbFlex
                          width={1}
                          position="absolute"
                          right={70}
                          bottom={"100%"}
                        >
                          {emojiPickerVisible && isBrowser ? (
                            <Picker
                              onSelect={
                                emoji =>
                                  setFieldValue(
                                    "message",
                                    // @ts-ignore
                                    values.message + emoji.native
                                  )
                                // handleSelectEmojiClick({ item: emoji })
                              }
                              title="Pick your emoji..."
                            />
                          ) : (
                            ""
                          )}
                        </AbFlex>
                        <MinButton
                          onClick={openFileDialog}
                          bg="transparent"
                          minHeight="35px"
                          width="3.5em"
                          style={{ padding: 0 }}
                          // mb={2}
                        >
                          <input
                            ref={fileInputRef}
                            type="file"
                            onChange={onFilesAdded}
                            style={inputStyles}
                            disabled={disabled}
                            multiple
                          />
                          <IconAddFile
                            fill="#b2b2d8"
                            size="1.4em"
                            name="add-file"
                            width="1.4em"
                          />
                        </MinButton>
                        <MinButton
                          onClick={disabled ? null : handleOpenEmojiMenuClick}
                          bg="transparent"
                          minHeight="35px"
                          ml={[2, 2, 2]}
                          // mb={2}
                          width="3.5em"
                          style={{ padding: 0, position: "relative" }}
                        >
                          <SmileyIcon
                            name="smiley"
                            width="1.6em"
                            fill="#b2b2d8"
                          />
                        </MinButton>
                        {/* <MinButton
                          onClick={
                            disabled ? null : handleEngageMicrophoneClick
                          }
                          bg="transparent"
                          borderLeft="2px #eee solid"
                          // mb={2}
                          mx={3}
                          minHeight="35px"
                          width="3.5em"
                          style={{ padding: 0 }}
                        >
                          <IconMic width="1.4em" fill="#b2b2d8" />
                        </MinButton> */}
                      </Flex>
                    </Flex>
                  </Flex>
                </Flex>
              );
            }}
          </Formik>
        );
      }}
    </AddMessageToThreadComponent>
  );
}

export default AddMessageToThread;
