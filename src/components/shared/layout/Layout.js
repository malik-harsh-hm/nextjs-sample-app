import React from "react";
import { Layout, Menu } from "antd";
import {
AppstoreOutlined,
BarChartOutlined,
CloudOutlined,
ShopOutlined,
TeamOutlined,
UserOutlined,
UploadOutlined,
VideoCameraOutlined,
MenuFoldOutlined,
MenuUnfoldOutlined,
} from "@ant-design/icons";
import Link from 'next/link'

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiteLayout extends React.Component {


  render() {

    return (
      <Layout hasSider 
      style={{ minHeight: "100vh" }}>
        <Sider       style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }} >
          {/* <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1" icon={<TeamOutlined />}>
              <Link href="/"><a>Social Feeds</a></Link>
            </Menu.Item>
            <SubMenu key="sub1" icon={<UserOutlined />} title="Nav-1">
              <Menu.Item key="sub1-1">Sub-1</Menu.Item>
              <Menu.Item key="sub1-2">Sub-2</Menu.Item>
            </SubMenu>
          </Menu> */}
          <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<UserOutlined />}>
        <Link href="/"><a>Home Page</a></Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
        <Link href="/about-us"><a>About Us</a></Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
        <Link href="/employee/leaves"><a>Emp Leaves</a></Link>
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
        <Link href="/chat"><a>Chats App</a></Link>
        </Menu.Item>
        <Menu.Item key="5" icon={<CloudOutlined />}>
          nav 5
        </Menu.Item>
        <Menu.Item key="6" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
        <Menu.Item key="7" icon={<TeamOutlined />}>
          nav 7
        </Menu.Item>
        <Menu.Item key="8" icon={<ShopOutlined />}>
          nav 8
        </Menu.Item>
      </Menu>
        </Sider>
        <Layout className="site-layout" style={{ border:"dotted", marginLeft: 200 }}>
          <Header className="site-layout-background" style={{ border:"solid", position: 'relative', width: '100%' , background: '#fff', padding: '0 24px' }}>
Header Content
          </Header>
          <Content style={{ border:"dotted",margin: '24px 16px', overflow: 'initial' }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, textAlign: 'left' }}
            >
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ border:"dotted", textAlign: "center" }}>
          Environment - {process.env.NODE_ENV}, Config - {process.env.NEXT_PUBLIC_ENV_KEY}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default SiteLayout;
