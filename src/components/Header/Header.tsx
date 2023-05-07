import { SetStateAction, Dispatch } from "react";
import { Input, Badge, Avatar, Row, Col } from "antd";

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
            <div className="start-icon">
              <Start />
              <h1>Dnaneer</h1>
              <div className="burger" onClick={() => setCollapsed(!collapsed)}>
                <Hamburger />
              </div>
            </div>
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
}

export default Header;
