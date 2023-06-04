import BorrowerLayout from "borrower/BorrowerLayout/BorrowerLayout";
import { useState } from "react";
import Button from "components/Button/Button";
import ImageUpload from "components/ImageUpload/ImageUpload";
import { Row, Col, Tabs } from "antd";
// import AccountContent from "./ProfileComponents/Account/Account";
import BorrowerInformation from "borrower/Components/BorrowerInformation/BorrowerInformation";
import { ReactComponent as EditIcon } from "assets/svgs/EditIcon.svg";
const MyProfile = () => {
  const [editInfo, setEditInfo] = useState(false);
  const [editAccount, setEditAccount] = useState(false);
  const [tabKey, setTabKey] = useState("1");

  const items = [
    {
      key: "1",
      label: "Information",
      children: <BorrowerInformation editInfo={editInfo} />,
    },
  ];
  return (
    <BorrowerLayout sideKey="2">
      <div className="profile-container">
        <Row>
          <Col lg={24}>
            <div className="user-profile">
              <div>
                <ImageUpload src="/assets/images/Avatar 3.png" />
              </div>
              <div className="profile-col-two">
                <div className="user-role">
                  <span>Company</span>{" "}
                </div>
                <h1>
                  Omar Gamal <span>Acc # 9662030 2030</span>
                </h1>
                <p>Senior Software Engineer</p>
                <div className="additional-information">
                  <div className="info">
                    <p>Legal type</p>
                    <h2>value</h2>
                  </div>
                  <div className="line" />
                  <div className="info">
                    <p>Capital</p>
                    <h2>45M SAR</h2>
                  </div>
                  <div className="line" />
                  <div className="info">
                    <p>CR Expiry Date</p>
                    <h2>value</h2>
                  </div>
                  <div className="line" />
                  <div className="info">
                    <p>National Address</p>
                    <h2>value</h2>
                  </div>
                </div>
              </div>
              <div className="edit-info">
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
                ) : tabKey === "1" ? (
                  <div>
                    <Button
                      className="profile-edit-btn"
                      icon={<EditIcon />}
                      onClick={() => setEditInfo(true)}
                    >
                      Edit
                    </Button>
                  </div>
                ) : null}
              </div>
            </div>

            <Tabs items={items} />
          </Col>
        </Row>
      </div>
    </BorrowerLayout>
  );
};

export default MyProfile;
