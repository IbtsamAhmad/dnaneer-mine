import { useState } from "react";
import LoginFields from "./Form";
import { Link } from "react-router-dom";

const LoginForm = ({ userType, setSwitchForm }) => {
  const [loader, setLoader] = useState<boolean>(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    let data = null;

    if (userType === "individual") {
      data = {
        user_type: 1,
        phone_number: values.phone,
      };
    } else {
      data = {
        user_type: 2,
        email: values.email,
        password: values.passwor,
      };
    }
    // return;
    setSwitchForm("otp");
    // setShowPhone(false);
    // setShowOtp(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // setShowPhone(false);
    // setShowOtp(true);
  };

  return (
    <>
      <LoginFields
        userType={userType}
        loader={loader}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      />
      <Link to="/signup">
        <p className="form-bottom">Register</p>
      </Link>
    </>
  );
};

export default LoginForm;
