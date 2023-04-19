import { Row, Col } from "antd";

const FinancingDetail = () => {
  return (
    <>
      <Row>
        <Col xs={24}>
          <div style={{ marginBottom: "27px" }}>
            <h3 className="large-heading">Financing details</h3>
          </div>
        </Col>
      </Row>
      <Row gutter={[24, 24]}>
        <Col md={6}>
          <FinancingElements heading="Financing Structure" value="Tawarrouq" />
        </Col>
        <Col md={6}>
          <FinancingElements heading="Financing type" value="RR" />
        </Col>
        <Col md={6}>
          <FinancingElements heading="Net ROI" value="Value" />
        </Col>
        <Col md={6}>
          <FinancingElements heading="Tenor" value="Value" />
        </Col>
      </Row>
      <Row style={{ marginTop: "26px" }} gutter={[24, 24]}>
        <Col md={6}>
          <FinancingElements heading="Risk Score" value="B" />
        </Col>
        <Col md={6}>
          <FinancingElements heading="Distributed Returns" value="Value" />
        </Col>
        <Col md={6}>
          <FinancingElements heading="Requested amount" value="2,500,000 SAR" />
        </Col>
      </Row>
    </>
  );
};

export default FinancingDetail;

const FinancingElements = ({ heading, value }) => {
  return (
    <div className="financing-element">
      <span className="secondary-text">{heading}</span>
      <span style={{ marginTop: "9px" }} className="medium-heading">
        {value}
      </span>
    </div>
  );
};
