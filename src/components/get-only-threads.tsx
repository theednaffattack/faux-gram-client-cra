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
import { Button, Flex, Heading, Icon, Text, AbFlex } from "./styled-rebass";
import GetMessagesByThreadId from "./get-messages-by-thread-id";
import UserProfileImage from "./user-profile-image";
import { MessageBox } from "./message-box";
import MountedProof from "./mounted-proof";
import { isThisHour } from "date-fns";
import ChatForm from "./chat-form";
import AddMessageToThread from "./add-message-to-thread";
import { SignS3Component } from "../generated/graphql_SAFETY";
import ThreadWindow from "./threads-user-window";
import MessagesWindow from "./messages-user-window";

const { log } = console;

interface IShowThreadsProps {
  data: any;
  handleDisplayMessages: any;
  handleRemoveInviteeToThread: any;
}

const ShowThreads: React.FC<IShowThreadsProps> = ({
  data,
  handleDisplayMessages,
  handleRemoveInviteeToThread
}) =>
  data.getOnlyThreads.map((thread: any, index: number) => (
    <Flex key={index} flexDirection="column" width={1}>
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

        <Button
          type="button"
          onClick={(event: React.MouseEvent) => {
            handleDisplayMessages(thread.id);
          }}
        >
          View messages
        </Button>
      </Flex>
      some text
    </Flex>
  ));

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

  emojiPickerVisible: boolean;
  chatInput: string;
  chatEmoji: string;
  showMessagingAddressBook: boolean;
  newThreadInvitees: any[];

  disabled: boolean;
  newThreadDisabled: boolean;

  lastMessage: string;
  lastMessenger: any;
}
interface IMessengerProps {
  id: string;
  firstName: string;
  lastName: string;
  __typename: string;
}

export default class GetOnlyThreads extends Component<
  IGetOnlyThreadsProps,
  IGetOnlyThreadsState
> {
  targetRef: React.RefObject<HTMLDivElement>;
  messagesEnd: React.RefObject<HTMLDivElement>;
  fileInputRef: React.RefObject<HTMLInputElement>;
  targetElement: any;
  targetScrollToElement: any;
  setTextInputRef: any;

  constructor(props: any) {
    super(props);

    this.targetRef = React.createRef();
    this.messagesEnd = React.createRef();
    this.fileInputRef = React.createRef();

    this.targetElement = null;
    this.targetScrollToElement = null;

    this.handleDisplayMessages = this.handleDisplayMessages.bind(this);
    this.handleCloseThread = this.handleCloseThread.bind(this);
    this.handleRemoveInviteeToThread = this.handleRemoveInviteeToThread.bind(
      this
    );
    this.handleUpdateMessageState = this.handleUpdateMessageState.bind(this);

    this.handleOpenEmojiMenuClick = this.handleOpenEmojiMenuClick.bind(this);

    this.handleSetLastMessage = this.handleSetLastMessage.bind(this);
    this.handleSetLastMessenger = this.handleSetLastMessenger.bind(this);

    this.state = {
      displayMessages: false,
      threadIdSelected: null,
      messagesMounted: false,

      emojiPickerVisible: false,
      chatInput: "",
      chatEmoji: "",
      showMessagingAddressBook: false,
      newThreadInvitees: [],
      disabled: false,
      newThreadDisabled: false,
      lastMessage: "",
      lastMessenger: ""
    };
  }

  handleSetLastMessage(message: string) {
    this.setState({
      lastMessage: message
    });
  }

  handleSetLastMessenger({
    id,
    firstName,
    lastName,
    __typename
  }: IMessengerProps) {
    this.setState({
      lastMessenger: {
        id,
        firstName,
        lastName,
        __typename
      }
    });
  }

  // FENCE

  handleThreadSelection(selection: any) {
    // const { data } = this.props;
    // const selectedThreadIndex = this.props.data.getMessageThreads[
    //   selection.index
    // ];
    log("pre setState");

    this.setState(prevState => ({
      threadIdSelected: selection.index,
      showMessagingAddressBook: !prevState.showMessagingAddressBook,
      newThreadInvitees: []
    }));
  }

  handleAddInviteeToThread({ user }: any) {
    this.setState(prevState => ({
      newThreadInvitees: prevState.newThreadInvitees.concat(user)
    }));
  }

  handleRemoveInviteeToThread({ user }: any) {
    this.setState(prevState => ({
      newThreadInvitees: prevState.newThreadInvitees.filter(invitee => {
        return invitee !== user.id;
      })
    }));
  }

  handleThreadAddThreadClick() {
    this.setState(prevState => ({
      showMessagingAddressBook: !prevState.showMessagingAddressBook,
      threadIdSelected: null
    }));
  }

  handleOpenEmojiMenuClick() {
    log("handleOpenEmojiMenuClick CLICKED");
    this.setState(prevState => ({
      emojiPickerVisible: !prevState.emojiPickerVisible
    }));
  }

  // FENCE

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

    // this.targetElement = this.targetRef;

    // disableBodyScroll(this.targetElement);

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
      loadingGetOnlyThreads,
      me
    } = this.props;

    const { threadIdSelected } = this.state;

    if (errorGetOnlyThreads) {
      return <Flex>{errorGetOnlyThreads}</Flex>;
    }

    if (loadingGetOnlyThreads) {
      return <Flex>loading...</Flex>;
    }

    if (
      !this.state.displayMessages &&
      this.state.threadIdSelected === null &&
      dataGetOnlyThreads
    ) {
      return (
        <ThreadWindow
          data={dataGetOnlyThreads.getOnlyThreads}
          handleDisplayMessages={this.handleDisplayMessages}
          handleRemoveInviteeToThread={this.handleRemoveInviteeToThread}
        />
      );
    }

    if (this.state.displayMessages && this.state.threadIdSelected) {
      return (
        <>
          <GetMessagesByThreadIdComponent
            variables={{
              input: {
                threadId: this.state.threadIdSelected,
                skip: 0,
                take: 25
              }
            }}
          >
            {({ data, error, loading, subscribeToMore }: any) => {
              // const lastMessengerHere =
              //   data.getMessagesByThreadId[
              //     data.getMessagesByThreadId.length - 1
              //   ].sentBy;
              if (error) return <div>{error}</div>;
              if (loading) return <div>loading...</div>;

              return (
                <Flex
                  flexDirection="column"
                  alignItems="space-between"
                  width={1}
                  id="isItMe"
                  border="crimson"
                  style={{ overflowY: "hidden", overflowX: "hidden" }}
                >
                  <Button
                    ml="auto"
                    key="justAButton"
                    type="button"
                    onClick={this.handleCloseThread}
                  >
                    <Icon name="triangleLeft" fill="white" /> Back to Threads
                  </Button>
                  {/* {JSON.stringify(data.getMessagesByThreadId)} */}

                  <Flex flex="1 1 auto">
                    <MessagesWindow
                      data={data.getMessagesByThreadId}
                      me={me}
                      handleDisplayMessages={this.handleDisplayMessages}
                      handleRemoveInviteeToThread={
                        this.handleRemoveInviteeToThread
                      }
                      handleCloseThread={this.handleCloseThread}
                    />
                  </Flex>
                  {/* <Flex> */}
                  <SignS3Component>
                    {(
                      signS3,
                      {
                        data: dataSignS3,
                        error: errorSignS3,
                        loading: loadingSignS3
                      }
                    ) => {
                      return (
                        <ChatForm
                          handleChatFieldChange={() =>
                            log("handleChatFieldChange")
                          }
                          handleUploadFileClick={() => log("handleUploadFile")}
                          handleThreadSelection={() => log("thread selected")}
                          sentTo={
                            data.getMessagesByThreadId[0].sentBy.id ===
                            this.props.me.id
                              ? data.getMessagesByThreadId[0].user.id
                              : data.getMessagesByThreadId[0].sentBy.id
                          }
                          handleSetLastMessenger={this.handleSetLastMessenger}
                          handleSetLastMessage={this.handleSetLastMessage}
                          threadId={threadIdSelected ? threadIdSelected : ""}
                          selectedThreadId={
                            threadIdSelected ? threadIdSelected : ""
                          }
                          files={[]}
                          newThreadInvitees={[]}
                          key="someKey"
                          chatEmoji=""
                          emojiPickerVisible={this.state.emojiPickerVisible}
                          disabled={this.state.disabled}
                          handleOpenEmojiMenuClick={
                            this.handleOpenEmojiMenuClick
                          }
                          handleEngageMicrophoneClick={() => log}
                          newThreadDisabled={this.state.newThreadDisabled}
                          signS3Mutation={signS3}
                        />
                      );
                    }}
                  </SignS3Component>
                  {/* </Flex> */}
                </Flex>
              );
            }}
          </GetMessagesByThreadIdComponent>
        </>
      );
    }
  }
}
