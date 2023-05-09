import { SetStateAction, Dispatch } from "react";
import { Menu } from "antd";
import { NavLink } from "react-router-dom";
import { ReactComponent as DashboardMenu } from "assets/svgs/DashboardMenu.svg";
import { ReactComponent as TransationMenu } from "assets/svgs/TransationMenu.svg";
import { ReactComponent as OppertunityMenu } from "assets/svgs/OppertunityMenu.svg";
import { ReactComponent as ProfileMenu } from "assets/svgs/ProfileMenu.svg";
import { ReactComponent as LogoutMenu } from "assets/svgs/LogoutMenu.svg";
import { ReactComponent as MenuClose } from "assets/svgs/MenuClose.svg";

type Props = {
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  sideKey: string;
};

function Sidebar({ setCollapsed, sideKey }: Props) {
  return (
    <>
      <div className="menu-close-icon" onClick={() => setCollapsed(false)}>
        <MenuClose />
      </div>
      <Menu
        mode="inline"
        defaultSelectedKeys={[sideKey]}
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
            label: <NavLink to="/dashboard/transactions">Transactions</NavLink>,
          },

          {
            type: "divider",
          },
          {
            key: "4",
            icon: <ProfileMenu />,
            label: <NavLink to="/dashboard/profile">My Profile</NavLink>,
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

export default Sidebar;
