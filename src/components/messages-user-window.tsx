import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { Button, Flex, Icon } from "./styled-rebass";
import UserProfileImage from "./user-profile-image";
import { MessageBox } from "./message-box_v2";

interface IRowProps {
  index: number;
  style: any;
  data: any;
}

function handleOnWheel({ deltaY }: any) {
  // Your handler goes here ...
  console.log("handleOnWheel()", deltaY);
}

const Row = ({ index, data, style }: IRowProps) => (
  <MessageBox
    key={`${index}-${data.itemData[index].id}-${
      data.itemData[index].__typename
    }`}
    message={data.itemData[index].message}
    sentBy={data.itemData[index].sentBy}
    createdAt={data.itemData[index].created_at}
    images={data.itemData[index].images}
    me={data.me.id}
    handleRemoveInviteeToThread={data.handleRemoveInviteeToThread}
    style={style}
  />
);

const MessagesWindow = ({
  data,
  handleDisplayMessages,
  handleThreadSelection,
  handleCloseThread,
  me
}: any) => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        itemData={{
          itemData: data,
          me: me,
          handleThreadSelection: handleThreadSelection,
          handleDisplayMessages: handleDisplayMessages,
          handleCloseThread: handleCloseThread
        }}
        height={height}
        itemCount={data.length}
        itemSize={200}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
);

export default MessagesWindow;
