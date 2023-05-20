import { Button, Divider, RadioChangeEvent, Radio } from "antd";
import AbsherOtp from "./AbsherOtp";
import classes from "./steps.module.scss";
import pdf from "assets/dnaneer-terms.pdf";
import { useState } from "react";

const StepThree = ({ data, handleSkip, onSuccess, onBack, setOpen }) => {
  const [openAbsherOtp, setAbsherOtp] = useState(false);

  return (
    <>
      {openAbsherOtp && (
        <AbsherOtp
          openAbsherOtp={openAbsherOtp}
          setAbsherOtp={setAbsherOtp}
          setOpen={setOpen}
        />
      )}
      <div>
        <div>
          <h1 style={{ fontSize: "20px" }} className={classes["step-heading"]}>
            Investment POA agreement
          </h1>
        </div>

        <Divider style={{ margin: "0" }} />
        <div className={classes["iframe-wrapper"]}>
          <iframe src={pdf + "#toolbar=0&navpanes=0&scrollbar=0"}>
            Content not available
          </iframe>
        </div>
        <div className={classes["agreement-radio"]}>
          <Radio>I agree on the Investment POA Agreement</Radio>
        </div>
        <Divider />
        <div className={classes["drawer-final-container"]}>
          <div className={classes["skip"]} onClick={() => handleSkip("3")}>
            Skip for now
          </div>
          <div className={classes["previous"]} onClick={() => onBack()}>
            Previous step
          </div>

          <Button
            className={classes["complete-btn"]}
            onClick={() => setAbsherOtp(true)}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepThree;
