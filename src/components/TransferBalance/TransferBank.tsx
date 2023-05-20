import { Form } from "antd";
import { ReactComponent as TransferBack } from "assets/svgs/TransferBack.svg";
import { ReactComponent as BankBlack } from "assets/svgs/BankBlack.svg";
import Button from "components/Button/Button";

import Input from "components/Input/Input";

const TransferBank = ({ handleBack, handleNext }) => {
  const onFinish = (values) => {
    console.log("Success:", values);
    handleNext();
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <>
      <div className="transfer-back" onClick={handleBack}>
        <TransferBack />
        <p>Back</p>
      </div>
      <h1>Transfer by bank</h1>
      <div className="modal-content">
        <div className="header">
          <BankBlack />
          <h1>Transfer Information</h1>
        </div>
        <Form
          name="basic"
          className="info-form-container"
          initialValues={{
            iban: "191820 30 2030 2030",
            bank: "Al Rajhi",
          }}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="iban"
            rules={[
              {
                required: true,
                message: "Please enter your IBAN number!",
              },
            ]}
          >
            <Input
              label="IBAN number"
              placeholder="IBAN number"
              className={"infoInput"}
            />
          </Form.Item>

          <Form.Item
            name="bank"
            rules={[
              {
                required: true,
                message: "Please enter your Bank!",
              },
            ]}
          >
            <Input
              label="Bank name"
              placeholder="Bank name"
              className={"infoInput"}
            />
          </Form.Item>
          <Form.Item
            name="amount"
            rules={[
              {
                required: true,
                message: "Please enter your amount!",
              },
            ]}
          >
            <Input
              type="number"
              label="Enter amount"
              placeholder="Enter amount"
              className={"infoInput"}
            />
          </Form.Item>
          <Form.Item>
            <Button
              htmlType="submit"
              block
              style={{ height: "52px", marginTop: "22px" }}
            >
              Proceed
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default TransferBank;
