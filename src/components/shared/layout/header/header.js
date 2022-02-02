
import { Layout, Menu } from "antd";
import Link from 'next/link';

const {Header } = Layout;

export default function MainHeader(){
return(<Header style={{ position: 'fixed', zIndex: 1, width: '100%'}}>

<Menu theme="dark" mode="horizontal">
  <Menu.Item key="Home"><Link href='/'>
            Home
          </Link></Menu.Item>
  <Menu.Item key="Blog"><Link href='/blog'>
            Blog
          </Link></Menu.Item>
  <Menu.Item key="Portfolio"><Link href='/portfolio'>
            Portfolio
          </Link></Menu.Item>
          <Menu.Item key="About Us"><Link href='/about-us'>
            About Us
          </Link></Menu.Item>
</Menu>

</Header>);
};




