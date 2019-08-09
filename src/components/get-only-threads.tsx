import React, { Component } from "react";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks
} from "body-scroll-lock";

import {
  GetOnlyThreadsComponent,
  GetMessagesByThreadIdComponent
} from "../generated/graphql";
import { Button, Flex, Heading, Icon, Text } from "./styled-rebass";
import GetMessagesByThreadId from "./get-messages-by-thread-id";
import UserProfileImage from "./user-profile-image";
import { MessageBox } from "./message-box";
import MountedProof from "./mounted-proof";
import { isThisHour } from "date-fns";

const { log } = console;

const ShowThreads = ({
  data,
  handleDisplayMessages,
  handleRemoveInviteeToThread
}: any) => {
  return data.getOnlyThreads.map((thread: any, index: number) => (
    <Flex key={index} flexDirection="column">
      <Flex>
        {thread.invitees.map((person: any, index: number) => (
          <UserProfileImage
            key={`${index}-${person.typename}`}
            isMe={true}
            flexInstruction="column"
            user={person}
            buttonThing={false}
            color="blue"
            handleRemoveInviteeToThread={handleRemoveInviteeToThread}
          />
        ))}
      </Flex>
      <Button
        type="button"
        onClick={(event: React.MouseEvent) => {
          handleDisplayMessages(thread.id);
        }}
      >
        View messages
      </Button>
    </Flex>
  ));
};

interface IGetOnlyThreadsProps {
  me: any;
  dataGetOnlyThreads: any;
  errorGetOnlyThreads: any;
  loadingGetOnlyThreads: any;
}

interface IGetOnlyThreadsState {
  displayMessages: boolean;
  threadIdSelected: string | null;
  messagesMounted: boolean;
}

export default class GetOnlyThreads extends Component<
  IGetOnlyThreadsProps,
  IGetOnlyThreadsState
> {
  targetRef: React.RefObject<HTMLDivElement>;
  messagesEnd: React.RefObject<HTMLDivElement>;
  targetElement: any;
  targetScrollToElement: any;
  setTextInputRef: any;

  constructor(props: any) {
    super(props);

    this.targetRef = React.createRef();
    this.messagesEnd = React.createRef();
    this.targetElement = null;
    this.targetScrollToElement = null;

    this.handleDisplayMessages = this.handleDisplayMessages.bind(this);
    this.handleCloseThread = this.handleCloseThread.bind(this);
    this.handleRemoveInviteeToThread = this.handleRemoveInviteeToThread.bind(
      this
    );
    this.handleUpdateMessageState = this.handleUpdateMessageState.bind(this);

    this.state = {
      displayMessages: false,
      threadIdSelected: null,
      messagesMounted: false
    };
  }

  scrollToBottom = () => {
    this.targetScrollToElement.current.scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  };

  // showTargetElement = () => {
  //   // ... some logic to show target element

  //   // 4. Disable body scroll
  //   if (this.targetElement !== null) {
  //     disableBodyScroll(this.targetElement);
  //   }
  // };

  // hideTargetElement = () => {
  //   // ... some logic to hide target element

  //   // 5. Re-enable body scroll
  //   if (this.targetElement !== null) {
  //     enableBodyScroll(this.targetElement);
  //   }
  // };

  handleRemoveInviteeToThread() {
    log("handleRemoveInviteeToThread CLICKED");
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

  handleUpdateMessageState() {
    this.setState({
      messagesMounted: true
    });
  }

  componentDidMount() {
    // 3. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
    // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
    // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
    this.targetElement = this.targetRef;

    disableBodyScroll(this.targetElement);

    if (this.messagesEnd.current) {
      this.targetScrollToElement = this.messagesEnd;

      this.scrollToBottom();
    }
  }

  componentDidUpdate(
    prevProps: IGetOnlyThreadsProps,
    prevState: IGetOnlyThreadsState
  ) {
    if (
      this.state.displayMessages !== prevState.displayMessages &&
      this.messagesEnd.current
    ) {
      this.scrollToBottom();
    }

    if (
      this.state.messagesMounted !== prevState.messagesMounted &&
      this.messagesEnd.current
    ) {
      this.scrollToBottom();
    }
  }

  componentWillUnmount() {
    // 5. Useful if we have called disableBodyScroll for multiple target elements,
    // and we just want a kill-switch to undo all that.
    // OR useful for if the `hideTargetElement()` function got circumvented eg. visitor
    // clicks a link which takes him/her to a different page within the app.
    clearAllBodyScrollLocks();
  }

  render() {
    const {
      dataGetOnlyThreads,
      errorGetOnlyThreads,
      loadingGetOnlyThreads
    } = this.props;
    return (
      <Flex
        id="ab-container"
        width={[1]}
        flexDirection="column"
        flex="1 1 auto"
        ref={node => (this.targetRef = node)}
        style={{
          overflowY: "auto",
          position: "absolute",
          top: 0,
          bottom: 0,
          WebkitOverflowScrolling: "touch"
        }}
      >
        {this.state.displayMessages && this.state.threadIdSelected ? (
          <GetMessagesByThreadId
            displayMessages={this.handleDisplayMessages}
            me={this.props.me}
            handleCloseThread={this.handleCloseThread}
            handleRemoveInviteeToThread={this.handleRemoveInviteeToThread}
            handleUpdateMessageState={this.handleUpdateMessageState}
            scrollToBottom={this.scrollToBottom}
            threadId={this.state.threadIdSelected}
            threadIdSelected={this.state.threadIdSelected}
          />
        ) : (
          ""
        )}
        {!this.state.displayMessages && this.state.threadIdSelected === null ? (
          <Flex id="ab-child" flexDirection="column" flex="1 1 auto">
            <Flex>
              <Heading>Threads</Heading>
              <Button ml="auto">+</Button>
            </Flex>
            <ShowThreads
              data={dataGetOnlyThreads}
              handleDisplayMessages={this.handleDisplayMessages}
            />
          </Flex>
        ) : (
          ""
        )}

        <div
          id="scrollTarget"
          ref={this.messagesEnd}
          style={{
            border: "2px limegreen dashed",
            marginTop: "auto",
            width: "100%"
          }}
        >
          .
        </div>
      </Flex>
    );
  }
}
