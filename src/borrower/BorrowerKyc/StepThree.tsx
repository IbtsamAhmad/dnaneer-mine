import { Button, Divider, RadioChangeEvent, Radio, Select,Form } from "antd";
// import AbsherOtp from "./AbsherOtp";
import classes from "./steps.module.scss";
import pdf from "assets/dnaneer-terms.pdf";
import { useState } from "react";
import FloatSelect from "components/Select/Select";
import RadioGroup from "components/RadioGroup/RadioGroup";

const { Option } = Select;

const StepThree = ({ data, handleSkip, onSuccess, onBack, }) => {
  const [openAbsherOtp, setAbsherOtp] = useState(false);

const timeOptions: { label: string; value: string | number }[] = [
  {
    label: "0-3 months",
    value: "0-3 months",
  },
  {
    label: "3 months- 6 months",
    value: "3 months- 6 months",
  },
  {
    label: "6 months- 1 year",
    value: "6 months- 1 year",
  },
  {
    label: "1 year - 5 years",
    value: "1 year - 5 years",
  },
];

const debtOptions: { label: string; value: string | number }[] = [
  {
    label: "Yes",
    value: "Yes",
  },
  {
    label: "No",
    value: "No",
  },

];
  return (
    <>
      {/* {openAbsherOtp && (
        <AbsherOtp
          openAbsherOtp={openAbsherOtp}
          setAbsherOtp={setAbsherOtp}
          setOpen={setOpen}
        />
      )} */}
      <div>
        <div>
          <h1 style={{ fontSize: "20px" }} className={classes["step-heading"]}>
            Fund Request Information
          </h1>
        </div>

        <Divider style={{ margin: "0" }} />
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
          {/* <Form.Item
            name="type"
            label="Approximate of company annual revenue (SAR)"
          >
            <RadioGroup options={anualOptions} />
          </Form.Item> */}

          <div className="register-input-container">
            <Form.Item
              name="bank"
              label="How much funding are you seeking in SAR?"
              rules={[
                {
                  required: true,
                  message: "Please select bank",
                },
              ]}
            >
              <FloatSelect
                // style={{ borderRadius: "24px" }}
                label="Select"
                placeholder="Select"
                className="drawer-select"
              >
                <Option value="0-300k">0-300k</Option>
                <Option value="300k-600k">300k-600k</Option>
                <Option value="600-1M">600-1M</Option>
                <Option value="1M-2M">1M-2M</Option>
                <Option value="2M-4M">2M-4M</Option>
                <Option value="4M-7.5M">4M-7.5M</Option>
              </FloatSelect>
            </Form.Item>
          </div>

          <Form.Item
            name="time"
            label="What is the expected timeline for repayment of the loan?"
          >
            <RadioGroup options={timeOptions} />
          </Form.Item>
          <div className="debt-options">
            <Form.Item
              name="debt"
              label="Does the company have any existing debt obligations?"
            >
              <RadioGroup options={debtOptions} />
            </Form.Item>
          </div>
        </Form>

        <Divider />
        <div className={classes["drawer-final-container"]}>
          <div className={classes["skip"]} onClick={() => handleSkip("3")}>
            Skip for now
          </div>
          <div className={classes["previous"]} onClick={() => onBack()}>
            Previous step
          </div>

          <Button
            className={classes["complete-btn"]}
            onClick={() => setAbsherOtp(true)}
          >
            Submit
          </Button>
        </div>
      </div>
    </>
  );
};

export default StepThree;
