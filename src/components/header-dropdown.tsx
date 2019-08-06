import React, { Component } from "react";

import {
  Flex,
  Button,
  Heading,
  PSidebarList,
  NavLink,
  StyledUl_v1
} from "./styled-rebass";
import { Content } from "./posed-components";
import MenuButton from "./menu-button";
import { pages } from "./layout-header";

const breakWidths = [1, 1, 1, "960px"];

export interface IHeaderDropdownState {
  dropdownState: string;
}

export default class HeaderDropdown extends Component<
  object,
  IHeaderDropdownState
> {
  constructor(props: object) {
    super(props);

    this.toggleMenuOpenOrClosed = this.toggleMenuOpenOrClosed.bind(this);
    this.handleNavClick = this.handleNavClick.bind(this);

    this.state = {
      dropdownState: "closed"
    };
  }
  toggleMenuOpenOrClosed() {
    this.setState(prevState => ({
      dropdownState: prevState.dropdownState === "closed" ? "open" : "closed"
    }));
  }
  handleNavClick() {
    this.toggleMenuOpenOrClosed();
    console.log("nav clicked");
  }
  render() {
    return (
      <React.Fragment>
        <Flex
          flexDirection="row"
          alignItems="center"
          // bg="rebeccapurple"
          color="white"
          width={breakWidths}
          // px={[1, 1, 4]}
          as="nav"
          bg="#7386d5"
          style={{
            background: "linear-gradient(5deg, #745fb5, #9066b8)",
            position: "relative"
          }}
        >
          <MenuButton
            toggleMenuOpenOrClosed={this.toggleMenuOpenOrClosed}
            dropdownMenu={this.state.dropdownState}
          />
          <Heading as="h1">Faux Gram</Heading>
        </Flex>
        <Flex width={breakWidths} style={{ position: "relative" }}>
          <Content
            flexDirection="column"
            width={breakWidths}
            pose={this.state.dropdownState === "open" ? "open" : "closed"}
            style={{
              background: "linear-gradient(5deg, #745fb5, #9066b8)",
              position: "absolute",
              top: "0",
              zIndex: 8
            }}
          >
            <StyledUl_v1>
              {this.state.dropdownState === "open"
                ? pages.map((item, itemIndex: number) => (
                    <PSidebarList margin={0} key={itemIndex}>
                      <NavLink onClick={this.handleNavClick} to={item.href}>
                        {item.linkText}
                      </NavLink>
                    </PSidebarList>
                  ))
                : ""}
            </StyledUl_v1>
          </Content>
        </Flex>
      </React.Fragment>
    );
  }
}
