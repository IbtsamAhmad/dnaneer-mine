import { useState } from "react";
import { Form, Radio, message, Space, Select } from "antd";
import { ReactComponent as PhoneIcon } from "assets/svgs/Phone.svg";
import AppInput from "components/Input/Input";
import Button from "components/Button/Button";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";
import { ReactComponent as Mail } from "assets/svgs/Mail.svg";
import { ReactComponent as Tick } from "assets/svgs/Tick.svg";
import { ReactComponent as Cross } from "assets/svgs/Cut.svg";
import { register } from "services/Login";

import SwitchUser from "components/SwitchUser/SwitchUser";
import AuthContainer from "components/AuthContainer/AuthContainer";
// import { useForm } from "antd/es/form/Form";
import classes from "./phone.module.scss";

const { Option } = Select;

const Phone = ({
  setShowOtp,
  setShowPhone,
  setIndividual,
  setShowPassword,
  individual,
}) => {
  const [signUpForm] = Form.useForm();
  const [passwordLength, setPasswordLength] = useState(0);
  const [phoneNum, setPhoneNum] = useState("+966");
  const [loader, setLoader] = useState<boolean>(false);
  const [lengthVal, setLengthVal] = useState(false);
  const [oneNumVal, setOneNumVal] = useState(false);
  const [oneUpCaseVal, setOneUpCaseVal] = useState(false);
  const [oneLowCaseVal, setOneLowCaseVal] = useState(false);
  const [specialVal, setSpecialVal] = useState(false);

  const onChangePassword = (e) => {
    const { value } = e.target;
    setPasswordLength(value.length);
    console.log("Value", value);

    value.length >= 8 ? setLengthVal(true) : setLengthVal(false);

    const numRegex = new RegExp("(?=.*[0-9])");
    const numTest = numRegex.test(value);
    numTest ? setOneNumVal(true) : setOneNumVal(false);

    const upCaseRegex = new RegExp("(?=.*[A-Z])");
    const upCaseTest = upCaseRegex.test(value);
    upCaseTest ? setOneUpCaseVal(true) : setOneUpCaseVal(false);

    const lowCaseRegex = new RegExp("(?=.*[a-z])");
    const lowCaseTest = lowCaseRegex.test(value);
    lowCaseTest ? setOneLowCaseVal(true) : setOneLowCaseVal(false);

    const symbolRegex = new RegExp("(?=.*[!@#$%^&*])");
    const symbolTest = symbolRegex.test(e.target.value);
    symbolTest ? setSpecialVal(true) : setSpecialVal(false);
  };

  const onChangePhone = (e) => {
    //  console.log(e.target.value.length)
    const { value } = e.target;
    if (value.length > 3 && /^\+\d*$/.test(value)) {
      return setPhoneNum(value);
    }
  };

  const registerUser = async (data) => {
    setShowPhone(false);
    setShowOtp(true);
    //    if (lengthVal && oneNumVal && oneUpCaseVal && oneLowCaseVal && specialVal) {

    // }

    // setLoader(true);
    // try {
    //   const response = await register(data);
    //   if (response) {
    //     message.success(response.data.message);
    //     console.log(response);

    //   }
    // } catch (err) {
    //   console.log(err);
    //   message.error(err.response.data.message);
    // } finally {
    //   setLoader(false);
    // }
  };

  const onFinish = async (values) => {
    console.log("Success:", values);
    let data = null;

    if (individual === "individual") {
      data = {
        user_type: 1,
        phone_number: phoneNum,
      };
    } else {
      data = {
        user_type: 2,
        email: values.email,
        password: values.passwor,
      };
    }
    return registerUser(data);
    // setShowPhone(false);
    // setShowOtp(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // setShowPhone(false);
    // setShowOtp(true);
  };

  // const onChangeTerms = (e: RadioChangeEvent) => {
  //   console.log("radio checked", e.target.value);
  // };

  return (
    <AuthContainer containerClass={classes["phone-container"]}>
      <h1>Get Started As</h1>
      <SwitchUser userType={individual} setUserType={setIndividual} />
      <Form
        name="signup"
        initialValues={{
          type: "individual",
          phone: "",
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        {" "}
        {individual === "individual" ? (
          <>
            <div className="phone-item">
              <AppInput
                // max={9}
                maxLength={13}
                label="Phone number"
                placeholder="XXXXXXXX"
                value={phoneNum}
                prefix={<PhoneIcon />}
                // disabled={disabled}
                onChange={onChangePhone}
                className={"appInput"}
              />
            </div>
          </>
        ) : (
          <div style={{ marginTop: "34px" }}>
            <Form.Item
              name="email"
              rules={[
                {
                  type: "email",
                  required: true,
                  message: "Please enter your email",
                },
              ]}
            >
              <AppInput label="Email" placeholder="Email" prefix={<Mail />} />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  type: "string",
                  required: true,
                  message: "Please enter your password",
                },
              ]}
            >
              <AppInput
                iconRender={true}
                label="Create Password"
                placeholder="Create Password"
                prefix={<FormLockIcon />}
                onChange={onChangePassword}
              />
            </Form.Item>
            {passwordLength >= 1 && (
              <div className="password-validations">
                <p style={{ color: lengthVal ? "#17B890" : "#C4C1CA" }}>
                  {lengthVal ? <Tick /> : <Cross />}
                  At least 8 characters
                </p>
                <p style={{ color: oneNumVal ? "#17B890" : "#C4C1CA" }}>
                  {oneNumVal ? <Tick /> : <Cross />}
                  At least one Number (0-9)
                </p>
                <p style={{ color: oneUpCaseVal ? "#17B890" : "#C4C1CA" }}>
                  {oneUpCaseVal ? <Tick /> : <Cross />}
                  At least 1 Uppercase
                </p>
                <p style={{ color: oneLowCaseVal ? "#17B890" : "#C4C1CA" }}>
                  {oneLowCaseVal ? <Tick /> : <Cross />}
                  At least 1 Lowercase
                </p>

                <p style={{ color: specialVal ? "#17B890" : "#C4C1CA" }}>
                  {specialVal ? <Tick /> : <Cross />}
                  Inclusion of at least one special character, e.g., ! @ # ? ]
                </p>
              </div>
            )}
          </div>
        )}
        <Form.Item
          name="isApproved"
          rules={[
            { required: true, message: "Please accept terms & conditions" },
          ]}
        >
          <div className="terms-radio">
            <Radio value={1}>
              <span className="terms">
                I agree to <a href="#"> Terms & Conditions</a>
                <span>&</span>
                <a href="#">Privacy Policy</a>
              </span>
            </Radio>
          </div>
        </Form.Item>
        <Form.Item>
          <Button
            loading={loader}
            htmlType="submit"
            block={true}
            className="phone-submit"
          >
            Register
          </Button>
        </Form.Item>
        <a href="/login">
          <p className="form-bottom">Log in</p>
        </a>
      </Form>
    </AuthContainer>
  );
};

export default Phone;
