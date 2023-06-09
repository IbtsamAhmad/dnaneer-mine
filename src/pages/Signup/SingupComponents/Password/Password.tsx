import { useState } from "react";

import { Form, message } from "antd";
import { ReactComponent as Close } from "assets/svgs/Close.svg";
import { ReactComponent as Start } from "assets/svgs/Start.svg";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { ReactComponent as FormUserIcon } from "assets/svgs/form-user-icon.svg";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";
import { ReactComponent as Date } from "assets/svgs/Calendar.svg";
import { ReactComponent as Mail } from "assets/svgs/Mail.svg";
import { ReactComponent as Tick } from "assets/svgs/Tick.svg";
import { ReactComponent as Cross } from "assets/svgs/Cut.svg";
import DatePicker from "components/DatePicker/DatePicker";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";
import AuthContainer from "components/AuthContainer/AuthContainer";
import { registerId } from "services/Login";

const Password = ({
  setShowPassword,
  setShowOtp,
  setAbsherCode,
  individual,
  setShowNaftah,
  setNafathInfo,
  userId,
  setPasswordInfo,
}) => {
  const [passwordLength, setPasswordLength] = useState(0);
  const [lengthVal, setLengthVal] = useState(false);
  const [oneNumVal, setOneNumVal] = useState(false);
  const [oneUpCaseVal, setOneUpCaseVal] = useState(false);
  const [oneLowCaseVal, setOneLowCaseVal] = useState(false);
  const [specialVal, setSpecialVal] = useState(false);
  const [nationalId, setNationalId] = useState("");
  const [loader, setLoader] = useState(false);

  const onFinish = async (values) => {
    console.log("Success:", values);
    
    if (
      !lengthVal ||
      !oneNumVal ||
      !oneUpCaseVal ||
      (!oneLowCaseVal && specialVal)
    ) {
      return message.error("Please enter a valid Password");
    }
    if (nationalId.length < 10) {
      return message.error("Please enter a national Id number");
    }
    const body = {
      user_id: userId,
      national_id: "1122649401",
      dob: values.DOB.format("YYYY-MM-DD"),
      locale: "ar",
      service: "OpenAccount",
      password: values.password,
      email: values.email,
    };



    try {
      setLoader(true);
      const { data } = await registerId(body);
      if (data) {
        console.log("registerId Res", data);
        setNafathInfo(data);
      
        message.success(data.message);
        nextHandler();
      }
    } catch (error) {
      console.log("err", error.response.data.message);
      message.error(error.response.data.message);
    } finally {
      setLoader(false);
    }

    // nextHandler();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const backHandler = () => {
    setShowPassword(false);
    setShowOtp(true);
  };
  const nextHandler = () => {
    console.log("register");
    setShowPassword(false);
    // setAbsherCode(true);
    setShowNaftah(true);
    // setShowOtp(false);
    // setShowPassword(true);
  };

  const onChangePassword = (e) => {
    const { value } = e.target;
    console.log("Value", value);
    setPasswordLength(value.length);

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

  const validateDigits = (_, value) => {
    // const isDigitsOnly = /^\d+$/.test(value);
    // console.log("isDigitsOnly", isDigitsOnly);
    // if (isDigitsOnly) {
    //   console.log("set")
    //      setNationalId(value);
    // }else{
    //         console.log("Not set");
    //    return Promise.reject("Please enter digits only");
    // }
    const isLengthValid = value.length >= 10;
    if (!isLengthValid) {
      return Promise.reject("Please enter at least 10 digits");
    }
    return Promise.resolve();
  };

  const nationalIdHandler = (event) => {
    const { value } = event.target;
    console.log("value", value);
    const isDigitsOnly = /^\d+$/.test(value);
    console.log("isDigitsOnly", isDigitsOnly);
    if (isDigitsOnly) {
      setNationalId(value);
    }
    if (value === "") {
      setNationalId(null);
    }
  };

  return (
    <div className={"signUp-container"}>
      <div className="close-icon">
        <a href="https://staging.dnaneer.com/">
          <Close />
        </a>
      </div>
      <div style={{ height: "98%", overflowY: "auto", width: "100%" }}>
        <div
          style={{ marginTop: "15px" }}
          // className={containerClass ? containerClass : "signUp-form-container"}
          className={`signUp-form-container`}
        >
          <div className="start-icon">
            <Start />
          </div>

          <Button
            className="singUp-back-btn"
            icon={<BackArrow />}
            onClick={backHandler}
          >
            Back
          </Button>
          <p className="title">Individual Investor</p>

          <h2>Complete registration now</h2>
          <Form
            style={{ marginTop: "34px" }}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            {individual === "individual" ? (
              <>
                {/* <Form.Item
              name="id"
              rules={[
                {
                   required: true,
                  message: "Please enter your national Id",
                },
              ]}
            > */}
                <Input
                  style={{ marginBottom: "16px" }}
                  label="National ID"
                  placeholder="National ID"
                  prefix={<FormUserIcon />}
                  maxLength={10}
                  onChange={nationalIdHandler}
                  value={nationalId}
                />
                {/* </Form.Item> */}
                <Form.Item
                  name="DOB"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your birth date",
                    },
                  ]}
                >
                  <DatePicker
                    block={true}
                    label="Birth date"
                    placeholder="Birth date"
                    // prefix={<Date />}
                  />
                </Form.Item>
              </>
            ) : null}
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
              <Input label="Email" placeholder="Email" prefix={<Mail />} />
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
              <Input
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

            <div className="password-radio">
              {/* <Radio>
                <span className="terms">
                  I approve on <a href="#">terms & conditions</a> &{" "}
                  <a href="#">Privacy Policy</a>
                </span>
              </Radio> */}
            </div>

            <Form.Item>
              <Button
                loading={loader}
                htmlType="submit"
                block={true}
                className="password-next-btn"
              >
                Register
              </Button>
            </Form.Item>
            <a href="/login">
              <p className="form-bottom-password">Log in</p>
            </a>
          </Form>
        </div>
      </div>
      <div className="copy-right">
        Dnaneer © Copyright 2023, All Rights Reserved
      </div>
    </div>
  );
};

export default Password;
