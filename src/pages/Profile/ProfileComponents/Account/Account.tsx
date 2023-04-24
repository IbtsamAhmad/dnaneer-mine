import { useState } from "react";
import Button from "components/Button/Button";
import { Row, Col, Form, Input } from "antd";
import { ReactComponent as EditProfile } from "assets/svgs/EditProfile.svg";
import "./Account.scss";

const AccountContent = () => {
  const [editAccount, setEditAccount] = useState(false);
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className="account-panel-container">
      <div className="account-row">
        <h1>Upgrade to VIP Investor</h1>
        <Button className="upgrade-btn">Upgrade</Button>
      </div>
      <div className="account-info">
        {editAccount ? (
          <>
            <Form
              name="basic"
              className="account-form-container"
              initialValues={{
                remember: true,
              }}
              layout="vertical"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Row gutter={32}>
                <Col lg={7} sm={12}>
                  <Form.Item
                    label="Change email"
                    name="username"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter your email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col lg={13} sm={12}>
                  <Form.Item
                    label="Change Password"
                    name="password"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password />
                  </Form.Item>
                </Col>
                <Col lg={4} sm={12}>
                  <div className="submit-col">
                    <p onClick={() => setEditAccount(false)}>Discard</p>
                    <Form.Item>
                      <Button htmlType="submit" className="account-submit">
                        Save
                      </Button>
                    </Form.Item>
                  </div>
                </Col>
              </Row>
              <Row gutter={32}>
                <Col lg={7} sm={12}>
                  <Form.Item
                    name="newEmail"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Enter new email" />
                  </Form.Item>
                </Col>
                <Col lg={7} sm={12}>
                  <Form.Item
                    name="newPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Enter new password" />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={32}>
                <Col lg={7} sm={12}>
                  <Form.Item
                    name="confirmEmail"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter your email!",
                      },
                    ]}
                  >
                    <Input placeholder="Confirm new email" />
                  </Form.Item>
                </Col>
                <Col lg={7} sm={12}>
                  <Form.Item
                    name="confirmPassword"
                    rules={[
                      {
                        required: true,
                        message: "Please input your password!",
                      },
                    ]}
                  >
                    <Input.Password placeholder="Confirm new password" />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </>
        ) : (
          <>
            <Row>
              <Col lg={10} sm={12}>
                <p>Email</p>
                <h1>omar@example.com</h1>
              </Col>
              <Col lg={10} sm={12}>
                <p>Password</p>
                <h1>********</h1>
              </Col>
              <Col lg={4} sm={12}>
                <div
                  className="edit-profile-icon"
                  onClick={() => setEditAccount(true)}
                >
                  <EditProfile />
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={5} sm={12}>
                <p>Contract</p>
                <h1>File</h1>
              </Col>
            </Row>
          </>
        )}
      </div>
      <div className="deactivate-row">
        <p>Deactivate my account</p>
        <Button className="deactivate-btn">Upgrade</Button>
      </div>
    </div>
  );
};

export default AccountContent;
