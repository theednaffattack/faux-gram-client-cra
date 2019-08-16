import React, { Component } from "react";
import { Image } from "rebass";
import Icon from "react-geomicons";

import { AbFlex, Button, Card, Flex, MaxFlex, Text } from "./styled-rebass";
import { FieldArray, Field } from "formik";
// import { InputField } from "./fields/input-field";
import { PosedFlash } from "./posed-components";

const { log } = console;

interface IImagePreviewProps {
  errors?: any;
  touched?: any;
  files?: string[];
  imageFiles: any[];
  values?: any;
  handleRemoveIndividualImagePreview: any;
  handleClearFilePreview: any;
  resetForm: any;
}

const ImagePreview = ({
  errors,
  imageFiles,
  handleRemoveIndividualImagePreview,
  handleClearFilePreview,
  resetForm,
  touched,
  values
}: IImagePreviewProps) => {
  return (
    <Flex width={[1]} flexWrap="wrap">
      {imageFiles ? (
        <>
          <FieldArray
            name="images"
            render={arrayHelpers => (
              <Flex flexDirection="column">
                {values.images && values.images.length > 0 ? (
                  <Button
                    ml="auto"
                    width={0.18}
                    id={`remove-all`}
                    className="btn-remove"
                    bg="transparent"
                    borderRadius="50%"
                    fontSize="2em"
                    type="button"
                    onClick={() => {
                      resetForm({
                        messages: "",
                        images: []
                      });
                      handleClearFilePreview();
                    }}
                    style={{
                      cursor: "pointer"
                    }}
                  >
                    <span role="img">
                      <Icon name="close" fill="crimson" />
                    </span>
                    <Text color="text" fontSize=".7em">
                      clear all
                    </Text>
                  </Button>
                ) : (
                  ""
                )}
                <Flex width={1} flexWrap="wrap">
                  {imageFiles &&
                  imageFiles.length > 0 &&
                  values &&
                  values.images &&
                  values.images.length < imageFiles.length
                    ? imageFiles.map(imageFile => arrayHelpers.push(imageFile))
                    : ""}
                  {values.images && values.images.length > 0
                    ? values.images.map((image: any, index: number) => (
                        <Flex
                          key={index}
                          width={["200px"]}
                          flexDirection="column"
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
                                log("event.target from button", event.target);
                                log(
                                  "event.currentTarget from button",
                                  event.currentTarget
                                );
                                handleRemoveIndividualImagePreview(index);
                                arrayHelpers.remove(index);
                              }} // remove a friend from the list
                              style={{
                                cursor: "pointer"
                              }}
                            >
                              <span role="img">
                                <Icon name="close" fill="rebeccapurple" />
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
                            <Flex flexDirection="column" width={[1, 1, 1]}>
                              {imageFiles[index] ? (
                                <Image
                                  // height="auto"
                                  width={["200px"]}
                                  src={imageFiles[index].blobUrl}
                                  style={{ maxHeight: "175px" }}
                                />
                              ) : (
                                ""
                              )}
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
              </Flex>
            )}
          />

          {errors && errors.images && touched.images ? (
            <div>
              <PosedFlash color="rebeccapurple">{errors.images}</PosedFlash>
            </div>
          ) : null}
        </>
      ) : (
        ""
      )}
    </Flex>
  );
};

export default ImagePreview;
