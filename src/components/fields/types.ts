import {
  BordersProps,
  ColorProps,
  WidthProps,
  SpaceProps,
  HeightProps,
  BorderRadiusProps,
  FontFamilyProps,
  FontSizeProps,
  LetterSpacingProps
} from "styled-system";
import { DetailedHTMLProps, InputHTMLAttributes, HTMLAttributes } from "react";

export type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface IStyledCheckboxProps
  extends React.DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {}

export type ChatInputProps = InputProps &
  ColorProps &
  BordersProps &
  SpaceProps &
  WidthProps &
  HeightProps &
  BorderRadiusProps &
  FontSizeProps &
  LetterSpacingProps;
