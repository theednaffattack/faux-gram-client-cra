import React from "react";
import { Heading } from "rebass";

import { Flex, StyledUl, StyledLi, NavLink } from "./styled-rebass";

const rootTitle = "Faux Gram: ";

const pages = [
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
    name: "dropzone",
    href: `/dropzone`,
    linkText: `Dropzone`,
    title: `${rootTitle}dropzone`
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
    <StyledLi key={index} mx={4}>
      <NavLink to={page.href} style={{ color: "white" }}>
        {page.linkText}
      </NavLink>
    </StyledLi>
  );
});

function LayoutHeader() {
  return (
    <Flex
      flexDirection="row"
      alignItems="center"
      bg="rebeccapurple"
      color="white"
      width={[1, 1, 1]}
      px={[1, 1, 4]}
      as="nav"
    >
      <Heading as="h1">Faux Gram</Heading>
      <StyledUl id="site-nav">
        {myPages}
        {/* <StyledLi mx={4}>
          <NavLink to="/" style={{ color: "white" }}>
            Home
          </NavLink>
        </StyledLi>
        <StyledLi>
          <NavLink to="/about" style={{ color: "white" }}>
            About
          </NavLink>
        </StyledLi> */}
      </StyledUl>
    </Flex>
  );
}

export default LayoutHeader;
