import { useState, useEffect } from "react";

import { Row, Col, Form, Input, message } from "antd";
import Modal from "components/Modal/Modal";
import Button from "components/Button/Button";
import Otp from "components/OTP/Otp";
import { timeConverter } from "utils/Helper";
import { ReactComponent as EditProfile } from "assets/svgs/EditProfile.svg";
import { ReactComponent as DeActivate } from "assets/svgs/DeActivate.svg";

import "./Account.scss";

const AccountContent = ({}) => {
  const [editAccount, setEditAccount] = useState(false);
  const [otp, setOtp] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [time, setTime] = useState<number>(60);
  const [confirmDeactivateModal, setConfirmDeactivateModal] = useState(false)

  useEffect(() => {
    let timer;
    if (time !== 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const confirmDeactivate = () => {
    if (otp.length < 4) {
         message.error("Enter OTP");
    }
    if (otp === "1234") {
      setIsModalOpen(false);
      setConfirmDeactivateModal(true)
    }
  };
    const handleConfirmCancel = () => {
      setConfirmDeactivateModal(false);
    };
    const confirmAccountDelete = () =>{
       setConfirmDeactivateModal(false);
    }

  return (
    <div className="account-panel-container">
      <Modal
        centered
        className="deactivate-modal"
        isModalVisible={confirmDeactivateModal}
        onOk={confirmAccountDelete}
        onCancel={handleConfirmCancel}
        footer={false}
      >
        <div className="icon">
          <DeActivate />
        </div>

        <h1>Deactivate your account?</h1>
        <p className="cancel" style={{ marginTop: "12px", fontSize: "14px" }}>
          Are you sure you want to deactivate?
        </p>

        <Button
          onClick={confirmAccountDelete}
          block
          className="confirm-deactivate-btn"
          style={{ marginTop: "35px" }}
        >
          Deactivate
        </Button>
        <p className="cancel" onClick={() => handleConfirmCancel()}>
          Cancel
        </p>
      </Modal>

      <Modal
        centered
        className="deactivate-modal"
        isModalVisible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
      >
        <h2>Please type the OTP received on your phone</h2>
        <div className="deactivate-otp-container">
          <Otp setOtp={setOtp} otp={otp} />
        </div>
        <p className="timer">
          {time !== 0 ? timeConverter(time) : "OTP expired"}{" "}
          {time ? <span>left</span> : null}
        </p>
        <Button
          onClick={confirmDeactivate}
          block
          className="confirm-deactivate-btn"
        >
          Confirm deactivation
        </Button>
        <p className="cancel" onClick={() => handleCancel()}>
          Cancel
        </p>
      </Modal>
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
        <Button className="deactivate-btn" onClick={() => showModal()}>
          Deactivate
        </Button>
      </div>
    </div>
  );
};

export default AccountContent;
