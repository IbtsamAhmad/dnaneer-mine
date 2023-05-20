import { SetStateAction, Dispatch, useState } from "react";
import Modal from "components/Modal/Modal";
import Transfer from "./Transfer";
import TransferDocument from "./TransferDocument";


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
}: ModalProps): JSX.Element => {
  //   const [transferInfo, setTransferInfo] = useState(false);
  const [currentDivIndex, setCurrentDivIndex] = useState(0);

  const handleNext = () => {
    setCurrentDivIndex((prevIndex) => prevIndex + 1);
  };

 const onCancel = () =>{
    setIsModalVisible(false);
    setCurrentDivIndex(0)
 } 

  const divContents = [
    <Transfer handleNext={handleNext} />,
    <TransferDocument onCancel={onCancel} />,
  ];

  const currentDivContent = divContents[currentDivIndex];
  return (
    <div>
      <Modal
       width={600}
        centered
        className="transfer-balance-model"
        isModalVisible={isModalVisible}
        onOk={onOk}
        onCancel={onCancel}
        footer={false}
      >
        <div className="log-icon">{/* <Logout /> */}</div>
        {currentDivContent && <div>{currentDivContent}</div>}
      </Modal>
    </div>
  );
};

export default TransferBalance;
