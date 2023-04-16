import AppCard from "components/Card/Card";
import { Col, Row } from "antd";
// import AppCard from "components/Card/Card";
import { ReactComponent as InvestmentOne } from "assets/svgs/InvestmentOne.svg";
import CardInfo from "./CardInfo";
import ThirdColumn from "./ThirdColumn";

const OpportunitiesCard = () => {
  return (
    <AppCard>
      <Row className="opportunities-card">
        <Col md={2}>
          <InvestmentOne />
        </Col>
        <Col md={15}>
          <CardInfo />
        </Col>
        <Col md={7}>
          <ThirdColumn />
        </Col>
      </Row>
    </AppCard>
  );
};

export default OpportunitiesCard;
