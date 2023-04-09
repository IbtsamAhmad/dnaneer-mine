import { Row, Col, Image } from "antd";
const AuthWrapper = (Component):Function => {
  return function Auth({ ...props }):JSX.Element {
   const {individual, setIndividual} = props;
   console.log("individual One", individual);
    return (
      <div className="auth-container">
        <Row align="top">
          <Col lg={15} md={12} sm={24}>
            <div className="auth-col-one">
              <Image
                preview={false}
                src={
                  individual
                    ? "/assets/images/individual.png"
                    : "/assets/images/institutional.png"
                }
                alt="login"
                className="login-img"
              />
            </div>
          </Col>
          <Col lg={9} md={12} sm={24}>
            <div className="auth-col-two">
              <Component {...props} />
            </div>
          </Col>
        </Row>
      </div>
    );
  };
};

export default AuthWrapper;
