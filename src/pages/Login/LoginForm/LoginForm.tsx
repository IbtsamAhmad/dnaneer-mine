import { Form } from "antd";
import Input from "components/Input/Input";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Button from "components/Button/Button";
import FormLockIcon from "assets/svgs/form-lock-icon.svg";
import FormUserIcon from "assets/svgs/form-user-icon.svg";

const options:{label:string; value:string|number}[] = [
    {
      label: "Individual",
      value: "individual",
    },
    {
      label: "Institution",
      value: "institution",
    },
  ];

const LoginForm = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-form-container">
      <h1>Getting started as</h1>

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
          name="type"
          rules={[
            {
              // type: "email",
              // required: true,
              // message: "Please enter your email",
            },
          ]}
        >
          <RadioGroup options={options} />
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
          <Input
            label="Username"
            placeholder="Username"
            prefix={<img src={FormUserIcon} alt="" />}
          />
        </Form.Item>
        <Form.Item
          name="password"
          //hasFeedback
          // validateStatus={passwordStatus}
          rules={[
            {
              required: true,
              message: "Please enter your password",
            },
          ]}
        >
          <Input
            prefix={<img src={FormLockIcon} alt="" />}
            label="Password"
            placeholder="Password"
            iconRender
          />
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" block={true}>
            Sign In
          </Button>
        </Form.Item>
        <p className="forgot">Forgot Password?</p>
      </Form>
    </div>
  );
};


export default LoginForm;