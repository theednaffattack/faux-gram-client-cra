import React from "react";

import { Flex, Text, NavLink } from "./styled-rebass";

export const SignUpLink = () => {
  return (
    <Flex
      justifyContent="center"
      width={["300px"]}
      borderTop="2px rgba(255,255,255,0.4) solid"
      p={3}
      my={4}
    >
      <Text fontFamily="montserrat" color="rgba(255,255,255,.6)">
        Not a user?
      </Text>
      &nbsp; &nbsp;
      <Text fontFamily="montserrat" color="rgba(255,255,255,.8)">
        <NavLink to="register" name="Sign Up">
          Sign Up
        </NavLink>
      </Text>
    </Flex>
  );
};
