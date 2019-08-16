import React from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";

import { Button, Flex } from "./styled-rebass";
import UserProfileImage from "./user-profile-image";

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
  // <div style={style}>Row {index}</div>

  <Flex
    bg={index % 2 === 0 ? "#eee" : "white"}
    flexDirection="column"
    width={1}
    style={style}
  >
    <Flex bg="transparent">
      {data.itemData[index].invitees.map((person: any, itemIndex: number) => (
        <UserProfileImage
          key={`${itemIndex}-${person.typename}`}
          isMe={true}
          flexInstruction="column"
          user={person}
          buttonThing={false}
          color="blue"
          handleRemoveInviteeToThread={data.handleRemoveInviteeToThread}
        />
      ))}

      <Button
        ml="auto"
        mr={2}
        type="button"
        onClick={(event: React.MouseEvent) => {
          data.handleDisplayMessages(data.itemData[index].id);
          console.log("blonk");
        }}
      >
        View messages
      </Button>
    </Flex>
    some text
  </Flex>
);

const ThreadWindow = (props: any) => (
  <AutoSizer>
    {({ height, width }) => (
      <List
        itemData={{
          itemData: props.data,
          handleThreadSelection: props.handleThreadSelection,
          handleDisplayMessages: props.handleDisplayMessages
        }}
        height={height}
        itemCount={props.data.length}
        itemSize={85}
        width={width}
      >
        {Row}
      </List>
    )}
  </AutoSizer>
);

export default ThreadWindow;
