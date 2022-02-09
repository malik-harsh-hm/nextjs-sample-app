import React from "react";
import { Layout } from "antd";
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

import MainHeader from './header/header';
import MainContent from './content/content';
import MainFooter from './footer/footer';

export default function SiteLayout(props) {

  return (
    <Layout>
      <MainHeader />
      <MainContent {...props} />
      <MainFooter />
    </Layout>
  );
};