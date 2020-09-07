import React from "react";
import {Layout, Menu} from "antd";
import {
  CommentIcon,
  DashboardIcon,
  EngageIcon,
  HistoryIcon,
  ReportIcon, RobotIcon, ServiceIcon, SettingIcon,
  TicketsIcon
} from "../../../../components/Icons";

// @ts-ignore
import logo from '../../../../assets/images/default-avatar.jpg'
// @ts-ignore
import style from './index.less';

const { Header, Content, Footer, Sider } = Layout;

export default class Index extends React.Component<any, any>
{
  onCollapse = (collapsed:boolean)  => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render(): React.ReactNode {
    return (
      <>
        <Sider
          collapsible onCollapse={this.onCollapse}
          trigger={null}
          defaultCollapsed={true}
          collapsedWidth={60}
        >
          <div className={style.logo}>
            <img src={logo} />
          </div>

          <Menu theme="dark"  defaultSelectedKeys={['1']} mode="inline" className={style.menuRender} >
            <Menu.Item key="1" icon={<DashboardIcon className={style.iconRender} /> } >
              首页
            </Menu.Item>
            <Menu.Item key="2" icon={<CommentIcon className={style.iconRender} />}>
              对话
            </Menu.Item>
            <Menu.Item key="3" icon={<TicketsIcon className={style.iconRender} />}>
              工单
            </Menu.Item>
            <Menu.Item key="4" icon={<HistoryIcon className={style.iconRender} />}>
              历史
            </Menu.Item>
            <Menu.Item key="5" icon={<ReportIcon className={style.iconRender} />}>
              报表
            </Menu.Item>
            <Menu.Item key="6" icon={<EngageIcon className={style.iconRender} />}>
              顾客
            </Menu.Item>
            <Menu.Item key="7" icon={<RobotIcon className={style.iconRender} />}>
              机器人
            </Menu.Item>
          </Menu>
            <Menu theme="dark" className={style.footerMenuRender} defaultSelectedKeys={['1']} mode="inline">
              <Menu.Item key="8" icon={<SettingIcon className={style.iconRender} /> }>
                设置
              </Menu.Item>
              <Menu.Item key="9" icon={<ServiceIcon className={style.iconRender} />} >
                服务
              </Menu.Item>
            </Menu>

        </Sider>
      </>
    );
  }
}
