import React, { Component } from "react";

import { GetOnlyThreadsComponent } from "../generated/graphql";
import { Button, Flex, Text } from "./styled-rebass";
import GetMessagesByThreadId from "./get-messages-by-thread-id";
const { log } = console;

interface IGetOnlyThreadsProps {}

interface IGetOnlyThreadsState {
  displayMessages: boolean;
  threadIdSelected: string | null;
}

export default class GetOnlyThreads extends Component<
  IGetOnlyThreadsProps,
  IGetOnlyThreadsState
> {
  constructor(props: any) {
    super(props);

    this.handleDisplayMessages = this.handleDisplayMessages.bind(this);
    this.handleCloseThread = this.handleCloseThread.bind(this);

    this.state = {
      displayMessages: false,
      threadIdSelected: null
    };
  }
  handleDisplayMessages(threadId: string) {
    this.setState(prevState => {
      return {
        displayMessages: true,
        threadIdSelected: threadId
      };
    });
  }
  handleCloseThread() {
    this.setState(() => {
      return {
        displayMessages: false,
        threadIdSelected: null
      };
    });
  }
  render() {
    return (
      <div>
        <GetOnlyThreadsComponent>
          {({ data, error, loading }) => {
            if (error) return <div>{error}</div>;
            if (loading) return <div>loading...</div>;
            if (data && data.getOnlyThreads)
              return (
                <div>
                  <div>{JSON.stringify(this.state)}</div>
                  {this.state.displayMessages && this.state.threadIdSelected ? (
                    <GetMessagesByThreadId
                      threadId={this.state.threadIdSelected}
                      handleCloseThread={this.handleCloseThread}
                      displayMessages={this.state.displayMessages}
                    />
                  ) : (
                    ""
                  )}
                  {!this.state.displayMessages &&
                  this.state.threadIdSelected === null
                    ? data.getOnlyThreads.map((thread: any, index: number) => (
                        <Flex
                          key={index}
                          flexDirection="column"
                          my={2}
                          border="crimson"
                        >
                          <Text>{thread.id}</Text>
                          <Button
                            type="button"
                            onClick={(event: React.MouseEvent) => {
                              log("hello again", event);
                              log("thread", thread);
                              this.handleDisplayMessages(thread.id);
                              // this.setState(prevState => {
                              //   return {
                              //     displayMessages: true,
                              //     threadIdSelected: thread.id
                              //   };
                              // });
                            }}
                          >
                            THREAD: click me
                          </Button>
                        </Flex>
                      ))
                    : ""}
                </div>
              );
          }}
        </GetOnlyThreadsComponent>
      </div>
    );
  }
}
