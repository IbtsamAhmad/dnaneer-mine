import { Row, Col } from "antd";

// import { ReactComponent as Profits } from "assets/svgs/Profits.svg";

// import { ReactComponent as PhoneIcon } from "assets/svgs/Phone.svg";
import { ReactComponent as Networks } from "assets/svgs/Networks.svg";


const AuthWrapper = (Component):Function => {
  return function Auth({ ...props }):JSX.Element {
   const {individual, setIndividual} = props;
   console.log("individual One", individual);
    return (
      <div className="auth-container">
        <Row align="stretch">
          <Col lg={15} md={12} sm={24}>
            <div className="auth-col-one">
              <img
                src={
                  individual
                    ? "/assets/images/individual.png"
                    : "/assets/images/institutional.png"
                }
                alt="login"
                className="login-img"
              />
              <div className="profits">
                {/* <Profits /> */}
              </div>
              <div className="networks">
                <Networks />
              </div>
              <div className="description">
                <h1 style={{ color: individual ? "#fff" : "#140A2B" }}>
                  Discover new investment opportunities
                </h1>
                <p style={{ color: individual ? "#fff" : "#140A2B" }}>
                  Maximize your investments!
                </p>
              </div>
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
