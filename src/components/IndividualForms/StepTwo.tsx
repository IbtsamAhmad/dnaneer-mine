import { Form, Divider, Select } from "antd";
import { useState } from "react";
import Input from "components/Input/Input";

import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";

import AppSelect from "components/Select/Select";

const { Option } = Select;

import { ReactComponent as Aggrement } from "assets/svgs/Aggrement.svg";

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

const sourceOptions: { label: string; value: string | number }[] = [
  {
    label: "Individual",
    value: "individual",
  },
  {
    label: "Institution",
    value: "institution",
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
  },
];

const objectiveOptions: { label: string; value: string | number }[] = [
  {
    label: "Less than 0 , 15,000",
    value: "Less than 0 , 15,000",
  },
  {
    label: "15,000 -50,000",
    value: "15,000 -50,000",
  },
  {
    label: "50,000-300,000",
    value: "50,000-300,000",
  },
  {
    label: "More than 300,000+",
    value: "More than 300,000+",
  },
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

interface Step2FormProps {
  onBack: () => void;
  handleSkip: (step: string) => void;
}

function Step2Form({ onBack, handleSkip }: Step2FormProps) {
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
        <Form.Item
          label="What is your primary source of income?"
          name="source"
          rules={[
            {
              // type: "email",
              // required: true,
              // message: "Please enter your email",
            },
          ]}
        >
          <AppSelect placeholder="Gender" label="Gender">
            {sourceOptions.map((source, i) => {
              return (
                <Option key={i} value={source.value}>
                  {source.label}
                </Option>
              );
            })}
          </AppSelect>
        </Form.Item>

        <Form.Item name="income" label="Yearly income average ">
          <RadioGroup options={incomeOptions} />
        </Form.Item>
        <Form.Item name="worth" label="Net worth">
          <RadioGroup options={netWorthOptions} />
        </Form.Item>
        <Form.Item
          name="objective"
          label="How much are you planning to invest?"
        >
          <RadioGroup options={objectiveOptions} />
        </Form.Item>
        {/* <Form.Item
          name="investment"
          label="Do you have any knowledge related to Investments?"
        >
          <RadioGroup options={investmentOptions} />
        </Form.Item> */}
        <h1>Bank Information</h1>
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
      <Divider />
      <div className="drawer-final-container-two">
        <p className="skip" onClick={() => handleSkip("2")}>
          Skip for now
        </p>
        <p className="previous" onClick={() => onBack()}>
          Previous step
        </p>
        <Button className="complete-btn" onClick={() => handleSkip("2")}>
          Complete
        </Button>
      </div>

      {/* <Divider />
      <p className="submit-description">
        <Aggrement />
        By submitting, you agree to the
        <span> Investment POA agreement</span>
      </p> */}
    </div>
  );
}

export default Step2Form;
