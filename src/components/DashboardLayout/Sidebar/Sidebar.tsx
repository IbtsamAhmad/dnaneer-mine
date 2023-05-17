import { SetStateAction, Dispatch, useState } from "react";
import { Menu } from "antd";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import { ReactComponent as DashboardMenu } from "assets/svgs/DashboardMenu.svg";
import { ReactComponent as TransationMenu } from "assets/svgs/TransationMenu.svg";
import { ReactComponent as OppertunityMenu } from "assets/svgs/OppertunityMenu.svg";
import { ReactComponent as ProfileMenu } from "assets/svgs/ProfileMenu.svg";
import { ReactComponent as LogoutMenu } from "assets/svgs/LogoutMenu.svg";
import { ReactComponent as MenuClose } from "assets/svgs/MenuClose.svg";
import { ReactComponent as Logout } from "assets/svgs/Logout.svg";

type Props = {
  setCollapsed: Dispatch<SetStateAction<boolean>>;
  sideKey: string;
};

function Sidebar({ setCollapsed, sideKey }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
    navigate("/");
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        centered
        className="logout-modal"
        isModalVisible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <div className="log-icon">
          <Logout />
        </div>

        <h1>Are you sure you want to log out</h1>
        <Button onClick={handleOk} block className="logout-btn">
          Logout
        </Button>
        <p className="cancel" onClick={() => handleCancel()}>
          Cancel
        </p>
      </Modal>
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
            icon: (
              <div onClick={() => showModal()}>
                <LogoutMenu />
              </div>
            ),
            label: <div onClick={() => showModal()}>Log out</div>,
          },
        ]}
      />
    </>
  );
}

export default Sidebar;
