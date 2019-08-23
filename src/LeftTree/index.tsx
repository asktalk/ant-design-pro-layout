import React from 'react';
import { Drawer } from 'antd';

import LeftTree, { LeftTreeProps } from './LeftTree';
// import { getFlatMenuKeys } from './SiderMenuUtils';

const SiderMenuWrapper: React.FC<LeftTreeProps> = props => {
  const { isMobile, menuData, collapsed, onCollapse } = props;
  // const flatMenuKeys = getFlatMenuKeys(menuData);
  return isMobile ? (
    <Drawer
      visible={!collapsed}
      placement="left"
      className="ant-pro-sider-menu"
      onClose={() => onCollapse && onCollapse(true)}
      style={{
        padding: 0,
        height: '100vh',
      }}
    >
      <LeftTree
        title='标题党'
        {...props}
      // collapsed={isMobile ? false : collapsed}
      />
    </Drawer>
  ) : (
      <LeftTree
        className="ant-pro-left-tree"
        {...props}
      />
    );
};

SiderMenuWrapper.defaultProps = {
  onCollapse: () => undefined,
};

export default SiderMenuWrapper;
