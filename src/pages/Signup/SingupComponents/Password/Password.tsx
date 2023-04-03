import { Form, Radio } from "antd";

import Input from "components/Input/Input";
import Button from "components/Button/Button";
import DatePicker from "components/DatePicker/DatePicker";
import { ReactComponent as FormUserIcon } from "assets/svgs/form-user-icon.svg";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";
import { ReactComponent as BackArrow } from "assets/svgs/BackArrow.svg";

const Password = ({ setShowPassword, setShowOtp }) => {
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
    console.log("register")
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
      <h1>Getting started as individual</h1>
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
            prefix={<FormUserIcon />}
          />
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

        <Form.Item>
          <Button htmlType="submit" block={true} onClick={nextHandler}>
            Next
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Password;
