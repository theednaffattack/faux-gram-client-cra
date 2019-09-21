import React from "react";
import { Location } from "@reach/router";
import {
  AbFlex,
  Button,
  Flex,
  PSidebar,
  PSidebarList,
  NavLink
} from "./styled-rebass";
import LayoutFooter from "./layout-footer";
import HeaderDropdown, { pages } from "./header-dropdown";

interface ILayoutProps {
  title?: string;
}

export interface ILayoutState {
  sidebarStatus: string;
  showMessagingAddressBook: boolean;
}

class Layout extends React.Component<ILayoutProps, ILayoutState> {
  sidebarContainerRef: React.RefObject<HTMLDivElement>;
  constructor(props: ILayoutProps) {
    super(props);
    this.toggleSidebarOpenOrClosed = this.toggleSidebarOpenOrClosed.bind(this);
    this.handleCloseSideBar = this.handleCloseSideBar.bind(this);
    this.handleClickOutsideSidebar = this.handleClickOutsideSidebar.bind(this);
    this.handleCreateNewMessageThread = this.handleCreateNewMessageThread.bind(
      this
    );
    this.handleCancelNewMessageThread = this.handleCancelNewMessageThread.bind(
      this
    );

    this.handleLoadNewThreadCreated = this.handleLoadNewThreadCreated.bind(
      this
    );

    this.state = {
      sidebarStatus: "closed",
      showMessagingAddressBook: false
    };

    this.sidebarContainerRef = React.createRef();
  }

  handleCloseSideBar() {
    this.setState({
      sidebarStatus: "closed"
    });
  }
  toggleSidebarOpenOrClosed(event: React.MouseEvent) {
    const buttonId = event.currentTarget.getAttribute("id");

    if (
      this.sidebarContainerRef &&
      // @ts-ignore
      this.sidebarContainerRef.contains(event.target) &&
      buttonId !== "closeSideBar"
    ) {
      return;
    }
    this.setState(prevState => ({
      sidebarStatus: prevState.sidebarStatus === "open" ? "closed" : "open"
    }));
  }

  handleClickOutsideSidebar(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    if (
      this.sidebarContainerRef &&
      // @ts-ignore
      this.sidebarContainerRef.contains(event.target)
    ) {
      return;
    }
    if (
      this.sidebarContainerRef &&
      this.state.sidebarStatus === "open" &&
      // @ts-ignore
      !this.sidebarContainerRef.contains(event.target)
    ) {
      this.handleCloseSideBar();
      return;
    }

    return;
  }

  handleCreateNewMessageThread() {
    this.setState(prevState => {
      return {
        showMessagingAddressBook: !prevState.showMessagingAddressBook
      };
    });
  }

  handleCancelNewMessageThread() {
    this.setState(prevState => {
      return {
        showMessagingAddressBook: false
      };
    });
  }

  handleLoadNewThreadCreated({ threadId }: any) {
    this.setState(prevState => {
      return {
        showMessagingAddressBook: false
      };
    });
  }

  componentDidMount() {
    // @ts-ignore
    document.addEventListener("mousedown", this.handleClickOutsideSidebar);
  }

  componentWillUnmount() {
    // @ts-ignore
    document.removeEventListener("mousedown", this.handleClickOutsideSidebar);
  }

  render() {
    // const { children } = this.props;

    const children = React.Children.map(this.props.children, (child: any) => {
      let newElement = React.cloneElement(child, {
        showMessagingAddressBook: this.state.showMessagingAddressBook,
        handleCreateNewMessageThread: this.handleCreateNewMessageThread,
        handleCancelNewMessageThread: this.handleCancelNewMessageThread,
        handleLoadNewThreadCreated: this.handleLoadNewThreadCreated
      });

      return newElement;
    });

    return (
      <AbFlex
        id="layout"
        m={[0]}
        flexDirection="column"
        width={1}
        alignItems="center"
        flex="1 1 auto"
      >
        <PSidebar
          pose={this.state.sidebarStatus}
          // @ts-ignore
          ref={node => (this.sidebarContainerRef = node)}
        >
          <Button
            bg="#9066b8" // backgroundColor="linear-gradient(5deg, #745fb5, #9066b8)"
            id="closeSideBar"
            onClick={this.toggleSidebarOpenOrClosed}
          >
            X
          </Button>
          {pages.map((item, itemIndex: number) => (
            <PSidebarList
              pose={this.state.sidebarStatus}
              margin={0}
              key={itemIndex}
            >
              <NavLink to={item.href}>{item.linkText}</NavLink>
            </PSidebarList>
          ))}
        </PSidebar>
        {/* <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <LayoutHeader
          toggleSidebarOpenOrClosed={this.toggleSidebarOpenOrClosed}
        /> */}
        <HeaderDropdown
          handleCreateNewMessageThread={this.handleCreateNewMessageThread}
          toggleSidebarOpenOrClosed={this.toggleSidebarOpenOrClosed}
          handleCancelNewMessageThread={this.handleCancelNewMessageThread}
          showMessagingAddressBook={this.state.showMessagingAddressBook}
        />
        {/* <Location>
          {({ location }: any) => {
            return ( */}
        <Flex flex="1 1 auto" width={[1, 1, 1, "960px"]}>
          {children}
        </Flex>
        {/* );
          }}
        </Location> */}
        <Location>
          {({ location }: any) => {
            if (location.pathname === "/messages") {
              return "";
              // return <LayoutFooter />;
            }

            if (location.pathname !== "/messages") {
              return <LayoutFooter />;
            }
          }}
        </Location>
      </AbFlex>
    );
  }
}

export default Layout;
