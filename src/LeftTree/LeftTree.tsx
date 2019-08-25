import React, { Component } from 'react';
import classNames from 'classnames';
import { Tree, Icon, Layout } from 'antd';
const { TreeNode } = Tree;

import './index.less';
import { WithFalse } from '../typings';


export interface LeftTreeProps {
  logo?: React.ReactNode;
  title?: string;
  siderWidth?: number;
  menuHeaderRender?: WithFalse<
    (logo: React.ReactNode, title: React.ReactNode) => React.ReactNode
  >;
  onMenuHeaderClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface LeftTreeState {
  pathname?: string;
  openKeys?: string[] | false;
  flatMenuKeysLen?: number;

}

const renderModuleHeader = (props: LeftTreeProps): React.ReactNode => {
  const { title } = props;
  return (
    <div
      className='module-header workbech-sidebar'>
      <span className='module-name'>标题</span>
      <span className='icon-list'>
        <span><Icon type="team" style={{ fontSize: '20px', padding: '0px 10px 0px 0px' }} /></span>
        <span><Icon type="team" style={{ fontSize: '20px', padding: '0px 10px 0px 0px' }} /></span>
        <span><Icon type="team" style={{ fontSize: '20px', padding: '0px 10px 0px 0px' }} /></span>
        <span><Icon type="team" style={{ fontSize: '20px', padding: '0px 10px 0px 0px' }} /></span>
      </span>
      {/* <span className='team'>dsfafd</span> */}
    </div>);
};

const renderModuleSearch = (props: LeftTreeProps): React.ReactNode => {
  const { title } = props;
  return (
    <div class="module-search">
      <span>
        <span class="next-input next-medium">
          <Icon type="search" style={{ fontSize: '20px', color: '#08c', padding: '0px 10px 0px 0px' }} /></span>
        <input placeholder="文件名称/创建人" height="100%" autocomplete="off" value="" />
        <Icon type="search" style={{ fontSize: '20px', color: '#08c', padding: '0px 10px 0px 0px' }} />
      </span>
    </div >);
};

const renderArrowLeft = (props: LeftTreeProps): React.ReactNode => {
  return (
    <div className='arrow-left'>
      <Icon type="left" className='arrow' />
    </div>
  );
}

export default class SiderTree extends Component<
  LeftTreeProps,
  LeftTreeState
  > {
  // static defaultProps: Partial<LeftTreeProps> = {
  //   title='默认标题',
  //   // menuData: [],
  // };

  constructor(props: LeftTreeProps) {
    super(props);
    // this.state = {
    //   openKeys: getDefaultCollapsedSubMenus(props),
    // };
  }

  render(): React.ReactNode {
    const {
      title
    } = this.props;
    // const {openKeys} = this.state;
    const treeClassName = classNames('ant-pro-left-tree');

    return (
      <>
        <div className='ant-pro-left-tree workbech-content'>
          {renderModuleHeader({ title })}
          {renderModuleSearch({ title })}
          <Tree
            showIcon
            defaultExpandAll
            defaultSelectedKeys={['0-0-0']}
            switcherIcon={<Icon type="down" />
            }
          >
            <TreeNode icon={<Icon type="file-text" />} title="parent 1" key="0-0">
              <TreeNode icon={<Icon type="branches" />} title="leaf" key="0-0-0" />
              <TreeNode icon={<Icon type="branches" />} title="leaf" key="0-0-1" />
              <TreeNode icon={<Icon type="solution" />} title="leaf" key="0-0-2" />
              <TreeNode icon={<Icon type="solution" />} title="leaf" key="0-0-3" />
              <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-4" />
              <TreeNode icon={<Icon type="solution" />} title="leaf" key="0-0-5" />
              <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-6" />
              <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-7" />
              <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-8" />
              <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-9" />
              <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-10" />
              <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-11" >
                <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-11-1" />
                <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-11-2" />
                <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-11-3" />
                <TreeNode icon={<Icon type="meh-o" />} title="leaf" key="0-0-11-4" />
              </TreeNode>
            </TreeNode>
          </Tree>
          {renderArrowLeft({ title })}
        </div >

      </>
    );
  }
}