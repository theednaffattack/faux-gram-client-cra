import React, { Component } from "react";

import { GetMessagesByThreadIdComponent } from "../generated/graphql";
import { Button, Flex, Heading, Icon, Text } from "./styled-rebass";
import { MessageContainer } from "./posed-components";
import styled from "styled-components";
import posed from "react-pose";
import { MessageBox } from "./message-box";
import MountedProof from "./mounted-proof";

const { log } = console;

const TextItem = posed(Text)({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

export interface IThreadIdProps {
  threadId: string;
  displayMessages: any;
  me: any;
  handleCloseThread: any;
  handleRemoveInviteeToThread: any;
  handleUpdateMessageState: any;
  scrollToBottom: any;
  threadIdSelected: string;
}

const ThreadsOnly: React.FC<IThreadIdProps> = ({
  displayMessages,
  threadId,
  scrollToBottom,
  me,
  handleCloseThread,
  handleRemoveInviteeToThread,
  handleUpdateMessageState,
  threadIdSelected
}) => {
  return (
    <div>
      <GetMessagesByThreadIdComponent
        variables={{
          input: {
            threadId: threadIdSelected,
            skip: 0,
            take: 25
          }
        }}
      >
        {({ data, error, loading }: any) => {
          if (error) return <div>{error}</div>;
          if (loading) return <div>loading...</div>;

          return (
            <Flex flexDirection="column">
              <Flex>
                <Heading as="h1">Messages</Heading>

                <Button
                  ml="auto"
                  key="justAButton"
                  type="button"
                  onClick={handleCloseThread}
                >
                  <Icon name="triangleLeft" fill="white" /> Back to Threads
                </Button>
              </Flex>
              {data.getMessagesByThreadId.map((message: any, index: number) => (
                <MessageBox
                  key={`${index}-${message.id}-${message.__typename}`}
                  message={message}
                  me={me.id}
                  handleRemoveInviteeToThread={handleRemoveInviteeToThread}
                />
              ))}
              <MountedProof
                handleUpdateMessageState={handleUpdateMessageState}
              />
            </Flex>
          );
        }}
      </GetMessagesByThreadIdComponent>
    </div>
  );
};

export default ThreadsOnly;
