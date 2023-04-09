import { useState, useEffect } from "react";
import Otp from "components/OTP/Otp";
import Button from "components/Button/Button";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";

const OtpComponent = ({ setShowPassword, setShowPhone, setShowOtp }) => {
  const [time, setTime] = useState(60);
  const [otp, setOtp] = useState("");
  //   console.log(otp);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setTime((prevTime) => prevTime - 1);
  //   }, 1000);

  //   return () => clearInterval(timer);
  // }, []);

  const backHandler = () => {
    setShowOtp(false);
    setShowPhone(true);
  };
  const nextHandler = () => {
    setShowOtp(false);
    setShowPassword(true);
  };
  return (
    <div className="signUp-form-container">
      <Button
        className="singUp-back-btn"
        icon={<BackArrow />}
        onClick={backHandler}
      >
        Back
      </Button>
      <p className="title">Individual Investor</p>
      {/* <h1>Getting Started as Individual</h1> */}
      <h2>Complete registration now</h2>
      <p className="otp-description">Please type the OTP received on your phone</p>
      <Otp otp={otp} setOtp={setOtp} />
      <p className="timer">
        4:55 min <span>left</span>
      </p>
      <Button block={true} onClick={nextHandler}>
        Next
      </Button>
      <p className="form-bottom">Resend OTP</p>
    </div>
  );
};

export default OtpComponent;
