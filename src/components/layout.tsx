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
    <Location>
      {({ location }: any) => {
        if (location.pathname === "/messages") {
          return (
            <Flex flex="1 1 auto" width={[1, 1, 1, 1]} flexDirection="column">
              {children}
            </Flex>
          );
        }

        if (location.pathname !== "/messages") {
          return <Flex width={[1, 1, 1, "960px"]}>{children}</Flex>;
        }
      }}
    </Location>
    <Location>
      {({ location }: any) => {
        if (location.pathname === "/messages") {
          return "";
        }

        if (location.pathname !== "/messages") {
          return <LayoutFooter />;
        }
      }}
    </Location>
  </Flex>
);

export default Layout;
