import { SetStateAction, Dispatch, useState } from "react";
import { Form, Row , Col} from "antd";
import Modal from "components/Modal/Modal";
import Transfer from "./Transfer";
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




  const divContents = [
    <Transfer handleNext={handleNext} />,
    <TransferBank handleBack={handleBack} handleNext={handleNext} />,
    <Confirm handleBack={handleBack} handleNext={handleNext} />,
    <TransferOtp handleBack={handleBack} handleNext={handleNext} />,
    <Finish
      handleBack={handleBack}
      setIsModalVisible={onCancel}
      setCurrentDivIndex={setCurrentDivIndex}
    />,
  ];

  const currentDivContent = divContents[currentDivIndex];
  return (
    <div>
      <Modal
        centered
        className={
          currentDivIndex >= 1
            ? "transfer-info-model"
            : "transfer-balance-model"
        }
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
