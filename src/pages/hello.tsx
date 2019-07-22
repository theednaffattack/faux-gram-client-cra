import React from "react";

import { Flex, Box, Text } from "../components/styled-rebass";
import { HelloWorldComponent } from "../generated/graphql";
import { IPageProps } from "./types";

const HelloWorld: React.FC<IPageProps> = ({ path }: IPageProps) => {
  return (
    <Flex
      minHeight="50vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <HelloWorldComponent>
        {data => (
          <Box>
            <Text fontSize={[4]}>
              {data && data.data && data.data.helloWorld
                ? data.data.helloWorld
                : "loading..."}
            </Text>
          </Box>
        )}
      </HelloWorldComponent>
    </Flex>
  );
};
export default HelloWorld;
