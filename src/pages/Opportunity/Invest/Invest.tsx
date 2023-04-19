import { useState } from "react";
import { Button } from "antd";
import InvestInput from "./InvestInput";
const Invest = () => {
  const [investInpuVal, setInvestInput] = useState("");

  return (
    <div className="invest box-shadow">
      <h1 className="large-heading">I will invest</h1>
      <InvestInput
        investInpuVal={investInpuVal}
        setInvestInput={setInvestInput}
      />
      <div className="invest-text">
        <p>
          Your expected return will be calculated automatically based on the net
          ROI * duration
        </p>
      </div>
      <div className="invest-net">
        <span className="net-unit">
          {investInpuVal}
          <span style={{ marginLeft: "8px" }}>SAR</span>
        </span>
        <span className="net-text">Net return of investment</span>
      </div>
      <Button
        style={{
          marginTop: "20px",
          width: "100%",
          color: "#fff",
          background: "#5B2CD3",
          fontSize: "16px",
          padding: "1.67rem 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        shape="round"
      >
        Invest Now
      </Button>
    </div>
  );
};

export default Invest;
