
import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';

type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};

export type AddMessagePayload = {
  success: Scalars['Boolean'],
  threadId: Scalars['ID'],
  message: Message,
  user: User,
  invitees: Array<User>,
};

export type AddMessageToThreadInput_V2 = {
  threadId: Scalars['ID'],
  sentTo: Scalars['String'],
  invitees: Array<Scalars['ID']>,
  message: Scalars['String'],
  images?: Maybe<Array<Maybe<Scalars['Upload']>>>,
};

export type ChangePasswordInput = {
  password: Scalars['String'],
  token: Scalars['String'],
};


export type FollowUserInput = {
  userIDToFollow: Scalars['String'],
};

export type GetAllMyMessagesInput = {
  user: Scalars['String'],
};

export type GetAllMyMessageThreadsInput = {
  user: Scalars['String'],
};

export type GetMessagesFromUserInput = {
  sentBy: Scalars['String'],
  user: Scalars['String'],
};

export type GetMessageThreadsFromUserInput = {
  sentBy: Scalars['String'],
  user: Scalars['String'],
};

export type Image = {
  id: Scalars['ID'],
  uri: Scalars['String'],
  post: Post,
  message?: Maybe<Message>,
  user: User,
};

export type Message = {
  id: Scalars['ID'],
  created_at?: Maybe<Scalars['DateTime']>,
  updated_at?: Maybe<Scalars['DateTime']>,
  message: Scalars['String'],
  images?: Maybe<Array<Maybe<Image>>>,
  sentBy: User,
  user: User,
  thread?: Maybe<Thread>,
};

export type MessageOutput = {
  message: Scalars['String'],
};

export type MessageSubType = {
  id: Scalars['ID'],
  message?: Maybe<Scalars['String']>,
  sentBy: User,
  user: User,
  created_at?: Maybe<Scalars['DateTime']>,
  updated_at?: Maybe<Scalars['DateTime']>,
};

export type MessageThreadOutput = {
  message: Scalars['String'],
};

export type Mutation = {
  createProduct: Product,
  createUser: User,
  changePassword?: Maybe<User>,
  confirmUser: Scalars['Boolean'],
  forgotPassword: Scalars['Boolean'],
  login?: Maybe<User>,
  logout: Scalars['Boolean'],
  register: User,
  addProfilePicture: Scalars['Boolean'],
  createPost: Post,
  followUser: Scalars['Boolean'],
  addNewMessage: Scalars['Boolean'],
  unFollowUser: Scalars['Boolean'],
  createMessageThread: Thread,
  addMessageToThread: AddMessagePayload,
  signS3: SignedS3Payload,
};


export type MutationCreateProductArgs = {
  data: ProductInput
};


export type MutationCreateUserArgs = {
  data: RegisterInput
};


export type MutationChangePasswordArgs = {
  data: ChangePasswordInput
};


export type MutationConfirmUserArgs = {
  token: Scalars['String']
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']
};


export type MutationLoginArgs = {
  password: Scalars['String'],
  email: Scalars['String']
};


export type MutationRegisterArgs = {
  data: RegisterInput
};


export type MutationAddProfilePictureArgs = {
  picture: Scalars['Upload']
};


export type MutationCreatePostArgs = {
  data: PostInput
};


export type MutationFollowUserArgs = {
  data: FollowUserInput
};


export type MutationAddNewMessageArgs = {
  sentTo: Scalars['String'],
  message: Scalars['String']
};


export type MutationUnFollowUserArgs = {
  data: UnFollowUserInput
};


export type MutationCreateMessageThreadArgs = {
  sentTo: Scalars['String'],
  invitees: Array<Scalars['ID']>,
  message: Scalars['String'],
  images?: Maybe<Array<Maybe<Scalars['Upload']>>>
};


export type MutationAddMessageToThreadArgs = {
  threadId: Scalars['ID'],
  sentTo: Scalars['String'],
  invitees: Array<Scalars['ID']>,
  message: Scalars['String'],
  images?: Maybe<Array<Maybe<Scalars['Upload']>>>
};


export type MutationSignS3Args = {
  filename: Scalars['String'],
  filetype: Scalars['String']
};

export type PasswordInput = {
  password: Scalars['String'],
};

export type Post = {
  id?: Maybe<Scalars['ID']>,
  title?: Maybe<Scalars['String']>,
  text?: Maybe<Scalars['String']>,
  images?: Maybe<Array<Image>>,
  user?: Maybe<User>,
  created_at?: Maybe<Scalars['DateTime']>,
  updated_at?: Maybe<Scalars['DateTime']>,
};

export type PostInput = {
  text: Scalars['String'],
  title?: Maybe<Scalars['String']>,
  user: Scalars['ID'],
  images?: Maybe<Array<Maybe<Scalars['String']>>>,
  picture: Scalars['Upload'],
};

export type PostSubType = {
  id: Scalars['ID'],
  title: Scalars['String'],
  text: Scalars['String'],
  images: Array<Image>,
  user: User,
  created_at: Scalars['DateTime'],
  updated_at: Scalars['DateTime'],
};

export type Product = {
  id: Scalars['ID'],
  name: Scalars['String'],
};

export type ProductInput = {
  name: Scalars['String'],
};

export type Query = {
  me?: Maybe<User>,
  helloWorld: Scalars['String'],
  GetAllMyImages: Array<Image>,
  getThoseIFollowAndTheirPostsResolver?: Maybe<User>,
  getMyMessagesFromUser?: Maybe<Array<Message>>,
  getGlobalPosts?: Maybe<Array<Post>>,
  meAndAllFollowers?: Maybe<User>,
  myFollowingPosts?: Maybe<Array<Post>>,
  getAllMyMessages?: Maybe<User>,
  getMessageThreads?: Maybe<Array<Maybe<Thread>>>,
  getListToCreateThread?: Maybe<TransUserReturn>,
};


export type QueryGetMyMessagesFromUserArgs = {
  input: GetMessagesFromUserInput
};

export type QuickPostSubsInput = {
  sentBy: Scalars['String'],
  message: Scalars['String'],
};

export type RegisterInput = {
  password: Scalars['String'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  email: Scalars['String'],
  termsAndConditions: Scalars['Boolean'],
  keepMeSignedIn: Scalars['Boolean'],
};

export type SignedS3Payload = {
  url: Scalars['String'],
  signedRequest: Scalars['String'],
};

export type Subscription = {
  followingPosts: PostSubType,
  newMessage: MessageSubType,
  globalPosts?: Maybe<Post>,
  messageThreads: AddMessagePayload,
};


export type SubscriptionFollowingPostsArgs = {
  data: QuickPostSubsInput
};


export type SubscriptionNewMessageArgs = {
  sentTo: Scalars['String'],
  message: Scalars['String']
};


export type SubscriptionMessageThreadsArgs = {
  data: AddMessageToThreadInput_V2
};

export type Thread = {
  id?: Maybe<Scalars['ID']>,
  messages: Array<Message>,
  user: User,
  invitees: Array<User>,
  created_at?: Maybe<Scalars['DateTime']>,
  updated_at?: Maybe<Scalars['DateTime']>,
};

export type TransUserReturn = {
  id: Scalars['ID'],
  firstName: Scalars['String'],
  lastName: Scalars['String'],
  thoseICanMessage?: Maybe<Array<User>>,
};

export type UnFollowUserInput = {
  userIDToUnFollow: Scalars['String'],
};


export type User = {
  id: Scalars['ID'],
  firstName: Scalars['String'],
  mappedMessages: Array<Message>,
  lastName: Scalars['String'],
  email: Scalars['String'],
  threads?: Maybe<Array<Thread>>,
  name: Scalars['String'],
  confirmed: Scalars['Boolean'],
  posts?: Maybe<Array<Post>>,
  images?: Maybe<Array<Image>>,
  profileImgUrl?: Maybe<Image>,
  messages?: Maybe<Array<Message>>,
  sent_messages?: Maybe<Array<Message>>,
  followers?: Maybe<Array<Maybe<User>>>,
  thread_invitations?: Maybe<Array<Maybe<Thread>>>,
  following?: Maybe<Array<Maybe<User>>>,
};

export type AddMessageToThreadMutationVariables = {
  threadId: Scalars['ID'],
  sentTo: Scalars['String'],
  message: Scalars['String'],
  invitees: Array<Scalars['ID']>,
  images?: Maybe<Array<Maybe<Scalars['Upload']>>>
};


export type AddMessageToThreadMutation = ({ __typename?: 'Mutation' } & { addMessageToThread: ({ __typename?: 'AddMessagePayload' } & Pick<AddMessagePayload, 'success' | 'threadId'> & { invitees: Array<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>)>, message: ({ __typename?: 'Message' } & Pick<Message, 'id' | 'message'> & { images: Maybe<Array<Maybe<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)>>>, sentBy: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName'>), user: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName'>) }), user: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName'>) }) });

export type AddNewMessageMutationVariables = {
  sentTo: Scalars['String'],
  message: Scalars['String']
};


export type AddNewMessageMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'addNewMessage'>);

export type CreateMessageThreadMutationVariables = {
  sentTo: Scalars['String'],
  message: Scalars['String'],
  images?: Maybe<Array<Maybe<Scalars['Upload']>>>,
  invitees: Array<Scalars['ID']>
};


export type CreateMessageThreadMutation = ({ __typename?: 'Mutation' } & { createMessageThread: ({ __typename?: 'Thread' } & Pick<Thread, 'id'> & { invitees: Array<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>)>, messages: Array<({ __typename?: 'Message' } & Pick<Message, 'id' | 'created_at' | 'message'> & { images: Maybe<Array<Maybe<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)>>>, sentBy: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>), user: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>) })> }) });

export type SignS3MutationVariables = {
  filename: Scalars['String'],
  filetype: Scalars['String']
};


export type SignS3Mutation = ({ __typename?: 'Mutation' } & { signS3: ({ __typename?: 'SignedS3Payload' } & Pick<SignedS3Payload, 'url' | 'signedRequest'>) });

export type GetAllMyMessagesQueryVariables = {};


export type GetAllMyMessagesQuery = ({ __typename?: 'Query' } & { getAllMyMessages: Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'> & { mappedMessages: Array<({ __typename?: 'Message' } & Pick<Message, 'id' | 'created_at' | 'updated_at' | 'message'> & { sentBy: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>), user: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>) })> })> });

export type GetListToCreateThreadQueryVariables = {};


export type GetListToCreateThreadQuery = ({ __typename?: 'Query' } & { getListToCreateThread: Maybe<({ __typename?: 'TransUserReturn' } & Pick<TransUserReturn, 'id' | 'firstName'> & { thoseICanMessage: Maybe<Array<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>)>> })> });

export type GetMessageThreadsQueryVariables = {};


export type GetMessageThreadsQuery = ({ __typename?: 'Query' } & { getMessageThreads: Maybe<Array<Maybe<({ __typename?: 'Thread' } & Pick<Thread, 'id'> & { invitees: Array<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>)>, messages: Array<({ __typename?: 'Message' } & Pick<Message, 'id' | 'created_at' | 'message'> & { images: Maybe<Array<Maybe<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)>>>, sentBy: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>), user: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>) })> })>>> });

export type GetMyMessagesFromUserQueryVariables = {
  input: GetMessagesFromUserInput
};


export type GetMyMessagesFromUserQuery = ({ __typename?: 'Query' } & { getMyMessagesFromUser: Maybe<Array<({ __typename?: 'Message' } & Pick<Message, 'id' | 'message' | 'created_at'> & { sentBy: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>) })>> });

export type NewMessageSubscriptionVariables = {
  message: Scalars['String'],
  sentTo: Scalars['String']
};


export type NewMessageSubscription = ({ __typename?: 'Subscription' } & { newMessage: ({ __typename?: 'MessageSubType' } & Pick<MessageSubType, 'id' | 'message' | 'created_at' | 'updated_at'> & { sentBy: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>), user: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>) }) });

export type ChangePasswordMutationVariables = {
  data: ChangePasswordInput
};


export type ChangePasswordMutation = ({ __typename?: 'Mutation' } & { changePassword: Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'name'>)> });

export type ConfirmUserMutationVariables = {
  token: Scalars['String']
};


export type ConfirmUserMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'confirmUser'>);

export type CreatePostMutationVariables = {
  data: PostInput
};


export type CreatePostMutation = ({ __typename?: 'Mutation' } & { createPost: ({ __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'text'>) });

export type FollowUserMutationVariables = {
  data: FollowUserInput
};


export type FollowUserMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'followUser'>);

export type ForgotPasswordMutationVariables = {
  email: Scalars['String']
};


export type ForgotPasswordMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'forgotPassword'>);

export type LoginMutationVariables = {
  email: Scalars['String'],
  password: Scalars['String']
};


export type LoginMutation = ({ __typename?: 'Mutation' } & { login: Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'name'>)> });

export type LogoutMutationVariables = {};


export type LogoutMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'logout'>);

export type RegisterMutationVariables = {
  data: RegisterInput
};


export type RegisterMutation = ({ __typename?: 'Mutation' } & { register: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'name'>) });

export type UnFollowUserMutationVariables = {
  data: UnFollowUserInput
};


export type UnFollowUserMutation = ({ __typename?: 'Mutation' } & Pick<Mutation, 'unFollowUser'>);

export type GetAllMyImagesQueryVariables = {};


export type GetAllMyImagesQuery = ({ __typename?: 'Query' } & { GetAllMyImages: Array<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)> });

export type GetGlobalPostsQueryVariables = {};


export type GetGlobalPostsQuery = ({ __typename?: 'Query' } & { getGlobalPosts: Maybe<Array<({ __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'text' | 'created_at'> & { images: Maybe<Array<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)>>, user: Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName'>)> })>> });

export type GetThoseIFollowAndTheirPostsResolverQueryVariables = {};


export type GetThoseIFollowAndTheirPostsResolverQuery = ({ __typename?: 'Query' } & { getThoseIFollowAndTheirPostsResolver: Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName' | 'email' | 'name'> & { following: Maybe<Array<Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'> & { posts: Maybe<Array<({ __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'text'> & { images: Maybe<Array<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)>> })>> })>>> })> });

export type HelloWorldQueryVariables = {};


export type HelloWorldQuery = ({ __typename?: 'Query' } & Pick<Query, 'helloWorld'>);

export type MeQueryVariables = {};


export type MeQuery = ({ __typename?: 'Query' } & { me: Maybe<({ __typename?: 'User' } & Pick<User, 'firstName' | 'lastName' | 'email' | 'name' | 'id'>)> });

export type MyFollowingPostsQueryVariables = {};


export type MyFollowingPostsQuery = ({ __typename?: 'Query' } & { myFollowingPosts: Maybe<Array<({ __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'text' | 'created_at'> & { images: Maybe<Array<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)>>, user: Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>)> })>> });

export type FollowingPostsSubscriptionVariables = {
  data: QuickPostSubsInput
};


export type FollowingPostsSubscription = ({ __typename?: 'Subscription' } & { followingPosts: ({ __typename?: 'PostSubType' } & Pick<PostSubType, 'id' | 'title' | 'text' | 'created_at'> & { images: Array<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)>, user: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>) }) });

export type GlobalPostsSubscriptionVariables = {};


export type GlobalPostsSubscription = ({ __typename?: 'Subscription' } & { globalPosts: Maybe<({ __typename?: 'Post' } & Pick<Post, 'id' | 'title' | 'text'> & { images: Maybe<Array<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)>>, user: Maybe<({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>)> })> });

export type MessageThreadsSubscriptionVariables = {
  data: AddMessageToThreadInput_V2
};


export type MessageThreadsSubscription = ({ __typename?: 'Subscription' } & { messageThreads: ({ __typename?: 'AddMessagePayload' } & Pick<AddMessagePayload, 'success'> & { message: ({ __typename?: 'Message' } & Pick<Message, 'id' | 'created_at' | 'message'> & { images: Maybe<Array<Maybe<({ __typename?: 'Image' } & Pick<Image, 'id' | 'uri'>)>>>, sentBy: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>), user: ({ __typename?: 'User' } & Pick<User, 'id' | 'firstName' | 'lastName'>) }) }) });

export const AddMessageToThreadDocument = gql`
    mutation AddMessageToThread($threadId: ID!, $sentTo: String!, $message: String!, $invitees: [ID!]!, $images: [Upload]) {
  addMessageToThread(threadId: $threadId, sentTo: $sentTo, message: $message, invitees: $invitees, images: $images) {
    success
    invitees {
      id
      firstName
      lastName
    }
    threadId
    message {
      id
      message
      images {
        id
        uri
      }
      sentBy {
        id
        firstName
      }
      user {
        id
        firstName
      }
    }
    user {
      id
      firstName
    }
  }
}
    `;

export class AddMessageToThreadComponent extends React.Component<Partial<ReactApollo.MutationProps<AddMessageToThreadMutation, AddMessageToThreadMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<AddMessageToThreadMutation, AddMessageToThreadMutationVariables> mutation={AddMessageToThreadDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type AddMessageToThreadProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<AddMessageToThreadMutation, AddMessageToThreadMutationVariables>> & TChildProps;
export type AddMessageToThreadMutationFn = ReactApollo.MutationFn<AddMessageToThreadMutation, AddMessageToThreadMutationVariables>;
export function withAddMessageToThread<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  AddMessageToThreadMutation,
  AddMessageToThreadMutationVariables,
  AddMessageToThreadProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, AddMessageToThreadMutation, AddMessageToThreadMutationVariables, AddMessageToThreadProps<TChildProps>>(AddMessageToThreadDocument, operationOptions);
};

export function useAddMessageToThreadMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<AddMessageToThreadMutation, AddMessageToThreadMutationVariables>) {
  return ReactApolloHooks.useMutation<AddMessageToThreadMutation, AddMessageToThreadMutationVariables>(AddMessageToThreadDocument, baseOptions);
};
export const AddNewMessageDocument = gql`
    mutation AddNewMessage($sentTo: String!, $message: String!) {
  addNewMessage(sentTo: $sentTo, message: $message)
}
    `;

export class AddNewMessageComponent extends React.Component<Partial<ReactApollo.MutationProps<AddNewMessageMutation, AddNewMessageMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<AddNewMessageMutation, AddNewMessageMutationVariables> mutation={AddNewMessageDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type AddNewMessageProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<AddNewMessageMutation, AddNewMessageMutationVariables>> & TChildProps;
export type AddNewMessageMutationFn = ReactApollo.MutationFn<AddNewMessageMutation, AddNewMessageMutationVariables>;
export function withAddNewMessage<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  AddNewMessageMutation,
  AddNewMessageMutationVariables,
  AddNewMessageProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, AddNewMessageMutation, AddNewMessageMutationVariables, AddNewMessageProps<TChildProps>>(AddNewMessageDocument, operationOptions);
};

export function useAddNewMessageMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<AddNewMessageMutation, AddNewMessageMutationVariables>) {
  return ReactApolloHooks.useMutation<AddNewMessageMutation, AddNewMessageMutationVariables>(AddNewMessageDocument, baseOptions);
};
export const CreateMessageThreadDocument = gql`
    mutation CreateMessageThread($sentTo: String!, $message: String!, $images: [Upload], $invitees: [ID!]!) {
  createMessageThread(sentTo: $sentTo, message: $message, images: $images, invitees: $invitees) {
    id
    invitees {
      id
      firstName
      lastName
    }
    messages {
      id
      created_at
      message
      images {
        id
        uri
      }
      sentBy {
        id
        firstName
        lastName
      }
      user {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

export class CreateMessageThreadComponent extends React.Component<Partial<ReactApollo.MutationProps<CreateMessageThreadMutation, CreateMessageThreadMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<CreateMessageThreadMutation, CreateMessageThreadMutationVariables> mutation={CreateMessageThreadDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type CreateMessageThreadProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<CreateMessageThreadMutation, CreateMessageThreadMutationVariables>> & TChildProps;
export type CreateMessageThreadMutationFn = ReactApollo.MutationFn<CreateMessageThreadMutation, CreateMessageThreadMutationVariables>;
export function withCreateMessageThread<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  CreateMessageThreadMutation,
  CreateMessageThreadMutationVariables,
  CreateMessageThreadProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, CreateMessageThreadMutation, CreateMessageThreadMutationVariables, CreateMessageThreadProps<TChildProps>>(CreateMessageThreadDocument, operationOptions);
};

export function useCreateMessageThreadMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<CreateMessageThreadMutation, CreateMessageThreadMutationVariables>) {
  return ReactApolloHooks.useMutation<CreateMessageThreadMutation, CreateMessageThreadMutationVariables>(CreateMessageThreadDocument, baseOptions);
};
export const SignS3Document = gql`
    mutation SignS3($filename: String!, $filetype: String!) {
  signS3(filename: $filename, filetype: $filetype) {
    url
    signedRequest
  }
}
    `;

export class SignS3Component extends React.Component<Partial<ReactApollo.MutationProps<SignS3Mutation, SignS3MutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<SignS3Mutation, SignS3MutationVariables> mutation={SignS3Document} {...(this as any)['props'] as any} />
      );
  }
}
export type SignS3Props<TChildProps = {}> = Partial<ReactApollo.MutateProps<SignS3Mutation, SignS3MutationVariables>> & TChildProps;
export type SignS3MutationFn = ReactApollo.MutationFn<SignS3Mutation, SignS3MutationVariables>;
export function withSignS3<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  SignS3Mutation,
  SignS3MutationVariables,
  SignS3Props<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, SignS3Mutation, SignS3MutationVariables, SignS3Props<TChildProps>>(SignS3Document, operationOptions);
};

export function useSignS3Mutation(baseOptions?: ReactApolloHooks.MutationHookOptions<SignS3Mutation, SignS3MutationVariables>) {
  return ReactApolloHooks.useMutation<SignS3Mutation, SignS3MutationVariables>(SignS3Document, baseOptions);
};
export const GetAllMyMessagesDocument = gql`
    query GetAllMyMessages {
  getAllMyMessages {
    id
    firstName
    lastName
    mappedMessages {
      id
      created_at
      updated_at
      message
      sentBy {
        id
        firstName
        lastName
      }
      user {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

export class GetAllMyMessagesComponent extends React.Component<Partial<ReactApollo.QueryProps<GetAllMyMessagesQuery, GetAllMyMessagesQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<GetAllMyMessagesQuery, GetAllMyMessagesQueryVariables> query={GetAllMyMessagesDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type GetAllMyMessagesProps<TChildProps = {}> = Partial<ReactApollo.DataProps<GetAllMyMessagesQuery, GetAllMyMessagesQueryVariables>> & TChildProps;
export function withGetAllMyMessages<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  GetAllMyMessagesQuery,
  GetAllMyMessagesQueryVariables,
  GetAllMyMessagesProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, GetAllMyMessagesQuery, GetAllMyMessagesQueryVariables, GetAllMyMessagesProps<TChildProps>>(GetAllMyMessagesDocument, operationOptions);
};

export function useGetAllMyMessagesQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<GetAllMyMessagesQueryVariables>) {
  return ReactApolloHooks.useQuery<GetAllMyMessagesQuery, GetAllMyMessagesQueryVariables>(GetAllMyMessagesDocument, baseOptions);
};
export const GetListToCreateThreadDocument = gql`
    query GetListToCreateThread {
  getListToCreateThread {
    id
    firstName
    thoseICanMessage {
      id
      firstName
      lastName
    }
  }
}
    `;

export class GetListToCreateThreadComponent extends React.Component<Partial<ReactApollo.QueryProps<GetListToCreateThreadQuery, GetListToCreateThreadQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<GetListToCreateThreadQuery, GetListToCreateThreadQueryVariables> query={GetListToCreateThreadDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type GetListToCreateThreadProps<TChildProps = {}> = Partial<ReactApollo.DataProps<GetListToCreateThreadQuery, GetListToCreateThreadQueryVariables>> & TChildProps;
export function withGetListToCreateThread<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  GetListToCreateThreadQuery,
  GetListToCreateThreadQueryVariables,
  GetListToCreateThreadProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, GetListToCreateThreadQuery, GetListToCreateThreadQueryVariables, GetListToCreateThreadProps<TChildProps>>(GetListToCreateThreadDocument, operationOptions);
};

export function useGetListToCreateThreadQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<GetListToCreateThreadQueryVariables>) {
  return ReactApolloHooks.useQuery<GetListToCreateThreadQuery, GetListToCreateThreadQueryVariables>(GetListToCreateThreadDocument, baseOptions);
};
export const GetMessageThreadsDocument = gql`
    query GetMessageThreads {
  getMessageThreads {
    id
    invitees {
      id
      firstName
      lastName
    }
    messages {
      id
      created_at
      message
      images {
        id
        uri
      }
      sentBy {
        id
        firstName
        lastName
      }
      user {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

export class GetMessageThreadsComponent extends React.Component<Partial<ReactApollo.QueryProps<GetMessageThreadsQuery, GetMessageThreadsQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<GetMessageThreadsQuery, GetMessageThreadsQueryVariables> query={GetMessageThreadsDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type GetMessageThreadsProps<TChildProps = {}> = Partial<ReactApollo.DataProps<GetMessageThreadsQuery, GetMessageThreadsQueryVariables>> & TChildProps;
export function withGetMessageThreads<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  GetMessageThreadsQuery,
  GetMessageThreadsQueryVariables,
  GetMessageThreadsProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, GetMessageThreadsQuery, GetMessageThreadsQueryVariables, GetMessageThreadsProps<TChildProps>>(GetMessageThreadsDocument, operationOptions);
};

export function useGetMessageThreadsQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<GetMessageThreadsQueryVariables>) {
  return ReactApolloHooks.useQuery<GetMessageThreadsQuery, GetMessageThreadsQueryVariables>(GetMessageThreadsDocument, baseOptions);
};
export const GetMyMessagesFromUserDocument = gql`
    query GetMyMessagesFromUser($input: GetMessagesFromUserInput!) {
  getMyMessagesFromUser(input: $input) {
    id
    message
    created_at
    sentBy {
      id
      firstName
      lastName
    }
  }
}
    `;

export class GetMyMessagesFromUserComponent extends React.Component<Partial<ReactApollo.QueryProps<GetMyMessagesFromUserQuery, GetMyMessagesFromUserQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<GetMyMessagesFromUserQuery, GetMyMessagesFromUserQueryVariables> query={GetMyMessagesFromUserDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type GetMyMessagesFromUserProps<TChildProps = {}> = Partial<ReactApollo.DataProps<GetMyMessagesFromUserQuery, GetMyMessagesFromUserQueryVariables>> & TChildProps;
export function withGetMyMessagesFromUser<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  GetMyMessagesFromUserQuery,
  GetMyMessagesFromUserQueryVariables,
  GetMyMessagesFromUserProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, GetMyMessagesFromUserQuery, GetMyMessagesFromUserQueryVariables, GetMyMessagesFromUserProps<TChildProps>>(GetMyMessagesFromUserDocument, operationOptions);
};

export function useGetMyMessagesFromUserQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<GetMyMessagesFromUserQueryVariables>) {
  return ReactApolloHooks.useQuery<GetMyMessagesFromUserQuery, GetMyMessagesFromUserQueryVariables>(GetMyMessagesFromUserDocument, baseOptions);
};
export const NewMessageDocument = gql`
    subscription NewMessage($message: String!, $sentTo: String!) {
  newMessage(message: $message, sentTo: $sentTo) {
    id
    message
    sentBy {
      id
      firstName
      lastName
    }
    user {
      id
      firstName
      lastName
    }
    created_at
    updated_at
  }
}
    `;

export class NewMessageComponent extends React.Component<Partial<ReactApollo.SubscriptionProps<NewMessageSubscription, NewMessageSubscriptionVariables>>> {
  render() {
      return (
          <ReactApollo.Subscription<NewMessageSubscription, NewMessageSubscriptionVariables> subscription={NewMessageDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type NewMessageProps<TChildProps = {}> = Partial<ReactApollo.DataProps<NewMessageSubscription, NewMessageSubscriptionVariables>> & TChildProps;
export function withNewMessage<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  NewMessageSubscription,
  NewMessageSubscriptionVariables,
  NewMessageProps<TChildProps>> | undefined) {
    return ReactApollo.withSubscription<TProps, NewMessageSubscription, NewMessageSubscriptionVariables, NewMessageProps<TChildProps>>(NewMessageDocument, operationOptions);
};

export function useNewMessageSubscription(baseOptions?: ReactApolloHooks.SubscriptionHookOptions<NewMessageSubscription, NewMessageSubscriptionVariables>) {
  return ReactApolloHooks.useSubscription<NewMessageSubscription, NewMessageSubscriptionVariables>(NewMessageDocument, baseOptions);
};
export const ChangePasswordDocument = gql`
    mutation ChangePassword($data: ChangePasswordInput!) {
  changePassword(data: $data) {
    id
    firstName
    lastName
    email
    name
  }
}
    `;

export class ChangePasswordComponent extends React.Component<Partial<ReactApollo.MutationProps<ChangePasswordMutation, ChangePasswordMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> mutation={ChangePasswordDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type ChangePasswordProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<ChangePasswordMutation, ChangePasswordMutationVariables>> & TChildProps;
export type ChangePasswordMutationFn = ReactApollo.MutationFn<ChangePasswordMutation, ChangePasswordMutationVariables>;
export function withChangePassword<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  ChangePasswordMutation,
  ChangePasswordMutationVariables,
  ChangePasswordProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, ChangePasswordMutation, ChangePasswordMutationVariables, ChangePasswordProps<TChildProps>>(ChangePasswordDocument, operationOptions);
};

export function useChangePasswordMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
  return ReactApolloHooks.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, baseOptions);
};
export const ConfirmUserDocument = gql`
    mutation ConfirmUser($token: String!) {
  confirmUser(token: $token)
}
    `;

export class ConfirmUserComponent extends React.Component<Partial<ReactApollo.MutationProps<ConfirmUserMutation, ConfirmUserMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<ConfirmUserMutation, ConfirmUserMutationVariables> mutation={ConfirmUserDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type ConfirmUserProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<ConfirmUserMutation, ConfirmUserMutationVariables>> & TChildProps;
export type ConfirmUserMutationFn = ReactApollo.MutationFn<ConfirmUserMutation, ConfirmUserMutationVariables>;
export function withConfirmUser<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  ConfirmUserMutation,
  ConfirmUserMutationVariables,
  ConfirmUserProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, ConfirmUserMutation, ConfirmUserMutationVariables, ConfirmUserProps<TChildProps>>(ConfirmUserDocument, operationOptions);
};

export function useConfirmUserMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<ConfirmUserMutation, ConfirmUserMutationVariables>) {
  return ReactApolloHooks.useMutation<ConfirmUserMutation, ConfirmUserMutationVariables>(ConfirmUserDocument, baseOptions);
};
export const CreatePostDocument = gql`
    mutation CreatePost($data: PostInput!) {
  createPost(data: $data) {
    id
    title
    text
  }
}
    `;

export class CreatePostComponent extends React.Component<Partial<ReactApollo.MutationProps<CreatePostMutation, CreatePostMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<CreatePostMutation, CreatePostMutationVariables> mutation={CreatePostDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type CreatePostProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<CreatePostMutation, CreatePostMutationVariables>> & TChildProps;
export type CreatePostMutationFn = ReactApollo.MutationFn<CreatePostMutation, CreatePostMutationVariables>;
export function withCreatePost<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  CreatePostMutation,
  CreatePostMutationVariables,
  CreatePostProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, CreatePostMutation, CreatePostMutationVariables, CreatePostProps<TChildProps>>(CreatePostDocument, operationOptions);
};

export function useCreatePostMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<CreatePostMutation, CreatePostMutationVariables>) {
  return ReactApolloHooks.useMutation<CreatePostMutation, CreatePostMutationVariables>(CreatePostDocument, baseOptions);
};
export const FollowUserDocument = gql`
    mutation FollowUser($data: FollowUserInput!) {
  followUser(data: $data)
}
    `;

export class FollowUserComponent extends React.Component<Partial<ReactApollo.MutationProps<FollowUserMutation, FollowUserMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<FollowUserMutation, FollowUserMutationVariables> mutation={FollowUserDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type FollowUserProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<FollowUserMutation, FollowUserMutationVariables>> & TChildProps;
export type FollowUserMutationFn = ReactApollo.MutationFn<FollowUserMutation, FollowUserMutationVariables>;
export function withFollowUser<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  FollowUserMutation,
  FollowUserMutationVariables,
  FollowUserProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, FollowUserMutation, FollowUserMutationVariables, FollowUserProps<TChildProps>>(FollowUserDocument, operationOptions);
};

export function useFollowUserMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<FollowUserMutation, FollowUserMutationVariables>) {
  return ReactApolloHooks.useMutation<FollowUserMutation, FollowUserMutationVariables>(FollowUserDocument, baseOptions);
};
export const ForgotPasswordDocument = gql`
    mutation ForgotPassword($email: String!) {
  forgotPassword(email: $email)
}
    `;

export class ForgotPasswordComponent extends React.Component<Partial<ReactApollo.MutationProps<ForgotPasswordMutation, ForgotPasswordMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables> mutation={ForgotPasswordDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type ForgotPasswordProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<ForgotPasswordMutation, ForgotPasswordMutationVariables>> & TChildProps;
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<ForgotPasswordMutation, ForgotPasswordMutationVariables>;
export function withForgotPassword<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables,
  ForgotPasswordProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, ForgotPasswordMutation, ForgotPasswordMutationVariables, ForgotPasswordProps<TChildProps>>(ForgotPasswordDocument, operationOptions);
};

export function useForgotPasswordMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<ForgotPasswordMutation, ForgotPasswordMutationVariables>) {
  return ReactApolloHooks.useMutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>(ForgotPasswordDocument, baseOptions);
};
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    id
    firstName
    lastName
    email
    name
  }
}
    `;

export class LoginComponent extends React.Component<Partial<ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<LoginMutation, LoginMutationVariables> mutation={LoginDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type LoginProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<LoginMutation, LoginMutationVariables>> & TChildProps;
export type LoginMutationFn = ReactApollo.MutationFn<LoginMutation, LoginMutationVariables>;
export function withLogin<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  LoginMutation,
  LoginMutationVariables,
  LoginProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, LoginMutation, LoginMutationVariables, LoginProps<TChildProps>>(LoginDocument, operationOptions);
};

export function useLoginMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
  return ReactApolloHooks.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, baseOptions);
};
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;

export class LogoutComponent extends React.Component<Partial<ReactApollo.MutationProps<LogoutMutation, LogoutMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<LogoutMutation, LogoutMutationVariables> mutation={LogoutDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type LogoutProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<LogoutMutation, LogoutMutationVariables>> & TChildProps;
export type LogoutMutationFn = ReactApollo.MutationFn<LogoutMutation, LogoutMutationVariables>;
export function withLogout<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  LogoutMutation,
  LogoutMutationVariables,
  LogoutProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, LogoutMutation, LogoutMutationVariables, LogoutProps<TChildProps>>(LogoutDocument, operationOptions);
};

export function useLogoutMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
  return ReactApolloHooks.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, baseOptions);
};
export const RegisterDocument = gql`
    mutation Register($data: RegisterInput!) {
  register(data: $data) {
    id
    firstName
    lastName
    email
    name
  }
}
    `;

export class RegisterComponent extends React.Component<Partial<ReactApollo.MutationProps<RegisterMutation, RegisterMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<RegisterMutation, RegisterMutationVariables> mutation={RegisterDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type RegisterProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<RegisterMutation, RegisterMutationVariables>> & TChildProps;
export type RegisterMutationFn = ReactApollo.MutationFn<RegisterMutation, RegisterMutationVariables>;
export function withRegister<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  RegisterMutation,
  RegisterMutationVariables,
  RegisterProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, RegisterMutation, RegisterMutationVariables, RegisterProps<TChildProps>>(RegisterDocument, operationOptions);
};

export function useRegisterMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
  return ReactApolloHooks.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, baseOptions);
};
export const UnFollowUserDocument = gql`
    mutation UnFollowUser($data: UnFollowUserInput!) {
  unFollowUser(data: $data)
}
    `;

export class UnFollowUserComponent extends React.Component<Partial<ReactApollo.MutationProps<UnFollowUserMutation, UnFollowUserMutationVariables>>> {
  render() {
      return (
          <ReactApollo.Mutation<UnFollowUserMutation, UnFollowUserMutationVariables> mutation={UnFollowUserDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type UnFollowUserProps<TChildProps = {}> = Partial<ReactApollo.MutateProps<UnFollowUserMutation, UnFollowUserMutationVariables>> & TChildProps;
export type UnFollowUserMutationFn = ReactApollo.MutationFn<UnFollowUserMutation, UnFollowUserMutationVariables>;
export function withUnFollowUser<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  UnFollowUserMutation,
  UnFollowUserMutationVariables,
  UnFollowUserProps<TChildProps>> | undefined) {
    return ReactApollo.withMutation<TProps, UnFollowUserMutation, UnFollowUserMutationVariables, UnFollowUserProps<TChildProps>>(UnFollowUserDocument, operationOptions);
};

export function useUnFollowUserMutation(baseOptions?: ReactApolloHooks.MutationHookOptions<UnFollowUserMutation, UnFollowUserMutationVariables>) {
  return ReactApolloHooks.useMutation<UnFollowUserMutation, UnFollowUserMutationVariables>(UnFollowUserDocument, baseOptions);
};
export const GetAllMyImagesDocument = gql`
    query GetAllMyImages {
  GetAllMyImages {
    id
    uri
  }
}
    `;

export class GetAllMyImagesComponent extends React.Component<Partial<ReactApollo.QueryProps<GetAllMyImagesQuery, GetAllMyImagesQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<GetAllMyImagesQuery, GetAllMyImagesQueryVariables> query={GetAllMyImagesDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type GetAllMyImagesProps<TChildProps = {}> = Partial<ReactApollo.DataProps<GetAllMyImagesQuery, GetAllMyImagesQueryVariables>> & TChildProps;
export function withGetAllMyImages<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  GetAllMyImagesQuery,
  GetAllMyImagesQueryVariables,
  GetAllMyImagesProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, GetAllMyImagesQuery, GetAllMyImagesQueryVariables, GetAllMyImagesProps<TChildProps>>(GetAllMyImagesDocument, operationOptions);
};

export function useGetAllMyImagesQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<GetAllMyImagesQueryVariables>) {
  return ReactApolloHooks.useQuery<GetAllMyImagesQuery, GetAllMyImagesQueryVariables>(GetAllMyImagesDocument, baseOptions);
};
export const GetGlobalPostsDocument = gql`
    query GetGlobalPosts {
  getGlobalPosts {
    id
    title
    text
    created_at
    images {
      id
      uri
    }
    user {
      id
      firstName
    }
  }
}
    `;

export class GetGlobalPostsComponent extends React.Component<Partial<ReactApollo.QueryProps<GetGlobalPostsQuery, GetGlobalPostsQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<GetGlobalPostsQuery, GetGlobalPostsQueryVariables> query={GetGlobalPostsDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type GetGlobalPostsProps<TChildProps = {}> = Partial<ReactApollo.DataProps<GetGlobalPostsQuery, GetGlobalPostsQueryVariables>> & TChildProps;
export function withGetGlobalPosts<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  GetGlobalPostsQuery,
  GetGlobalPostsQueryVariables,
  GetGlobalPostsProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, GetGlobalPostsQuery, GetGlobalPostsQueryVariables, GetGlobalPostsProps<TChildProps>>(GetGlobalPostsDocument, operationOptions);
};

export function useGetGlobalPostsQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<GetGlobalPostsQueryVariables>) {
  return ReactApolloHooks.useQuery<GetGlobalPostsQuery, GetGlobalPostsQueryVariables>(GetGlobalPostsDocument, baseOptions);
};
export const GetThoseIFollowAndTheirPostsResolverDocument = gql`
    query GetThoseIFollowAndTheirPostsResolver {
  getThoseIFollowAndTheirPostsResolver {
    id
    firstName
    lastName
    email
    name
    following {
      id
      firstName
      lastName
      posts {
        id
        title
        text
        images {
          id
          uri
        }
      }
    }
  }
}
    `;

export class GetThoseIFollowAndTheirPostsResolverComponent extends React.Component<Partial<ReactApollo.QueryProps<GetThoseIFollowAndTheirPostsResolverQuery, GetThoseIFollowAndTheirPostsResolverQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<GetThoseIFollowAndTheirPostsResolverQuery, GetThoseIFollowAndTheirPostsResolverQueryVariables> query={GetThoseIFollowAndTheirPostsResolverDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type GetThoseIFollowAndTheirPostsResolverProps<TChildProps = {}> = Partial<ReactApollo.DataProps<GetThoseIFollowAndTheirPostsResolverQuery, GetThoseIFollowAndTheirPostsResolverQueryVariables>> & TChildProps;
export function withGetThoseIFollowAndTheirPostsResolver<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  GetThoseIFollowAndTheirPostsResolverQuery,
  GetThoseIFollowAndTheirPostsResolverQueryVariables,
  GetThoseIFollowAndTheirPostsResolverProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, GetThoseIFollowAndTheirPostsResolverQuery, GetThoseIFollowAndTheirPostsResolverQueryVariables, GetThoseIFollowAndTheirPostsResolverProps<TChildProps>>(GetThoseIFollowAndTheirPostsResolverDocument, operationOptions);
};

export function useGetThoseIFollowAndTheirPostsResolverQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<GetThoseIFollowAndTheirPostsResolverQueryVariables>) {
  return ReactApolloHooks.useQuery<GetThoseIFollowAndTheirPostsResolverQuery, GetThoseIFollowAndTheirPostsResolverQueryVariables>(GetThoseIFollowAndTheirPostsResolverDocument, baseOptions);
};
export const HelloWorldDocument = gql`
    query HelloWorld {
  helloWorld
}
    `;

export class HelloWorldComponent extends React.Component<Partial<ReactApollo.QueryProps<HelloWorldQuery, HelloWorldQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<HelloWorldQuery, HelloWorldQueryVariables> query={HelloWorldDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type HelloWorldProps<TChildProps = {}> = Partial<ReactApollo.DataProps<HelloWorldQuery, HelloWorldQueryVariables>> & TChildProps;
export function withHelloWorld<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  HelloWorldQuery,
  HelloWorldQueryVariables,
  HelloWorldProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, HelloWorldQuery, HelloWorldQueryVariables, HelloWorldProps<TChildProps>>(HelloWorldDocument, operationOptions);
};

export function useHelloWorldQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<HelloWorldQueryVariables>) {
  return ReactApolloHooks.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(HelloWorldDocument, baseOptions);
};
export const MeDocument = gql`
    query me {
  me {
    firstName
    lastName
    email
    name
    id
  }
}
    `;

export class MeComponent extends React.Component<Partial<ReactApollo.QueryProps<MeQuery, MeQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<MeQuery, MeQueryVariables> query={MeDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type MeProps<TChildProps = {}> = Partial<ReactApollo.DataProps<MeQuery, MeQueryVariables>> & TChildProps;
export function withMe<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  MeQuery,
  MeQueryVariables,
  MeProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, MeQuery, MeQueryVariables, MeProps<TChildProps>>(MeDocument, operationOptions);
};

export function useMeQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<MeQueryVariables>) {
  return ReactApolloHooks.useQuery<MeQuery, MeQueryVariables>(MeDocument, baseOptions);
};
export const MyFollowingPostsDocument = gql`
    query MyFollowingPosts {
  myFollowingPosts {
    id
    title
    text
    created_at
    images {
      id
      uri
    }
    user {
      id
      firstName
      lastName
    }
  }
}
    `;

export class MyFollowingPostsComponent extends React.Component<Partial<ReactApollo.QueryProps<MyFollowingPostsQuery, MyFollowingPostsQueryVariables>>> {
  render() {
      return (
          <ReactApollo.Query<MyFollowingPostsQuery, MyFollowingPostsQueryVariables> query={MyFollowingPostsDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type MyFollowingPostsProps<TChildProps = {}> = Partial<ReactApollo.DataProps<MyFollowingPostsQuery, MyFollowingPostsQueryVariables>> & TChildProps;
export function withMyFollowingPosts<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  MyFollowingPostsQuery,
  MyFollowingPostsQueryVariables,
  MyFollowingPostsProps<TChildProps>> | undefined) {
    return ReactApollo.withQuery<TProps, MyFollowingPostsQuery, MyFollowingPostsQueryVariables, MyFollowingPostsProps<TChildProps>>(MyFollowingPostsDocument, operationOptions);
};

export function useMyFollowingPostsQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<MyFollowingPostsQueryVariables>) {
  return ReactApolloHooks.useQuery<MyFollowingPostsQuery, MyFollowingPostsQueryVariables>(MyFollowingPostsDocument, baseOptions);
};
export const FollowingPostsDocument = gql`
    subscription FollowingPosts($data: QuickPostSubsInput!) {
  followingPosts(data: $data) {
    id
    title
    text
    created_at
    images {
      id
      uri
    }
    user {
      id
      firstName
      lastName
    }
  }
}
    `;

export class FollowingPostsComponent extends React.Component<Partial<ReactApollo.SubscriptionProps<FollowingPostsSubscription, FollowingPostsSubscriptionVariables>>> {
  render() {
      return (
          <ReactApollo.Subscription<FollowingPostsSubscription, FollowingPostsSubscriptionVariables> subscription={FollowingPostsDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type FollowingPostsProps<TChildProps = {}> = Partial<ReactApollo.DataProps<FollowingPostsSubscription, FollowingPostsSubscriptionVariables>> & TChildProps;
export function withFollowingPosts<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  FollowingPostsSubscription,
  FollowingPostsSubscriptionVariables,
  FollowingPostsProps<TChildProps>> | undefined) {
    return ReactApollo.withSubscription<TProps, FollowingPostsSubscription, FollowingPostsSubscriptionVariables, FollowingPostsProps<TChildProps>>(FollowingPostsDocument, operationOptions);
};

export function useFollowingPostsSubscription(baseOptions?: ReactApolloHooks.SubscriptionHookOptions<FollowingPostsSubscription, FollowingPostsSubscriptionVariables>) {
  return ReactApolloHooks.useSubscription<FollowingPostsSubscription, FollowingPostsSubscriptionVariables>(FollowingPostsDocument, baseOptions);
};
export const GlobalPostsDocument = gql`
    subscription GlobalPosts {
  globalPosts {
    id
    title
    text
    images {
      id
      uri
    }
    user {
      id
      firstName
      lastName
    }
  }
}
    `;

export class GlobalPostsComponent extends React.Component<Partial<ReactApollo.SubscriptionProps<GlobalPostsSubscription, GlobalPostsSubscriptionVariables>>> {
  render() {
      return (
          <ReactApollo.Subscription<GlobalPostsSubscription, GlobalPostsSubscriptionVariables> subscription={GlobalPostsDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type GlobalPostsProps<TChildProps = {}> = Partial<ReactApollo.DataProps<GlobalPostsSubscription, GlobalPostsSubscriptionVariables>> & TChildProps;
export function withGlobalPosts<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  GlobalPostsSubscription,
  GlobalPostsSubscriptionVariables,
  GlobalPostsProps<TChildProps>> | undefined) {
    return ReactApollo.withSubscription<TProps, GlobalPostsSubscription, GlobalPostsSubscriptionVariables, GlobalPostsProps<TChildProps>>(GlobalPostsDocument, operationOptions);
};

export function useGlobalPostsSubscription(baseOptions?: ReactApolloHooks.SubscriptionHookOptions<GlobalPostsSubscription, GlobalPostsSubscriptionVariables>) {
  return ReactApolloHooks.useSubscription<GlobalPostsSubscription, GlobalPostsSubscriptionVariables>(GlobalPostsDocument, baseOptions);
};
export const MessageThreadsDocument = gql`
    subscription MessageThreads($data: AddMessageToThreadInput_v2!) {
  messageThreads(data: $data) {
    success
    message {
      id
      created_at
      message
      images {
        id
        uri
      }
      sentBy {
        id
        firstName
        lastName
      }
      user {
        id
        firstName
        lastName
      }
    }
  }
}
    `;

export class MessageThreadsComponent extends React.Component<Partial<ReactApollo.SubscriptionProps<MessageThreadsSubscription, MessageThreadsSubscriptionVariables>>> {
  render() {
      return (
          <ReactApollo.Subscription<MessageThreadsSubscription, MessageThreadsSubscriptionVariables> subscription={MessageThreadsDocument} {...(this as any)['props'] as any} />
      );
  }
}
export type MessageThreadsProps<TChildProps = {}> = Partial<ReactApollo.DataProps<MessageThreadsSubscription, MessageThreadsSubscriptionVariables>> & TChildProps;
export function withMessageThreads<TProps, TChildProps = {}>(operationOptions: ReactApollo.OperationOption<
  TProps,
  MessageThreadsSubscription,
  MessageThreadsSubscriptionVariables,
  MessageThreadsProps<TChildProps>> | undefined) {
    return ReactApollo.withSubscription<TProps, MessageThreadsSubscription, MessageThreadsSubscriptionVariables, MessageThreadsProps<TChildProps>>(MessageThreadsDocument, operationOptions);
};

export function useMessageThreadsSubscription(baseOptions?: ReactApolloHooks.SubscriptionHookOptions<MessageThreadsSubscription, MessageThreadsSubscriptionVariables>) {
  return ReactApolloHooks.useSubscription<MessageThreadsSubscription, MessageThreadsSubscriptionVariables>(MessageThreadsDocument, baseOptions);
};