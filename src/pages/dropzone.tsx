import { Flex, Heading, Text } from "rebass";

import { MeComponent, SignS3Component } from "../generated/graphql";
import React from "react";
import { IPageProps } from "./types";

const DropPage: React.FC<IPageProps> = ({ path }: IPageProps) => (
  <MeComponent>
    {({ data: dataMe, loading: loadingMe, error: errorMe }) => {
      if (!dataMe || !dataMe.me) {
        return null;
      }
      if (errorMe) {
        return (
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading>error!!!</Heading>
            <Text>{errorMe.message}</Text>
          </Flex>
        );
      }
      if (loadingMe) {
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
        <Flex>
          <SignS3Component>
            {(
              signS3,
              { data: dataSignS3, error: errorSignS3, loading: loadingSignS3 }
            ) => {
              return <div>Had to move the component</div>;
            }}
          </SignS3Component>
        </Flex>
      );
    }}
  </MeComponent>
);

export default DropPage;
