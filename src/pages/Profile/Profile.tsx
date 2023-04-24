import {useState} from "react"
import Button from "components/Button/Button"
import ImageUpload from "components/ImageUpload/ImageUpload";
import { Row, Col, Tabs, Collapse, Form, Input } from "antd";
import AccountContent from "./ProfileComponents/Account/Account"
import DashboardLayout from "components/DashboardLayout/DashboardLayout";
import { ReactComponent as EditIcon } from "assets/svgs/EditIcon.svg";
import { ReactComponent as Expand } from "assets/svgs/Expand.svg";

const { Panel } = Collapse;
import "./Profile.scss";



const Profile = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };
    const InfoContent = () =>{
        return (
          <div className="info-panel-container">
            <Collapse
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => <Expand />}
            >
              <Panel header="Personal Information" key="1">
                <Row>
                  <Col lg={5} sm={12}>
                    <p>Education</p>
                    <h1>Undergraduate</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Employed</p>
                    <h1>Yes</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Company</p>
                    <h1>Immrsv studio.</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Position</p>
                    <h1>Senior UI Designer</h1>
                  </Col>
                </Row>
                <Row>
                  <Col lg={5} sm={12}>
                    <p>Years of Exp.</p>
                    <h1>5</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>ID number</p>
                    <h1>965965767</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Address</p>
                    <h1>Value</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Email</p>
                    <h1>omar@immrsvafrica.com</h1>
                  </Col>
                </Row>
              </Panel>
            </Collapse>

            <Collapse expandIcon={({ isActive }) => <Expand />}>
              <Panel header="Financial Information" key="1">
                Financial Information
              </Panel>
            </Collapse>
            <Collapse
              defaultActiveKey={["1"]}
              expandIcon={({ isActive }) => <Expand />}
            >
              <Panel header="Banking Information" key="1">
                <Row>
                  <Col lg={5} sm={12}>
                    <p>Bank name</p>
                    <h1>Alinma Bank</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>IBAN</p>
                    <h1>544675233463564</h1>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
        );
    }
      
      const items = [
        {
          key: "1",
          label: "My Information",
          children: <InfoContent />,
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
          <Col lg={20}>
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
          <Col lg={2}>
            <Button className="profile-edit-btn" icon={<EditIcon />}>
              Edit
            </Button>
          </Col>
        </Row>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
