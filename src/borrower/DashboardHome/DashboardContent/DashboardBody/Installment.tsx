import { Row, Col, Divider } from "antd";
import InstallmentCard from "../../Cards/InstallmentCard";
import AppAccordion from "borrower/Components/Accordion/Accordion";
import { ReactComponent as Info } from "assets/svgs/Info.svg";
import "./installments.scss";

const status = {
  Paid: "#2BDAAE",
  Overdue: "#ED615C",
  Scheduled: "#2B48F4",
};

const installments = [
  {
    amount: "80,000",
    date: "Feb 23, 2023",
    description: "It is a long...",
    status: "Paid",
    principle: "200,000",
    interest: "17%",
    fees: "20,000",
    total: "220,000",
  },
  {
    amount: "80,000",
    date: "Feb 23, 2023",
    description: "It is a long...",
    status: "Overdue",
    principle: "200,000",
    interest: "17%",
    fees: "20,000",
    total: "220,000",
  },
  {
    amount: "80,000",
    date: "Feb 23, 2023",
    description: "It is a long...",
    status: "Scheduled",
    principle: "200,000",
    interest: "17%",
    fees: "20,000",
    total: "220,000",
  },
  {
    amount: "80,000",
    date: "Feb 23, 2023",
    description: "It is a long...",
    status: "Scheduled",
    principle: "200,000",
    interest: "17%",
    fees: "20,000",
    total: "220,000",
  },
];

const Header = ({}) => {
  return (
    <div className="installment-header-container">
      <Row>
        <Col md={6}>80,000 SAR</Col>
        <Col md={6}>Feb 23, 2023</Col>
        <Col md={6}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
            }}
          >
            <Info />
            <span style={{ marginLeft: "10px" }}>It is a long...</span>
          </div>
        </Col>
        <Col md={6}>
          <div
            className="installment-status"
            style={{ backgroundColor: status["Paid"], color: "#fff" }}
          >
            Paid
          </div>
        </Col>
      </Row>
    </div>
  );
};

const Body = () => {
  const content = (title, value) => {
    return (
      <>
        <Divider />
        <div style={{ fontSize: "14px", color: "#8A8595", fontWeight: 500 }}>
          {title}
        </div>
        <div style={{ fontSize: "14px", color: "#140A2B", fontWeight: 700 }}>
          {value}
        </div>
      </>
    );
  };

  return (
    <Row>
      <Col md={3}></Col>
      <Col md={6}>{content("Principle", "Amount")}</Col>
      <Col md={5}>{content("Interest", "Amount")}</Col>
      <Col md={5}>{content("Fees", "Amount")}</Col>
      <Col md={5}>{content("Total is", "Amount")}</Col>
    </Row>
  );
};

const Installment = ({ classes }) => {
  return (
    <div className="installments-container">
      {installments.map((installment, i) => {
        return (
          <div key={i} className="installment-row">
            <div className="install-num">{i + 1}</div>
            <AppAccordion
              header={
                <div className="installment-header-container">
                  <h2 style={{ color: "#140a2b" }}>{installment.amount}</h2>
                  <h2>{installment.date}</h2>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      marginLeft:"-45px"
                    }}
                  >
                    <Info />
                    <h2 style={{marginLeft:"10px"}}>{installment.description}</h2>
                  </div>
                  <div
                    className="installment-status"
                    style={{
                      backgroundColor: status["Paid"],
                      color: "#fff",
                    }}
                  >
                    Paid
                  </div>
                </div>
              }
            >
              <div>
                <div style={{ marginTop: "10px" }}>
                  <Body />
                </div>
              </div>
            </AppAccordion>
          </div>
        );
      })}
    </div>
  );
};

export default Installment;
