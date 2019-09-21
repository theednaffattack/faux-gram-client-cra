import React from "react";

import { GlobalStyle } from "./global-styles/theme";

import Routes from "./components/Routes";
import { Flex } from "./components/styled-rebass";
import Layout from "./components/layout";

const App = () => (
  <Layout>
    <GetFromClonedLayoutChildren>
      <Flex
        flexDirection="column"
        id="site-container"
        flex="1 1 auto"
        width={1}
      >
        <GlobalStyle />
        <Flex
          flexDirection="row"
          key="target"
          id="content-container"
          flex="1 1 auto"
          width={1}
        >
          <Routes key="my-router" />
        </Flex>
      </Flex>
    </GetFromClonedLayoutChildren>
  </Layout>
);

export default App;

const GetFromClonedLayoutChildren = (props: any) => {
  const children = React.Children.map(props.children, (child: any) => {
    let newElement = React.cloneElement(child, {
      showMessagingAddressBook: props.showMessagingAddressBook,
      handleCreateNewMessageThread: props.handleCreateNewMessageThread,
      handleCancelNewMessageThread: props.handleCancelNewMessageThread,
      ...props
    });

    let { children: nestedChildren } = newElement.props.children.props;

    let findMyRouter = nestedChildren.map((child: any) => {
      if (child.key === "target" && child.props.children.key === "my-router") {
        let newRouterChild = React.cloneElement(child.props.children, {
          showMessagingAddressBook: props.showMessagingAddressBook,

          handleCreateNewMessageThread: props.handleCreateNewMessageThread,
          handleCancelNewMessageThread: props.handleCancelNewMessageThread,
          handleLoadNewThreadCreated: props.handleLoadNewThreadCreated
        });

        let tryToClone = Object.assign({}, child, {
          props: { ...child.props, children: newRouterChild }
        });

        return tryToClone;
      }
      return child;
    });

    let newerElement = Object.assign({}, newElement, {
      props: {
        ...newElement.props,
        children: [...findMyRouter]
      }
    });

    return newerElement;
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%"
      }}
    >
      <div
        style={{
          flex: "1 1 auto",
          display: "flex",
          flexDirection: "column",
          width: "100%"
        }}
      >
        {children}
      </div>
    </div>
  );
};
