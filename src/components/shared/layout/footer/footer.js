import { Layout } from "antd";

const {Footer } = Layout;

export default function MainFooter(){
return(<Footer style={{ border:"dotted", textAlign: "center", background:'dark' }}>
Environment - {process.env.NODE_ENV}, Config - {process.env.NEXT_PUBLIC_ENV_KEY}
</Footer>);
};
