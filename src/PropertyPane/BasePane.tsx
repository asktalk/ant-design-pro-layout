import './index.less';

import { Icon } from 'antd';
import React, { Component } from 'react';
import classNames from 'classnames';
import defaultSettings, { Settings } from '../defaultSettings';
import { isUrl } from '../utils/utils';
import { urlToList } from '../utils/pathTools';

import {
  MessageDescriptor,
  WithFalse,
} from '../typings';

export interface BasePaneProps
  extends Partial<Settings> {
  className?: string;
  collapsed?: boolean;
  handleOpenChange?: (openKeys: string[]) => void;
  isMobile?: boolean;
  // propData?: MenuDataItem[];
  onCollapse?: (collapsed: boolean) => void;
  onOpenChange?: (openKeys: string[]) => void;
  style?: React.CSSProperties;
  theme?: MenuTheme;
  formatMessage?: (message: MessageDescriptor) => string;
  propItemRender?: WithFalse<
    (
      defaultDom: React.ReactNode,
    ) => React.ReactNode
  >;
}




export default class BasePane extends Component<BasePaneProps> {
  public static defaultProps: Partial<BasePaneProps> = {
    onCollapse: () => undefined,
    isMobile: false,
    collapsed: false,
    handleOpenChange: () => undefined,
    onOpenChange: () => undefined,
  };

  warp: HTMLDivElement | undefined;

  public constructor(props: BasePaneProps) {
    super(props);
    // const { iconfontUrl } = props;

  }

  state = {};


  getPopupContainer = (fixedHeader: boolean, layout: string): HTMLElement => {
    if (fixedHeader && layout === 'topmenu' && this.warp) {
      return this.warp;
    }
    return document.body;
  };

  getRef = (ref: HTMLDivElement) => {
    this.warp = ref;
  };

  render(): React.ReactNode {
    const {
      theme,
    } = this.props;

    // const cls = classNames(className, {
    //   'top-nav-menu': mode === 'horizontal',
    // });

    return (
      <>

      </>
    );
  }
}
