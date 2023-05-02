import { useState } from "react";
import { Layout, Menu, Row, Col, Progress } from "antd";
// import DasboardCard from "pages/Dashboard/DasboardComponents/DasboardCard/DasboardCard";
import AppHeader from "components/Header/Header";
import Sidebar from "./Sidebar/Sidebar";
import "./DashboardLayout.scss";

const { Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout style={{ paddingTop: "0" }} className="layout-container">
      <AppHeader setCollapsed={setCollapsed} collapsed={collapsed} />
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <Sidebar setCollapsed={setCollapsed} />
        </Sider>
        <Layout style={{ paddingTop: "0" }}>
          <Content
            style={{
              margin: "0px 23px",
            }}
          >
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
