import { ReactNode, useState } from "react";
import { Card, Popover } from "antd";
// import Button from "components/Button/Button";
// import Modal from "components/Modal/Modal";

import { ReactComponent as Info } from "assets/svgs/Info.svg";
import { ReactComponent as DashboardInfo } from "assets/svgs/DashboardInfo.svg";
import "./DasboardCard.scss";

interface CardProps {
  onClick?: () => void;
  children?: ReactNode | ReactNode[] | string;
  className?: string;
  icon?: string;
  heading?: string;
  headingClassName?: string;
  subHeadingClassName?: string;
  subHeading?: string;
  headingSpan?: string;
  modalHeading?: string;
  modalInfo?: string;
}

const DashboardCard = ({
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

  //  const [isModalOpen, setIsModalOpen] = useState(false);

  //  const showModal = () => {
  //    console.log("showw");
  //    setIsModalOpen(true);
  //  };

  //  const handleOk = () => {
  //    setIsModalOpen(false);
  //  };

  //  const handleCancel = () => {
  //    setIsModalOpen(false);
  //  };

  const content = (
    <>
      <div className="dashboard-modal-content">
        <div>
          <DashboardInfo />
        </div>
        <div style={{ marginLeft: "14px" }}>
          <h1>{modalHeading}</h1>
          <p>{modalInfo}</p>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* <Modal
        isModalVisible={isModalOpen}
        centered
        onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <div className="dashboard-modal-content">
          <div>
            <DashboardInfo />
          </div>
          <div style={{ marginLeft: "14px" }}>
            <h1>{modalHeading}</h1>
            <p>{modalInfo}</p>
          </div>
        </div>
      </Modal> */}
      <Card
        className={className ? `DasboardCard ${className}` : "DasboardCard"}
        hoverable
      >
        <Popover
          content={content}
          placement="top"
          className="dashboard-popover"
        >
          <div className="info-icon">
            <Info />
          </div>
        </Popover>

        <div className="card-icon">{<img src={icon} alt="icon" />}</div>
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

export default DashboardCard;
