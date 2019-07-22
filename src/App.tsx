import React from "react";

import { GlobalStyle } from "./global-styles/theme";

import Routes from "./components/Routes";
import { Flex } from "./components/styled-rebass";
import Layout from "./components/layout";

const App = () => (
  <Layout>
    <Flex flexDirection="column" id="site-container" width={1}>
      <GlobalStyle />
      <Flex flexDirection="row" id="content-container" width={1}>
        <Routes />
      </Flex>
    </Flex>
  </Layout>
);

export default App;
