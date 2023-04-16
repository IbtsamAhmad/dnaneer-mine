import { Input, Badge, Avatar, Row, Col } from "antd";

import { ReactComponent as Start } from "assets/svgs/Start.svg";
import { ReactComponent as NavSearch } from "assets/svgs/NavSearch.svg";
import { ReactComponent as Web } from "assets/svgs/Web.svg";
import { ReactComponent as Bell } from "assets/svgs/Bell.svg";

import "./header.scss";
const Header = () => {
  return (
    <div className="header-container">
      <Row>
        <Col md={4}  xl={4} xxl={3}>
          <div className="header-col-one">
            <div className="start-icon">
              <Start />
              <h1>Dnaneer</h1>
            </div>
          </div>
        </Col>
        <Col md={16} xl={16} xxl={17}>
          <div className="header-search">
            <Input
              placeholder="Search by opportunity reference number"
              prefix={<NavSearch />}
            />
          </div>
        </Col>
        <Col md={4} lg={4} xxl={4}>
          <div className="header-col-two">
            <div className="language">
              <Web />
            </div>
            <div className="badge-icon">
              <Badge count={1}>
                <Bell />
              </Badge>
            </div>

            <Avatar src="/assets/images/Avatar 2.png" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
