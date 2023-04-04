import AppSteps from "components/Steps/Steps";
import { Row, Col } from "antd";
const UserInformation = () => {
  return (
    <div>
      User Personal Information
      <Row>
        <Col md={16}>
          {" "}
          <AppSteps />
        </Col>
        <Col md={8}></Col>
      </Row>
    </div>
  );
};

export default UserInformation;
