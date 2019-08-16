import React from "react";
import { Link } from "@reach/router";
import {
  Box,
  Button,
  Flex as FlexBase,
  Card as CardBase,
  Heading,
  Image,
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
  overflow,
  SpaceProps,
  WidthProps
} from "styled-system";
import styled from "styled-components";
import IconBase from "react-geomicons";
import posed from "react-pose";

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
  IFlexShadowProps,
  IFlexUserProfileWrapProps
} from "./types";

import EmailIconBase from "../components/check-email-icon";
import { sidebarPoses, sidebarListPoses } from "./posed-configs";

interface IisPartiallyActiveProps {
  isPartiallyCurrent: boolean;
}

const StyledLinkV1 = styled(Link)`
  ${color}
  text-decoration: none;
  :hover {
    color: crimson;
  }
`;

interface ITabListProps
  extends React.DetailedHTMLProps<
      React.OlHTMLAttributes<HTMLOListElement>,
      HTMLOListElement
    >,
    SpaceProps,
    WidthProps {}

export const TabList: React.FC<ITabListProps> = styled.ol`
  ${space}
  ${width}
`;

interface ITablLIstItem {
  active: boolean;
  onClick: any;
}

export interface ITabListItemProps
  extends React.DetailedHTMLProps<
    React.LiHTMLAttributes<HTMLLIElement>,
    HTMLLIElement
  > {
  label: string;
  onClick: any;
  activeTab: string;
  active?: boolean;
}

export const TabListItem: React.FC<ITabListItemProps> = styled.li`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.5rem 0.75rem;
  border-bottom: ${(props: any) =>
    props.active ? "2px rebeccapurple solid" : "none"};
`;

export const TabListActive = styled.div`
  background-color: white;
  border: solid #ccc;
  border-width: 1px 1px 0 1px;
`;

export const StyledLinkV2 = styled(Link)`
  ${color}

  padding: 10px 20px;
  font-size: 1.1em;
  display: block;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);

  /* :hover {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
  } */
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

export const NavLink = ({ children, ...props }: any) => (
  <StyledLinkV2 getProps={isActive} {...props}>
    {children}
  </StyledLinkV2>
);

export const LinkLink = ({ children, style, ...props }: any) => (
  <StyledLinkV1 color="white" {...props}>
    {children}
  </StyledLinkV1>
);

export const Icon = styled(IconBase)`
  ${space}
`;

export const FlexShadow: React.FC<IFlexShadowProps> = styled(FlexBase)`
  ${boxShadow}
`;

export const FlexUserProfileWrap: React.FC<IFlexUserProfileWrapProps> = styled(
  FlexBase
)`
${borderRadius}
${boxShadow}
${overflow}
${maxHeight}
${maxWidth}
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

export const StyledUl_v1: React.FC<TStyledUl> = styled.ul`
  ${color}
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  /* position: absolute;
  top: 0; */
`;

export const StyledUl_v2: React.FC<TStyledUl> = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const StyledLi: React.FC<TStyledLi> = styled.li`
  ${color}
  ${space}
  display: inline;
`;

export const SidebarLi: React.FC<TStyledLi> = styled.li`
  ${space}
  /* background: limegreen; */
  display: block;
  list-style: none;
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
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

export const Sidebar = styled.ul`
  width: 255px;
  height: 100vh;
  background: #7386d5;
  /* padding: 30px; */
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;

  color: #fff;
  background: linear-gradient(5deg, #745fb5, #9066b8);
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
`;

export const PSidebar = posed(Sidebar)(sidebarPoses);

export const PSidebarList = posed(SidebarLi)(sidebarListPoses);

export { Box, Button, Heading, Image, Text };
