import React from "react";
import ReactDOM from "react-dom";
import { InMemoryCache } from "apollo-boost";
import { ApolloClient } from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { ApolloProvider as ApolloHooksProvider } from "react-apollo-hooks";
import { ThemeProvider } from "styled-components";
// import cookie from "cookie";

import { setContext } from "apollo-link-context";
import { createUploadLink } from "apollo-upload-client";
import { WebSocketLink } from "apollo-link-ws";
// import fetch from "isomorphic-unfetch";
import { onError } from "apollo-link-error";
import { split } from "apollo-link";

import { getMainDefinition } from "apollo-utilities";

import { theme } from "./global-styles/theme";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { navigate } from "@reach/router";

// const domain = [
//   { production: `fauxgramapi.eddienaff.dev`, development: `localhost:4000` }
// ];

interface IEnvironmentConfig {
  ssl: boolean;
  port: number | null;
  hostname: string;
  httpProtocol: string[];
}

const homeHost = "192.168.1.10:4000";

// const genericHost = "0.0.0.0:4000";

interface IConfigurations {
  [key: string]: IEnvironmentConfig;
}

const configurations: IConfigurations = {
  // Note: You may need sudo to run on port 443
  production: {
    httpProtocol: ["https", "wss"],
    ssl: true,
    port: null,
    hostname: "fauxgramapi.eddienaff.dev"
  },
  development: {
    httpProtocol: ["http", "ws"],
    ssl: false,
    port: 4000,
    hostname: "192.168.1.10:4000"
  }
};

const environment = (process.env.NODE_ENV as string) || "production";

const graphqlUrl = `${configurations[environment].httpProtocol[0]}://${
  configurations[environment].hostname
}/graphql`;

const websocketsUrl = `${configurations[environment].httpProtocol[1]}://${
  configurations[environment].hostname
}/subscriptions`;

// function parseCookies(req?: any, options = {}) {
//   return cookie.parse(
//     req && req.headers ? req.headers.cookie || "" : document.cookie,
//     options
//   );
// }

// const getToken = (req: Request) => parseCookies(req).qid;

const uploadLink = createUploadLink({
  uri: graphqlUrl,
  credentials: "include"
});

// Create a WebSocket link:
const wsLink = new WebSocketLink({
  uri: websocketsUrl,
  options: {
    reconnect: true
    // connectionParams: {
    //   authToken: authToken ? `qid=${authToken}` : ""
    // }
  }
});

const splitLink = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink!,
  uploadLink
);

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    // @ts-ignore
    graphQLErrors.map(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
          locations,
          null,
          2
        )}, Path: ${path}`
      );
      if (message.includes("Not authenticated")) {
        navigate("/login");
      }
      return `[GraphQL error]: Message: ${message}, Location: ${JSON.stringify(
        locations,
        null,
        2
      )}, Path: ${path}`;
    });
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

const authLink = setContext((request, previousContext) => {
  // const token = getToken(request.session);
  const token = null;
  return {
    headers: {
      ...previousContext.headers,
      cookie: token ? `qid=${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: errorLink.concat(authLink.concat(splitLink)),
  cache: new InMemoryCache() // .restore(initialState || {}),
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <ApolloProvider client={client}>
      <ApolloHooksProvider client={client}>
        <App />
      </ApolloHooksProvider>
    </ApolloProvider>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
