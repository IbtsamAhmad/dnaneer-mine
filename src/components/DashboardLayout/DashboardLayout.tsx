import { useState } from "react";
import { Layout, Menu, Row, Col, Progress } from "antd";
import DasboardCard from "pages/Dashboard/DasboardComponents/DasboardCard/DasboardCard";
import AppHeader from "components/Header/Header";
import Greeting from "pages/Dashboard/DasboardComponents/Greeting/Greeting";
import Card from "components/Card/Card";
import Button from "components/Button/Button";
import Sidebar from "./Sidebar/Sidebar";
// import { ReactComponent as DashboardMenu } from "assets/svgs/DashboardMenu.svg";
// import { ReactComponent as TransationMenu } from "assets/svgs/TransationMenu.svg";
// import { ReactComponent as OppertunityMenu } from "assets/svgs/OppertunityMenu.svg";
// import { ReactComponent as ProfileMenu } from "assets/svgs/ProfileMenu.svg";
// import { ReactComponent as LogoutMenu } from "assets/svgs/LogoutMenu.svg";

import "./DashboardLayout.scss";

const { Sider, Content } = Layout;

const DashboardLayout = ({ children }) => {
  return (
    <Layout style={{paddingTop:"0"}} className="layout-container">
      <AppHeader />
      <Layout>
        <Sider trigger={null} collapsed={false}>
          <Sidebar />
        </Sider>
        <Layout style={{paddingTop:"0"}}>
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
