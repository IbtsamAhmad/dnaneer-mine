import React, { useState, useCallback } from "react";
import { Button, message, Steps, theme } from "antd";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";

import { ReactComponent as CloseDrawer } from "assets/svgs/CloseDrawer.svg";
import { ReactComponent as Aggrement } from "assets/svgs/Aggrement.svg";

export default function App({ setOpen }) {
  const [data, setData] = useState({});
  const [step, setStep] = useState(1);
  const description = "This is a description.";

  const handleSubmit = useCallback((data: any) => {
    setData(data);
    console.log("Data", data);
  }, []);

  const handlePrevStep = useCallback(
    (data: any) => {
      setData(data);
      setStep(step - 1);
    },
    [step]
  );

  const steps = [
    {
      title: "Investor Information",
      content: <StepOne data={data} onSuccess={handleSubmit} />,
    },
    {
      title: "Financial & Bank Information",
      content: (
        <StepTwo data={data} onSuccess={handleSubmit} onBack={handlePrevStep} />
      ),
    },
  ];

  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
  }));

  const handleNextStep = useCallback(
    (data: any) => {
      setData(data);
      setStep(step + 1);
    },
    [step]
  );

  return (
    <div className="institute-drawer-content-container">
      <Button
        icon={<CloseDrawer />}
        className="closeDrawer-btn"
        onClick={() => setOpen(false)}
      >
        Close
      </Button>
      <h1>Complete your profile now</h1>
      <p>Fill the below information</p>
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
                <span>Investor</span>
                <span>Information</span>
              </div>
            ),
          },
          {
            title: (
              <div className="step-title">
                <span>Financial</span>
                <span>Information</span>
              </div>
            ),
          },
        ]}
      />
      {/* <Steps current={current} items={items} /> */}
      <div>{steps[current].content}</div>
      <div>
        <div className="drawer-next-container">
          {current < steps.length - 1 && (
            <Button
              type="primary"
              className="drawer-next-btn"
              onClick={() => next()}
            >
              Next
            </Button>
          )}
        </div>
        {current > 0 && (
          <div className="drawer-final-container">
            {current > 0 && (
              <p className="skip" onClick={() => prev()}>
                Skip for now
              </p>
            )}
            {current > 0 && (
              <p className="previous" onClick={() => prev()}>
                Previous step
              </p>
            )}
            {current === steps.length - 1 && (
              <Button
                type="primary"
                className="complete-btn"
                // onClick={() => message.success("Processing complete!")}
              >
                Complete
              </Button>
            )}
          </div>
        )}

        {current > 0 && (
          <p className="submit-description">
            <Aggrement /> By submitting, you agree to the
            <span> Investment POA agreement</span>
          </p>
        )}
      </div>
    </div>
  );
}
