import { Layout } from "antd";

const { Content} = Layout;

export default function MainContent(props){
return(
    <Content style={{ border:"dotted",margin: '150px 300px', overflow: 'initial' }}>
    <div
      className="site-layout-background"
      style={{ padding: 40, minHeight: 560, textAlign: 'left' }}
    >
      {props.children}
    </div>
  </Content>
);
};