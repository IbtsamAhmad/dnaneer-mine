import { Form } from "antd";
import Input from "components/Input/Input";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Button from "components/Button/Button";
import { ReactComponent as Start } from "assets/svgs/Start.svg";
import { ReactComponent as Close } from "assets/svgs/Close.svg";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";
// import FormUserIcon from "assets/svgs/form-user-icon.svg";
import { ReactComponent as FormUserIcon } from "assets/svgs/form-user-icon.svg";

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

const LoginForm = (props) => {
  const { individual, setIndividual } = props;

  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-form-container">
    <Close/>
      <Start />
      <h1>Login In Form</h1>

      {/* <Form
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
            prefix={<FormUserIcon />}
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
            prefix={<FormLockIcon />}
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
      </Form> */}
    </div>
  );
};

export default LoginForm;
