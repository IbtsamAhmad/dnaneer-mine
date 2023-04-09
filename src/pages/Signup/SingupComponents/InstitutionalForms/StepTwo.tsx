import { Form } from "antd";
import { useState } from "react";
import Input from "../DrawerInput/DrawerInput";

import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Upload from "components/Upload/Upload";


const incomeOptions: { label: string; value: string | number }[] = [
  {
    label: "investments",
    value: "investments",
  },
  {
    label: "Business Income",
    value: "Business Income",
  },
  {
    label: "Rental Income",
    value: "Rental Income",
  },
  {
    label: "others",
    value: "others",
  },
];


const anualOptions: { label: string; value: string | number }[] = [
  {
    label: "0-20m",
    value: "0-20m",
  },
  {
    label: "20m-50m",
    value: "20m-50m",
  },
  {
    label: "50m -200m",
    value: "50m -200m",
  },
  {
    label: "200m+",
    value: "200m+",
  },
];

const approxyOptions: { label: string; value: string | number }[] = [
  {
    label: "0-500k",
    value: "0-500k",
  },
  {
    label: "500k-6.5m",
    value: "500k-6.5m",
  },
  {
    label: "6.5m-35m",
    value: "6.5m-35m",
  },
  {
    label: "35m+",
    value: "35m+",
  },
];

type BackProps = {
  onBack: (data: any) => void;
};

function BackBtn({ onBack }: BackProps) {
  //   const dataRef = useDataRef("/");

  return (
    <Button
    //    onClick={() => onBack(dataRef.value)}
    >
      Back
    </Button>
  );
}

type Props = BackProps & {
  data: any;
  onSuccess: (data: any) => void;
};

export default function Step2Form({ data, onSuccess, onBack }: Props) {
  return (
    <div className="stepForm-container">
      <h1>Financial Information</h1>
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
        <Form.Item name="type" label="Source of income">
          <RadioGroup options={incomeOptions} />
        </Form.Item>
        <Form.Item
          name="type"
          label="Approximate of company annual revenue (SAR)"
        >
          <RadioGroup options={anualOptions} />
        </Form.Item>
        <Form.Item
          name="type"
          label="Approximate of annual investments amount (SAR)"
        >
          <RadioGroup options={anualOptions} />
        </Form.Item>
        <h2>Bank Information</h2>
        <div className="register-input-container">
          <Form.Item
            name="Name"
            rules={[
              {
                required: true,
                message: "Please enter your IBAN number",
              },
            ]}
          >
            <Input
              label="IBAN number"
              placeholder="IBAN number"
              className="drawer-input-register"
            />
          </Form.Item>
        </div>
        <h2>Legal Documents</h2>
        <Upload />
        <h2>Other Supporting Documents</h2>
        <Upload />
      </Form>
    </div>
  );
}
