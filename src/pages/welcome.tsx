import * as React from "react";

import { Flex, Heading } from "../components/styled-rebass";
import { Container } from "../components/posed-components";
import { IPageProps } from "./types";

const Welcome: React.FunctionComponent<IPageProps> = ({ path }: IPageProps) => {
  return (
    <Flex flexDirection="column" width={1}>
      <Flex flexDirection="column" width={[1, 1, 1, 1]}>
        <Container
          alignItems="center"
          justifyContent="center"
          color="black"
          flexDirection="column"
        >
          <Heading as="h1">Welcome</Heading>
        </Container>
      </Flex>
    </Flex>
  );
};

export default Welcome;
