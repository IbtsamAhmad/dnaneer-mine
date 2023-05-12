import Container from "components/Container/Container";
import OpportuniesTabs from "./OpportunitiesTabs/OpportunitiesTabs";
import { Row, Col } from "antd";
import SideCard from "./SideCard/SideCard";
import LoadMore from "./LoadMore/LoadMore";
import OpportunityBanner from "./OpportunityBanner/OpportunityBanner";
const OpportunitiesContainer = () => {
  return (
    <div className="opportunites-wrapper">
      <Row>
        <Col xs={24}>
          <OpportunityBanner />
        </Col>
        <Col md={19}>
          <Container>
            <div style={{ padding: "0 26px" }}>
              <h1 className="dashboard-page-header">Opportunies</h1>
            </div>
            <OpportuniesTabs />
          </Container>
          <LoadMore />
        </Col>
        <Col md={5}>
          <SideCard />
        </Col>
      </Row>
    </div>
  );
};

export default OpportunitiesContainer;
