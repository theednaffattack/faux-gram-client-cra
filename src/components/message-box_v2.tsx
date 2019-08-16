import React from "react";
import distanceInWords from "date-fns/distance_in_words";

import { Card, Flex, Text, Box } from "./styled-rebass";
import { Image } from "rebass";
import UserProfileImage from "./user-profile-image";

interface IMessageBox {
  me: any;
  message: any;
  handleRemoveInviteeToThread: any;
  sentBy: any;
  createdAt: string;
  images: any[];
  style: any;
}

export function MessageBox({
  me,
  message,
  handleRemoveInviteeToThread,
  sentBy,
  createdAt,
  images,
  style
}: IMessageBox) {
  return (
    <Flex
      flexDirection="row"
      my={2}
      p={3}
      ml={me !== sentBy.id ? [1, 1, "auto"] : 0}
      mr={me === sentBy.id ? 0 : [1, 1, "auto"]}
      width={1}
      border="lime"
      style={style}
    >
      {me === sentBy.id ? (
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
        my={2}
        p={3}
        color={me === sentBy.id ? "white" : "thread_selected"}
        bg={
          me === sentBy.id ? "chat_bubble_me" : "#eee" // "chat_bubble_them"
        }
        ml={me !== sentBy.id ? [1, 1, "auto"] : 0}
        mr={me === sentBy.id ? 0 : [1, 1, "auto"]}
        width={1}
        boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      >
        {images && images.length > 0 ? <Image src={`${images[0].uri}`} /> : ""}

        <Box
          bg="white" // {me === sentBy.id ? "white" : "transparent"}
          p={3}
          color="thread_selected"
        >
          <Text color="#b2b2d8" fontSize="0.9em" mt={2} mb={1}>
            <em>
              {" "}
              {distanceInWords(Date.now(), new Date(Date.parse(createdAt)))}
            </em>
          </Text>
          <Text>{message}</Text>
        </Box>
      </Card>
      {me !== sentBy.id ? (
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
