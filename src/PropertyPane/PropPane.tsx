import React, { Component } from 'react';
import { Layout } from 'antd';
import classNames from 'classnames';

import './index.less';
import { WithFalse } from '../typings';
import { BasePaneProps } from './BasePane';
// import { getDefaultCollapsedSubMenus } from './SiderMenuUtils';


export interface PropPaneProps
  extends Pick<BasePaneProps, Exclude<keyof BasePaneProps, ['onCollapse']>> {
  logo?: React.ReactNode;
  siderWidth?: number;
  menuHeaderRender?: WithFalse<
    (logo: React.ReactNode, title: React.ReactNode) => React.ReactNode
  >;
}

interface PropPaneState {
  pathname?: string;
  openKeys?: string[] | false;
  flatMenuKeysLen?: number;
}

export default class PropPane extends Component<
  PropPaneProps,
  PropPaneState
  > {
  static defaultProps: Partial<PropPaneProps> = {
    isMobile: false,
    collapsed: false,
  };


  // componentDidMount(): void {
  //   firstMount = false;
  // }


  render(): React.ReactNode {
    // const {
    //   collapsed,
    //   fixSiderbar,
    //   onCollapse,
    //   theme,
    //   siderWidth = 256,
    //   isMobile,
    //   layout,
    //   logo,
    //   title,
    //   menuHeaderRender: renderLogoAndTitle,
    //   onMenuHeaderClick,
    // } = this.props;
    // const { openKeys } = this.state;


    return (
      <div className="propPane">

      </div>
    );
  }
}
