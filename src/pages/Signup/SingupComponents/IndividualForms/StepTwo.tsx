import { Form } from "antd";
import { useState } from "react";
import Input from "../DrawerInput/DrawerInput";

import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Upload from "components/Upload/Upload";

const incomeOptions: { label: string; value: string | number }[] = [
  {
    label: "0 - 300k SAR",
    value: "0 - 300k SAR",
  },
  {
    label: "300k - 600k SAR",
    value: "300k - 600k SAR",
  },
  {
    label: "600k - 1M SAR",
    value: "600k - 1M SAR",
  },
  {
    label: "1M SAR ++",
    value: "1M SAR ++",
  },
];

const netWorthOptions: { label: string; value: string | number }[] = [
  {
    label: "5M SAR or less",
    value: "5M SAR or less",
  },
  {
    label: "5M SAR or more",
    value: "5M SAR or more",
  }
];

const objectiveOptions: { label: string; value: string | number }[] = [
  {
    label: "Capital growth",
    value: "Capital growth",
  },
  {
    label: "Saving",
    value: "Saving",
  },
  {
    label: "Additional income",
    value: "Additional income",
  }
];



const investmentOptions: { label: string; value: string | number }[] = [
  {
    label: "Low",
    value: "Low",
  },
  {
    label: "Medium",
    value: "Medium",
  },
  {
    label: "High",
    value: "High",
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
        <Form.Item name="income" label="Yearly income average ">
          <RadioGroup options={incomeOptions} />
        </Form.Item>
        <Form.Item name="worth" label="Net worth">
          <RadioGroup options={netWorthOptions} />
        </Form.Item>
        <Form.Item
          name="objective"
          label="What are your general investment objectives?"
        >
          <RadioGroup options={objectiveOptions} />
        </Form.Item>
        <Form.Item
          name="investment"
          label="Do you have any knowledge related to Investments?"
        >
          <RadioGroup options={investmentOptions} />
        </Form.Item>
        <h2>Bank Information</h2>
        <div className="form-row">
          <Form.Item
            name="IBAN"
            rules={[
              {
                required: true,
                message: "Please enter your IBAN",
              },
            ]}
          >
            <Input
              label="IBAN "
              placeholder="IBAN "
              className="drawer-input-two"
            />
          </Form.Item>
          <Form.Item
            name="Alinma bank"
            rules={[
              {
                required: true,
                message: "Please enter your Alinma bank number",
              },
            ]}
          >
            <Input
              label="Alinma bank"
              placeholder="Alinma bank"
              className="drawer-input-two"
            />
          </Form.Item>
        </div>
      </Form>
    </div>
  );
}
