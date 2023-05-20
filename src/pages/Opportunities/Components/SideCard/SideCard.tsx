import { useState } from "react";
import Button from "components/Button/Button";
import AppCard from "components/Card/Card";
import TransferBalance from "components/TransferBalance/TransferBalance";
import AddBalance from "components/TransferBalance/AddBalance";

import { Col, Row } from "antd";

import "./SideCard.scss";

const SideCard = () => {
    const [transferModalOpen, setTransferModalOpen] = useState(false);
    const [balanceModalOpen, setBalanceModalOpen] = useState(false);
        const institutional = localStorage.getItem("institutional");
    const onOk = () => {
      setTransferModalOpen(false);
    };
    const onCancel = () => {
      setTransferModalOpen(false);
    };

     const balanceModelOk = () => {
       setBalanceModalOpen(false);
     };
     const balanceModelCancel = () => {
       setBalanceModalOpen(false);
     };


  return (
    <>
      <TransferBalance
        isModalVisible={transferModalOpen}
        setIsModalVisible={setTransferModalOpen}
        onOk={onOk}
        onCancel={onCancel}
      />
      <AddBalance
        isModalVisible={balanceModalOpen}
        onOk={balanceModelOk}
        setIsModalVisible={setBalanceModalOpen}
      />
      <Row justify="end">
        <Col style={{ minWidth: "262px", maxWidth: "262px" }}>
          <div
            className={
              institutional === "Institutional"
                ? "sideCard-container sideCardO"
                : "sideCard-container"
            }
          >
            <div style={{ marginBottom: "-2rem" }}>
              <AppCard>
                <h4 style={{ fontSize: "12px", color: "#140A2B", margin: "0" }}>
                  My Balance
                </h4>
                <div style={{ marginBottom: "43px" }}>
                  <span
                    style={{
                      color: "#5B2CD3",
                      fontSize: "20px",
                      fontWeight: "700",
                    }}
                  >
                    1,200,000
                  </span>
                  <span
                    style={{
                      marginLeft: "5px",
                      color: "#5B2CD3",
                      fontSize: "12px",
                      fontWeight: "700",
                    }}
                  >
                    SAR
                  </span>
                </div>
                <Button
                  style={{ width: "100%", height: "42px" }}
                  onClick={() => setBalanceModalOpen(true)}
                >
                  Add Balance
                </Button>
                <Button
                  className="transfer-card-btn"
                  onClick={() => setTransferModalOpen(true)}
                >
                  Transfer
                </Button>
              </AppCard>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default SideCard;
