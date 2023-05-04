import * as React from "react";
import { Form, Divider } from "antd";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

type Props = {
  data: any;
  onSuccess: (data: any) => void;
  setCurrent: React.Dispatch<React.SetStateAction<number>>;
};

function Step1Form({ data, onSuccess, setCurrent }: Props) {
  return (
    <div className="stepForm-container">
      <h1>Investor Information</h1>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        // onFinish={onFinish}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <div className="register-input-container">
          <Form.Item
            name="Name"
            rules={[
              {
                required: true,
                message: "Please enter your Name",
              },
            ]}
          >
            <Input
              label="Enter the commercial registration number"
              placeholder="Enter the commercial registration number"
              className="drawer-input-register"
            />
          </Form.Item>
          <Button className="checkBtn">Check</Button>
        </div>
        <div className="form-row">
          <Form.Item
            name="name"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please enter your Name",
            //   },
            // ]}
          >
            <Input
              label="Company name"
              placeholder="Company name"
              className="drawer-input-two"
              disabled
            />
          </Form.Item>
          <Form.Item
            name="date"
            rules={[
              {
                required: true,
                message: "Please enter your Enter Saudi ID number",
              },
            ]}
          >
            <Input
              label="Establishment date"
              placeholder="Establishment date"
              className="drawer-input-two"
              disabled
            />
          </Form.Item>
        </div>
        <div className="form-row">
          <Form.Item
            name="Address"
            rules={[
              {
                required: true,
                message: "Please enter your Address",
              },
            ]}
          >
            <Input
              label="Address"
              placeholder="Address"
              className="drawer-input-two"
              disabled
            />
          </Form.Item>
          <Form.Item
            name="legal"
            rules={[
              {
                required: true,
                message: "Please enter your Enter Saudi ID number",
              },
            ]}
          >
            <Input
              maxLength={10}
              label="Company Legal Structure"
              placeholder="Company Legal Structure"
              className="drawer-input-two"
              disabled
            />
          </Form.Item>
        </div>

        <h2>Institutional Investor's Manager (Contact Person)</h2>
        <div className="form-row">
          <Form.Item
            name="Name"
            rules={[
              {
                required: true,
                message: "Please enter your Name",
              },
            ]}
          >
            <Input
              label="Name"
              placeholder="Name"
              className="drawer-input-one"
            />
          </Form.Item>
          <Form.Item
            name="sId"
            rules={[
              {
                required: true,
                message: "Please enter your Enter Saudi ID number",
                pattern: /^\d+$/,
              },
            ]}
          >
            <Input
              label="Enter Saudi ID number"
              placeholder="Enter Saudi ID number"
              className="drawer-input-one"
            />
          </Form.Item>
        </div>
        <div className="form-row">
          <Form.Item
            name="position"
            rules={[
              {
                required: true,
                message: "Please enter your Name",
              },
            ]}
          >
            <Input
              label="Position/Role"
              placeholder="Position/Role"
              className="drawer-input-one"
            />
          </Form.Item>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter your Enter Saudi ID number",
              },
            ]}
          >
            <Input
              label="Phone Number"
              placeholder="Phone Number"
              className="drawer-input-one"
            />
          </Form.Item>
        </div>
        <Divider />
        <div className="drawer-next-container">
          <Button className="drawer-next-btn" onClick={() => setCurrent(1)}>
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default Step1Form;
