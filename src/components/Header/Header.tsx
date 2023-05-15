import { SetStateAction, Dispatch } from "react";
import { Input, Badge, Avatar, Row, Col, Popover } from "antd";
import { Link } from "react-router-dom";
import { ReactComponent as Start } from "assets/svgs/Start.svg";
import { ReactComponent as NavSearch } from "assets/svgs/NavSearch.svg";
import { ReactComponent as Web } from "assets/svgs/Web.svg";
import { ReactComponent as Bell } from "assets/svgs/Bell.svg";
import { ReactComponent as Hamburger } from "assets/svgs/Hamburger.svg";

import "./header.scss";


type Props = {
  collapsed?: boolean;
  setCollapsed?: Dispatch<SetStateAction<boolean>>;
};


const content = (
  <div>
    <p>Notification</p>
    <p>Notification</p>
  </div>
);

function Header({ setCollapsed, collapsed }: Props) {
  return (
    <div className="header-container">
      <Row align="middle">
        <Col
          lg={{
            span: 4,
            order: 1,
          }}
          xl={4}
          xxl={3}
          md={{
            span: 8,
            order: 1,
          }}
          xs={{
            span: 8,
            order: 1,
          }}
          sm={{
            span: 8,
            order: 1,
          }}
        >
          <div className="header-col-one">
            <Link to="/">
              <div className="start-icon" style={{ cursor: "pointer" }}>
                <Start />
                <h1>Dnaneer</h1>
                <div
                  className="burger"
                  onClick={() => setCollapsed(!collapsed)}
                >
                  <Hamburger />
                </div>
              </div>
            </Link>
          </div>
        </Col>
        <Col
          xl={16}
          xxl={17}
          xs={{
            span: 24,
            order: 3,
          }}
          sm={{
            span: 24,
            order: 3,
          }}
          lg={{
            span: 16,
            order: 2,
          }}
          md={{
            span: 24,
            order: 3,
          }}
        >
          <div className="header-search">
            <Input
              placeholder="Search by opportunity reference number"
              prefix={<NavSearch />}
            />
          </div>
        </Col>
        <Col
          md={{
            span: 16,
            order: 2,
          }}
          xs={{
            span: 16,
            order: 2,
          }}
          lg={{
            span: 4,
            order: 3,
          }}
          sm={{
            span: 16,
            order: 2,
          }}
        >
          <div className="header-col-two">
            {/* <div className="language">
              <Web />
            </div> */}
            <div className="badge-icon">
              <Popover content={content} title="Notifications" trigger="click">
                <Badge count={1}>
                  <Bell />
                </Badge>
              </Popover>
            </div>

            <Avatar src="/assets/images/Avatar 2.png" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
