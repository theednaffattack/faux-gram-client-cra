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

const RouteContainer = posed(Flex)({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const StyledRouter: React.FC<IPosedRouterProps> = styled(Router)`
  ${space}
  ${width}
  ${flexbox}
`;

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
          <StyledRouter
            location={location}
            width={1}
            flex="1 1 auto"
            // style={{ border: "2px crimson solid" }}
          >
            {children}
          </StyledRouter>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

function Routes() {
  return (
    <PosedRouter>
      <Home path="/" />
      <About path="/about" />
      <Login path="/login" />
      <Welcome path="/welcome" />
      <CheckEmail path="/check-email" />
      <Register path="/register" />
      <TermsAndConditions path="/terms_and_conditions" />
      <ChangePassword path="change-password" />
      <ConfirmUser path="/confirm" />
      <DropZone path="/dropzone" />
      <Feed path="/feed" />
      <ForgotPassword path="/forgot-password" />
      <HelloWorld path="/hello-world" />
      <Post path="/post" />
      <Profile path="/profile" />
      <Messages path="/messages" />
    </PosedRouter>
  );
}

export default Routes;
