import gql from "graphql-tag";
import * as ReactApollo from "react-apollo";
import * as React from "react";
import * as ReactApolloHooks from "react-apollo-hooks";
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
  DateTime: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AddMessagePayload = {
  __typename?: "AddMessagePayload";
  success: Scalars["Boolean"];
  threadId: Scalars["ID"];
  message: Message;
  user: User;
  invitees: Array<User>;
};

export type AddMessageToThreadInput_V2 = {
  threadId: Scalars["ID"];
  sentTo: Scalars["String"];
  invitees: Array<Scalars["ID"]>;
  message: Scalars["String"];
  images?: Maybe<Array<Maybe<Scalars["Upload"]>>>;
};

// export type ChangePasswordInput = {
//   password: Scalars["String"];
//   token: Scalars["String"];
// };

// export type FollowUserInput = {
//   userIDToFollow: Scalars["String"];
// };

// export type GetAllMyMessagesInput = {
//   user: Scalars["String"];
// };

// export type GetAllMyMessageThreadsInput = {
//   user: Scalars["String"];
// };

// export type GetMessagesFromUserInput = {
//   sentBy: Scalars["String"];
//   user: Scalars["String"];
// };

// export type GetMessageThreadsFromUserInput = {
//   sentBy: Scalars["String"];
//   user: Scalars["String"];
// };

export type Image = {
  __typename?: "Image";
  id: Scalars["ID"];
  uri: Scalars["String"];
  post: Post;
  message?: Maybe<Message>;
  user: User;
};

export type Message = {
  __typename?: "Message";
  id: Scalars["ID"];
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
  message: Scalars["String"];
  images?: Maybe<Array<Maybe<Image>>>;
  sentBy: User;
  user: User;
  thread?: Maybe<Thread>;
};

export type MessageOutput = {
  __typename?: "MessageOutput";
  message: Scalars["String"];
};

export type MessageSubType = {
  __typename?: "MessageSubType";
  id: Scalars["ID"];
  message?: Maybe<Scalars["String"]>;
  sentBy: User;
  user: User;
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type MessageThreadOutput = {
  __typename?: "MessageThreadOutput";
  message: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  createProduct: Product;
  createUser: User;
  changePassword?: Maybe<User>;
  confirmUser: Scalars["Boolean"];
  forgotPassword: Scalars["Boolean"];
  login?: Maybe<User>;
  logout: Scalars["Boolean"];
  register: User;
  addProfilePicture: Scalars["Boolean"];
  createPost: Post;
  followUser: Scalars["Boolean"];
  addNewMessage: Scalars["Boolean"];
  unFollowUser: Scalars["Boolean"];
  createMessageThread: Thread;
  addMessageToThread: AddMessagePayload;
  signS3: SignedS3Payload;
};

export type Mutation_CreateProductArgs = {
  data: ProductInput;
};

export type Mutation_CreateUserArgs = {
  data: RegisterInput;
};

export type Mutation_ChangePasswordArgs = {
  data: ChangePasswordInput;
};

export type Mutation_ConfirmUserArgs = {
  token: Scalars["String"];
};

export type Mutation_ForgotPasswordArgs = {
  email: Scalars["String"];
};

export type Mutation_LoginArgs = {
  password: Scalars["String"];
  email: Scalars["String"];
};

export type Mutation_RegisterArgs = {
  data: RegisterInput;
};

export type Mutation_AddProfilePictureArgs = {
  picture: Scalars["Upload"];
};

export type Mutation_CreatePostArgs = {
  data: PostInput;
};

export type Mutation_FollowUserArgs = {
  data: FollowUserInput;
};

export type Mutation_AddNewMessageArgs = {
  sentTo: Scalars["String"];
  message: Scalars["String"];
};

export type Mutation_UnFollowUserArgs = {
  data: UnFollowUserInput;
};

export type Mutation_CreateMessageThreadArgs = {
  sentTo: Scalars["String"];
  invitees: Array<Scalars["ID"]>;
  message: Scalars["String"];
  images?: Maybe<Array<Maybe<Scalars["Upload"]>>>;
};

export type Mutation_AddMessageToThreadArgs = {
  threadId: Scalars["ID"];
  sentTo: Scalars["String"];
  invitees: Array<Scalars["ID"]>;
  message: Scalars["String"];
  images?: Maybe<Array<Maybe<Scalars["Upload"]>>>;
};

export type Mutation_SignS3Args = {
  filename: Scalars["String"];
  filetype: Scalars["String"];
};

// export type PasswordInput = {
//   password: Scalars["String"];
// };

export type Post = {
  __typename?: "Post";
  id?: Maybe<Scalars["ID"]>;
  title?: Maybe<Scalars["String"]>;
  text?: Maybe<Scalars["String"]>;
  images?: Maybe<Array<Image>>;
  user?: Maybe<User>;
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

// export type PostInput = {
//   text: Scalars["String"];
//   title?: Maybe<Scalars["String"]>;
//   user: Scalars["ID"];
//   images?: Maybe<Array<Maybe<Scalars["String"]>>>;
// };

// export type PostInputOld = {
//   text: Scalars["String"];
//   title?: Maybe<Scalars["String"]>;
//   user: Scalars["ID"];
//   images?: Maybe<Array<Maybe<Scalars["String"]>>>;
// };

// export type PostSubInput = {
//   sentBy: Scalars["String"];
//   message: Scalars["String"];
// };

export type PostSubType = {
  __typename?: "PostSubType";
  id: Scalars["ID"];
  title: Scalars["String"];
  text: Scalars["String"];
  images: Array<Image>;
  user: User;
  created_at: Scalars["DateTime"];
  updated_at: Scalars["DateTime"];
};

export type Product = {
  __typename?: "Product";
  id: Scalars["ID"];
  name: Scalars["String"];
};

// export type ProductInput = {
//   name: Scalars["String"];
// };

export type Query = {
  __typename?: "Query";
  me?: Maybe<User>;
  helloWorld: Scalars["String"];
  GetAllMyImages: Array<Image>;
  getThoseIFollowAndTheirPostsResolver?: Maybe<User>;
  getMyMessagesFromUser?: Maybe<Array<Message>>;
  getGlobalPosts?: Maybe<Array<Post>>;
  meAndAllFollowers?: Maybe<User>;
  myFollowingPosts?: Maybe<Array<Post>>;
  getAllMyMessages?: Maybe<User>;
  getMessageThreads?: Maybe<Array<Maybe<Thread>>>;
  getListToCreateThread?: Maybe<TransUserReturn>;
};

export type Query_GetMyMessagesFromUserArgs = {
  input: GetMessagesFromUserInput;
};

// export type RegisterInput = {
//   password: Scalars["String"];
//   firstName: Scalars["String"];
//   lastName: Scalars["String"];
//   email: Scalars["String"];
//   termsAndConditions: Scalars["Boolean"];
//   keepMeSignedIn: Scalars["Boolean"];
// };

export type SignedS3Payload = {
  __typename?: "SignedS3Payload";
  url: Scalars["String"];
  signedRequest: Scalars["String"];
};

export type Subscription = {
  __typename?: "Subscription";
  followingPosts: PostSubType;
  newMessage: MessageSubType;
  globalPosts?: Maybe<Post>;
  messageThreads: AddMessagePayload;
};

export type Subscription_FollowingPostsArgs = {
  data: PostSubInput;
};

export type Subscription_NewMessageArgs = {
  sentTo: Scalars["String"];
  message: Scalars["String"];
};

export type Subscription_MessageThreadsArgs = {
  data: AddMessageToThreadInput_V2;
};

export type Thread = {
  __typename?: "Thread";
  id?: Maybe<Scalars["ID"]>;
  messages: Array<Message>;
  user: User;
  invitees: Array<User>;
  created_at?: Maybe<Scalars["DateTime"]>;
  updated_at?: Maybe<Scalars["DateTime"]>;
};

export type TransUserReturn = {
  __typename?: "TransUserReturn";
  id: Scalars["ID"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  thoseICanMessage?: Maybe<Array<User>>;
};

// export type UnFollowUserInput = {
//   userIDToUnFollow: Scalars["String"];
// };

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  firstName: Scalars["String"];
  mappedMessages: Array<Message>;
  lastName: Scalars["String"];
  email: Scalars["String"];
  threads?: Maybe<Array<Thread>>;
  name: Scalars["String"];
  confirmed: Scalars["Boolean"];
  posts?: Maybe<Array<Post>>;
  images?: Maybe<Array<Image>>;
  profileImgUrl?: Maybe<Image>;
  messages?: Maybe<Array<Message>>;
  sent_messages?: Maybe<Array<Message>>;
  followers?: Maybe<Array<Maybe<User>>>;
  thread_invitations?: Maybe<Array<Maybe<Thread>>>;
  following?: Maybe<Array<Maybe<User>>>;
};
// export type Maybe<T> = T | null;

export interface GetMessagesFromUserInput {
  sentBy: string;

  user: string;
}

export interface ProductInput {
  name: string;
}

export interface RegisterInput {
  password: string;

  firstName: string;

  lastName: string;

  email: string;

  termsAndConditions: boolean;

  keepMeSignedIn: boolean;
}

export interface ChangePasswordInput {
  password: string;

  token: string;
}

export interface PostInput {
  text: string;

  title?: Maybe<string>;

  user: string;

  images?: Maybe<(Maybe<string>)[]>;
}

export interface FollowUserInput {
  userIDToFollow: string;
}

export interface UnFollowUserInput {
  userIDToUnFollow: string;
}

export interface PostSubInput {
  sentBy: string;

  message: string;
}

export interface AddMessageToThreadInputV2 {
  threadId: string;

  sentTo: string;

  invitees: string[];

  message: string;

  images?: Maybe<(Maybe<Upload>)[]>;
}

export interface GetAllMyMessagesInput {
  user: string;
}

export interface GetAllMyMessageThreadsInput {
  user: string;
}

export interface GetMessageThreadsFromUserInput {
  sentBy: string;

  user: string;
}

export interface PasswordInput {
  password: string;
}

export interface PostInputOld {
  text: string;

  title?: Maybe<string>;

  user: string;

  images?: Maybe<(Maybe<string>)[]>;
}

/** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
export type DateTime = any;

/** The `Upload` scalar type represents a file upload. */
export type Upload = any;

// ====================================================
// Documents
// ====================================================

export type AddMessageToThreadVariables = {
  threadId: string;
  sentTo: string;
  message: string;
  invitees: string[];
  images?: Maybe<(Maybe<Upload>)[]>;
};

// export type AddMessageToThreadMutation = {
//   __typename?: "Mutation";

//   addMessageToThread: AddMessageToThreadAddMessageToThread;
// };

export type AddMessageToThreadAddMessageToThread = {
  __typename?: "AddMessagePayload";

  success: boolean;

  invitees: AddMessageToThreadInvitees[];

  threadId: string;

  message: AddMessageToThreadMessage;

  user: AddMessageToThread_User;
};

export type AddMessageToThreadInvitees = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type AddMessageToThreadMessage = {
  __typename?: "Message";

  id: string;

  message: string;

  images: Maybe<(Maybe<AddMessageToThreadImages>)[]>;

  sentBy: AddMessageToThreadSentBy;

  user: AddMessageToThreadUser;
};

export type AddMessageToThreadImages = {
  __typename?: "Image";

  id: string;

  uri: string;
};

export type AddMessageToThreadSentBy = {
  __typename?: "User";

  id: string;

  firstName: string;
};

export type AddMessageToThreadUser = {
  __typename?: "User";

  id: string;

  firstName: string;
};

export type AddMessageToThread_User = {
  __typename?: "User";

  id: string;

  firstName: string;
};

export type AddNewMessageVariables = {
  sentTo: string;
  message: string;
};

// export type AddNewMessageMutation = {
//   __typename?: "Mutation";

//   addNewMessage: boolean;
// };

export type CreateMessageThreadVariables = {
  sentTo: string;
  message: string;
  images?: Maybe<(Maybe<Upload>)[]>;
  invitees: string[];
};

// export type CreateMessageThreadMutation = {
//   __typename?: "Mutation";

//   createMessageThread: CreateMessageThreadCreateMessageThread;
// };

export type CreateMessageThreadCreateMessageThread = {
  __typename?: "Thread";

  id: Maybe<string>;

  invitees: CreateMessageThreadInvitees[];

  messages: CreateMessageThreadMessages[];
};

export type CreateMessageThreadInvitees = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type CreateMessageThreadMessages = {
  __typename?: "Message";

  id: string;

  created_at: Maybe<DateTime>;

  message: string;

  images: Maybe<(Maybe<CreateMessageThreadImages>)[]>;

  sentBy: CreateMessageThreadSentBy;

  user: CreateMessageThreadUser;
};

export type CreateMessageThreadImages = {
  __typename?: "Image";

  id: string;

  uri: string;
};

export type CreateMessageThreadSentBy = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type CreateMessageThreadUser = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type SignS3Variables = {
  filename: string;
  filetype: string;
};

// export type SignS3Mutation = {
//   __typename?: "Mutation";

//   signS3: SignS3SignS3;
// };

export type SignS3SignS3 = {
  __typename?: "SignedS3Payload";

  url: string;

  signedRequest: string;
};

export type GetAllMyMessagesVariables = {};

// export type GetAllMyMessagesQuery = {
//   __typename?: "Query";

//   getAllMyMessages: Maybe<GetAllMyMessagesGetAllMyMessages>;
// };

export type GetAllMyMessagesGetAllMyMessages = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  mappedMessages: GetAllMyMessagesMappedMessages[];
};

export type GetAllMyMessagesMappedMessages = {
  __typename?: "Message";

  id: string;

  created_at: Maybe<DateTime>;

  updated_at: Maybe<DateTime>;

  message: string;

  sentBy: GetAllMyMessagesSentBy;

  user: GetAllMyMessagesUser;
};

export type GetAllMyMessagesSentBy = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type GetAllMyMessagesUser = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type GetListToCreateThreadVariables = {};

// export type GetListToCreateThreadQuery = {
//   __typename?: "Query";

//   getListToCreateThread: Maybe<GetListToCreateThreadGetListToCreateThread>;
// };

export type GetListToCreateThreadGetListToCreateThread = {
  __typename?: "TransUserReturn";

  id: string;

  firstName: string;

  thoseICanMessage: Maybe<GetListToCreateThreadThoseICanMessage[]>;
};

export type GetListToCreateThreadThoseICanMessage = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type GetMessageThreadsVariables = {};

// export type GetMessageThreadsQuery = {
//   __typename?: "Query";

//   getMessageThreads: Maybe<(Maybe<GetMessageThreadsGetMessageThreads>)[]>;
// };

export type GetMessageThreadsGetMessageThreads = {
  __typename?: "Thread";

  id: Maybe<string>;

  invitees: GetMessageThreadsInvitees[];

  messages: GetMessageThreadsMessages[];
};

export type GetMessageThreadsInvitees = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type GetMessageThreadsMessages = {
  __typename?: "Message";

  id: string;

  created_at: Maybe<DateTime>;

  message: string;

  images: Maybe<(Maybe<GetMessageThreadsImages>)[]>;

  sentBy: GetMessageThreadsSentBy;

  user: GetMessageThreadsUser;
};

export type GetMessageThreadsImages = {
  __typename?: "Image";

  id: string;

  uri: string;
};

export type GetMessageThreadsSentBy = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type GetMessageThreadsUser = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type GetMyMessagesFromUserVariables = {
  input: GetMessagesFromUserInput;
};

// export type GetMyMessagesFromUserQuery = {
//   __typename?: "Query";

//   getMyMessagesFromUser: Maybe<GetMyMessagesFromUserGetMyMessagesFromUser[]>;
// };

export type GetMyMessagesFromUserGetMyMessagesFromUser = {
  __typename?: "Message";

  id: string;

  message: string;

  created_at: Maybe<DateTime>;

  sentBy: GetMyMessagesFromUserSentBy;
};

export type GetMyMessagesFromUserSentBy = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type NewMessageVariables = {
  message: string;
  sentTo: string;
};

// export type NewMessageSubscription = {
//   __typename?: "Subscription";

//   newMessage: NewMessageNewMessage;
// };

export type NewMessageNewMessage = {
  __typename?: "MessageSubType";

  id: string;

  message: Maybe<string>;

  sentBy: NewMessageSentBy;

  user: NewMessageUser;

  created_at: Maybe<DateTime>;

  updated_at: Maybe<DateTime>;
};

export type NewMessageSentBy = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type NewMessageUser = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type ChangePasswordVariables = {
  data: ChangePasswordInput;
};

// export type ChangePasswordMutation = {
//   __typename?: "Mutation";

//   changePassword: Maybe<ChangePasswordChangePassword>;
// };

export type ChangePasswordChangePassword = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
};

export type ConfirmUserVariables = {
  token: string;
};

export type ConfirmUserMutation = {
  __typename?: "Mutation";

  confirmUser: boolean;
};

export type CreatePostVariables = {
  data: PostInput;
};

// export type CreatePostMutation = {
//   __typename?: "Mutation";

//   createPost: CreatePostCreatePost;
// };

export type CreatePostCreatePost = {
  __typename?: "Post";

  id: Maybe<string>;

  title: Maybe<string>;

  text: Maybe<string>;
};

export type FollowUserVariables = {
  data: FollowUserInput;
};

// export type FollowUserMutation = {
//   __typename?: "Mutation";

//   followUser: boolean;
// };

export type ForgotPasswordVariables = {
  email: string;
};

// export type ForgotPasswordMutation = {
//   __typename?: "Mutation";

//   forgotPassword: boolean;
// };

export type LoginVariables = {
  email: string;
  password: string;
};

// export type LoginMutation = {
//   __typename?: "Mutation";

//   login: Maybe<LoginLogin>;
// };

export type LoginLogin = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
};

export type LogoutVariables = {};

// export type LogoutMutation = {
//   __typename?: "Mutation";

//   logout: boolean;
// };

export type RegisterVariables = {
  data: RegisterInput;
};

export type RegisterMutation = {
  __typename?: "Mutation";

  register: RegisterRegister;
};

export type RegisterRegister = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;
};

export type UnFollowUserVariables = {
  data: UnFollowUserInput;
};

// export type UnFollowUserMutation = {
//   __typename?: "Mutation";

//   unFollowUser: boolean;
// };

export type GetAllMyImagesVariables = {};

// export type GetAllMyImagesQuery = {
//   __typename?: "Query";

//   GetAllMyImages: GetAllMyImagesGetAllMyImages[];
// };

export type GetAllMyImagesGetAllMyImages = {
  __typename?: "Image";

  id: string;

  uri: string;
};

export type GetGlobalPostsVariables = {};

export type GetGlobalPostsQuery = {
  __typename?: "Query";

  getGlobalPosts: Maybe<GetGlobalPostsGetGlobalPosts[]>;
};

export type GetGlobalPostsGetGlobalPosts = {
  __typename?: "Post";

  id: Maybe<string>;

  title: Maybe<string>;

  text: Maybe<string>;

  created_at: Maybe<DateTime>;

  images: Maybe<GetGlobalPostsImages[]>;

  user: Maybe<GetGlobalPostsUser>;
};

export type GetGlobalPostsImages = {
  __typename?: "Image";

  id: string;

  uri: string;
};

export type GetGlobalPostsUser = {
  __typename?: "User";

  id: string;

  firstName: string;
};

export type GetThoseIFollowAndTheirPostsResolverVariables = {};

// export type GetThoseIFollowAndTheirPostsResolverQuery = {
//   __typename?: "Query";

//   getThoseIFollowAndTheirPostsResolver: Maybe<
//     GetThoseIFollowAndTheirPostsResolverGetThoseIFollowAndTheirPostsResolver
//   >;
// };

export type GetThoseIFollowAndTheirPostsResolverGetThoseIFollowAndTheirPostsResolver = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  email: string;

  name: string;

  following: Maybe<(Maybe<GetThoseIFollowAndTheirPostsResolverFollowing>)[]>;
};

export type GetThoseIFollowAndTheirPostsResolverFollowing = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;

  posts: Maybe<GetThoseIFollowAndTheirPostsResolverPosts[]>;
};

export type GetThoseIFollowAndTheirPostsResolverPosts = {
  __typename?: "Post";

  id: Maybe<string>;

  title: Maybe<string>;

  text: Maybe<string>;

  images: Maybe<GetThoseIFollowAndTheirPostsResolverImages[]>;
};

export type GetThoseIFollowAndTheirPostsResolverImages = {
  __typename?: "Image";

  id: string;

  uri: string;
};

export type HelloWorldVariables = {};

// export type HelloWorldQuery = {
//   __typename?: "Query";

//   helloWorld: string;
// };

export type MeVariables = {};

// export type MeQuery = {
//   __typename?: "Query";

//   me: Maybe<MeMe>;
// };

export type MeMe = {
  __typename?: "User";

  firstName: string;

  lastName: string;

  email: string;

  name: string;

  id: string;
};

export type MyFollowingPostsVariables = {};

// export type MyFollowingPostsQuery = {
//   __typename?: "Query";

//   myFollowingPosts: Maybe<MyFollowingPostsMyFollowingPosts[]>;
// };

export type MyFollowingPostsMyFollowingPosts = {
  __typename?: "Post";

  id: Maybe<string>;

  title: Maybe<string>;

  text: Maybe<string>;

  created_at: Maybe<DateTime>;

  images: Maybe<MyFollowingPostsImages[]>;

  user: Maybe<MyFollowingPostsUser>;
};

export type MyFollowingPostsImages = {
  __typename?: "Image";

  id: string;

  uri: string;
};

export type MyFollowingPostsUser = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type GlobalPostsVariables = {};

// export type GlobalPostsSubscription = {
//   __typename?: "Subscription";

//   globalPosts: Maybe<GlobalPostsGlobalPosts>;
// };

export type GlobalPostsGlobalPosts = {
  __typename?: "Post";

  id: Maybe<string>;

  title: Maybe<string>;

  text: Maybe<string>;

  images: Maybe<GlobalPostsImages[]>;

  user: Maybe<GlobalPostsUser>;
};

export type GlobalPostsImages = {
  __typename?: "Image";

  id: string;

  uri: string;
};

export type GlobalPostsUser = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type MessageThreadsVariables = {
  data: AddMessageToThreadInputV2;
};

// export type MessageThreadsSubscription = {
//   __typename?: "Subscription";

//   messageThreads: MessageThreadsMessageThreads;
// };

export type MessageThreadsMessageThreads = {
  __typename?: "AddMessagePayload";

  success: boolean;

  message: MessageThreadsMessage;
};

export type MessageThreadsMessage = {
  __typename?: "Message";

  id: string;

  created_at: Maybe<DateTime>;

  message: string;

  images: Maybe<(Maybe<MessageThreadsImages>)[]>;

  sentBy: MessageThreadsSentBy;

  user: MessageThreadsUser;
};

export type MessageThreadsImages = {
  __typename?: "Image";

  id: string;

  uri: string;
};

export type MessageThreadsSentBy = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type MessageThreadsUser = {
  __typename?: "User";

  id: string;

  firstName: string;

  lastName: string;
};

export type AddMessageToThreadMutationVariables = {
  threadId: Scalars["ID"];
  sentTo: Scalars["String"];
  message: Scalars["String"];
  invitees: Array<Scalars["ID"]>;
  images?: Maybe<Array<Maybe<Scalars["Upload"]>>>;
};

export type AddMessageToThreadMutation = { __typename?: "Mutation" } & {
  addMessageToThread: { __typename?: "AddMessagePayload" } & Pick<
    AddMessagePayload,
    "success" | "threadId"
  > & {
      invitees: Array<
        { __typename?: "User" } & Pick<User, "id" | "firstName" | "lastName">
      >;
      message: { __typename?: "Message" } & Pick<Message, "id" | "message"> & {
          images: Maybe<
            Array<Maybe<{ __typename?: "Image" } & Pick<Image, "id" | "uri">>>
          >;
          sentBy: { __typename?: "User" } & Pick<User, "id" | "firstName">;
          user: { __typename?: "User" } & Pick<User, "id" | "firstName">;
        };
      user: { __typename?: "User" } & Pick<User, "id" | "firstName">;
    };
};

export type AddNewMessageMutationVariables = {
  sentTo: Scalars["String"];
  message: Scalars["String"];
};

export type AddNewMessageMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "addNewMessage"
>;

export type CreateMessageThreadMutationVariables = {
  sentTo: Scalars["String"];
  message: Scalars["String"];
  images?: Maybe<Array<Maybe<Scalars["Upload"]>>>;
  invitees: Array<Scalars["ID"]>;
};

export type CreateMessageThreadMutation = { __typename?: "Mutation" } & {
  createMessageThread: { __typename?: "Thread" } & Pick<Thread, "id"> & {
      invitees: Array<
        { __typename?: "User" } & Pick<User, "id" | "firstName" | "lastName">
      >;
      messages: Array<
        { __typename?: "Message" } & Pick<
          Message,
          "id" | "created_at" | "message"
        > & {
            images: Maybe<
              Array<Maybe<{ __typename?: "Image" } & Pick<Image, "id" | "uri">>>
            >;
            sentBy: { __typename?: "User" } & Pick<
              User,
              "id" | "firstName" | "lastName"
            >;
            user: { __typename?: "User" } & Pick<
              User,
              "id" | "firstName" | "lastName"
            >;
          }
      >;
    };
};

export type SignS3MutationVariables = {
  filename: Scalars["String"];
  filetype: Scalars["String"];
};

export type SignS3Mutation = { __typename?: "Mutation" } & {
  signS3: { __typename?: "SignedS3Payload" } & Pick<
    SignedS3Payload,
    "url" | "signedRequest"
  >;
};

export type GetAllMyMessagesQueryVariables = {};

export type GetAllMyMessagesQuery = { __typename?: "Query" } & {
  getAllMyMessages: Maybe<
    { __typename?: "User" } & Pick<User, "id" | "firstName" | "lastName"> & {
        mappedMessages: Array<
          { __typename?: "Message" } & Pick<
            Message,
            "id" | "created_at" | "updated_at" | "message"
          > & {
              sentBy: { __typename?: "User" } & Pick<
                User,
                "id" | "firstName" | "lastName"
              >;
              user: { __typename?: "User" } & Pick<
                User,
                "id" | "firstName" | "lastName"
              >;
            }
        >;
      }
  >;
};

export type GetListToCreateThreadQueryVariables = {};

export type GetListToCreateThreadQuery = { __typename?: "Query" } & {
  getListToCreateThread: Maybe<
    { __typename?: "TransUserReturn" } & Pick<
      TransUserReturn,
      "id" | "firstName"
    > & {
        thoseICanMessage: Maybe<
          Array<
            { __typename?: "User" } & Pick<
              User,
              "id" | "firstName" | "lastName"
            >
          >
        >;
      }
  >;
};

export type GetMessageThreadsQueryVariables = {};

export type GetMessageThreadsQuery = { __typename?: "Query" } & {
  getMessageThreads: Maybe<
    Array<
      Maybe<
        { __typename?: "Thread" } & Pick<Thread, "id"> & {
            invitees: Array<
              { __typename?: "User" } & Pick<
                User,
                "id" | "firstName" | "lastName"
              >
            >;
            messages: Array<
              { __typename?: "Message" } & Pick<
                Message,
                "id" | "created_at" | "message"
              > & {
                  images: Maybe<
                    Array<
                      Maybe<
                        { __typename?: "Image" } & Pick<Image, "id" | "uri">
                      >
                    >
                  >;
                  sentBy: { __typename?: "User" } & Pick<
                    User,
                    "id" | "firstName" | "lastName"
                  >;
                  user: { __typename?: "User" } & Pick<
                    User,
                    "id" | "firstName" | "lastName"
                  >;
                }
            >;
          }
      >
    >
  >;
};

export type GetMyMessagesFromUserQueryVariables = {
  input: GetMessagesFromUserInput;
};

export type GetMyMessagesFromUserQuery = { __typename?: "Query" } & {
  getMyMessagesFromUser: Maybe<
    Array<
      { __typename?: "Message" } & Pick<
        Message,
        "id" | "message" | "created_at"
      > & {
          sentBy: { __typename?: "User" } & Pick<
            User,
            "id" | "firstName" | "lastName"
          >;
        }
    >
  >;
};

export type NewMessageSubscriptionVariables = {
  message: Scalars["String"];
  sentTo: Scalars["String"];
};

export type NewMessageSubscription = { __typename?: "Subscription" } & {
  newMessage: { __typename?: "MessageSubType" } & Pick<
    MessageSubType,
    "id" | "message" | "created_at" | "updated_at"
  > & {
      sentBy: { __typename?: "User" } & Pick<
        User,
        "id" | "firstName" | "lastName"
      >;
      user: { __typename?: "User" } & Pick<
        User,
        "id" | "firstName" | "lastName"
      >;
    };
};

export type ChangePasswordMutationVariables = {
  data: ChangePasswordInput;
};

export type ChangePasswordMutation = { __typename?: "Mutation" } & {
  changePassword: Maybe<
    { __typename?: "User" } & Pick<
      User,
      "id" | "firstName" | "lastName" | "email" | "name"
    >
  >;
};

export type ConfirmUserMutationVariables = {
  token: Scalars["String"];
};

// export type ConfirmUserMutation = { __typename?: "Mutation" } & Pick<
//   Mutation,
//   "confirmUser"
// >;

export type CreatePostMutationVariables = {
  data: PostInput;
};

export type CreatePostMutation = { __typename?: "Mutation" } & {
  createPost: { __typename?: "Post" } & Pick<Post, "id" | "title" | "text">;
};

export type FollowUserMutationVariables = {
  data: FollowUserInput;
};

export type FollowUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "followUser"
>;

export type ForgotPasswordMutationVariables = {
  email: Scalars["String"];
};

export type ForgotPasswordMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "forgotPassword"
>;

export type LoginMutationVariables = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type LoginMutation = { __typename?: "Mutation" } & {
  login: Maybe<
    { __typename?: "User" } & Pick<
      User,
      "id" | "firstName" | "lastName" | "email" | "name"
    >
  >;
};

export type LogoutMutationVariables = {};

export type LogoutMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "logout"
>;

export type RegisterMutationVariables = {
  data: RegisterInput;
};

// export type RegisterMutation = { __typename?: "Mutation" } & {
//   register: { __typename?: "User" } & Pick<
//     User,
//     "id" | "firstName" | "lastName" | "email" | "name"
//   >;
// };

export type UnFollowUserMutationVariables = {
  data: UnFollowUserInput;
};

export type UnFollowUserMutation = { __typename?: "Mutation" } & Pick<
  Mutation,
  "unFollowUser"
>;

export type GetAllMyImagesQueryVariables = {};

export type GetAllMyImagesQuery = { __typename?: "Query" } & {
  GetAllMyImages: Array<{ __typename?: "Image" } & Pick<Image, "id" | "uri">>;
};

export type GetGlobalPostsQueryVariables = {};

// export type GetGlobalPostsQuery = { __typename?: "Query" } & {
//   getGlobalPosts: Maybe<
//     Array<
//       { __typename?: "Post" } & Pick<
//         Post,
//         "id" | "title" | "text" | "created_at"
//       > & {
//           images: Maybe<
//             Array<{ __typename?: "Image" } & Pick<Image, "id" | "uri">>
//           >;
//           user: Maybe<{ __typename?: "User" } & Pick<User, "id" | "firstName">>;
//         }
//     >
//   >;
// };

export type GetThoseIFollowAndTheirPostsResolverQueryVariables = {};

export type GetThoseIFollowAndTheirPostsResolverQuery = {
  __typename?: "Query";
} & {
  getThoseIFollowAndTheirPostsResolver: Maybe<
    { __typename?: "User" } & Pick<
      User,
      "id" | "firstName" | "lastName" | "email" | "name"
    > & {
        following: Maybe<
          Array<
            Maybe<
              { __typename?: "User" } & Pick<
                User,
                "id" | "firstName" | "lastName"
              > & {
                  posts: Maybe<
                    Array<
                      { __typename?: "Post" } & Pick<
                        Post,
                        "id" | "title" | "text"
                      > & {
                          images: Maybe<
                            Array<
                              { __typename?: "Image" } & Pick<
                                Image,
                                "id" | "uri"
                              >
                            >
                          >;
                        }
                    >
                  >;
                }
            >
          >
        >;
      }
  >;
};

export type HelloWorldQueryVariables = {};

export type HelloWorldQuery = { __typename?: "Query" } & Pick<
  Query,
  "helloWorld"
>;

export type MeQueryVariables = {};

export type MeQuery = { __typename?: "Query" } & {
  me: Maybe<
    { __typename?: "User" } & Pick<
      User,
      "firstName" | "lastName" | "email" | "name" | "id"
    >
  >;
};

export type MyFollowingPostsQueryVariables = {};

export type MyFollowingPostsQuery = { __typename?: "Query" } & {
  myFollowingPosts: Maybe<
    Array<
      { __typename?: "Post" } & Pick<
        Post,
        "id" | "title" | "text" | "created_at"
      > & {
          images: Maybe<
            Array<{ __typename?: "Image" } & Pick<Image, "id" | "uri">>
          >;
          user: Maybe<
            { __typename?: "User" } & Pick<
              User,
              "id" | "firstName" | "lastName"
            >
          >;
        }
    >
  >;
};

export type GlobalPostsSubscriptionVariables = {};

export type GlobalPostsSubscription = { __typename?: "Subscription" } & {
  globalPosts: Maybe<
    { __typename?: "Post" } & Pick<Post, "id" | "title" | "text"> & {
        images: Maybe<
          Array<{ __typename?: "Image" } & Pick<Image, "id" | "uri">>
        >;
        user: Maybe<
          { __typename?: "User" } & Pick<User, "id" | "firstName" | "lastName">
        >;
      }
  >;
};

export type MessageThreadsSubscriptionVariables = {
  data: AddMessageToThreadInput_V2;
};

export type MessageThreadsSubscription = { __typename?: "Subscription" } & {
  messageThreads: { __typename?: "AddMessagePayload" } & Pick<
    AddMessagePayload,
    "success"
  > & {
      message: { __typename?: "Message" } & Pick<
        Message,
        "id" | "created_at" | "message"
      > & {
          images: Maybe<
            Array<Maybe<{ __typename?: "Image" } & Pick<Image, "id" | "uri">>>
          >;
          sentBy: { __typename?: "User" } & Pick<
            User,
            "id" | "firstName" | "lastName"
          >;
          user: { __typename?: "User" } & Pick<
            User,
            "id" | "firstName" | "lastName"
          >;
        };
    };
};

export const AddMessageToThreadDocument = gql`
  mutation AddMessageToThread(
    $threadId: ID!
    $sentTo: String!
    $message: String!
    $invitees: [ID!]!
    $images: [Upload]
  ) {
    addMessageToThread(
      threadId: $threadId
      sentTo: $sentTo
      message: $message
      invitees: $invitees
      images: $images
    ) {
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
export type AddMessageToThreadMutationFn = ReactApollo.MutationFn<
  AddMessageToThreadMutation,
  AddMessageToThreadMutationVariables
>;
export type AddMessageToThreadComponentProps = Omit<
  ReactApollo.MutationProps<
    AddMessageToThreadMutation,
    AddMessageToThreadMutationVariables
  >,
  "mutation"
>;

export const AddMessageToThreadComponent = (
  props: AddMessageToThreadComponentProps
) => (
  <ReactApollo.Mutation<
    AddMessageToThreadMutation,
    AddMessageToThreadMutationVariables
  >
    mutation={AddMessageToThreadDocument}
    {...props}
  />
);

export type AddMessageToThreadProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    AddMessageToThreadMutation,
    AddMessageToThreadMutationVariables
  >
> &
  TChildProps;
export function withAddMessageToThread<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AddMessageToThreadMutation,
    AddMessageToThreadMutationVariables,
    AddMessageToThreadProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AddMessageToThreadMutation,
    AddMessageToThreadMutationVariables,
    AddMessageToThreadProps<TChildProps>
  >(AddMessageToThreadDocument, {
    alias: "withAddMessageToThread",
    ...operationOptions
  });
}

export function useAddMessageToThreadMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AddMessageToThreadMutation,
    AddMessageToThreadMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    AddMessageToThreadMutation,
    AddMessageToThreadMutationVariables
  >(AddMessageToThreadDocument, baseOptions);
}
export type AddMessageToThreadMutationHookResult = ReturnType<
  typeof useAddMessageToThreadMutation
>;
export const AddNewMessageDocument = gql`
  mutation AddNewMessage($sentTo: String!, $message: String!) {
    addNewMessage(sentTo: $sentTo, message: $message)
  }
`;
export type AddNewMessageMutationFn = ReactApollo.MutationFn<
  AddNewMessageMutation,
  AddNewMessageMutationVariables
>;
export type AddNewMessageComponentProps = Omit<
  ReactApollo.MutationProps<
    AddNewMessageMutation,
    AddNewMessageMutationVariables
  >,
  "mutation"
>;

export const AddNewMessageComponent = (props: AddNewMessageComponentProps) => (
  <ReactApollo.Mutation<AddNewMessageMutation, AddNewMessageMutationVariables>
    mutation={AddNewMessageDocument}
    {...props}
  />
);

export type AddNewMessageProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<AddNewMessageMutation, AddNewMessageMutationVariables>
> &
  TChildProps;
export function withAddNewMessage<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    AddNewMessageMutation,
    AddNewMessageMutationVariables,
    AddNewMessageProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    AddNewMessageMutation,
    AddNewMessageMutationVariables,
    AddNewMessageProps<TChildProps>
  >(AddNewMessageDocument, {
    alias: "withAddNewMessage",
    ...operationOptions
  });
}

export function useAddNewMessageMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    AddNewMessageMutation,
    AddNewMessageMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    AddNewMessageMutation,
    AddNewMessageMutationVariables
  >(AddNewMessageDocument, baseOptions);
}
export type AddNewMessageMutationHookResult = ReturnType<
  typeof useAddNewMessageMutation
>;
export const CreateMessageThreadDocument = gql`
  mutation CreateMessageThread(
    $sentTo: String!
    $message: String!
    $images: [Upload]
    $invitees: [ID!]!
  ) {
    createMessageThread(
      sentTo: $sentTo
      message: $message
      images: $images
      invitees: $invitees
    ) {
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
export type CreateMessageThreadMutationFn = ReactApollo.MutationFn<
  CreateMessageThreadMutation,
  CreateMessageThreadMutationVariables
>;
export type CreateMessageThreadComponentProps = Omit<
  ReactApollo.MutationProps<
    CreateMessageThreadMutation,
    CreateMessageThreadMutationVariables
  >,
  "mutation"
>;

export const CreateMessageThreadComponent = (
  props: CreateMessageThreadComponentProps
) => (
  <ReactApollo.Mutation<
    CreateMessageThreadMutation,
    CreateMessageThreadMutationVariables
  >
    mutation={CreateMessageThreadDocument}
    {...props}
  />
);

export type CreateMessageThreadProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    CreateMessageThreadMutation,
    CreateMessageThreadMutationVariables
  >
> &
  TChildProps;
export function withCreateMessageThread<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreateMessageThreadMutation,
    CreateMessageThreadMutationVariables,
    CreateMessageThreadProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreateMessageThreadMutation,
    CreateMessageThreadMutationVariables,
    CreateMessageThreadProps<TChildProps>
  >(CreateMessageThreadDocument, {
    alias: "withCreateMessageThread",
    ...operationOptions
  });
}

export function useCreateMessageThreadMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreateMessageThreadMutation,
    CreateMessageThreadMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreateMessageThreadMutation,
    CreateMessageThreadMutationVariables
  >(CreateMessageThreadDocument, baseOptions);
}
export type CreateMessageThreadMutationHookResult = ReturnType<
  typeof useCreateMessageThreadMutation
>;
export const SignS3Document = gql`
  mutation SignS3($filename: String!, $filetype: String!) {
    signS3(filename: $filename, filetype: $filetype) {
      url
      signedRequest
    }
  }
`;
export type SignS3MutationFn = ReactApollo.MutationFn<
  SignS3Mutation,
  SignS3MutationVariables
>;
export type SignS3ComponentProps = Omit<
  ReactApollo.MutationProps<SignS3Mutation, SignS3MutationVariables>,
  "mutation"
>;

export const SignS3Component = (props: SignS3ComponentProps) => (
  <ReactApollo.Mutation<SignS3Mutation, SignS3MutationVariables>
    mutation={SignS3Document}
    {...props}
  />
);

export type SignS3Props<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<SignS3Mutation, SignS3MutationVariables>
> &
  TChildProps;
export function withSignS3<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    SignS3Mutation,
    SignS3MutationVariables,
    SignS3Props<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    SignS3Mutation,
    SignS3MutationVariables,
    SignS3Props<TChildProps>
  >(SignS3Document, {
    alias: "withSignS3",
    ...operationOptions
  });
}

export function useSignS3Mutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    SignS3Mutation,
    SignS3MutationVariables
  >
) {
  return ReactApolloHooks.useMutation<SignS3Mutation, SignS3MutationVariables>(
    SignS3Document,
    baseOptions
  );
}
export type SignS3MutationHookResult = ReturnType<typeof useSignS3Mutation>;
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
export type GetAllMyMessagesComponentProps = Omit<
  ReactApollo.QueryProps<GetAllMyMessagesQuery, GetAllMyMessagesQueryVariables>,
  "query"
>;

export const GetAllMyMessagesComponent = (
  props: GetAllMyMessagesComponentProps
) => (
  <ReactApollo.Query<GetAllMyMessagesQuery, GetAllMyMessagesQueryVariables>
    query={GetAllMyMessagesDocument}
    {...props}
  />
);

export type GetAllMyMessagesProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetAllMyMessagesQuery, GetAllMyMessagesQueryVariables>
> &
  TChildProps;
export function withGetAllMyMessages<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetAllMyMessagesQuery,
    GetAllMyMessagesQueryVariables,
    GetAllMyMessagesProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetAllMyMessagesQuery,
    GetAllMyMessagesQueryVariables,
    GetAllMyMessagesProps<TChildProps>
  >(GetAllMyMessagesDocument, {
    alias: "withGetAllMyMessages",
    ...operationOptions
  });
}

export function useGetAllMyMessagesQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    GetAllMyMessagesQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    GetAllMyMessagesQuery,
    GetAllMyMessagesQueryVariables
  >(GetAllMyMessagesDocument, baseOptions);
}
export type GetAllMyMessagesQueryHookResult = ReturnType<
  typeof useGetAllMyMessagesQuery
>;
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
export type GetListToCreateThreadComponentProps = Omit<
  ReactApollo.QueryProps<
    GetListToCreateThreadQuery,
    GetListToCreateThreadQueryVariables
  >,
  "query"
>;

export const GetListToCreateThreadComponent = (
  props: GetListToCreateThreadComponentProps
) => (
  <ReactApollo.Query<
    GetListToCreateThreadQuery,
    GetListToCreateThreadQueryVariables
  >
    query={GetListToCreateThreadDocument}
    {...props}
  />
);

export type GetListToCreateThreadProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    GetListToCreateThreadQuery,
    GetListToCreateThreadQueryVariables
  >
> &
  TChildProps;
export function withGetListToCreateThread<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetListToCreateThreadQuery,
    GetListToCreateThreadQueryVariables,
    GetListToCreateThreadProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetListToCreateThreadQuery,
    GetListToCreateThreadQueryVariables,
    GetListToCreateThreadProps<TChildProps>
  >(GetListToCreateThreadDocument, {
    alias: "withGetListToCreateThread",
    ...operationOptions
  });
}

export function useGetListToCreateThreadQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    GetListToCreateThreadQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    GetListToCreateThreadQuery,
    GetListToCreateThreadQueryVariables
  >(GetListToCreateThreadDocument, baseOptions);
}
export type GetListToCreateThreadQueryHookResult = ReturnType<
  typeof useGetListToCreateThreadQuery
>;
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
export type GetMessageThreadsComponentProps = Omit<
  ReactApollo.QueryProps<
    GetMessageThreadsQuery,
    GetMessageThreadsQueryVariables
  >,
  "query"
>;

export const GetMessageThreadsComponent = (
  props: GetMessageThreadsComponentProps
) => (
  <ReactApollo.Query<GetMessageThreadsQuery, GetMessageThreadsQueryVariables>
    query={GetMessageThreadsDocument}
    {...props}
  />
);

export type GetMessageThreadsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetMessageThreadsQuery, GetMessageThreadsQueryVariables>
> &
  TChildProps;
export function withGetMessageThreads<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetMessageThreadsQuery,
    GetMessageThreadsQueryVariables,
    GetMessageThreadsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetMessageThreadsQuery,
    GetMessageThreadsQueryVariables,
    GetMessageThreadsProps<TChildProps>
  >(GetMessageThreadsDocument, {
    alias: "withGetMessageThreads",
    ...operationOptions
  });
}

export function useGetMessageThreadsQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    GetMessageThreadsQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    GetMessageThreadsQuery,
    GetMessageThreadsQueryVariables
  >(GetMessageThreadsDocument, baseOptions);
}
export type GetMessageThreadsQueryHookResult = ReturnType<
  typeof useGetMessageThreadsQuery
>;
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
export type GetMyMessagesFromUserComponentProps = Omit<
  ReactApollo.QueryProps<
    GetMyMessagesFromUserQuery,
    GetMyMessagesFromUserQueryVariables
  >,
  "query"
> &
  (
    | { variables: GetMyMessagesFromUserQueryVariables; skip?: false }
    | { skip: true });

export const GetMyMessagesFromUserComponent = (
  props: GetMyMessagesFromUserComponentProps
) => (
  <ReactApollo.Query<
    GetMyMessagesFromUserQuery,
    GetMyMessagesFromUserQueryVariables
  >
    query={GetMyMessagesFromUserDocument}
    {...props}
  />
);

export type GetMyMessagesFromUserProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    GetMyMessagesFromUserQuery,
    GetMyMessagesFromUserQueryVariables
  >
> &
  TChildProps;
export function withGetMyMessagesFromUser<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetMyMessagesFromUserQuery,
    GetMyMessagesFromUserQueryVariables,
    GetMyMessagesFromUserProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetMyMessagesFromUserQuery,
    GetMyMessagesFromUserQueryVariables,
    GetMyMessagesFromUserProps<TChildProps>
  >(GetMyMessagesFromUserDocument, {
    alias: "withGetMyMessagesFromUser",
    ...operationOptions
  });
}

export function useGetMyMessagesFromUserQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    GetMyMessagesFromUserQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    GetMyMessagesFromUserQuery,
    GetMyMessagesFromUserQueryVariables
  >(GetMyMessagesFromUserDocument, baseOptions);
}
export type GetMyMessagesFromUserQueryHookResult = ReturnType<
  typeof useGetMyMessagesFromUserQuery
>;
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
export type NewMessageComponentProps = Omit<
  ReactApollo.SubscriptionProps<
    NewMessageSubscription,
    NewMessageSubscriptionVariables
  >,
  "subscription"
>;

export const NewMessageComponent = (props: NewMessageComponentProps) => (
  <ReactApollo.Subscription<
    NewMessageSubscription,
    NewMessageSubscriptionVariables
  >
    subscription={NewMessageDocument}
    {...props}
  />
);

export type NewMessageProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<NewMessageSubscription, NewMessageSubscriptionVariables>
> &
  TChildProps;
export function withNewMessage<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    NewMessageSubscription,
    NewMessageSubscriptionVariables,
    NewMessageProps<TChildProps>
  >
) {
  return ReactApollo.withSubscription<
    TProps,
    NewMessageSubscription,
    NewMessageSubscriptionVariables,
    NewMessageProps<TChildProps>
  >(NewMessageDocument, {
    alias: "withNewMessage",
    ...operationOptions
  });
}

export function useNewMessageSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    NewMessageSubscription,
    NewMessageSubscriptionVariables
  >
) {
  return ReactApolloHooks.useSubscription<
    NewMessageSubscription,
    NewMessageSubscriptionVariables
  >(NewMessageDocument, baseOptions);
}
export type NewMessageSubscriptionHookResult = ReturnType<
  typeof useNewMessageSubscription
>;
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
export type ChangePasswordMutationFn = ReactApollo.MutationFn<
  ChangePasswordMutation,
  ChangePasswordMutationVariables
>;
export type ChangePasswordComponentProps = Omit<
  ReactApollo.MutationProps<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >,
  "mutation"
>;

export const ChangePasswordComponent = (
  props: ChangePasswordComponentProps
) => (
  <ReactApollo.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables>
    mutation={ChangePasswordDocument}
    {...props}
  />
);

export type ChangePasswordProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >
> &
  TChildProps;
export function withChangePassword<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ChangePasswordMutation,
    ChangePasswordMutationVariables,
    ChangePasswordProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    ChangePasswordMutation,
    ChangePasswordMutationVariables,
    ChangePasswordProps<TChildProps>
  >(ChangePasswordDocument, {
    alias: "withChangePassword",
    ...operationOptions
  });
}

export function useChangePasswordMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
  >(ChangePasswordDocument, baseOptions);
}
export type ChangePasswordMutationHookResult = ReturnType<
  typeof useChangePasswordMutation
>;
export const ConfirmUserDocument = gql`
  mutation ConfirmUser($token: String!) {
    confirmUser(token: $token)
  }
`;
export type ConfirmUserMutationFn = ReactApollo.MutationFn<
  ConfirmUserMutation,
  ConfirmUserMutationVariables
>;
export type ConfirmUserComponentProps = Omit<
  ReactApollo.MutationProps<ConfirmUserMutation, ConfirmUserMutationVariables>,
  "mutation"
>;

export const ConfirmUserComponent = (props: ConfirmUserComponentProps) => (
  <ReactApollo.Mutation<ConfirmUserMutation, ConfirmUserMutationVariables>
    mutation={ConfirmUserDocument}
    {...props}
  />
);

export type ConfirmUserProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<ConfirmUserMutation, ConfirmUserMutationVariables>
> &
  TChildProps;
export function withConfirmUser<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ConfirmUserMutation,
    ConfirmUserMutationVariables,
    ConfirmUserProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    ConfirmUserMutation,
    ConfirmUserMutationVariables,
    ConfirmUserProps<TChildProps>
  >(ConfirmUserDocument, {
    alias: "withConfirmUser",
    ...operationOptions
  });
}

export function useConfirmUserMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ConfirmUserMutation,
    ConfirmUserMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    ConfirmUserMutation,
    ConfirmUserMutationVariables
  >(ConfirmUserDocument, baseOptions);
}
export type ConfirmUserMutationHookResult = ReturnType<
  typeof useConfirmUserMutation
>;
export const CreatePostDocument = gql`
  mutation CreatePost($data: PostInput!) {
    createPost(data: $data) {
      id
      title
      text
    }
  }
`;
export type CreatePostMutationFn = ReactApollo.MutationFn<
  CreatePostMutation,
  CreatePostMutationVariables
>;
export type CreatePostComponentProps = Omit<
  ReactApollo.MutationProps<CreatePostMutation, CreatePostMutationVariables>,
  "mutation"
>;

export const CreatePostComponent = (props: CreatePostComponentProps) => (
  <ReactApollo.Mutation<CreatePostMutation, CreatePostMutationVariables>
    mutation={CreatePostDocument}
    {...props}
  />
);

export type CreatePostProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<CreatePostMutation, CreatePostMutationVariables>
> &
  TChildProps;
export function withCreatePost<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    CreatePostMutation,
    CreatePostMutationVariables,
    CreatePostProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    CreatePostMutation,
    CreatePostMutationVariables,
    CreatePostProps<TChildProps>
  >(CreatePostDocument, {
    alias: "withCreatePost",
    ...operationOptions
  });
}

export function useCreatePostMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    CreatePostMutation,
    CreatePostMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    CreatePostMutation,
    CreatePostMutationVariables
  >(CreatePostDocument, baseOptions);
}
export type CreatePostMutationHookResult = ReturnType<
  typeof useCreatePostMutation
>;
export const FollowUserDocument = gql`
  mutation FollowUser($data: FollowUserInput!) {
    followUser(data: $data)
  }
`;
export type FollowUserMutationFn = ReactApollo.MutationFn<
  FollowUserMutation,
  FollowUserMutationVariables
>;
export type FollowUserComponentProps = Omit<
  ReactApollo.MutationProps<FollowUserMutation, FollowUserMutationVariables>,
  "mutation"
>;

export const FollowUserComponent = (props: FollowUserComponentProps) => (
  <ReactApollo.Mutation<FollowUserMutation, FollowUserMutationVariables>
    mutation={FollowUserDocument}
    {...props}
  />
);

export type FollowUserProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<FollowUserMutation, FollowUserMutationVariables>
> &
  TChildProps;
export function withFollowUser<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    FollowUserMutation,
    FollowUserMutationVariables,
    FollowUserProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    FollowUserMutation,
    FollowUserMutationVariables,
    FollowUserProps<TChildProps>
  >(FollowUserDocument, {
    alias: "withFollowUser",
    ...operationOptions
  });
}

export function useFollowUserMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    FollowUserMutation,
    FollowUserMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    FollowUserMutation,
    FollowUserMutationVariables
  >(FollowUserDocument, baseOptions);
}
export type FollowUserMutationHookResult = ReturnType<
  typeof useFollowUserMutation
>;
export const ForgotPasswordDocument = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;
export type ForgotPasswordMutationFn = ReactApollo.MutationFn<
  ForgotPasswordMutation,
  ForgotPasswordMutationVariables
>;
export type ForgotPasswordComponentProps = Omit<
  ReactApollo.MutationProps<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >,
  "mutation"
>;

export const ForgotPasswordComponent = (
  props: ForgotPasswordComponentProps
) => (
  <ReactApollo.Mutation<ForgotPasswordMutation, ForgotPasswordMutationVariables>
    mutation={ForgotPasswordDocument}
    {...props}
  />
);

export type ForgotPasswordProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
> &
  TChildProps;
export function withForgotPassword<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables,
    ForgotPasswordProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables,
    ForgotPasswordProps<TChildProps>
  >(ForgotPasswordDocument, {
    alias: "withForgotPassword",
    ...operationOptions
  });
}

export function useForgotPasswordMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    ForgotPasswordMutation,
    ForgotPasswordMutationVariables
  >(ForgotPasswordDocument, baseOptions);
}
export type ForgotPasswordMutationHookResult = ReturnType<
  typeof useForgotPasswordMutation
>;
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
export type LoginMutationFn = ReactApollo.MutationFn<
  LoginMutation,
  LoginMutationVariables
>;
export type LoginComponentProps = Omit<
  ReactApollo.MutationProps<LoginMutation, LoginMutationVariables>,
  "mutation"
>;

export const LoginComponent = (props: LoginComponentProps) => (
  <ReactApollo.Mutation<LoginMutation, LoginMutationVariables>
    mutation={LoginDocument}
    {...props}
  />
);

export type LoginProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LoginMutation, LoginMutationVariables>
> &
  TChildProps;
export function withLogin<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    LoginMutation,
    LoginMutationVariables,
    LoginProps<TChildProps>
  >(LoginDocument, {
    alias: "withLogin",
    ...operationOptions
  });
}

export function useLoginMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    LoginMutation,
    LoginMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<LoginMutation, LoginMutationVariables>(
    LoginDocument,
    baseOptions
  );
}
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export const LogoutDocument = gql`
  mutation Logout {
    logout
  }
`;
export type LogoutMutationFn = ReactApollo.MutationFn<
  LogoutMutation,
  LogoutMutationVariables
>;
export type LogoutComponentProps = Omit<
  ReactApollo.MutationProps<LogoutMutation, LogoutMutationVariables>,
  "mutation"
>;

export const LogoutComponent = (props: LogoutComponentProps) => (
  <ReactApollo.Mutation<LogoutMutation, LogoutMutationVariables>
    mutation={LogoutDocument}
    {...props}
  />
);

export type LogoutProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<LogoutMutation, LogoutMutationVariables>
> &
  TChildProps;
export function withLogout<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    LogoutMutation,
    LogoutMutationVariables,
    LogoutProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    LogoutMutation,
    LogoutMutationVariables,
    LogoutProps<TChildProps>
  >(LogoutDocument, {
    alias: "withLogout",
    ...operationOptions
  });
}

export function useLogoutMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    LogoutMutation,
    LogoutMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<LogoutMutation, LogoutMutationVariables>(
    LogoutDocument,
    baseOptions
  );
}
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
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
export type RegisterMutationFn = ReactApollo.MutationFn<
  RegisterMutation,
  RegisterMutationVariables
>;
export type RegisterComponentProps = Omit<
  ReactApollo.MutationProps<RegisterMutation, RegisterMutationVariables>,
  "mutation"
>;

export const RegisterComponent = (props: RegisterComponentProps) => (
  <ReactApollo.Mutation<RegisterMutation, RegisterMutationVariables>
    mutation={RegisterDocument}
    {...props}
  />
);

export type RegisterProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<RegisterMutation, RegisterMutationVariables>
> &
  TChildProps;
export function withRegister<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    RegisterMutation,
    RegisterMutationVariables,
    RegisterProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    RegisterMutation,
    RegisterMutationVariables,
    RegisterProps<TChildProps>
  >(RegisterDocument, {
    alias: "withRegister",
    ...operationOptions
  });
}

export function useRegisterMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    RegisterMutation,
    RegisterMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    RegisterMutation,
    RegisterMutationVariables
  >(RegisterDocument, baseOptions);
}
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export const UnFollowUserDocument = gql`
  mutation UnFollowUser($data: UnFollowUserInput!) {
    unFollowUser(data: $data)
  }
`;
export type UnFollowUserMutationFn = ReactApollo.MutationFn<
  UnFollowUserMutation,
  UnFollowUserMutationVariables
>;
export type UnFollowUserComponentProps = Omit<
  ReactApollo.MutationProps<
    UnFollowUserMutation,
    UnFollowUserMutationVariables
  >,
  "mutation"
>;

export const UnFollowUserComponent = (props: UnFollowUserComponentProps) => (
  <ReactApollo.Mutation<UnFollowUserMutation, UnFollowUserMutationVariables>
    mutation={UnFollowUserDocument}
    {...props}
  />
);

export type UnFollowUserProps<TChildProps = {}> = Partial<
  ReactApollo.MutateProps<UnFollowUserMutation, UnFollowUserMutationVariables>
> &
  TChildProps;
export function withUnFollowUser<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    UnFollowUserMutation,
    UnFollowUserMutationVariables,
    UnFollowUserProps<TChildProps>
  >
) {
  return ReactApollo.withMutation<
    TProps,
    UnFollowUserMutation,
    UnFollowUserMutationVariables,
    UnFollowUserProps<TChildProps>
  >(UnFollowUserDocument, {
    alias: "withUnFollowUser",
    ...operationOptions
  });
}

export function useUnFollowUserMutation(
  baseOptions?: ReactApolloHooks.MutationHookOptions<
    UnFollowUserMutation,
    UnFollowUserMutationVariables
  >
) {
  return ReactApolloHooks.useMutation<
    UnFollowUserMutation,
    UnFollowUserMutationVariables
  >(UnFollowUserDocument, baseOptions);
}
export type UnFollowUserMutationHookResult = ReturnType<
  typeof useUnFollowUserMutation
>;
export const GetAllMyImagesDocument = gql`
  query GetAllMyImages {
    GetAllMyImages {
      id
      uri
    }
  }
`;
export type GetAllMyImagesComponentProps = Omit<
  ReactApollo.QueryProps<GetAllMyImagesQuery, GetAllMyImagesQueryVariables>,
  "query"
>;

export const GetAllMyImagesComponent = (
  props: GetAllMyImagesComponentProps
) => (
  <ReactApollo.Query<GetAllMyImagesQuery, GetAllMyImagesQueryVariables>
    query={GetAllMyImagesDocument}
    {...props}
  />
);

export type GetAllMyImagesProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetAllMyImagesQuery, GetAllMyImagesQueryVariables>
> &
  TChildProps;
export function withGetAllMyImages<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetAllMyImagesQuery,
    GetAllMyImagesQueryVariables,
    GetAllMyImagesProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetAllMyImagesQuery,
    GetAllMyImagesQueryVariables,
    GetAllMyImagesProps<TChildProps>
  >(GetAllMyImagesDocument, {
    alias: "withGetAllMyImages",
    ...operationOptions
  });
}

export function useGetAllMyImagesQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetAllMyImagesQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    GetAllMyImagesQuery,
    GetAllMyImagesQueryVariables
  >(GetAllMyImagesDocument, baseOptions);
}
export type GetAllMyImagesQueryHookResult = ReturnType<
  typeof useGetAllMyImagesQuery
>;
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
export type GetGlobalPostsComponentProps = Omit<
  ReactApollo.QueryProps<GetGlobalPostsQuery, GetGlobalPostsQueryVariables>,
  "query"
>;

export const GetGlobalPostsComponent = (
  props: GetGlobalPostsComponentProps
) => (
  <ReactApollo.Query<GetGlobalPostsQuery, GetGlobalPostsQueryVariables>
    query={GetGlobalPostsDocument}
    {...props}
  />
);

export type GetGlobalPostsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<GetGlobalPostsQuery, GetGlobalPostsQueryVariables>
> &
  TChildProps;
export function withGetGlobalPosts<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetGlobalPostsQuery,
    GetGlobalPostsQueryVariables,
    GetGlobalPostsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetGlobalPostsQuery,
    GetGlobalPostsQueryVariables,
    GetGlobalPostsProps<TChildProps>
  >(GetGlobalPostsDocument, {
    alias: "withGetGlobalPosts",
    ...operationOptions
  });
}

export function useGetGlobalPostsQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<GetGlobalPostsQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    GetGlobalPostsQuery,
    GetGlobalPostsQueryVariables
  >(GetGlobalPostsDocument, baseOptions);
}
export type GetGlobalPostsQueryHookResult = ReturnType<
  typeof useGetGlobalPostsQuery
>;
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
export type GetThoseIFollowAndTheirPostsResolverComponentProps = Omit<
  ReactApollo.QueryProps<
    GetThoseIFollowAndTheirPostsResolverQuery,
    GetThoseIFollowAndTheirPostsResolverQueryVariables
  >,
  "query"
>;

export const GetThoseIFollowAndTheirPostsResolverComponent = (
  props: GetThoseIFollowAndTheirPostsResolverComponentProps
) => (
  <ReactApollo.Query<
    GetThoseIFollowAndTheirPostsResolverQuery,
    GetThoseIFollowAndTheirPostsResolverQueryVariables
  >
    query={GetThoseIFollowAndTheirPostsResolverDocument}
    {...props}
  />
);

export type GetThoseIFollowAndTheirPostsResolverProps<
  TChildProps = {}
> = Partial<
  ReactApollo.DataProps<
    GetThoseIFollowAndTheirPostsResolverQuery,
    GetThoseIFollowAndTheirPostsResolverQueryVariables
  >
> &
  TChildProps;
export function withGetThoseIFollowAndTheirPostsResolver<
  TProps,
  TChildProps = {}
>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GetThoseIFollowAndTheirPostsResolverQuery,
    GetThoseIFollowAndTheirPostsResolverQueryVariables,
    GetThoseIFollowAndTheirPostsResolverProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    GetThoseIFollowAndTheirPostsResolverQuery,
    GetThoseIFollowAndTheirPostsResolverQueryVariables,
    GetThoseIFollowAndTheirPostsResolverProps<TChildProps>
  >(GetThoseIFollowAndTheirPostsResolverDocument, {
    alias: "withGetThoseIFollowAndTheirPostsResolver",
    ...operationOptions
  });
}

export function useGetThoseIFollowAndTheirPostsResolverQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    GetThoseIFollowAndTheirPostsResolverQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    GetThoseIFollowAndTheirPostsResolverQuery,
    GetThoseIFollowAndTheirPostsResolverQueryVariables
  >(GetThoseIFollowAndTheirPostsResolverDocument, baseOptions);
}
export type GetThoseIFollowAndTheirPostsResolverQueryHookResult = ReturnType<
  typeof useGetThoseIFollowAndTheirPostsResolverQuery
>;
export const HelloWorldDocument = gql`
  query HelloWorld {
    helloWorld
  }
`;
export type HelloWorldComponentProps = Omit<
  ReactApollo.QueryProps<HelloWorldQuery, HelloWorldQueryVariables>,
  "query"
>;

export const HelloWorldComponent = (props: HelloWorldComponentProps) => (
  <ReactApollo.Query<HelloWorldQuery, HelloWorldQueryVariables>
    query={HelloWorldDocument}
    {...props}
  />
);

export type HelloWorldProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<HelloWorldQuery, HelloWorldQueryVariables>
> &
  TChildProps;
export function withHelloWorld<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    HelloWorldQuery,
    HelloWorldQueryVariables,
    HelloWorldProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    HelloWorldQuery,
    HelloWorldQueryVariables,
    HelloWorldProps<TChildProps>
  >(HelloWorldDocument, {
    alias: "withHelloWorld",
    ...operationOptions
  });
}

export function useHelloWorldQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<HelloWorldQueryVariables>
) {
  return ReactApolloHooks.useQuery<HelloWorldQuery, HelloWorldQueryVariables>(
    HelloWorldDocument,
    baseOptions
  );
}
export type HelloWorldQueryHookResult = ReturnType<typeof useHelloWorldQuery>;
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
export type MeComponentProps = Omit<
  ReactApollo.QueryProps<MeQuery, MeQueryVariables>,
  "query"
>;

export const MeComponent = (props: MeComponentProps) => (
  <ReactApollo.Query<MeQuery, MeQueryVariables> query={MeDocument} {...props} />
);

export type MeProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<MeQuery, MeQueryVariables>
> &
  TChildProps;
export function withMe<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    MeQuery,
    MeQueryVariables,
    MeProps<TChildProps>
  >(MeDocument, {
    alias: "withMe",
    ...operationOptions
  });
}

export function useMeQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<MeQueryVariables>
) {
  return ReactApolloHooks.useQuery<MeQuery, MeQueryVariables>(
    MeDocument,
    baseOptions
  );
}
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
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
export type MyFollowingPostsComponentProps = Omit<
  ReactApollo.QueryProps<MyFollowingPostsQuery, MyFollowingPostsQueryVariables>,
  "query"
>;

export const MyFollowingPostsComponent = (
  props: MyFollowingPostsComponentProps
) => (
  <ReactApollo.Query<MyFollowingPostsQuery, MyFollowingPostsQueryVariables>
    query={MyFollowingPostsDocument}
    {...props}
  />
);

export type MyFollowingPostsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<MyFollowingPostsQuery, MyFollowingPostsQueryVariables>
> &
  TChildProps;
export function withMyFollowingPosts<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    MyFollowingPostsQuery,
    MyFollowingPostsQueryVariables,
    MyFollowingPostsProps<TChildProps>
  >
) {
  return ReactApollo.withQuery<
    TProps,
    MyFollowingPostsQuery,
    MyFollowingPostsQueryVariables,
    MyFollowingPostsProps<TChildProps>
  >(MyFollowingPostsDocument, {
    alias: "withMyFollowingPosts",
    ...operationOptions
  });
}

export function useMyFollowingPostsQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<
    MyFollowingPostsQueryVariables
  >
) {
  return ReactApolloHooks.useQuery<
    MyFollowingPostsQuery,
    MyFollowingPostsQueryVariables
  >(MyFollowingPostsDocument, baseOptions);
}
export type MyFollowingPostsQueryHookResult = ReturnType<
  typeof useMyFollowingPostsQuery
>;
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
export type GlobalPostsComponentProps = Omit<
  ReactApollo.SubscriptionProps<
    GlobalPostsSubscription,
    GlobalPostsSubscriptionVariables
  >,
  "subscription"
>;

export const GlobalPostsComponent = (props: GlobalPostsComponentProps) => (
  <ReactApollo.Subscription<
    GlobalPostsSubscription,
    GlobalPostsSubscriptionVariables
  >
    subscription={GlobalPostsDocument}
    {...props}
  />
);

export type GlobalPostsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    GlobalPostsSubscription,
    GlobalPostsSubscriptionVariables
  >
> &
  TChildProps;
export function withGlobalPosts<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    GlobalPostsSubscription,
    GlobalPostsSubscriptionVariables,
    GlobalPostsProps<TChildProps>
  >
) {
  return ReactApollo.withSubscription<
    TProps,
    GlobalPostsSubscription,
    GlobalPostsSubscriptionVariables,
    GlobalPostsProps<TChildProps>
  >(GlobalPostsDocument, {
    alias: "withGlobalPosts",
    ...operationOptions
  });
}

export function useGlobalPostsSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    GlobalPostsSubscription,
    GlobalPostsSubscriptionVariables
  >
) {
  return ReactApolloHooks.useSubscription<
    GlobalPostsSubscription,
    GlobalPostsSubscriptionVariables
  >(GlobalPostsDocument, baseOptions);
}
export type GlobalPostsSubscriptionHookResult = ReturnType<
  typeof useGlobalPostsSubscription
>;
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
export type MessageThreadsComponentProps = Omit<
  ReactApollo.SubscriptionProps<
    MessageThreadsSubscription,
    MessageThreadsSubscriptionVariables
  >,
  "subscription"
>;

export const MessageThreadsComponent = (
  props: MessageThreadsComponentProps
) => (
  <ReactApollo.Subscription<
    MessageThreadsSubscription,
    MessageThreadsSubscriptionVariables
  >
    subscription={MessageThreadsDocument}
    {...props}
  />
);

export type MessageThreadsProps<TChildProps = {}> = Partial<
  ReactApollo.DataProps<
    MessageThreadsSubscription,
    MessageThreadsSubscriptionVariables
  >
> &
  TChildProps;
export function withMessageThreads<TProps, TChildProps = {}>(
  operationOptions?: ReactApollo.OperationOption<
    TProps,
    MessageThreadsSubscription,
    MessageThreadsSubscriptionVariables,
    MessageThreadsProps<TChildProps>
  >
) {
  return ReactApollo.withSubscription<
    TProps,
    MessageThreadsSubscription,
    MessageThreadsSubscriptionVariables,
    MessageThreadsProps<TChildProps>
  >(MessageThreadsDocument, {
    alias: "withMessageThreads",
    ...operationOptions
  });
}

export function useMessageThreadsSubscription(
  baseOptions?: ReactApolloHooks.SubscriptionHookOptions<
    MessageThreadsSubscription,
    MessageThreadsSubscriptionVariables
  >
) {
  return ReactApolloHooks.useSubscription<
    MessageThreadsSubscription,
    MessageThreadsSubscriptionVariables
  >(MessageThreadsDocument, baseOptions);
}
export type MessageThreadsSubscriptionHookResult = ReturnType<
  typeof useMessageThreadsSubscription
>;
