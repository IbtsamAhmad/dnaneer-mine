import { Form, Radio } from "antd";
import { ReactComponent as FormUserIcon } from "assets/svgs/form-user-icon.svg";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
const Phone = ({ setShowOtp, setShowPhone }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    setShowPhone(false);
    setShowOtp(true);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setShowPhone(false);
    setShowOtp(true);
  };

  const onChangeTerms = (e) => {
    console.log("radio checked", e.target.value);
  };
  return (
    <div className="signUp-form-container">
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
          name="phone"
          rules={[
            {
              type: "number",
              required: true,
              message: "Please enter your mobile number",
            },
          ]}
        >
          <Input
            label="Mobile Number"
            placeholder="Mobile Number"
            prefix={<FormUserIcon />}
          />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" block={true}>
            Next
          </Button>
        </Form.Item>
        <a href="/login">
          <p className="form-bottom">Sign in</p>
        </a>
      </Form>
      <div className="terms-radio">
        <Radio>
          <span className="terms">
            I approve on <a href="#">terms & conditions</a>
          </span>
        </Radio>
      </div>
    </div>
  );
};

export default Phone;
