import React, { Fragment } from "react";

import { Button, Heading, Text, Flex } from "./styled-rebass";

export interface IChooseThreadUserState {
  open: boolean;
  accordionIndex: number | null;
}

export interface IChooseThreadUserProps {
  messages: any[];
  dataCreateThread: any;
  loadingCreateThread: any;
  errorCreateThread: any;
  handleAddInviteeToThread: any;
}

export class ChooseThreadUser extends React.Component<
  IChooseThreadUserProps,
  IChooseThreadUserState
> {
  constructor(props: IChooseThreadUserProps) {
    super(props);

    this.state = { open: false, accordionIndex: null };
  }

  render() {
    const { open } = this.state;
    const {
      dataCreateThread,
      loadingCreateThread,
      errorCreateThread,
      handleAddInviteeToThread
    } = this.props;

    return (
      <Fragment>
        <Heading
          as="h3"
          color="chat_icon"
          fontWeight={200}
          p={3}
          mr="auto"
          onClick={() =>
            this.setState({
              open: !open
            })
          }
        />
        <Flex width={[1, 1, 1]} flexDirection="column">
          {loadingCreateThread ? <Text>not loading</Text> : ""}
          {errorCreateThread ? <Text>no error</Text> : ""}
          {dataCreateThread ? (
            dataCreateThread.map((person: any, index: number) => (
              <Flex
                border="2px #b2b2d8 solid"
                key={`select-msg-receiver_${index}`}
                alignItems="center"
                width={["300px", "300px", "300px"]}
                p={2}
                my={1}
                bg="white"
              >
                <Text fontSize="1.8em" width={[2 / 3, 2 / 3, 2 / 3]} mr="auto">
                  {person.firstName} {person.lastName}
                </Text>
                <Button
                  onClick={() => handleAddInviteeToThread({ user: person })}
                  type="button"
                  bg="#736eab"
                >
                  +
                </Button>
              </Flex>
            ))
          ) : (
            <Text>no data</Text>
          )}
        </Flex>
      </Fragment>
    );
  }
}
