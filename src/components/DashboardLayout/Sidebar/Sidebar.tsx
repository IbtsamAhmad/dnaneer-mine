import {  Menu } from "antd";
import { NavLink } from "react-router-dom";
import { ReactComponent as DashboardMenu } from "assets/svgs/DashboardMenu.svg";
import { ReactComponent as TransationMenu } from "assets/svgs/TransationMenu.svg";
import { ReactComponent as OppertunityMenu } from "assets/svgs/OppertunityMenu.svg";
import { ReactComponent as ProfileMenu } from "assets/svgs/ProfileMenu.svg";
import { ReactComponent as LogoutMenu } from "assets/svgs/LogoutMenu.svg";





const Sidebar=()=>{
    return (
      <>
        <div className="logo" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: <DashboardMenu />,
              label: <NavLink to="/dashboard">Dashboard</NavLink>,
            },
            {
              key: "2",
              icon: <OppertunityMenu />,
              label: (
                <NavLink to="/dashboard/opportunities">Opportunities</NavLink>
              ),
            },
            {
              key: "3",
              icon: <TransationMenu />,
              label: "Transactions",
            },
            {
              key: "4",
              icon: <ProfileMenu />,
              label: "My Profile",
            },
            {
              key: "5",
              icon: <LogoutMenu />,
              label: <NavLink to="https://staging.dnaneer.com/">Log out</NavLink>,
            },
          ]}
        />
      </>
    );
}

export default Sidebar