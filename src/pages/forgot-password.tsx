import { Field, Formik } from "formik";
import React from "react";
import { InputField } from "../components/fields/input-field";
import { ForgotPasswordComponent } from "../generated/graphql";
import { navigate } from "@reach/router";
import { IPageProps } from "./types";

const ForgotPassword: React.FC<IPageProps> = ({ path }: IPageProps) => {
  return (
    <ForgotPasswordComponent>
      {forgotPassword => (
        <Formik
          // validateOnBlur={false}
          // validateOnChange={false}
          onSubmit={async (data, { setErrors }) => {
            try {
              await forgotPassword({
                variables: data
              });

              navigate("/check-email");
            } catch (error) {
              const displayErrors: { [key: string]: string } = {};

              let myErrors =
                error.graphQLErrors[0].extensions.exception.validationErrors;

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
            email: ""
          }}
        >
          {({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <Field name="email" placeholder="email" component={InputField} />
              <button type="submit">submit</button>
            </form>
          )}
        </Formik>
      )}
    </ForgotPasswordComponent>
  );
};

export default ForgotPassword;
