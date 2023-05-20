import { SetStateAction, Dispatch, useState } from "react";
// import { Form, Row, Col } from "antd";
import Modal from "components/Modal/Modal";
import Transfer from "./Transfer";
import TransferDocument from "./TransferDocument";
import TransferBank from "./TransferBank";
import Confirm from "./Confirm";
import TransferOtp from "./TransferOtp";
import Finish from "./Finish";

import "./TransferBalance.scss";

interface ModalProps {
  isModalVisible?: boolean;
  setIsModalVisible?: Dispatch<SetStateAction<boolean>>;
  onOk?: () => void;
  onCancel?: () => void;
}

const TransferBalance = ({
  isModalVisible,
  setIsModalVisible,
  onOk,
  onCancel,
}: ModalProps): JSX.Element => {
  //   const [transferInfo, setTransferInfo] = useState(false);
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  const handleNext = () => {
    setCurrentDivIndex((prevIndex) => prevIndex + 1);
  };

  const handleBack = () => {
    setCurrentDivIndex((prevIndex) => prevIndex - 1);
  };
  
  const handleBackFirst = () =>{
    setIsModalVisible(false)
        setCurrentDivIndex(0);
  }

  const divContents = [
    <TransferBank handleBack={handleBackFirst} handleNext={handleNext} />,
    <Confirm handleBack={handleBack} handleNext={handleNext} />,
    <TransferOtp handleBack={handleBack} handleNext={handleNext} />,
    <Finish
      handleBack={handleBack}
      setIsModalVisible={setIsModalVisible}
      setCurrentDivIndex={setCurrentDivIndex}
    />,
  ];

  const currentDivContent = divContents[currentDivIndex];
  return (
    <div>
      <Modal
        width={671}
        centered
        className="transfer-info-model"
        isModalVisible={isModalVisible}
        onOk={onOk}
        onCancel={onCancel}
        footer={false}
      >
        <div className="log-icon">{/* <Logout /> */}</div>
        {currentDivContent && <div>{currentDivContent}</div>}

        {/* <button onClick={handleBack} disabled={currentDivIndex === 0}>
          Back
        </button>
        <button
          onClick={handleNext}
          disabled={currentDivIndex === divContents.length - 1}
        >
          Next
        </button> */}
        {/* <Button onClick={onOk} block className="logout-btn">
          Logout
        </Button> */}
        {/* <p className="cancel" onClick={() => handleCancel()}>
          Cancel
        </p> */}
      </Modal>
    </div>
  );
};

export default TransferBalance;
