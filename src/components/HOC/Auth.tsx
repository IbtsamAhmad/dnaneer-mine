import { Row, Col } from "antd";
import DnaneerIntro from "components/DnaneerIntro/DnaneerIntro";



const AuthWrapper = (Component):Function => {
  return function Auth({ ...props }):JSX.Element {
    return (
      <div className="auth-container">
        <Row align="top">
          <Col lg={15} md={12} sm={24}>
            <DnaneerIntro />
          </Col>
          <Col lg={9} md={12} sm={24} className="auth-col-two">
            <div className="auth-fixed-wrapper">
              <Component {...props} />
            </div>
          </Col>
        </Row>
      </div>
    );
  };
};

export default AuthWrapper;
