import React from "react";

import { WrapDark } from "../components/wrap-dark";
import { Button, Flex, IconEmail, Text } from "../components/styled-rebass";

export default ({ handleDismiss }: any) => {
  return (
    <WrapDark>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Flex width="100px">
          <span role="img" aria-label="Close">
            <IconEmail fill="rgb(94, 104, 112)" mx="auto" mb={4} />
          </span>
        </Flex>
        <Text mb={3} fontSize={[3]} fontWeight={600} fontFamily="montserrat">
          We sent you an email!
        </Text>
        <Text fontFamily="montserrat">
          Please check your email to confirm your account.
        </Text>
        <Button mt={5} onClick={handleDismiss}>
          Got it!
        </Button>
      </Flex>
    </WrapDark>
  );
};
