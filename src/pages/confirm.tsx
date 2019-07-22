import * as React from "react";
import { navigate } from "@reach/router";

import { ConfirmUserComponent } from "../generated/graphql";
import { IPageProps } from "./types";

const urlParams = new URLSearchParams(window.location.search);

export default class Confirm extends React.PureComponent<IPageProps, object> {
  // static async getInitialProps({
  //   query: { token },
  //   apolloClient,
  //   ...ctx
  // }: MyContext) {
  //   if (!token) {
  //     return {};
  //   }

  //   return {};
  // }
  // async componentDidMount() {
  //   const myToken = urlParams.get("token");

  //   const confirmedUser = await apolloClient.mutate<
  //     ConfirmUserMutation,
  //     ConfirmUserMutationVariables
  //   >({
  //     mutation: confirmUserMutation,
  //     variables: {
  //       token: myToken as string
  //     }
  //   });

  //   if (confirmedUser) {
  //     // redirect(ctx, "/login");
  //     navigate("/login", {
  //       state: {
  //         confirmed: true,
  //         confirmedMessage: "Welcome!",
  //         user: confirmedUser
  //       }
  //     });
  //   } else {
  //     return "soemthing went wrong, confirmation mutation";
  //   }
  // }
  render() {
    const token = urlParams.get("token");
    if (token) {
      return (
        <ConfirmUserComponent>
          {async confirmUser => {
            await confirmUser({
              variables: { token }
            }).catch(error => console.error({ error }));

            navigate("/welcome");

            return <div>user confirmation error</div>;
          }}
        </ConfirmUserComponent>
      );
    }
    return <div>A Real error, this should be unreachable</div>;
  }
}
