import React from "react";
import { Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import Link from 'next/link'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiteLayout extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    const { collapsed } = this.state;

    return (
      <Layout style={{ minHeight: "100vh" }}>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<TeamOutlined />}>
              <Link href="/"><a>Social Feeds</a></Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Nav-1">
              <Menu.Item key="sub1-1">Sub-1</Menu.Item>
              <Menu.Item key="sub1-2">Sub-2</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, background: '#fff', padding: '0 24px' }}>
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: this.toggle,
              }
            )}
          </Header>
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
          Environment - {process.env.NODE_ENV}, Config - {process.env.NEXT_PUBLIC_ENV_KEY}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiteLayout;
