import { useState, useEffect } from "react";
import Otp from "components/OTP/Otp";
import Button from "components/Button/Button";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { timeConverter } from "utils/Helper";

const OtpComponent = ({
  setShowPassword,
  setShowPhone,
  setShowOtp,
  individual,
}) => {
  const navigate = useNavigate();
  const [time, setTime] = useState(5 * 60);
  const [otp, setOtp] = useState("");
  //   console.log(otp);

  useEffect(() => {
    let timer;
    if (time !== 0) {
      timer = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [time]);

  const backHandler = () => {
    setShowOtp(false);
    setShowPhone(true);
  };
  const nextHandler = () => {
    if (otp.length >= 5) {
      if (individual === "individual") {
        setShowOtp(false);
        setShowPassword(true);
      } else {
        navigate("/");
      }
    } else {
      message.error("Enter OTP");
    }
  };
  return (
    <div className="signUp-form-container">
      <Button
        style={{padding: "none"}}
        className="singUp-back-btn"
        icon={<BackArrow />}
        onClick={backHandler}
      >
        Back
      </Button>
      <p className="title">Individual Investor</p>
      {/* <h1>Getting Started as Individual</h1> */}
      <h2>Complete registration now</h2>
      <p className="otp-description">
        Please type the OTP received on your phone
      </p>
      <Otp otp={otp} setOtp={setOtp} />
      <p className="timer">
        {time !== 0 ? timeConverter(time) : "OTP expired"}{" "}
        {time ? <span>left</span> : null}
      </p>
      <Button block={true} onClick={nextHandler} className="otp-next-btn">
        Next
      </Button>
      <p className="form-bottom">Resend OTP</p>
    </div>
  );
};

export default OtpComponent;
