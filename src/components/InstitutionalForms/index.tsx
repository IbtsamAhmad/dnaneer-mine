import { useState } from "react";
import { Button, Steps } from "antd";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

import { ReactComponent as CloseDrawer } from "assets/svgs/CloseDrawer.svg";

function InstitutionForms({ setOpen }) {
  const [data, setData] = useState({});
  const [current, setCurrent] = useState(0);

  const handleSubmit = () => {
    console.log("Submit");
  };

  const nextHandler = () => {
    setCurrent(current + 1);
  };

  const handlePrevStep = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "Investor Information",
      content: (
        <StepOne data={data} onSuccess={handleSubmit} setCurrent={setCurrent} />
      ),
    },
    {
      title: "Financial & Bank Information",
      content: (
        <StepTwo data={data} onSuccess={handleSubmit} onBack={handlePrevStep} />
      ),
    },
  ];

  return (
    <div className="institute-drawer-content-container">
      <div className="content">
        <Button
          icon={<CloseDrawer />}
          className="closeDrawer-btn"
          onClick={() => setOpen(false)}
        >
          Close
        </Button>
        <h1>Complete your profile now</h1>
        <p>Fill the below information</p>
        <div className="form-steps-container">
          <Steps
            labelPlacement="vertical"
            current={current}
            percent={0}
            // progressDot={(props) => {
            //   console.log(props);
            //   return <p>propgress</p>;
            // }}
            items={[
              {
                title: (
                  <div className="step-title">
                    <span style={{ color: "#5B2CD3" }}>Investor</span>
                    <span style={{ color: "#5B2CD3" }}>Information</span>
                  </div>
                ),
              },
              {
                title: (
                  <div className="step-title">
                    <span
                      style={{
                        color: current === 1 ? "#5B2CD3" : "#4E4760",
                        opacity: current === 1 ? 1 : 0.4,
                      }}
                    >
                      Financial & Bank
                    </span>
                    <span
                      style={{
                        color: current === 1 ? "#5B2CD3" : "#4E4760",
                        opacity: current === 1 ? 1 : 0.4,
                      }}
                    >
                      Information
                    </span>
                  </div>
                ),
              },
            ]}
          />
        </div>
        <>{steps[current].content}</>
      </div>
    </div>
  );
}

export default InstitutionForms;
