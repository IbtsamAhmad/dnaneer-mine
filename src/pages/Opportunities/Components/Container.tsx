import Container from "components/Container/Container";
import OpportuniesTabs from "./OpportunitiesTabs/OpportunitiesTabs";
import { Row, Col } from "antd";
import SideCard from "./SideCard/SideCard";
import LoadMore from "./LoadMore/LoadMore";
import OpportunityBanner from "./OpportunityBanner/OpportunityBanner";
const OpportunitiesContainer = () => {
  return (
    <div className="opportunites-wrapper">
      <Row gutter={[32, 32]}>
        <Col xs={24}>
          <OpportunityBanner />
        </Col>
        <Col
          flex="auto"
          xs={{
            order: 2,
          }}
          lg={{
            order: 1,
          }}
          sm={{
            order: 2,
          }}
        >
          <Container>
            <div style={{ padding: "0 26px" }}>
              <h1 className="dashboard-page-header">Opportunies</h1>
            </div>
            <OpportuniesTabs />
          </Container>
          <LoadMore />
        </Col>
        <Col
          xs={{
            order: 1,
          }}
          lg={{
            order: 2,
          }}
          sm={{
            order: 1,
          }}
        >
          <SideCard />
        </Col>
      </Row>
    </div>
  );
};

export default OpportunitiesContainer;
