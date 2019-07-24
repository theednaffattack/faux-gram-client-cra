import { FlexProps, CardProps, ButtonProps } from "rebass";
import {
  BordersProps,
  BoxShadowProps,
  BorderRadiusProps,
  HeightProps,
  MaxWidthProps,
  MinHeightProps,
  SpaceProps,
  ColorProps,
  WidthProps,
  LetterSpacingProps,
  FontWeightProps,
  FontSizeProps,
  FontFamilyProps,
  MinWidthProps,
  MaxHeightProps,
  BottomProps,
  PositionProps,
  TopProps,
  RightProps,
  LeftProps,
  OverflowProps,
  FlexboxProps
} from "styled-system";
import {
  DetailedHTMLProps,
  LiHTMLAttributes,
  HTMLAttributes,
  InputHTMLAttributes
} from "react";

// export interface IIconProps {
//   fill: string;
//   size: string;
//   width: string | number;
// }

export type TFlexProps = MinHeightProps & BordersProps & FlexProps;

export interface IIconProps {
  fill: string;
  name: string;
  size?: string;
  width?: string | number;
}

export interface IAbFlexProps
  extends MinHeightProps,
    BordersProps,
    FlexProps,
    PositionProps,
    BottomProps,
    TopProps,
    RightProps,
    LeftProps,
    OverflowProps {}

export interface IFlexShadowProps extends FlexProps, BoxShadowProps {}

export interface IPosedRouterProps
  extends FlexboxProps,
    SpaceProps,
    WidthProps {
  children: any;
  location?: any;
  style?: any;
}

export type TMaxFlexProps = BordersProps &
  FlexProps &
  MaxWidthProps &
  MinHeightProps &
  MinWidthProps &
  MaxHeightProps;

export type TLogoFlexProps = BoxShadowProps &
  BorderRadiusProps &
  FlexProps &
  HeightProps;

export type TStyleLiProps = HTMLLIElement & SpaceProps;

export type TStyledUl = DetailedHTMLProps<
  HTMLAttributes<HTMLUListElement>,
  HTMLUListElement
>;

export type TStyledLi = DetailedHTMLProps<
  LiHTMLAttributes<HTMLLIElement>,
  HTMLLIElement
> &
  SpaceProps;

export interface ITrySvgProps {
  fill: string;
}

export type TInputBProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  ColorProps &
  BordersProps &
  SpaceProps &
  WidthProps &
  HeightProps &
  BorderRadiusProps &
  FontFamilyProps &
  FontSizeProps &
  FontWeightProps &
  LetterSpacingProps;

export interface IInputBProps
  extends React.DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

export interface IInputFieldProps {
  label: string;
}

export interface IIconEmailProps extends SpaceProps, WidthProps {
  fill: string;
}

export interface IRegisterFormBodyProps {
  handleSubmit: any;
}

export interface ICardProps extends CardProps, MaxWidthProps {}

export interface IImagePreviewProps {
  files?: string[];
  imageFiles: string[];
}

export interface IDropZoneProps {
  data: any;
  disabled: boolean;
  error: any;
  loading: any;
  me: any;
  mutation: any;
  onFilesAdded: any;
  signS3: any;
}

export interface IDropZoneState {
  highlight: boolean;
  files: any[];
  name: string;
}

export interface IUnFollowButtonProps extends ButtonProps {
  me: string;
  oldData: any;
  followingId: string;
}

export interface IFollowButtonProps {
  data?: any;
  children: any;
  followUser: any;
  me: any;
  postUserId: string;
  errorGlblPosts: any;
}

export interface IChatBodyProps {
  chatEmoji: string;
  chatInput: string;
  dataMessageThreads: any;
  disabled: boolean;
  emojiPickerVisible: boolean;
  handleEngageMicrophoneClick: any;
  handleOpenEmojiMenuClick: any;
  handleSelectEmojiClick: any;
  handleChatFieldChange: any;
  handleUploadFileClick: any;
  handleThreadSelection: any;
  handleThreadAddThreadClick: any;
  handleChatMenuClick: any;
  handleAddInviteeToThread: any;
  handleRemoveInviteeToThread: any;
  loadingMessageThreads: any;
  me: any;
  newThreadInvitees: any;
  newThreadDisabled: boolean;
  selectedThreadId: any;
  selectedThreadIndex: number | null;
  showMessagingAddressBook: any;
  messagesEndRef: any;
}

export interface IMinButtonProps extends MinHeightProps, ButtonProps {}

export interface IUserProfileImage {
  user: any;
  flexInstruction: "row" | "column";
  color: string;
  handleRemoveInviteeToThread: any;
  isMe: boolean;
  buttonThing: boolean;
}

export interface IChatFormProps {
  chatEmoji: string;
  disabled: boolean;
  emojiPickerVisible: boolean;
  files: any[];
  handleChatFieldChange: any;
  handleEngageMicrophoneClick: any;
  handleOpenEmojiMenuClick: any;
  handleUploadFileClick: any;
  handleThreadSelection: any;
  newThreadInvitees: any[];
  selectedThreadId: string;
  sentTo: string;
  threadId: string;
}

export interface IChatFormState {
  files: any[];
}

export interface IChatFormProps {
  files: any[];
  selectedThreadId: string;
  newThreadDisabled: boolean;
}

export interface IAddressBookMutationProps {
  dataMessageThreads: any;
  selectedThreadIndex: number | null;
  handleAddInviteeToThread: any;
}
