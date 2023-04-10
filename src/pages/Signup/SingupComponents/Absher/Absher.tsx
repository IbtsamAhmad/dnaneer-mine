import { useState, useEffect } from "react";
import Otp from "components/OTP/Otp";
import Button from "components/Button/Button";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";

const Absher = () => {
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
    //back
    //  setAbsherCode(false);
    //   setShowPassword(true);
  };
  const nextHandler = () => {
    // setShowOtp(false);
    // setShowPassword(true);
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
      <h1 className="absher-description">
        <img src="/assets/svgs/Green.svg" alt="" />
        Enter Absher Code
      </h1>
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

export default Absher;
