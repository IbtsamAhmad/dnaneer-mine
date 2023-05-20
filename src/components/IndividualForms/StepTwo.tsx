import { Form, Divider, Select , Row, Col} from "antd";
import classes from "./steps.module.scss";
import Input from "components/Input/Input";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import AppSelect from "components/Select/Select";

const { Option } = Select;

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
    label: "Salary",
    value: "Salary",
  },
  {
    label: "Investments income",
    value: "Investments income",
  },
  {
    label: "Personal savings",
    value: "Personal savings",
  },
  {
    label: "Other",
    value: "Other",
  },
];

const bankOptions: { label: string; value: string | number }[] = [
  {
    label: "Alinma Bank",
    value: "Alinma Bank",
  },
  {
    label: "XYZ Bank",
    value: "XYZ Bank",
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
    label: "0 - 15,000",
    value: "0-5,000",
  },
  {
    label: "15,000 - 50,000",
    value: "15,000-50,000",
  },
  {
    label: "50,000 - 300,000",
    value: "50,000-300,000",
  },
  {
    label: "300,000+",
    value: "300,000+",
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
  onComplete: (step: string) => void;
}

function Step2Form({ onBack, handleSkip, onComplete }: Step2FormProps) {
  return (
    <div className="stepForm-container">
      <h1>Financial Information</h1>
      <Form
        name="financialInformation"
        initialValues={{
          IBAN: "SA-",
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
          <AppSelect
            className="drawer-select"
            placeholder="Select"
            label="Select"
          >
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
        {/* <div className="form-row"> */}
        <Row>
          <Col span={12}>
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
                value="SA-"
                label="IBAN "
                placeholder="IBAN "
                className={`drawer-input-two ${classes["bank-input"]}`}
              />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              // label="What is your Bank?"
              name="bank"
              rules={[
                {
                  // type: "email",
                  // required: true,
                  // message: "Please enter your email",
                },
              ]}
            >
              <AppSelect
                className="drawer-select"
                placeholder="Select"
                label="Select"
              >
                {bankOptions.map((bank, i) => {
                  return (
                    <Option key={i} value={bank.value}>
                      {bank.label}
                    </Option>
                  );
                })}
              </AppSelect>
            </Form.Item>
          </Col>
        </Row>

        {/* </div> */}
      </Form>
      <Divider />
      <div className="drawer-final-container-two">
        <div className="skip" onClick={() => handleSkip("2")}>
          Skip for now
        </div>
        <div className="previous" onClick={() => onBack()}>
          Previous step
        </div>
        <Button className="complete-btn" onClick={() => onComplete("2")}>
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
