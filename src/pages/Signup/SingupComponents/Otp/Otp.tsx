import { useState, useEffect } from "react";
import Otp from "components/OTP/Otp";
import Button from "components/Button/Button";
import { default as BackArrow } from "assets/svgs/BackArrow.svg";

const OtpComponent = ({ setShowPassword, setShowPhone, setShowOtp }) => {
  const [time, setTime] = useState(60);
  const [otp, setOtp] = useState("");
  //   console.log(otp);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const backHandler =() =>{
    setShowOtp(false);
    setShowPhone(true);
  }
  const nextHandler = () =>{
 setShowOtp(false);
    setShowPassword(true)
  }
  return (
    <div className="signUp-form-container">
      <Button
        className="singUp-back-btn"
        icon={<BackArrow />}
        onClick={backHandler}
      >
        Back
      </Button>
      <h1>Getting Started as Individual</h1>
      <p>Please type the OTP received on your phone</p>
      <Otp otp={otp} setOtp={setOtp} />
      <small>Resend in : 00:{time}</small>
      <Button block={true} onClick={nextHandler}>
        Next
      </Button>
      <a href="/login">
        <p className="form-bottom">Sign in</p>
      </a>
    </div>
  );
};

export default OtpComponent;
