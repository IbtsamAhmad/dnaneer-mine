import AppSteps from "components/Steps/Steps";
import { Row, Col, Checkbox, Button, Input, Radio } from "antd";

const UserInformation = () => {
  return (
    <div>
      User Personal Information
      <Row>
        <Col md={16}>
          {" "}
          <AppSteps />
        </Col>
        <Col md={8}>
          <Radio />
          <Checkbox />
          <Button shape="round" type="primary">
            Button
          </Button>
          <Input />
        </Col>
      </Row>
    </div>
  );
};

export default UserInformation;
