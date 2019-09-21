import React from "react";

import HeaderDropdown from "./header-dropdown";

export interface ILayoutHeader {
  toggleSidebarOpenOrClosed: any;
  handleCreateNewMessageThread: any;
  showMessagingAddressBook: boolean;
  handleCancelNewMessageThread: any;
}

function LayoutHeader({
  toggleSidebarOpenOrClosed,
  handleCreateNewMessageThread,
  showMessagingAddressBook,
  handleCancelNewMessageThread
}: ILayoutHeader) {
  return (
    <HeaderDropdown
      showMessagingAddressBook={showMessagingAddressBook}
      handleCancelNewMessageThread={handleCancelNewMessageThread}
      handleCreateNewMessageThread={handleCreateNewMessageThread}
      toggleSidebarOpenOrClosed={toggleSidebarOpenOrClosed}
    />
    // <Flex
    //   flexDirection="row"
    //   alignItems="center"
    //   bg="rebeccapurple"
    //   color="white"
    //   width={[1, 1, "960px"]}
    //   px={[1, 1, 4]}
    //   as="nav"
    // >
    //   <Button type="button" onClick={toggleSidebarOpenOrClosed}>
    //     SIDEBAR
    //   </Button>
    //   <Heading as="h1">Faux Gram</Heading>
    //   Content
    // </Flex>
  );
}

export default LayoutHeader;
