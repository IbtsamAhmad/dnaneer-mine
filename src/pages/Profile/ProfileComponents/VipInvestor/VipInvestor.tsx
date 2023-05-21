import { useState } from "react";
import { Row, Col, Checkbox } from "antd";
import Button from "components/Button/Button";
import Upload from "components/Upload/Upload";
import Modal from "components/Modal/Modal";
// import { ReactComponent as TransferBack } from "assets/svgs/TransferBack.svg";
// import { ReactComponent as QuestionIcon } from "assets/svgs/QuestionIcon.svg";
import { ReactComponent as Thanks } from "assets/svgs/Thanks.svg";

const VipInvestor = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [confirm,setConfirm] = useState(false)

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setConfirm(false)
    setIsModalOpen(false);
  };
  const onChange = (checkedValues) => {
    console.log("checked = ", checkedValues);
  };
const plainOptions = [
  {
    label:
      "Your net asset value shall not be less than (3,000,000) three million Riyals or more",
    value: "one",
  },
  {
    label:
      "You work or have worked for at least (3) years in the financial sector in a professional job related to finance or investment",
    value: "two",
  },
  {
    label:
      "You have a professional certificate specialized in the field of finance or investment accredited by an internationally recognized body",
    value: "three",
  },
  {
    label:
      "Your annual income should not be less than (600,000) six hundred thousand Saudi Riyals in the past two years",
    value: "four",
  },
];

const handleBack = () =>{
  setConfirm(false)
}
  return (
    <div>
      <Modal
        centered
        className="vip-modal"
        isModalVisible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={false}
        width={771}
      >
        {confirm ? (
          <>
            {/* <div
              className="transfer-back"
              onClick={handleBack}
              style={{ textAlign: "center" }}
            >
              <TransferBack />
              <p>Back</p>
            </div> */}
            <div className="questionIcon" style={{
                 marginTop: "53px",
            marginBottom: "25px",
            display: "flex",
            justifyContent: "center",
            }}>
              <Thanks />
            </div>
            <h1 style={{ textAlign: "center" }}>Saudi National Bank</h1>
            <p style={{ textAlign: "center" }}>
              Your VIP Investor request has been submitted successfully. Dnaneer
              team will contact you soon.
            </p>

            <Button
              onClick={handleCancel}
              block
              style={{ height: "52px", marginTop: "36px" }}
            >
              Confirm
            </Button>
          </>
        ) : (
          <>
            <h1>Upgrade to a VIP investor, today</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable
            </p>
            <Row>
              <Col span={7} className="col col-one">
                <h2>Investment ceiling</h2>
                <p className="sar">50,000.00 SAR</p>
              </Col>
              <Col span={7} className="col col-two" offset={1}>
                <h2>Annual investment limit</h2>
                <p className="sar">20,000.00 SAR</p>
              </Col>
              <Col span={7} className="col col-three" offset={1}>
                <h2>Investment report</h2>
                <p className="sar">Semi annual</p>
              </Col>
            </Row>
            <div className="criteria-container">
              <h1>VIP investor Criteria</h1>
              <Checkbox.Group options={plainOptions} onChange={onChange} />
            </div>
            <h1 style={{ marginBottom: "19px" }}>Upload documents</h1>
            <Upload />
            <Button
              onClick={() => setConfirm(true)}
              block
              style={{ height: "52px", marginTop: "70px" }}
            >
              Confirm
            </Button>
          </>
        )}
      </Modal>
      <Button className="upgrade-btn" onClick={showModal}>
        Upgrade
      </Button>
    </div>
  );
};

export default VipInvestor;
