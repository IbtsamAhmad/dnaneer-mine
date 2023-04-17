import { ReactNode, useState } from "react";
import { Card } from "antd";
import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";

import { ReactComponent as Info } from "assets/svgs/Info.svg";
import { ReactComponent as DasboardInfo } from "assets/svgs/DasboardInfo.svg";


import "./DasboardCard.scss";

interface CardProps {
  onClick?: () => void;
  children?: ReactNode | ReactNode[] | string;
  className?: string;
  icon?: ReactNode | ReactNode[];
  heading?: string;
  headingClassName?: string;
  subHeadingClassName?: string;
  subHeading?: string;
  headingSpan?: string;
  modalHeading?: string;
  modalInfo?: string;
}

const DasboardCard = ({
  className,
  children,
  icon,
  heading,
  headingClassName,
  subHeadingClassName,
  subHeading,
  headingSpan,
  modalHeading,
  modalInfo
}: CardProps) => {

   const [isModalOpen, setIsModalOpen] = useState(false);

   const showModal = () => {
     console.log("showw");
     setIsModalOpen(true);
   };

   const handleOk = () => {
     setIsModalOpen(false);
   };

   const handleCancel = () => {
     setIsModalOpen(false);
   };

  return (
    <>
      <Modal
        isModalVisible={isModalOpen}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="dashboard-modal-content">
          <DasboardInfo />
          <h1>{modalHeading}</h1>
          <p>{modalInfo}</p>
          <Button block className="dashboard-ok-btn" onClick={handleCancel}>
            Ok
          </Button>
        </div>
      </Modal>
      <Card
        className={className ? `DasboardCard ${className}` : "DasboardCard"}
        hoverable
      >
        <div className="info-icon" onClick={showModal}>
          <Info />
        </div>
        <div className="card-icon">{icon}</div>
        <h1
          className={
            headingClassName
              ? `card-heading ${headingClassName}`
              : "card-heading "
          }
        >
          {heading}
          <span>{headingSpan}</span>
        </h1>
        <h2
          className={
            subHeadingClassName
              ? `card-subHeading ${subHeadingClassName}`
              : "card-subHeading"
          }
        >
          {subHeading}
        </h2>
      </Card>
    </>
  );
};

export default DasboardCard;
