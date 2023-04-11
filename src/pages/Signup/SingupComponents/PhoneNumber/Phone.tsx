import { useState } from "react";
import { Checkbox, Form, Radio } from "antd";
import { ReactComponent as PhoneIcon } from "assets/svgs/Phone.svg";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
// import { ReactComponent as FormUserIcon } from "assets/svgs/form-user-icon.svg";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";
// import { ReactComponent as Date } from "assets/svgs/Date.svg";
import { ReactComponent as Mail } from "assets/svgs/Mail.svg";
import { ReactComponent as Tick } from "assets/svgs/Tick.svg";
import { ReactComponent as Cross } from "assets/svgs/Cross.svg";
// import DatePicker from "components/DatePicker/DatePicker";
// import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";

// import RadioGroup from "components/RadioGroup/RadioGroup";
import type { RadioChangeEvent } from "antd";

const options: { label: string; value: string | number }[] = [
  {
    label: "Individual",
    value: "individual",
  },
  {
    label: "Institution",
    value: "institution",
  },
];

const Phone = ({
  setShowOtp,
  setShowPhone,
  setIndividual,
  setShowPassword,
  individual,
}) => {
  const [lengthVal, setLengthVal] = useState(false);
  const [oneNumVal, setOneNumVal] = useState(false);
  const [oneUpCaseVal, setOneUpCaseVal] = useState(false);
  const [oneLowCaseVal, setOneLowCaseVal] = useState(false);
  const [specialVal, setSpecialVal] = useState(false);

  const onChangePassword = (e) => {
    const { value } = e.target;
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
  const onFinish = (values) => {
    console.log("Success:", values);
    setShowPhone(false);
    setShowOtp(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    // setShowPhone(false);
    // setShowOtp(true);
  };

  const onChangeTerms = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
  };
  const onChangeIndividual = (e: RadioChangeEvent) => {
    console.log("radio checkeddd", e.target.value);
    setIndividual(e.target.value);
    // if(e.nativeEvent)
  };
  return (
    <>
      {console.log(individual)}
      <h1>Get Started As</h1>
      <Radio.Group
        value={individual}
        onChange={onChangeIndividual}
        // defaultValue={defaultValue}
        className="appRadioGroup"
      >
        {options.map((option, i) => (
          <Radio.Button key={i} value={option.value} className={"appRadioBtn"}>
            {option.label}
          </Radio.Button>
        ))}
      </Radio.Group>
      <Form
        name="signup-phone"
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
              <Form.Item
                name="phone"
                rules={[
                  {
                    type: "string",
                    required: true,
                    message: "Please enter your mobile number",
                  },
                ]}
              >
                {/* <Input
              label="Phone number"
              placeholder="Phone number"
              prefix={<PhoneIcon />}
            /> */}

                <Input
                  // type={type}
                  label="Phone number"
                  placeholder="Phone number"
                  prefix={<PhoneIcon />}
                  // disabled={disabled}
                  // onChange={onChange}

                  className={"appInput"}
                />
              </Form.Item>{" "}
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
          </div>
        )}
        <Form.Item
          valuePropName="checked"
          name="term"
          rules={[
            {
              // type: "number",
              required: true,
              message: "Please accept terms & conditions",
            },
          ]}
        >
          <div className="terms-radio">
            <Checkbox>
              <span className="terms">
                I approve on <a href="#">terms & conditions</a> &{" "}
                <a href="#">Privacy Policy</a>
              </span>
            </Checkbox>
          </div>
        </Form.Item>
        <div style={{ marginTop: "40px" }}>
          <Form.Item>
            <Button htmlType="submit" block={true}>
              Register
            </Button>
          </Form.Item>
        </div>
        <a href="/login">
          <p className="form-bottom">Log in</p>
        </a>
      </Form>
    </>
  );
};

export default Phone;
