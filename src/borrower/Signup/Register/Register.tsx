import { useState } from "react";
import Button from "components/Button/Button";
import { Form, Radio } from "antd";
import { ReactComponent as Mail } from "assets/svgs/Mail.svg";
import { useNavigate } from "react-router-dom";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";
// import { ReactComponent as PhoneIcon } from "assets/svgs/Phone.svg";
import BorrowerLayout from "components/AuthContainer/AuthContainer";
import AuthWrapper from "components/HOC/BorrowerAuth";
import AppInput from "components/Input/Input";
import BorrowerOtp from "borrower/Signup/Otp/Otp";
const Register = () => {
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  const onFinish = () => {

    setShowOtp(true);

    // navigate("/borrower/otp");
  };
  return (
    <BorrowerLayout>
      <h1>Get Started</h1>
      {showOtp ? (
        <>
          <BorrowerOtp setShowOtp={setShowOtp} />
        </>
      ) : (
        <>
          <Form
            name="signup"
            initialValues={{
              type: "individual",
              phone: "",
            }}
            onFinish={onFinish}
            //   onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <>
              <div className="phone-item">
                <AppInput
                  // max={9}
                  maxLength={13}
                  label="Commercial Registration Number"
                  placeholder=""
                  //   value={phoneNum}
                  prefix={"#"}
                  // disabled={disabled}
                  //   onChange={onChangePhone}
                  className={"appInput"}
                />
              </div>
            </>

            <div style={{ marginTop: "16px" }}>
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
                  //   onChange={onChangePassword}
                />
              </Form.Item>
              {/* {passwordLength >= 1 && (
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
      )} */}
            </div>

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
                    <a
                      href="https://dnaneer.com/privacy-policy/"
                      target="_blank"
                    >
                      Privacy Policy
                    </a>
                  </span>
                </Radio>
              </div>
            </Form.Item>
            <Form.Item>
              <Button
                //   loading={loader}
                htmlType="submit"
                block={true}
                className="phone-submit"
              >
                Register
              </Button>
            </Form.Item>
            <a onClick={() => navigate("/borrower/login")}>
              <p className="form-bottom">Log in</p>
            </a>
          </Form>
        </>
      )}
    </BorrowerLayout>
  );
};

const RegisterPage = AuthWrapper(Register);

const BorrowerRegister = () => {
  const [individual, setIndividual] = useState<string>("borrower");

  return <RegisterPage individual={individual} setIndividual={setIndividual} />;
};

export default BorrowerRegister;
