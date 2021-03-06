import { Formik } from "formik";
import React from "react";
import { navigate } from "@reach/router";

import { Card, Flex, Heading } from "../components/styled-rebass";
import { RegisterComponent } from "../generated/graphql";
import { SignUpLink } from "../components/sign-up-link";
import RegisterFormBody from "../components/register-form-body";
import { IPageProps } from "./types";

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
                Sign in
              </Heading>
            </Flex>

            <RegisterComponent>
              {register => (
                <Formik
                  validateOnBlur={false}
                  validateOnChange={false}
                  onSubmit={async (data, { setErrors }) => {
                    try {
                      const response = await register({
                        variables: {
                          data
                        }
                      });

                      console.log({ response });

                      navigate("/check-email");
                    } catch (error) {
                      const displayErrors: { [key: string]: string } = {};

                      let myErrors =
                        error.graphQLErrors[0].extensions.exception
                          .validationErrors;

                      myErrors.forEach((validationError: any) => {
                        Object.values(validationError.constraints).forEach(
                          (message: any) => {
                            displayErrors[validationError.property] = message;
                          }
                        );
                      });
                      return setErrors(displayErrors);

                      // const errors: { [key: string]: string } = {};
                      // err.graphQLErrors[0].validationErrors.forEach(
                      //   (validationErr: any) => {
                      //     Object.values(validationErr.constraints).forEach(
                      //       (message: any) => {
                      //         errors[validationErr.property] = message;
                      //       }
                      //     );
                      //   }
                      // );
                      // setErrors(errors);
                    }
                  }}
                  initialValues={{
                    email: "",
                    firstName: "",
                    lastName: "",
                    password: "",
                    termsAndConditions: false,
                    keepMeSignedIn: true
                  }}
                >
                  {({ handleSubmit }) => (
                    <RegisterFormBody handleSubmit={handleSubmit} />
                  )}
                </Formik>
              )}
            </RegisterComponent>
          </Card>
          <SignUpLink />
        </Flex>
      </Flex>
    </Flex>
  );
};
