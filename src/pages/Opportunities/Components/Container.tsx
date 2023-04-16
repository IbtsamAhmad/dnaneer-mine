import Container from "components/Container/Container";
import OpportuniesTabs from "./OpportunitiesTabs/OpportunitiesTabs";
import { Row, Col } from "antd";
import SideCard from "./SideCard/SideCard";

import { ReactComponent as OpportunityIcon } from "assets/svgs/OpportunityIcon.svg";

const OpportunitiesContainer = () => {
  return (
    <div className="opportunites-wrapper">
      <Row>
        <Col xs={24}>
          <div
            style={{
              borderRadius: "20px",
              marginBottom: "2rem",
              background: "linear-gradient(270deg, #34A5FF 0%, #5B2CD3 100%)",
              padding: "3.3rem 2.3rem",
              display: "flex",
              alignItems:"center",
              justifyContent:"space-between"
            }}
          >
            <div>
              <h1 style={{ color: "#fff", fontSize: "20px" }}>
                Find the best Opportunity for you
              </h1>
              <h4 style={{ color: "#fff", fontSize: "16px" }}>
                Maximize your investments today!
              </h4>
            </div>
            <OpportunityIcon />
          </div>
        </Col>
        <Col md={18}>
          <Container>
            <div style={{ padding: "0 26px" }}>
              <h1 className="dashboard-page-header">Opportunies</h1>
            </div>
            <OpportuniesTabs />
          </Container>
        </Col>
        <Col md={6}>
          <SideCard />
        </Col>
      </Row>
    </div>
  );
};

export default OpportunitiesContainer;
