import React from "react";
import { navigate } from "@reach/router";

import { Flex, Heading, Text } from "../components/styled-rebass";
import { MeComponent } from "../generated/graphql";
import { IPageProps } from "./types";
import TabViewer from "../components/tab-viewer";
import { HelloWorldComponent } from "../generated/graphql_SAFETY";

const Feed: React.FC<IPageProps> = ({ path }: IPageProps) => (
  <HelloWorldComponent>
    {({ data: dataHello, error: errorHello, loading: loadingHello }) => {
      if (errorHello) {
        navigate("/login", {
          state: {
            authenticated: false,
            flashMessage: "You are not authenticated"
          }
        });
      }
      if (loadingHello) {
        return <div>loading...</div>;
      }
      if (!dataHello) {
        return <div>Something's wrong</div>;
      }
      return (
        <MeComponent>
          {({ data, loading, error }) => {
            if (!data || !data.me) {
              return null;
            }
            if (error) {
              return (
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Heading>error!!!</Heading>
                  <Text>{error.message}</Text>
                </Flex>
              );
            }
            if (loading) {
              return (
                <Flex
                  flexDirection="column"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Heading>loading...</Heading>
                </Flex>
              );
            }

            return <TabViewer path={path} />;
          }}
        </MeComponent>
      );
    }}
  </HelloWorldComponent>
);

export default Feed;
