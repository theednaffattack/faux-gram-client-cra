import React from "react";
import { Card as CardBase, Heading, CardProps } from "rebass";
import styled from "styled-components";
import { maxWidth, MaxWidthProps } from "styled-system";

import { Flex } from "../components/styled-rebass";
import { SignUpLink } from "../components/sign-up-link";
import { IPageProps } from "./types";

type TCardProps = CardProps & MaxWidthProps;

const Card: React.FC<TCardProps> = styled(CardBase)`
  ${maxWidth}
`;

export default ({ path }: IPageProps) => {
  return (
    <Flex minHeight="100vh">
      <Flex width={[1]} minHeight="100vh">
        <Flex
          mt={[0, 5, 0]}
          flexDirection="column"
          width={[1]}
          justifyContent="center"
          alignItems="center"
        >
          <Card
            mx={3}
            width={1}
            maxWidth={["350px", "350px"]}
            p={4}
            borderRadius="10px"
            bg="rgb(242,242,242)"
            boxShadow="0 2px 16px rgba(0, 0, 0, 0.25)"
          >
            <Flex mt={3} mb={4} justifyContent="center">
              <Heading color="text" fontSize={[5]} fontFamily="montserrat">
                Terms and Conditions
              </Heading>
            </Flex>
          </Card>
          <SignUpLink />
        </Flex>
      </Flex>
    </Flex>
  );
};
