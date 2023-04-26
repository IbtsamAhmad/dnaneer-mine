import { useState } from "react";
import Button from "components/Button/Button";
import ImageUpload from "components/ImageUpload/ImageUpload";
import { Row, Col, Tabs } from "antd";
import AccountContent from "./ProfileComponents/Account/Account";
import PersonalInformation from "./ProfileComponents/PersonalInformation/PersonalInformation";
import DashboardLayout from "components/DashboardLayout/DashboardLayout";
import { ReactComponent as EditIcon } from "assets/svgs/EditIcon.svg";

import "./Profile.scss";

const Profile = () => {
  const [editInfo,setEditInfo] = useState(false)

  const items = [
    {
      key: "1",
      label: "My Information",
      children: <PersonalInformation editInfo={editInfo} />,
    },
    {
      key: "2",
      label: "Account",
      children: <AccountContent />,
    },
  ];
  return (
    <DashboardLayout>
      <div className="profile-container">
        <Row>
          <Col lg={2}>
            <ImageUpload />
          </Col>
          <Col lg={19}>
            <div className="user-profile">
              <div className="user-role">
                <span>Individual investor</span>{" "}
              </div>
              <h1>
                Omar Gamal <span>Acc # 9662030 2030</span>
              </h1>
              <p>Senior Software Engineer</p>
            </div>
            <div className="additional-information">
              <div className="info">
                <p>Email</p>
                <h2>omar@example.com</h2>
              </div>
              <div className="line" />
              <div className="info">
                <p>ID number</p>
                <h2>995872030</h2>
              </div>
              <div className="line" />
              <div className="info">
                <p>IBAN</p>
                <h2>966203099</h2>
              </div>
            </div>
            <Tabs items={items} />
          </Col>
          <Col lg={3}>
            {editInfo ? (
              <div className="profile-btns">
                <p onClick={() => setEditInfo(false)}>Discard</p>
                <Button
                  className="profile-save-btn"
                  onClick={() => setEditInfo(false)}
                >
                  Save
                </Button>
              </div>
            ) : (
              <Button
                className="profile-edit-btn"
                icon={<EditIcon />}
                onClick={() => setEditInfo(true)}
              >
                Edit
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
