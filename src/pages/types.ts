import { ApolloClient, NormalizedCacheObject } from "apollo-boost";

export interface IPageProps {
  path: string;
}

export interface MyContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
