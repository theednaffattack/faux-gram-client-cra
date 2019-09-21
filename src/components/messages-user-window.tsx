import React from "react";
import { VariableSizeList as List, VariableSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { MessageBox } from "./message-box_v2";

import { MESSAGE_THREADS } from "../graphql/user/subscriptions/MessageThreads";
import { IChatHistoryStateObject } from "./chat-example/Chat";
import { getRowHeight } from "./get-chat-message-container-size";

interface IRowProps {
  index: number;
  style: any;
  data: any;
}

const Row = ({ index, data, style }: IRowProps) => {
  return (
    <MessageBox
      pageInfo={data.pageInfo}
      threadId={data.threadId}
      fetchMoreGetMessagesByThreadId={data.fetchMoreGetMessagesByThreadId}
      key={`${index}-${data.itemData[index].node.id}-${data.itemData[index].node.__typename}`}
      allData={data.itemData[index]}
      type={data.itemData[index].__typename}
      message={data.itemData[index].node.message}
      sentBy={data.itemData[index].node.sentBy}
      createdAt={data.itemData[index].node.created_at}
      images={data.itemData[index].node.images}
      me={data.me.id}
      handleRemoveInviteeToThread={data.handleRemoveInviteeToThread}
      handleToggleImageModal={data.handleToggleImageModal}
      style={style}
      imageModalState={data.imageModalState}
    />
  );
};

interface IMessagesWindowProps {
  data: any;
  handleDisplayMessages: any;
  // handleThreadSelection: any;
  handleCloseThread: any;
  me: any;
  subscribeToMore: any;
  threadIdSelected: string;
  fetchMoreGetMessagesByThreadId: any;
}

interface IMessageWindowState {
  listLength: number | null;
  chatHistory: IChatHistoryStateObject[];
  warning: string;
  imageModal: string;
}

// const WARNING = {
//   noHistory:
//     "warning: there is no chat history (chatHistoryRef.current is null)",
//   noListRef: "warning: there is no list present (noListRef.current is null)"
// };

class MessagesWindow extends React.Component<
  IMessagesWindowProps,
  IMessageWindowState
> {
  listRef: React.RefObject<VariableSizeList>;
  messageHistoryRef: React.RefObject<VariableSizeList>;
  constructor(props: IMessagesWindowProps) {
    super(props);

    this.listRef = React.createRef();
    this.messageHistoryRef = React.createRef();

    this.scrollToLastRow = this.scrollToLastRow.bind(this);

    this.handleToggleImageModal = this.handleToggleImageModal.bind(this);

    this.state = {
      listLength: null,
      chatHistory: [],
      warning: "",
      imageModal: "closed"
    };
  }

  handleToggleImageModal() {
    this.setState(prevState => {
      return {
        imageModal: prevState.imageModal === "open" ? "closed" : "open"
      };
    });
  }

  componentDidMount() {
    this.setState({
      listLength: this.props.data.edges.length
    });

    this.props.subscribeToMore({
      document: MESSAGE_THREADS,
      variables: {
        data: {
          threadId: this.props.threadIdSelected,
          sentTo: "0a8c2ccf-114f-4c3f-99b0-07d83bc668e5",
          message: "hi bob",
          invitees: [
            "0a8c2ccf-114f-4c3f-99b0-07d83bc668e5",
            "5102bae2-5000-42f1-986a-58e8f8506971"
          ]
        }
      },

      updateQuery: (prev: any, { subscriptionData }: any) => {
        let returnObj = Object.assign({}, prev, {
          // @ts-ignore
          getMessagesByThreadId: {
            pageInfo: {
              ...prev.getMessagesByThreadId.pageInfo
            },
            edges: [
              // @ts-ignore
              ...prev.getMessagesByThreadId.edges,
              {
                node: subscriptionData.data.messageThreads.message,
                __typename: "MessageEdge"
              }
            ],
            __typename: {
              ...prev.getMessagesByThreadId.__typename
            }
          }
        });

        return returnObj;
      }
    });
  }
  componentDidUpdate(prevState: any, prevProps: any) {
    if (typeof this.state.listLength === "number") {
      this.scrollToLastRow();
    }
  }

  render() {
    const {
      data,
      fetchMoreGetMessagesByThreadId,
      handleDisplayMessages,
      handleCloseThread,
      me,
      threadIdSelected
    } = this.props;

    const loadingRow = {
      node: {
        last_message: "Load older messages",
        sentBy: {
          id: "fake"
        },
        message: "loading row"
      },
      __typename: "LoadingIndicator"
    };

    // Array of items loaded so far.
    const items = data.pageInfo.hasPreviousPage
      ? [loadingRow, ...data.edges]
      : data.edges;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <List
            ref={this.listRef}
            itemData={{
              pageInfo: data.pageInfo,
              threadId: threadIdSelected,
              fetchMoreGetMessagesByThreadId: fetchMoreGetMessagesByThreadId,
              itemData: items,
              me: me,
              handleDisplayMessages: handleDisplayMessages,
              handleCloseThread: handleCloseThread,
              handleToggleImageModal: this.handleToggleImageModal,
              imageModalState: this.state.imageModal
            }}
            height={height}
            itemCount={items.length}
            itemSize={(index: number) => {
              const height = getRowHeight({
                attributes: { fontSize: "2em" },
                className: "fakeClassName",
                data,
                itemIndex: index,
                text: items[index].node.message,
                created_at: items[index].node.created_at,
                images: items[index].node.images
                  ? items[index].node.images
                  : null
              });
              console.log("CHECK EACH ITEM", {
                index,
                height,
                text: items[index].node.message,
                messagId: items[index].node.id
              });
              return height;
            }}
            width={width}
          >
            {Row}
          </List>
        )}
      </AutoSizer>
    );
  }

  scrollToLastRow = () => {
    if (this.listRef && this.listRef.current && this.state.listLength) {
      this.listRef.current.scrollToItem(this.state.listLength, "center");
      return;
    }
    if (!this.listRef.current) {
      throw Error("no ref is set dummy");
    }
    return;
  };
}

export default MessagesWindow;
