import { useState } from "react";
import { Col, Row, Button } from "antd";
import InvestInput from "./InvestInput";
import { ReactComponent as InvestmentBack } from "assets/svgs/InvestmentBack.svg";

const Invest = () => {
  const [investInpuVal, setInvestInput] = useState("");
  const [showInvestment, setShowInvestment] = useState(false);
  let ROI = 17.5;
  let Percent =  (ROI / 100).toFixed(2);
  // console.log("Percent", Percent);


  return (
    <div>
      <Row justify="end">
        <Col style={{ minWidth: "388px", maxWidth: "388px" }}>
          <div className="invest box-shadow">
            {showInvestment ? (
              <>
                <div
                  onClick={() => setShowInvestment(false)}
                  className="back-header"
                >
                  <InvestmentBack />
                  <p>Back</p>
                </div>
                <h1 className="large-heading">You will invest</h1>
                <div className="invest-netPrice" style={{ marginTop: "9px" }}>
                  <span className="net-unit">
                    {investInpuVal}
                    <span style={{ marginLeft: "8px" }}>SAR</span>
                  </span>
                </div>
                <h1 className="large-heading">You will receive</h1>
                <div className="invest-net" style={{ marginTop: "9px" }}>
                  <span className="net-unit">
                    {(+investInpuVal.replaceAll(",", "") * Percent * 4).toFixed(
                      2
                    )}
                    <span style={{ marginLeft: "8px" }}>SAR</span>
                  </span>
                </div>
                <p className="net-roi">The net ROI 10% * duration 12 months</p>
                <Button
                  style={{
                    marginTop: "37px",
                    width: "100%",
                    color: "#fff",
                    background: "#5B2CD3",
                    fontSize: "16px",
                    padding: "1.67rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                  }}
                  shape="round"
                  onClick={() => {
                    setShowInvestment(false);
                    setInvestInput("");
                  }}
                >
                  Confirm
                </Button>
              </>
            ) : (
              <>
                <h1 className="large-heading">I will invest</h1>
                <InvestInput
                  investInpuVal={investInpuVal}
                  setInvestInput={setInvestInput}
                />
                <div className="invest-text">
                  <p>
                    Your expected return will be calculated automatically based
                    on the net ROI * duration
                  </p>
                </div>
                <div className="invest-net">
                  <span className="net-unit">
                    {(+investInpuVal.replaceAll(",", "") * Percent * 4).toFixed(
                      2
                    )}
                    <span style={{ marginLeft: "8px" }}>SAR</span>
                  </span>
                  <span className="net-text">Net return of investment</span>
                </div>
                <Button
                  style={{
                    marginTop: "20px",
                    width: "100%",
                    color: "#fff",
                    background:
                      investInpuVal.length === 0 ? "#bcb1d6" : "#5B2CD3",
                    fontSize: "16px",
                    padding: "1.67rem 1rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: "none",
                  }}
                  shape="round"
                  disabled={investInpuVal.length === 0 ? true : false}
                  onClick={() => setShowInvestment(true)}
                >
                  Invest Now
                </Button>
              </>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Invest;
