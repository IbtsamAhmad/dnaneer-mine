import { useParams } from "react-router-dom";
import { Row, Col } from "antd";
import Header from "components/Header/Header";
import OpportunityBanner from "./Banner/Banner";
import Invest from "./Invest/Invest";
import Detail from "./Detail/Detail";
import "./opportunity.scss";
const Opportunity = () => {
  const params = useParams();

  console.log(params);

  return (
    <>
      <Header />
      <div className="opportunity-container">
        <OpportunityBanner />
        <br />
        <Row gutter={[24, 8]}>
          <Col flex="auto">
            <Detail />
          </Col>
          <Col>
            <Invest />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Opportunity;
