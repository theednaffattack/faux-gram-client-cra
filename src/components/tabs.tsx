import React, { Component } from "react";

import Tab from "./tab";
import { TabList, TabListActive, TabListItem, Flex } from "./styled-rebass";

export interface ITabsProps {
  children: any;
}

export interface ITabsState {
  activeTab: string;
}

class Tabs extends Component<ITabsProps, ITabsState> {
  constructor(props: ITabsProps) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label
    };
  }

  onClickTabItem = (tab: any) => {
    this.setState({ activeTab: tab });
  };

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab }
    } = this;

    return (
      <Flex flexDirection="column" width={[1]}>
        <Flex alignSelf="center" width="960px">
          <TabList>
            {children.map((child: any) => {
              const { label } = child.props;

              return (
                <Tab
                  activeTab={activeTab}
                  key={label}
                  label={label}
                  onClick={onClickTabItem}
                />
              );
            })}
          </TabList>
        </Flex>
        <Flex
          flexDirection="column"
          className="tab-content"
          style={{
            borderTop: "1px solid #ccc"
          }}
        >
          {children.map((child: any) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </Flex>
      </Flex>
    );
  }
}

export default Tabs;
