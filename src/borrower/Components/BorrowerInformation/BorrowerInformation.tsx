import { useState } from "react";
import Input from "components/Input/Input";
import { Row, Col, Collapse, Form } from "antd";
import { ReactComponent as Expand } from "assets/svgs/Expand.svg";
import DatePicker from "components/DatePicker/DatePicker";

const { Panel } = Collapse;

const PersonalInformation = ({ editInfo }) => {
  const [activeKey, setActiveKey] = useState(1);
  const [activeKeyTwo, setActiveKeyTwo] = useState(null);
  const [activeKeyThree, setActiveKeyThree] = useState(null);

  function handleCollapseChange(keys) {
    setActiveKey(keys[0]);
  }
  function handleCollapseChangeTwo(keys) {
    setActiveKeyTwo(keys[0]);
  }
  function handleCollapseChangeThree(keys) {
    setActiveKeyThree(keys[0]);
  }
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <div className="info-panel-container">
        <Collapse
          defaultActiveKey={["1"]}
          // expandIcon={({ isActive }) => }
          expandIcon={({ isActive }) => (
            <div
              style={{
                transform: !isActive ? "rotate(0deg)" : "rotate(180deg)",
              }}
            >
              <Expand />
            </div>
          )}
          className={`my-collapse ${activeKey ? "active" : ""}`}
          onChange={handleCollapseChange}
          accordion
        >
          <Panel
            header={
              <span
                style={{
                  display: "inline-flex",
                  background: "linear-gradient(270deg, #2b48f4, #34a5ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  // textFillColor: "transparent",
                }}
              >
                Personal Information
              </span>
            }
            key="1"
          >
            {editInfo ? (
              <>
                <Form
                  name="basic"
                  className="info-form-container"
                  initialValues={{
                    name: "value",
                    id: "56534477",
                    position: "value",
                    phone: "Phone Number",
                    DOB: "",
                  }}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Row gutter={[32, 32]}>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="name"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your name!",
                          },
                        ]}
                      >
                        <Input
                          label="name"
                          placeholder="name"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="id"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your ID Number!",
                          },
                        ]}
                      >
                        <Input
                          label="ID Number"
                          placeholder="ID Number"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="position"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Position!",
                          },
                        ]}
                      >
                        <Input
                          label="Position"
                          placeholder="Position"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="phone"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your phone!",
                          },
                        ]}
                      >
                        <Input
                          label="Phone Number"
                          placeholder="Phone Number"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[32, 32]} style={{ marginTop: "-6px" }}>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="DOB"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Date of Birth!",
                          },
                        ]}
                      >
                        <DatePicker
                          block={true}
                          label="Date of Birth"
                          placeholder="Date of Birth"
                          className="drawer-input-one drawer-input-one-date"
                          // prefix={<Date />}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </>
            ) : (
              <>
                <Row>
                  <Col lg={5} sm={12}>
                    <p>Name</p>
                    <h1>value</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>ID Number</p>
                    <h1>56534477</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Position</p>
                    <h1>value</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Phone Number</p>
                    <h1>+966********</h1>
                  </Col>
                </Row>
                <Row>
                  <Col lg={5} sm={12}>
                    <p>Date of Birth</p>
                    <h1>5/5/1995</h1>
                  </Col>
                </Row>
              </>
            )}
          </Panel>
        </Collapse>

        <Collapse
          expandIcon={({ isActive }) => (
            <div
              style={{
                transform: !isActive ? "rotate(0deg)" : "rotate(180deg)",
              }}
            >
              <Expand />
            </div>
          )}
          className={`my-collapse-two ${activeKeyTwo ? "active" : ""}`}
          onChange={handleCollapseChangeTwo}
        >
          <Panel
            header={
              <span
                style={{
                  display: "inline-flex",
                  background: "linear-gradient(270deg, #2b48f4, #34a5ff)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  // textFillColor: "transparent",
                }}
              >
                Financial Information
              </span>
            }
            key="2"
          >
            {editInfo ? (
              <>
                <Form
                  name="basic"
                  className="info-form-container"
                  initialValues={{
                    remember: true,
                  }}
                  layout="vertical"
                  onFinish={onFinish}
                  onFinishFailed={onFinishFailed}
                  autoComplete="off"
                >
                  <Row gutter={[32, 32]}>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="source"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Source of income!",
                          },
                        ]}
                      >
                        <Input
                          label="Source of income"
                          placeholder="Source of income"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="averageIncome"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Yearly Average income!",
                          },
                        ]}
                      >
                        <Input
                          label="Yearly Average income"
                          placeholder="Yearly Average income"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="worth"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Net worth!",
                          },
                        ]}
                      >
                        <Input
                          label="Net worth"
                          placeholder="Net worth"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="position"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your position!",
                          },
                        ]}
                      >
                        <Input
                          label="Position"
                          placeholder="Position"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={[32, 32]} style={{ marginTop: "-6px" }}>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="knowledge"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Investment knowledge!",
                          },
                        ]}
                      >
                        <Input
                          label="Investment knowledge"
                          placeholder="Investment knowledge"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                </Form>
              </>
            ) : (
              <>
                <Row>
                  <Col lg={5} sm={12}>
                    <p>Source of income</p>
                    <h1>Job</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Yearly Avgrage income</p>
                    <h1>300k - 600k SAR</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Net worth</p>
                    <h1>Capital growth</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Position</p>
                    <h1>Senior UI Designer</h1>
                  </Col>
                </Row>
                <Row>
                  <Col lg={5} sm={12}>
                    <p>Investment knowledge.</p>
                    <h1>Medium</h1>
                  </Col>
                </Row>
              </>
            )}
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default PersonalInformation;
