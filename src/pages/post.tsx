import React from "react";
import { MeComponent } from "../generated/graphql";

import { Flex, Heading, Text } from "../components/styled-rebass";
import CreatePostMutation from "../components/file-list-mutation";
import { IPageProps } from "./types";

const Post: React.FC<IPageProps> = ({ path }: IPageProps) => (
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

      return <CreatePostMutation me={data.me.id} />;
    }}
  </MeComponent>
);

export default Post;
