import { useState } from "react";
import { Form, Divider, Select, Row,Col } from "antd";
import classes from "./steps.module.scss";

import { ReactComponent as Doc } from "assets/svgs/Doc.svg";
import { ReactComponent as Cross } from "assets/svgs/Cross.svg";

import Input from "components/Input/Input";

import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Upload from "borrower/Components/BorrowerUpload/BorrowerUpload";

// import { ReactComponent as Aggrement } from "assets/svgs/Aggrement.svg";
import FloatSelect from "components/Select/Select";
const { Option } = Select;



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
      <h1>Company documents</h1>
      <Form
        name="basic"
        initialValues={{
          IBAN: "SA-",
        }}
        layout="vertical"
        onFinish={onSuccess}
        // onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={[32, 32]}>
          <Col lg={12}>
            <Upload line="Commercial Registration" />
          </Col>
          <Col lg={12}>
            <Upload line="Article of Association" />
          </Col>
        </Row>
        <Row gutter={[32, 32]}>
          <Col lg={12}>
            <Upload line="VAT registration certificate" />
          </Col>
          <Col lg={12}>
            <Upload line="Saudization certificate" />
          </Col>
        </Row>
        <Row gutter={[32, 32]}>
          <Col lg={12}>
            <Upload line="GOSI certificate" />
          </Col>
          <Col lg={12}>
            <Upload line="Chamber of Commerce certificate" />
          </Col>
        </Row>
        <Row gutter={[32, 32]}>
          <Col lg={12}>
            <Upload line="Additional documents" />
          </Col>
          <Col lg={12}>
            <Upload line="Partners' agreement to hire authorized person to request funding" />
          </Col>
        </Row>
        <h2>Bank Information</h2>
        <Divider style={{ margin: "0 0 20px 0" }} />

        <Row gutter={[32, 32]}>
          <Col lg={12}>
            <Upload line="Bank statement for the last 12 months" />
          </Col>
          <Col lg={12}>
            <Upload line="Financial statements for the last fiscal year" />
          </Col>
        </Row>
        <Row gutter={[32, 32]}>
          <Col lg={12}>
            <Upload line="Additional documents" />
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
          </Col>
        </Row>

        <h2>Bank Information</h2>
        <Divider style={{ margin: 0 }} />
        <Row align="middle">
          <Col lg={12}>
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
          <Col lg={12}>
            <Upload line="Bank account identification certificate" />
          </Col>
        </Row>

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
