import React from "react";
import distanceInWords from "date-fns/distance_in_words";

import { Card, Flex, Text, Box } from "./styled-rebass";
import { Image } from "rebass";
import UserProfileImage from "./user-profile-image";

export function MessageBox(props: any) {
  return (
    <Flex
      flexDirection="row"
      my={2}
      p={3}
      ml={props.me !== props.message.sentBy.id ? "auto" : 0}
      mr={props.me === props.message.sentBy.id ? "auto" : 0}
      width={4 / 5}
    >
      {props.me === props.message.sentBy.id ? (
        <UserProfileImage
          isMe={props.me === props.message.sentBy.id}
          flexInstruction="column"
          user={props.message.sentBy}
          buttonThing={false}
          color="blue"
          handleRemoveInviteeToThread={props.handleRemoveInviteeToThread}
        />
      ) : (
        ""
      )}
      <Card
        my={2}
        p={3}
        color={
          props.me === props.message.sentBy.id ? "white" : "thread_selected"
        }
        bg={
          props.me === props.message.sentBy.id ? "chat_bubble_me" : "#eee" // "chat_bubble_them"
        }
        ml={props.me !== props.message.sentBy.id ? "auto" : 0}
        mr={props.me === props.message.sentBy.id ? "auto" : 0}
        width={1}
        boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
      >
        {props.message.images && props.message.images.length > 0 ? (
          <Image src={`${props.message.images[0].uri}`} />
        ) : (
          ""
        )}

        <Box
          bg="white" // {props.me === props.message.sentBy.id ? "white" : "transparent"}
          p={3}
          color="thread_selected"
        >
          <Text color="#b2b2d8" fontSize="0.9em" mt={2} mb={1}>
            <em>
              {" "}
              {distanceInWords(
                Date.now(),
                new Date(Date.parse(props.message.created_at))
              )}
            </em>
          </Text>
          <Text>{props.message.message}</Text>
        </Box>
      </Card>
      {props.me !== props.message.sentBy.id ? (
        <UserProfileImage
          flexInstruction="column"
          isMe={props.me === props.message.sentBy.id}
          user={props.message.sentBy}
          buttonThing={false}
          color="blue"
          handleRemoveInviteeToThread={props.handleRemoveInviteeToThread}
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
        //   <Text color="text">{props.message.sentBy.firstName}</Text>
        // </Flex>
        ""
      )}
    </Flex>
  );
}
