
import { Button, Form } from "antd";
import { useNavigate } from "react-router-dom";
import AppInput from "components/Input/Input";
import AuthContainer from "components/AuthContainer/AuthContainer";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";
import { ReactComponent as Mail } from "assets/svgs/Mail.svg";
import AuthButton from "borrower/Components/AuthButton/AuthButton";


const LoginForm = () => {
  const navigate =useNavigate()
const onFinish = (values) => {
  console.log("Success:", values);
  navigate("/borrower/dashboard");
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
  return (
    <AuthContainer>
      <p className="title">Company</p>
      <h2>Get Started</h2>
      <Form
        name="borrowerLogin"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
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
              label="Password"
              placeholder="Password"
              prefix={<FormLockIcon />}
              // onChange={onChangePassword}
            />
          </Form.Item>
          <Form.Item>
            <AuthButton name="login" htmlType="submit" />
          </Form.Item>
        </div>
        <a href="/borrower/register">
          <p className="form-bottom-password">Register</p>
        </a>
      </Form>
    </AuthContainer>
  );
};

export default LoginForm;
