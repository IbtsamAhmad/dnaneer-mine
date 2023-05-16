import { Col, Progress, Row } from "antd";
import DashboardCard from "./DasboardComponents/DasboardCard/DasboardCard";
import Greeting from "pages/Dashboard/DasboardComponents/Greeting/Greeting";
import Card from "components/Card/Card";
import Button from "components/Button/Button";
import AppCard from "components/Card/Card";
import DashboardCardsContainer from "components/DashboardCardsContainer/DashboardCardsContainer";
import IndividualDrawer from "components/IndividualDrawer/IndividualDrawer";
import { ReactComponent as AdvisorImage } from "assets/svgs/AdvisorImage.svg";
import { ReactComponent as AdvisorLogo } from "assets/svgs/AdvisorLogo.svg";
import { ReactComponent as Amount } from "assets/svgs/Amount.svg";
import { ReactComponent as InvestIcon } from "assets/svgs/InvestIcon.svg";
import { ReactComponent as RoiIcon } from "assets/svgs/RoiIcon.svg";
import { ReactComponent as Profit } from "assets/svgs/Profit.svg";
import { ReactComponent as Email } from "assets/svgs/Email.svg";
import { ReactComponent as Number } from "assets/svgs/Number.svg";
import { ReactComponent as Call } from "assets/svgs/Call.svg";
import { ReactComponent as User } from "assets/svgs/User.svg";
import { ReactComponent as BlueArrow } from "assets/svgs/BlueArrow.svg";
import { ReactComponent as InvestmentOne } from "assets/svgs/InvestmentOne.svg";
import { ReactComponent as InvestmentTwo } from "assets/svgs/InvestmentTwo.svg";
import { ReactComponent as InvestmentThree } from "assets/svgs/InvestmentThree.svg";
import { ReactComponent as InvestmentFour } from "assets/svgs/InvestmentFour.svg";

const investmentList = [
  {
    icon: <InvestmentOne />,
    id: "#3458874",
    price: "250,000",
    active: true,
    company: "Importing & Exporting Agency",
    tags: [
      "12 months",
      "Oppor. date: 25 Feb, 2023",
      "Annual ROI 17.5%",
      "Risk score B",
      "Net ROI: 2,295 SAR",
    ],
  },
  {
    icon: <InvestmentTwo />,
    id: "#3458874",
    price: "250,000",
    active: false,
    company: "Importing & Exporting Agency",
    tags: [
      "12 months",
      "Oppor. date: 25 Feb, 2023",
      "Annual ROI 17.5%",
      "Risk score B",
      "Net ROI: 2,295 SAR",
    ],
  },
  {
    icon: <InvestmentThree />,
    id: "#3458874",
    price: "250,000",
    active: false,
    company: "Importing & Exporting Agency",
    tags: [
      "12 months",
      "Oppor. date: 25 Feb, 2023",
      "Annual ROI 17.5%",
      "Risk score B",
      "Net ROI: 2,295 SAR",
    ],
  },
  {
    icon: <InvestmentFour />,
    id: "#3458874",
    price: "250,000",
    active: false,
    company: "Importing & Exporting Agency",
    tags: [
      "12 months",
      "Oppor. date: 25 Feb, 2023",
      "Annual ROI 17.5%",
      "Risk score B",
      "Net ROI: 2,295 SAR",
    ],
  },
];

const DashboardConent = () => {
  return (
    <>
      <Greeting
        role="Individual investor"
        name="Omar"
        src="assets/images/Avatar 2.png"
      />
      <Row gutter={[32, 32]} className="investment-row">
        <Col lg={6} md={12} sm={12} xs={12}>
          <DashboardCard
            icon={<Amount />}
            heading="1,400,000"
            subHeading="Total Investments Amount"
            headingClassName="heading-black"
            subHeadingClassName="subHeading-blue"
            headingSpan="SAR"
            modalHeading="Total Investments Amount"
            modalInfo="It represents the total value of investments made by you in all the investment opportunities on the platform"
          />
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          {" "}
          <DashboardCard
            icon={<InvestIcon />}
            heading="17.2"
            subHeading="Return of Investments (ROI)"
            headingClassName="heading-black"
            subHeadingClassName="subHeading-blue"
            headingSpan="%"
            modalHeading="Return of Investments (ROI)"
            modalInfo="represents the average return on investment across all opportunities. It is calculated by dividing the total profits earned from all investments by the total cost of all investments."
          />
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          {" "}
          <DashboardCard
            icon={<RoiIcon />}
            heading="85,000"
            subHeading="Total Net ROI"
            headingClassName="heading-black"
            subHeadingClassName="subHeading-blue"
            headingSpan="SAR"
            modalHeading="Total Net ROI"
            modalInfo="represents the total return on investment across all opportunities. It is calculated by subtracting the total cost of all investments from the total profits earned from those investments."
          />
        </Col>
        <Col lg={6} md={12} sm={12} xs={12}>
          <DashboardCard
            icon={<Profit />}
            heading="110,000"
            subHeading="Unrealized profit"
            headingClassName="heading-black"
            subHeadingClassName="subHeading-blue"
            headingSpan="SAR"
            modalHeading="Unrealized profit"
            modalInfo="Represents the potential profit an investment will generate after the completion of the investment duration."
          />
        </Col>
      </Row>
      <Row gutter={[22, 16]}>
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
          <div className="investments-container">
            <div className="investment-header">
              <h1>My Investments</h1>
              <div className="view-all-btn">
                View All <BlueArrow />
              </div>
            </div>
            <div className="investment-lists">
              {investmentList.map((investment, i) => {
                return (
                  <AppCard style={{ marginTop: i > 0 ? "10px" : "" }}>
                    <div className="investment-list" key={i}>
                      <div className="investment-list-header">
                        <div className="investment-list-one">
                          <div>{investment.icon}</div>
                          <div className="investment-list-two">
                            <p className="id">{investment.id}</p>
                            <h2>
                              {investment.price} <span>SAR Invested</span>
                            </h2>
                            <p className="company">{investment.company}</p>
                          </div>
                        </div>

                        <div>
                          <Button
                            className={
                              investment.active ? "active-btn" : "close-btn"
                            }
                          >
                            {investment.active ? "Active" : "Close"}
                          </Button>
                        </div>
                      </div>
                      <div className="tags-container">
                        {investment.tags.map((tag, i) => {
                          return (
                            <p className="investment-tag" key={i}>
                              {tag}
                            </p>
                          );
                        })}
                      </div>
                    </div>
                  </AppCard>
                );
              })}
            </div>
          </div>
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
          <DashboardCardsContainer>
            <Card className="activate-card">
              <div className="activate-content">
                <Progress
                  strokeColor={{
                    "0%": "#73DCFA",
                    "100%": "#73DCFA",
                  }}
                  strokeWidth={12}
                  type="circle"
                  percent={75}
                  size="small"
                />
                <div>
                  <h1>Activate my account</h1>
                  <p>Complete the KYC to start investing today.</p>
                </div>
              </div>
              {/* <Button className="activate-btn" block>
              Activate Now
            </Button> */}
              <IndividualDrawer />
            </Card>
          </DashboardCardsContainer>

          <DashboardCardsContainer>
            <Card className="wallet-card">
              <h1>My Wallet</h1>
              <div className="wallet-info-container">
                <div className="wallet-user-info">
                  <User />
                  <div>
                    <p className="card-num">966 2030 2030 2030</p>
                    <p className="card-name">OMAR GAMAL</p>
                  </div>
                </div>
                <p className="balance">Your Balance</p>
                <h2>
                  1,200,000 <sub>SAR</sub>
                </h2>
                <div className="wallet-btns">
                  <Button className="wallet-add-btn">Add Balance</Button>
                  <Button className="wallet-transfer-btn">Transfer</Button>
                </div>
              </div>
            </Card>
          </DashboardCardsContainer>
          <DashboardCardsContainer>
            <Card className="advisor-card">
              <h1>My Financial advisor</h1>
              <p>
                Your financial advisor is available to help you with your
                investment inquires. Reach out Directly.
              </p>
              <div className="advisor-profile">
                <div className="advisor-image">
                  <div className="advisor-logo">
                    <AdvisorLogo />
                  </div>
                  <img src="assets/images/Baddar.png" alt="Baddar" />
                </div>

                <h2>Bader Aljuhani</h2>
                <p>Financial advisor</p>
                <div className="contact-icons">
                  <div className="contact-icon">
                    <Email />
                  </div>
                  <div
                    className="contact-icon"
                    style={{
                      width: "40px",
                      height: "40px",
                      padding: "8px 9px",
                    }}
                  >
                    <img
                      src="assets/images/whatsapp.png"
                      alt=""
                      style={{ width: "20px" }}
                    />
                  </div>
                  <div className="contact-icon">
                    <Call />
                  </div>
                </div>
              </div>
            </Card>
          </DashboardCardsContainer>
        </Col>
      </Row>
    </>
  );
};

export default DashboardConent;
