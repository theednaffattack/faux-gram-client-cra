import React from "react";

import { Button, Heading, Flex, StyledLi, LinkLink } from "./styled-rebass";
import HeaderDropdown from "./header-dropdown";

const rootTitle = "Faux Gram: ";

export const pages = [
  {
    name: `home`,
    href: "/",
    linkText: `Home`,
    title: `${rootTitle}home`
  },
  {
    name: "about",
    href: `/about`,
    linkText: `About`,
    title: `${rootTitle}about`
  },
  {
    name: "messages",
    href: `/messages`,
    linkText: `Messages`,
    title: `${rootTitle}messages`
  },
  {
    name: "post",
    href: `/post`,
    linkText: `Post Snaps`,
    title: `${rootTitle}post`
  },
  {
    name: "feed",
    href: `/feed`,
    linkText: `Feed`,
    title: `${rootTitle}feed`
  },
  {
    name: "login",
    href: `/login`,
    linkText: `Login`,
    title: `${rootTitle}login`
  },
  {
    name: "profile",
    href: `/profile`,
    linkText: `Profile`,
    title: `${rootTitle}profile`
  }
];

const myPages = pages.map((page, index) => {
  return (
    <StyledLi key={index} mx={4} color="white">
      <LinkLink to={page.href}>{page.linkText}</LinkLink>
    </StyledLi>
  );
});

export interface ILayoutHeader {
  toggleSidebarOpenOrClosed: any;
}

function LayoutHeader({ toggleSidebarOpenOrClosed }: ILayoutHeader) {
  return (
    <HeaderDropdown />
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
