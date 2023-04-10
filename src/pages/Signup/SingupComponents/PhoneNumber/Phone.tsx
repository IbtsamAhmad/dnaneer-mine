
import { Form, Radio } from "antd";
import { ReactComponent as PhoneIcon } from "assets/svgs/Phone.svg";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
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

const Phone = ({ setShowOtp, setShowPhone, setIndividual }) => {
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

  const onChangeTerms = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
  };
  const onChangeIndividual = (e: RadioChangeEvent) => {
    console.log("radio checkeddd", e.target.value);
    if (e.target.value === "individual") {
      setIndividual(true);
    }
    if (e.target.value === "institution") {
      setIndividual(false);
    }
  };
  return (
    <>
      <h1>Get Started As</h1>
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
          <RadioGroup onChange={onChangeIndividual} options={options} />
        </Form.Item>
        <div className="phone-item">
          <Form.Item
            name="phone"
            rules={[
              {
                // type: "number",
                // required: true,
                // message: "Please enter your mobile number",
              },
            ]}
          >
            <Input
              label="Phone number"
              placeholder="Phone number"
              prefix={<PhoneIcon />}
            />
          </Form.Item>
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
          <Button htmlType="submit" block={true}>
            Register
          </Button>
        </Form.Item>
        <a href="/login">
          <p className="form-bottom">Log in</p>
        </a>
      </Form>
    </>
  );
};

export default Phone;
