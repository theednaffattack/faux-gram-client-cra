import React from "react";
import { Router, Location } from "@reach/router";
import posed, { PoseGroup } from "react-pose";
import { space, width } from "styled-system";
import styled from "styled-components";

import flexbox from "@styled-system/flexbox";

import { IPosedRouterProps } from "./types";
import { Flex } from "./styled-rebass";

import Home from "../pages/home";
import About from "../pages/about";
import Login from "../pages/login";
import Welcome from "../pages/welcome";
import CheckEmail from "../pages/check-email";
import Register from "../pages/register";
import TermsAndConditions from "../pages/terms_and_conditions";
import ChangePassword from "../pages/change-password";
import ConfirmUser from "../pages/confirm";
import DropZone from "../pages/dropzone";
import Feed from "../pages/feed";
import ForgotPassword from "../pages/forgot-password";
import HelloWorld from "../pages/hello";
import Messages from "../pages/messages";
import Post from "../pages/post";
import Profile from "../pages/profile";
import TabViewer from "./tab-viewer";
import { Example } from "../pages/example";

const RouteContainer = posed(Flex)({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const StyledRouter: React.FC<IPosedRouterProps> = styled(Router)`
  ${space}
  ${width}
  ${flexbox}
`;

export interface INotFoundProps {
  default: any;
}

const NotFound = (props: any) => {
  return (
    <Flex alignItems="center" justifyContent="center" width={1}>
      {" "}
      Whoops, the app can't find that page
    </Flex>
  );
};

const PosedRouter = ({ children }: IPosedRouterProps) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer
          width={1}
          key={location.key}
          style={{ overflowX: "hidden" }}
          flex="1 1 auto"
        >
          <StyledRouter location={location} width={1} flex="1 1 auto">
            {children}
          </StyledRouter>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

function Routes() {
  return (
    <PosedRouter flex="1 1 auto">
      <NotFound primary={false} default />
      <Home primary={false} path="/" />
      <About primary={false} path="/about" />
      <Login primary={false} path="/login" />
      <Welcome primary={false} path="/welcome" />
      <CheckEmail primary={false} path="/check-email" />
      <Register primary={false} path="/register" />
      <TermsAndConditions primary={false} path="/terms_and_conditions" />
      <ChangePassword primary={false} path="change-password" />
      <ConfirmUser primary={false} path="/confirm" />
      <DropZone primary={false} path="/dropzone" />
      <Feed primary={false} path="/feed" />
      <ForgotPassword primary={false} path="/forgot-password" />
      <HelloWorld primary={false} path="/hello-world" />
      <Post primary={false} path="/post" />
      <Profile primary={false} path="/profile" />
      <Messages primary={false} path="/messages" />
      <TabViewer primary={false} path="/tabs" />
      <Example primary={false} path="/example" />
    </PosedRouter>
  );
}

export default Routes;
