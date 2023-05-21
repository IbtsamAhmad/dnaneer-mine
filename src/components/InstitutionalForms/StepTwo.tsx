import { useState } from "react";
import { Form, Divider } from "antd";
import classes from "./steps.module.scss";

import { ReactComponent as Doc } from "assets/svgs/Doc.svg";
import { ReactComponent as Cross } from "assets/svgs/Cross.svg";

import Input from "components/Input/Input";

import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Upload from "components/Upload/Upload";

// import { ReactComponent as Aggrement } from "assets/svgs/Aggrement.svg";
import FloatSelect from "components/Select/Select";

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

const bankOptions: { label: string; value: string | number }[] = [
  {
    label: "Saudi National Bank",
    value: "Saudi National Bank",
  },
  {
    label: "The Saudi British Bank (SABB)",
    value: "The Saudi British Bank (SABB)",
  },
  {
    label: "Saudi Investment Bank",
    value: "Saudi Investment Bank",
  },
  {
    label: "Alinma Bank",
    value: "Alinma Bank",
  },
  {
    label: "Banque Saudi Fransi",
    value: "Banque Saudi Fransi",
  },

  {
    label: "Riyad Bank",
    value: "Riyad Bank",
  },
  {
    label: "Al Rajhi Bank",
    value: "Al Rajhi Bank",
  },
  {
    label: "Arab National Bank",
    value: "Arab National Bank",
  },
  {
    label: "Bank AlBilad",
    value: "Bank AlBilad",
  },

  {
    label: "Bank AlJazira",
    value: "Bank AlJazira",
  },
  {
    label: "Gulf International Bank Saudi Arabia (GIB-SA)",
    value: "Gulf International Bank Saudi Arabia (GIB-SA)",
  },

  {
    label: "Emirates NBD",
    value: "Emirates NBD",
  },
];

type BackProps = {
  onBack: () => void;
};

type Props = BackProps & {
  data: any;
  onSuccess: (data: any) => void;
  handleSkip: (step: string) => void;
};

function Step2Form({ data, onSuccess, onBack, handleSkip }: Props) {
  return (
    <div className="stepForm-container">
      <h1>Financial Information</h1>
      <Form
        name="basic"
        initialValues={{
          remember: true,
        }}
        layout="vertical"
        onFinish={onSuccess}
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
        <h2>Bank Information</h2>
        <Divider style={{ margin: 0 }} />
        <div className="register-input-container">
          <Form.Item
            name="bank"
            rules={[
              {
                required: true,
                message: "Please select bank",
              },
            ]}
          >
            <FloatSelect
              // style={{ borderRadius: "24px" }}
              label="Select Bank"
              placeholder="Select Bank"
              className="drawer-select"
            >
              {bankOptions.map((bank, i) => {
                return (
                  <Option key={i} value={bank.value}>
                    {bank.label}
                  </Option>
                );
              })}
            </FloatSelect>
          </Form.Item>
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
        <Divider style={{ margin: "10px 0 19px 0" }} />
        <Upload />
        <div className={classes["uploaed-file-wrapper"]}>
          <div className={classes["uploaded-file-container"]}>
            <div className={classes["uploaded-file-name"]}>
              <Doc />
              <span>Article of association.pdf</span>
            </div>
            <div className={classes["delete-file"]}>
              <Cross />
            </div>
          </div>
        </div>
        <h2>Other Supporting Documents</h2>
        <Divider style={{ margin: "10px 0 19px 0" }} />
        <Upload />
        <Divider style={{ margin: "35px 0 19px 0" }} />
        <div className="drawer-final-container">
          <div className="skip" onClick={() => handleSkip("2")}>
            Skip for now
          </div>
          <div className="previous" onClick={() => onBack()}>
            Previous step
          </div>

          <Button
            className="complete-btn"
            onClick={() => onSuccess("2")}
            // onClick={() => message.success("Processing complete!")}
          >
            Complete
          </Button>
        </div>
        {/* <Divider />
        <p className="submit-description" style={{ paddingBottom: "160px" }}>
          <Aggrement />
          By submitting, you agree to theeeeeeeee
          <span> Investment POA agreement</span>
        </p> */}
      </Form>
    </div>
  );
}

export default Step2Form;
