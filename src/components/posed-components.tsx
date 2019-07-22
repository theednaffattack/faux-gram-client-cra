import { Button } from "rebass";

import { Flex } from "../components/styled-rebass";

import posed from "react-pose";

export const Container = posed(Flex)({
  enter: { staggerChildren: 50 }
});

export const PButton = posed(Button)({
  enter: { x: 0, opacity: 1 },
  exit: { x: 50, opacity: 0 }
});
