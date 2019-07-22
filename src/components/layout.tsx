import * as React from "react";
import { Location } from "@reach/router";
import { Flex } from "./styled-rebass";
import LayoutFooter from "./layout-footer";
import LayoutHeader from "./layout-header";

interface ILayoutProps {
  title?: string;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({
  children,
  title = "This is the default title"
}) => (
  <Flex m={[0]} minHeight="100vh" flexDirection="column" width={[1, 1, 1]}>
    {/* <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head> */}
    <LayoutHeader />
    <Flex flexDirection="column" minHeight="90vh" width={1} alignItems="center">
      <Flex width={[1, 1, 1, "960px"]}>
        <Location>{({ location }) => <div>{location.key}</div>}</Location>
        {children}
      </Flex>
    </Flex>
    <LayoutFooter />
  </Flex>
);

export default Layout;
