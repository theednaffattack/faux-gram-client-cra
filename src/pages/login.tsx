import { Field, Formik } from "formik";
import React from "react";
import { Card as CardBase, Heading, Box, CardProps } from "rebass";
import styled from "styled-components";
import { maxWidth, MaxWidthProps } from "styled-system";

import { Button, Flex, Text } from "../components/styled-rebass";
import { InputField } from "../components/fields/input-field";
import { LoginComponent, MeQuery } from "../generated/graphql";

import { meQuery } from "../graphql/user/queries/Me";
import { SignUpLink } from "../components/sign-up-link";
import { CheckBox } from "../components/fields/checkbox";
import { navigate } from "@reach/router";
import { IPageProps } from "./types";
import { PosedFlash } from "../components/posed-components";

type TCardProps = CardProps & MaxWidthProps;

const Card: React.FC<TCardProps> = styled(CardBase)`
  ${maxWidth}
`;

export default (props: any) => {
  const flash =
    props.location && !props.location.authenticated ? "not authenticated" : "";
  return (
    <Flex minHeight="100vh" flexDirection="column">
      <Flex width={[1]} minHeight="100vh">
        <Flex
          mt={[0, 5, 0]}
          flexDirection="column"
          width={[1]}
          justifyContent="center"
          alignItems="center"
        >
          <PosedFlash
            justifyContent="center"
            alignItems="center"
            border="crimson"
            p={4}
            pose={flash ? "enter" : "exit"}
          >
            {flash}
          </PosedFlash>
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
                Sign in
              </Heading>
            </Flex>
            <LoginComponent>
              {login => (
                <Formik
                  validateOnBlur={false}
                  validateOnChange={false}
                  onSubmit={async (data, { setErrors }) => {
                    let response;
                    try {
                      response = await login({
                        variables: data,
                        update: (cache, { data }) => {
                          if (!data || !data.login) {
                            return;
                          }
                          cache.writeQuery<MeQuery>({
                            query: meQuery,
                            data: {
                              __typename: "Query",
                              me: data.login
                            }
                          });
                        }
                      });
                    } catch (error) {
                      // const displayErrors: { [key: string]: string } = {};

                      let myErrors = error.graphQLErrors; //.extensions.exception.validationErrors;
                      console.log(
                        "myErrors",
                        JSON.stringify(myErrors, null, 2)
                      );
                      // myErrors.forEach((errorThing: any) => {
                      //   displayErrors[errorThing.path[0]] =
                      //     errorThing.message;
                      // });

                      // myErrors.forEach((validationError: any) => {
                      //   Object.values(validationError.constraints).forEach(
                      //     (message: any) => {
                      //       displayErrors[validationError.property] = message;
                      //     }
                      //   );
                      // });

                      // return setErrors(displayErrors);

                      return setErrors({
                        email: "invalid login"
                      });
                    }

                    if (response && response.data && !response.data.login) {
                      setErrors({
                        email: "invalid login"
                      });
                      return;
                    }

                    // Router.push("/");
                    navigate("/welcome");
                  }}
                  initialValues={{
                    email: "",
                    password: "",
                    keepMeSigned: true
                  }}
                >
                  {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                      <Field
                        id="email"
                        name="email"
                        placeholder="input email"
                        component={InputField}
                      />
                      <Field
                        id="password"
                        name="password"
                        placeholder="input password"
                        type="password"
                        component={InputField}
                      />
                      <Flex my={2}>
                        <Box mr="auto">
                          <Text
                            htmlFor="keepMeSignedIn"
                            fontFamily="montserrat"
                          >
                            Keep me logged in
                          </Text>
                        </Box>
                        <Box mr={2}>
                          <label>
                            <Field
                              id="keepMeSignedIn"
                              name="keepMeSignedIn"
                              type="checkbox"
                              shadow="0px 10px 27px 0px rgba(0, 0, 0, 0.1)"
                              component={CheckBox}
                            />
                          </label>
                        </Box>
                      </Flex>
                      <Flex justifyContent="center">
                        <Button
                          mt={2}
                          width="340px"
                          height="47px"
                          borderRadius="30px"
                          type="submit"
                        >
                          <Text fontFamily="montserrat">Login</Text>
                        </Button>
                      </Flex>
                    </form>
                  )}
                </Formik>
              )}
            </LoginComponent>
          </Card>
          <SignUpLink />
        </Flex>
      </Flex>
    </Flex>
  );
};
