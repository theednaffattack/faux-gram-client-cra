import { ApolloClient, NormalizedCacheObject } from "apollo-boost";

export interface IPageProps {
  path: string;
  state?: any;
  primary?: boolean;
  navigate?: any;
  showMessagingAddressBook?: boolean;
  handleCreateNewMessageThread?: any;
  handleCancelNewMessageThread?: any;
  handleLoadNewThreadCreated?: any;
}

export interface MyContext {
  apolloClient: ApolloClient<NormalizedCacheObject>;
}
