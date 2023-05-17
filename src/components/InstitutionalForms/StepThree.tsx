import { Button, Divider, RadioChangeEvent, Radio } from "antd";
import classes from "./steps.module.scss";
const StepThree = ({ data, handleSkip, onSuccess, onBack }) => {
  return (
    <div>
      <div>
        <h1 style={{ fontSize: "20px" }} className={classes["step-heading"]}>
          Investment POA agreement
        </h1>
      </div>

      <Divider style={{ margin: "0" }} />
      <div className={classes["iframe-wrapper"]}>
        <iframe>Content not available</iframe>
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
          onClick={() => onSuccess("3")}
        >
          Complete
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
