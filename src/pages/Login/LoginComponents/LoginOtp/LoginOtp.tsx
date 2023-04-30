import { message } from "antd";
import OtpComponent from "components/OTP/OtpComponent";
import { LOGIN_FORM } from "constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginOtp = ({ userType, setSwitchForm }) => {
  const navigate = useNavigate();
  const [time, setTime] = useState<number>(60);
  const [otp, setOtp] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(false);

  const backHandler = () => {
    // setShowOtp(false);
    // setShowPhone(true);
    setSwitchForm("login");
  };
  const nextHandler = async () => {
    if (otp.length >= 6) {
      if (otp === "123456") {
        if (userType === "individual") {
          //   setShowOtp(false);
          //   setShowPassword(true);
        } else navigate("/dashboard");
      }
      // setLoader(true);
      // verifyOTP({ user_id: 5, otp: otp })
      //   .then((res) => {
      //     // console.log("res", res);
      //     if (individual === "individual") {

      //     } else {
      //       navigate("/dashboard");
      //     }
      //   })
      //   .catch((err) => {
      //     // console.log("err", err);
      //     message.error(err.response.data.message);
      //   })
      //   .finally(() => {
      //     setLoader(false);
      //   });
    } else {
      message.error("Enter OTP");
    }
  };

  return (
    <OtpComponent
      time={time}
      setOtp={setOtp}
      otp={otp}
      loader={loader}
      backHandler={backHandler}
      nextHandler={nextHandler}
      formType={LOGIN_FORM}
      userType={userType}
    />
  );
};

export default LoginOtp;
