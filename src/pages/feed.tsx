import React from "react";

import { Flex, Heading, Text } from "../components/styled-rebass";
import Layout from "../components/layout";
import GlobalFeed from "../components/global-feed";
import MyFeed from "../components/my-feed";
import { MeComponent } from "../generated/graphql";
import { IPageProps } from "./types";

const Feed: React.FC<IPageProps> = ({ path }: IPageProps) => (
  <Layout title="My Feed">
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

        return (
          <>
            <Flex px={[4, 0, 0]} flexDirection="column">
              <MyFeed me={data.me} />
            </Flex>
            <Flex bg="#eee" px={[4, 0, 0]} flexDirection="column">
              <GlobalFeed me={data.me} />
            </Flex>
          </>
        );
      }}
    </MeComponent>
  </Layout>
);

export default Feed;
