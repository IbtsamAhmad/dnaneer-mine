import { Row, Col } from "antd";
import { ReactComponent as InvestmentOne } from "assets/svgs/InvestmentOne.svg";
import { ReactComponent as AnnualROI } from "assets/svgs/annual-roi.svg";
import { ReactComponent as Rating } from "assets/svgs/Rating.svg";
import { ReactComponent as Time } from "assets/svgs/Time.svg";
const MainDetail = () => {
  return (
    <Row justify="center">
      <Col md={6}>
        <div className="main-detail-col1">
          <InvestmentOne />
          <div className="opportunity-code-container">
            <h3>#3456122</h3>
            <h5 className="secondary-text">Software/AI Solutions</h5>
          </div>
        </div>
      </Col>
      <Col md={6}>
        <div className="flex-column-start ">
          <AnnualROI />
          <h2 className="medium-heading ">Annual ROI 17.5%</h2>
        </div>
      </Col>
      <Col md={6}>
        <div className="flex-column-start ">
          <Rating />
          <h2 className="medium-heading ">Risk Score: B</h2>
        </div>
      </Col>
      <Col md={6}>
        <div className="flex-column-start ">
          <Time />
          <h2 className="medium-heading ">48 Month</h2>
        </div>
      </Col>
    </Row>
  );
};

export default MainDetail;
