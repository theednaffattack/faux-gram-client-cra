import React from "react";
import distanceInWords from "date-fns/distance_in_words";

import { Button, Card, Flex, Text } from "./styled-rebass";
import { ImageProps } from "rebass";
import UserProfileImage from "./user-profile-image";

interface IMessageBoxProps {
  me: any;
  message: any;
  handleRemoveInviteeToThread: any;
  sentBy: any;
  createdAt: string;
  images: any[];
  style: any;
  handleToggleImageModal: any;
  imageModalState: string;
  fetchMoreGetMessagesByThreadId: any;
  pageInfo: any;
  type: string;
  allData: any;
  threadId: string;
}
interface CustomImage {
  uri: string;
  imgWidth?: string;
}

interface IShowImagesProps extends ImageProps {
  images: CustomImage[];
}

// function ShowImages({ images }: IShowImagesProps) {
//   return images.map((image, index: number) => {
//     return (
//       <Image
//         width={["100%", "50%"]}
//         key={index}
//         src={image.uri}
//         style={{ maxHeight: "131px", maxWidth: "175px" }}
//       />
//     );
//   });
// }

/**
 * This function takes an array of images.
 *
 * @param images - An array of CustomImage
 * @returns Rebass <Image /> elements
 *
 */
const ShowAllImages = ({ images }: any) => {
  const size = images.length < 3 ? images.length : 3;

  const FirstThreeImages = images
    .slice(0, size)
    .map((image: any, index: number) => (
      <div
        className="message-image"
        key={`customImage-${index}`}
        style={{
          overflow: "hidden",
          minHeight: "131px",
          width: "175px",
          // minWidth: "175px",
          // maxWidth: "175px",
          // borderRadius: "0.5px",
          backgroundImage: `url("${image.uri}")`,
          backgroundSize: "cover"
        }}
      />
    ));

  return FirstThreeImages;
  // return images.map((image: CustomImage, index: number, imagesArr: any[]) => {
  //   return (
  //     <div
  //       key={`${index}-customImage`}
  //       style={{
  //         overflow: "hidden",
  //         minHeight: "131px",
  //         width: "175px",
  //         // minWidth: "175px",
  //         // maxWidth: "175px",
  //         // borderRadius: "0.5px",
  //         backgroundImage: `url("${image.uri}")`,
  //         backgroundSize: "cover"
  //       }}
  //     >
  //       {/* <Image
  //         src={image.uri}
  //         key={`${index}-customImage`}
  //         // width={[1, 1, 1, 1]}
  //         style={{ minHeight: "100%", objectFit: "cover" }}
  //       /> */}
  //     </div>
  //   );
  // });
};

export function MessageBox({
  fetchMoreGetMessagesByThreadId,
  me,
  message,
  handleRemoveInviteeToThread,
  sentBy,
  createdAt,
  images,
  style,
  handleToggleImageModal,
  imageModalState,
  pageInfo,
  type,
  allData,
  threadId
}: IMessageBoxProps) {
  return (
    <Flex
      flexDirection="row"
      my="8px"
      p="16px"
      // ml={me !== sentBy.id && type !== "LoadingIndicator" ? [1, 1, "auto"] : 0}
      // mr={me === sentBy.id || type === "LoadingIndicator" ? 0 : [1, 1, "auto"]}
      width={1}
      style={style}
    >
      {me === sentBy.id && type !== "LoadingIndicator" ? (
        <UserProfileImage
          isMe={me === sentBy.id}
          flexInstruction="column"
          user={sentBy}
          buttonThing={false}
          color="blue"
          handleRemoveInviteeToThread={handleRemoveInviteeToThread}
        />
      ) : (
        ""
      )}

      <Card
        color={me === sentBy.id ? "white" : "thread_selected"}
        bg={
          me === sentBy.id ? "chat_bubble_me" : "#eee" // "chat_bubble_them"
        }
        width={1}
        my="8px"
        p="16px"
        // ml={me !== sentBy.id ? [1, 1, "auto"] : 0}
        // mr={me === sentBy.id ? 0 : [1, 1, "auto"]}
        boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      >
        {type === "LoadingIndicator" && pageInfo.hasPreviousPage ? (
          <Flex
            flexDirection="row"
            // alignItems="center"
            justifyContent="center"
            width={1}
          >
            <Button
              type="button"
              onClick={() =>
                fetchMoreGetMessagesByThreadId({
                  variables: {
                    input: {
                      threadId,
                      skip: 0,
                      take: 15,
                      cursor: pageInfo.endCursor
                    }
                  },
                  updateQuery(previousResult: any, fetchMoreResult: any) {
                    const prevMessageFeed =
                      previousResult.getMessagesByThreadId;
                    const newMessageFeed =
                      fetchMoreResult.fetchMoreResult.getMessagesByThreadId;

                    const newPageInfo = {
                      startCursor: prevMessageFeed.pageInfo.startCursor,
                      endCursor: newMessageFeed.pageInfo.endCursor,
                      hasNextPage: prevMessageFeed.pageInfo.hasNextPage,
                      hasPreviousPage: newMessageFeed.pageInfo.hasPreviousPage,
                      __typename: prevMessageFeed.pageInfo.__typename
                    };

                    const newFeedData = {
                      getMessagesByThreadId: {
                        ...previousResult.getMessagesByThreadId,
                        edges: [
                          ...newMessageFeed.edges,
                          ...prevMessageFeed.edges
                        ],
                        pageInfo: newPageInfo
                      }
                    };

                    return newFeedData;
                  }
                })
              }
            >
              LOAD OLDER MESSAGES
            </Button>
          </Flex>
        ) : (
          <Flex bg="#eee" flexDirection="column" p={0} m={0}>
            <Flex flexWrap="wrap" width={1}>
              {images && images.length > 0 ? (
                <ShowAllImages images={images} />
              ) : (
                ""
              )}
              {images && images.length > 3 ? (
                <button
                  style={{ color: "crimson" }}
                  onClick={handleToggleImageModal}
                >
                  click to see more ({imageModalState})
                </button>
              ) : (
                ""
              )}
            </Flex>
            <Text color="#b2b2d8" fontSize="14.4px" mt={2} mb={1}>
              <em>
                {distanceInWords(Date.now(), new Date(Date.parse(createdAt)))}
              </em>
            </Text>
            <Text
              as="p"
              className="message-text"
              color="text"
              fontSize="16px"
              mt="16px"
            >
              {message}
            </Text>
          </Flex>
        )}
      </Card>
      {me !== sentBy.id && type !== "LoadingIndicator" ? (
        <UserProfileImage
          flexInstruction="column"
          isMe={me === sentBy.id}
          user={sentBy}
          buttonThing={false}
          color="blue"
          handleRemoveInviteeToThread={handleRemoveInviteeToThread}
        />
      ) : (
        // <Flex ml={3} flexDirection="column" alignItems="center">
        //   <Flex
        //     height="40px"
        //     width="40px"
        //     my={2}
        //     bg="thread_footer"
        //     alignItems="center"
        //     justifyContent="center"
        //     boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
        //     style={{
        //       borderRadius: "50%"
        //     }}
        //   >
        //     <Icon size="2em" name="user" fill="white" />
        //   </Flex>
        //   <Text color="text">{sentBy.firstName}</Text>
        // </Flex>
        ""
      )}
    </Flex>
  );
}
