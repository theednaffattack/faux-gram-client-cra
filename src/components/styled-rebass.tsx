import React from "react";
import { Link } from "@reach/router";
import {
  Box,
  Button,
  Flex as FlexBase,
  Card as CardBase,
  Heading,
  Text
} from "rebass";
import {
  maxWidth,
  minHeight,
  borders,
  boxShadow,
  borderRadius,
  height,
  space,
  color,
  width,
  fontFamily,
  fontSize,
  fontWeight,
  letterSpacing,
  minWidth,
  maxHeight,
  bottom,
  position,
  left,
  right,
  top,
  overflow
} from "styled-system";
import styled from "styled-components";
import IconBase from "react-geomicons";

import {
  TFlexProps,
  TMaxFlexProps,
  TLogoFlexProps,
  TStyledLi,
  TStyledUl,
  TInputBProps,
  IIconEmailProps,
  ICardProps,
  IAbFlexProps,
  IMinButtonProps,
  IFlexShadowProps
} from "./types";

import EmailIconBase from "../components/check-email-icon";

interface IisPartiallyActiveProps {
  isPartiallyCurrent: boolean;
}

const StyledLink = styled(Link)`
  ${color}
`;

const isPartiallyActive = ({ isPartiallyCurrent }: IisPartiallyActiveProps) => {
  return isPartiallyCurrent
    ? { style: { color: "crimson" } }
    : { style: { color: "white" } };
};

export const PartialNavLink = ({ children, style, ...props }: any) => (
  <Link getProps={isPartiallyActive} style={style} {...props}>
    {children}
  </Link>
);

interface IisActiveProps {
  isCurrent: boolean;
}

const isActive = ({ isCurrent }: IisActiveProps) => {
  return isCurrent
    ? { style: { color: "pink" } }
    : { style: { color: "white" } };
};

export const NavLink = ({ children, style, ...props }: any) => (
  <StyledLink getProps={isActive} style={style} {...props}>
    {children}
  </StyledLink>
);

export const LinkLink = ({ children, style, ...props }: any) => (
  <StyledLink {...props}>{children}</StyledLink>
);

export const Icon = styled(IconBase)`
  ${space}
`;

export const FlexShadow: React.FC<IFlexShadowProps> = styled(FlexBase)`
  ${boxShadow}
`;

export const MinButton: React.FC<IMinButtonProps> = styled(Button)`
  ${minHeight}
`;

export const Card: React.FC<ICardProps> = styled(CardBase)`
  ${maxWidth}
`;

export const Flex: React.FC<TFlexProps> = styled(FlexBase)`
  ${minHeight}
  ${borders}
`;

export const AbFlex: React.FC<IAbFlexProps> = styled(FlexBase)`
  ${position}
  ${top}
  ${right}
  ${left}
  ${bottom}
  ${overflow}
`;

export const MaxFlex: React.FC<TMaxFlexProps> = styled(FlexBase)`
  ${maxHeight}
  ${maxWidth}
  ${minHeight}
  ${borders}
  ${minWidth}
`;

export const LogoFlex: React.FC<TLogoFlexProps> = styled(FlexBase)`
  ${boxShadow}
  ${borderRadius}
  ${height}
`;

export const InputB: React.FC<TInputBProps> = styled.input`
${color}
${borders}
${space}
${width}
${height}
${borderRadius}
${fontFamily}
${fontSize}
${fontWeight}
${letterSpacing}
outline: none;
box-sizing:border-box;
transition: all 0.30s ease-in-out;
box-sizing: border-box;
:focus {
  border-bottom: 2.5px lawngreen solid;
  // box-shadow: 0 1px 1px rgba(229, 103, 23, 0.075) inset, 0 0 8px rgba(229, 103, 23, 0.6);
  
}
  ::placeholder {
    color: palevioletred;
  }
`;

export const FlexGradient = styled(Flex)`
  background-image: linear-gradient(
    0deg,
    rgba(210, 48, 120, 1) 6%,
    rgba(254, 97, 97, 1) 74%,
    rgba(255, 121, 85, 1) 100%
  );
`;

export const StyledUl: React.FC<TStyledUl> = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const StyledLi: React.FC<TStyledLi> = styled.li`
  ${space}
  display: inline;
`;

export const IconEmail: React.FC<IIconEmailProps> = styled(EmailIconBase)`
  ${space}
  ${width}
`;

export const Label = styled.label`
  border: none;
  display: inline-block;
  cursor: pointer;

  box-sizing: border-box;
  margin: 0;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  font-size: inherit;
  color: white;
  background-color: #07c;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  display: inline-block;
  text-align: center;
  line-height: inherit;
  -webkit-text-decoration: none;
  text-decoration: none;
  border: 0;
  border-radius: 4px;
  border-radius: 4px;
`;

export { Box, Button, Heading, Text };
