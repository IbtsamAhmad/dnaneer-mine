import { Form, Radio } from "antd";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import { ReactComponent as FormUserIcon } from "assets/svgs/form-user-icon.svg";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";
import { ReactComponent as Date } from "assets/svgs/Date.svg";
import { ReactComponent as Mail } from "assets/svgs/Mail.svg";
import { ReactComponent as Tick } from "assets/svgs/Tick.svg";
import { ReactComponent as Cross } from "assets/svgs/Cross.svg";
import DatePicker from "components/DatePicker/DatePicker";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";

const Password = ({ setShowPassword, setShowOtp, setAbsherCode }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
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
    setAbsherCode(true);
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

      <h2>Complete registration now</h2>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          name="id"
          rules={[
            {
              required: true,
              message: "Please enter your national Id",
            },
          ]}
        >
          <Input
            label="National ID"
            placeholder="National ID"
            prefix={<FormUserIcon />}
          />
        </Form.Item>
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
            prefix={<Date />}
          />
        </Form.Item>
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
          <Input label="Username" placeholder="Username" prefix={<Mail />} />
        </Form.Item>

        <Form.Item
          name="password"
          rules={[
            {
              type: "number",
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
          />
        </Form.Item>
        <div className="password-validations">
          <p>
            <Tick />
            At least 8 characters
          </p>
          <p>
            <Cross />
            At least one Number (0-9)
          </p>
          <p>
            <Tick />
            At least 1 Uppercase
          </p>
          <p>
            <Cross />
            At least 1 Lowercase
          </p>
          <p>
            <Tick />
            At least one special character, e.g., ! @ # ? ]
          </p>
          <p>
            <Cross />
            Inclusion of at least one special character, e.g., ! @ # ? ]
          </p>
        </div>

        <div className="terms-radio">
          <Radio>
            <span className="terms">
              I approve on <a href="#">terms & conditions</a> &{" "}
              <a href="#">Privacy Policy</a>
            </span>
          </Radio>
        </div>

        <Form.Item>
          <Button htmlType="submit" block={true} onClick={nextHandler}>
            Register
          </Button>
        </Form.Item>
        <a href="/login">
          <p className="form-bottom-password">Log in</p>
        </a>
      </Form>
    </div>
  );
};

export default Password;
