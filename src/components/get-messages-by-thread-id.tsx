import React, { Component } from "react";

import { GetMessagesByThreadIdComponent } from "../generated/graphql";
import { Button, Flex, Text } from "./styled-rebass";
import { MessageContainer } from "./posed-components";
import styled from "styled-components";
import posed from "react-pose";

const { log } = console;

const TextItem = posed(Text)({
  open: { y: 0, opacity: 1 },
  closed: { y: 20, opacity: 0 }
});

export interface IThreadIdProps {
  threadId: string;
  handleCloseThread: any;
  displayMessages: any;
}

export default class ThreadsOnly extends Component<IThreadIdProps, object> {
  render() {
    const { displayMessages, handleCloseThread, threadId } = this.props;
    return (
      <div>
        <GetMessagesByThreadIdComponent
          variables={{
            input: {
              threadId,
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
                <Button
                  key="justAButton"
                  type="button"
                  onClick={handleCloseThread}
                >
                  X
                </Button>
                Hello chat body
                {JSON.stringify(data.getMessagesByThreadId.length)}
                Messages
                {data.getMessagesByThreadId.map(
                  (thread: any, index: number) => (
                    <MessageContainer
                      pose={displayMessages ? "open" : "closed"}
                      initialPose="closed"
                      key={index}
                      flexDirection="column"
                      my={2}
                      border="crimson"
                    >
                      <TextItem>{thread.id}</TextItem>
                      <TextItem>{thread.message}</TextItem>
                      <TextItem>{thread.user.firstName}</TextItem>
                      <TextItem>{thread.user.lastName}</TextItem>
                      <TextItem>{thread.created_at}</TextItem>
                      <TextItem>{thread.sentBy.firstName}</TextItem>
                      <Button
                        bg="fuchsia"
                        type="button"
                        onClick={() => log("hello")}
                      >
                        MSG: click me
                      </Button>
                    </MessageContainer>
                  )
                )}
              </Flex>
            );
          }}
        </GetMessagesByThreadIdComponent>
      </div>
    );
  }
}
