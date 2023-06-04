import { message } from "antd";
import OtpComponent from "components/OTP/OtpComponent";
import { LOGIN_FORM } from "constants";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { verifyLoginOTP } from "services/Login";

const LoginOtp = ({ userType, setSwitchForm, userId }) => {
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
    console.log("userType", userType);
    let body;

    if (otp.length < 4) {
      return message.error("Please enter a valid OTP");
    } else {
      setLoader(true);
      if (userType === "Institutional") {
        body = {
          user_type: 2,
          email: userId.email,
          password: userId.password,
          otp: otp,
          // user_type: 2,
        };
      } else {
        body = {
          user_type: 1,
          email: userId.email,
          password: userId.password,
          otp: otp,
          //  user_type: 1,
        };
      }

      try {
        const res = await verifyLoginOTP(body);
        if (res) {
          console.log("verifyLoginOTP Res", res);
          const { data } = res;
          localStorage.setItem("token", data.data.token);
          message.success(data.message);
          // setSwitchForm("otp");
          localStorage.setItem(
            "institutional",
            userType === "Institutional" ? "Institutional" : "Individual"
          );
          navigate("/dashboard");
        }
      } catch (error) {
        console.log("err", error.response.data.message);
        message.error(error.response.data.message);
      } finally {
        setLoader(false);
      }
    }
  };

  return (
    <OtpComponent
      time={time}
      setTime={setTime}
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
