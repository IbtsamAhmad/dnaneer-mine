import { Form, Divider } from "antd";
import { SetStateAction, Dispatch } from "react";
import Input from "components/Input/Input";

import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Upload from "components/Upload/Upload";

const educationOptions: { label: string; value: string | number }[] = [
  {
    label: "Postgraduate",
    value: "Postgraduate",
  },
  {
    label: "Undergraduate",
    value: "Undergraduate",
  },
  {
    label: "High school",
    value: "High school",
  },
];

const employOptions: { label: string; value: string | number }[] = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },
];

const infoOptions: { label: string; value: string | number }[] = [
  {
    label: "Less than 1 year",
    value: "Less than 1 year",
  },
  {
    label: "1-5 years",
    value: "1-5 years",
  },
  {
    label: "More than 5 years",
    value: "More than 5 years",
  },
];

type Props = {
  data: any;
  onSuccess: (data: any) => void;
  setCurrent: Dispatch<SetStateAction<number>>;
  handleSkip: (step?: string) => void;
};

export default function Step2Form({
  data,
  onSuccess,
  setCurrent,
  handleSkip,
}: Props) {
  return (
    <div className="stepForm-container">
      <h1>Personal Information</h1>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item name="Education" label="Education">
          <RadioGroup options={educationOptions} />
        </Form.Item>
        <Form.Item name="type" label="Are you currently an employee?">
          <RadioGroup options={employOptions} />
        </Form.Item>
        <div className="form-row">
          <Form.Item
            name="Name"
            label="Employment information"
            rules={[
              {
                required: true,
                message: "Please enter your Name",
              },
            ]}
          >
            <Input
              label="Company name"
              placeholder="Company name"
              className="drawer-input-one"
            />
          </Form.Item>
          <Form.Item name="position" label="   ">
            <Input
              label="Current position"
              placeholder="Current position"
              className="drawer-input-one"
            />
          </Form.Item>
        </div>

        <Form.Item
          name="type"
          label="Years of experience in the current company"
        >
          <RadioGroup options={infoOptions} />
        </Form.Item>
        <Divider />
        <div className="drawer-next-container-two">
          <div className="skip" onClick={() => handleSkip()}>
            Skip for now
          </div>
          <Button className="drawer-next-btn" onClick={() => setCurrent(1)}>
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}
