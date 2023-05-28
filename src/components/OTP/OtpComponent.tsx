import { useEffect } from "react";
import Otp from "./Otp";
import Button from "components/Button/Button";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";
import { timeConverter } from "utils/Helper";

const OtpComponent = ({
  backHandler,
  otp,
  setOtp,
  time,
  loader,
  nextHandler,
  userType,
  formType,
  setTime,
}) => {
  useEffect(() => {
    let timer;
    if (time !== 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);

  return (
    <div className="signUp-form-container">
      {/* {contextHolder} */}
      <Button
        style={{ padding: "none" }}
        className="singUp-back-btn"
        icon={<BackArrow />}
        onClick={backHandler}
      >
        Back
      </Button>
      <p className="title">
        {userType === "individual"
          ? "Individual Investor"
          : "Institutional Investor"}
      </p>
      <h2>{formType === "login" ? "Login" : "Complete registration now"}</h2>
      <p className="otp-description">
        Please type the OTP received on your phone
      </p>
      <Otp otp={otp} setOtp={setOtp} />
      <p className="timer">
        {time !== 0 ? timeConverter(time) : "OTP expired"}{" "}
        {time ? <span>left</span> : null}
      </p>
      <Button
        loading={loader}
        block={true}
        onClick={nextHandler}
        className="otp-next-btn"
      >
        Next
      </Button>
      <p className="form-bottom">Resend OTP</p>
    </div>
  );
};

export default OtpComponent;
