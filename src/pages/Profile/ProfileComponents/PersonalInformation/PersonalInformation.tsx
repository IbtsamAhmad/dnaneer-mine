
import { useState } from "react";
import Input from "components/Input/Input";
import { Row, Col,  Collapse, Form } from "antd";
import { ReactComponent as Expand } from "assets/svgs/Expand.svg";

const { Panel } = Collapse;
import "./info.scss"
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
          expandIcon={({ isActive }) => <Expand />}
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
                        name="education"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Education!",
                          },
                        ]}
                      >
                        <Input
                          label="Education"
                          placeholder="Education"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="employed"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Employed!",
                          },
                        ]}
                      >
                        <Input
                          label="Employed"
                          placeholder="Employed"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="company"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Company!",
                          },
                        ]}
                      >
                        <Input
                          label="Company"
                          placeholder="Company"
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
                            message: "Please enter your Company!",
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
                        name="experience"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Experience!",
                          },
                        ]}
                      >
                        <Input
                          label="Years of Exp."
                          placeholder="Years of Exp."
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
                            message: "Please enter your ID number!",
                          },
                        ]}
                      >
                        <Input
                          label="ID number"
                          placeholder="ID number"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="address"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Address!",
                          },
                        ]}
                      >
                        <Input
                          label="Address"
                          placeholder="Address"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="email"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Email!",
                          },
                        ]}
                      >
                        <Input
                          label="Email"
                          placeholder="Email"
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
                    <p>Education</p>
                    <h1>Undergraduate</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Employed</p>
                    <h1>Yes</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Company</p>
                    <h1>Immrsv studio.</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Position</p>
                    <h1>Senior UI Designer</h1>
                  </Col>
                </Row>
                <Row>
                  <Col lg={5} sm={12}>
                    <p>Years of Exp.</p>
                    <h1>5</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>ID number</p>
                    <h1>965965767</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Address</p>
                    <h1>Value</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>Email</p>
                    <h1>omar@immrsvafrica.com</h1>
                  </Col>
                </Row>
              </>
            )}
          </Panel>
        </Collapse>

        <Collapse
          expandIcon={({ isActive }) => <Expand />}
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
        <Collapse
          expandIcon={({ isActive }) => <Expand />}
          className={`my-collapse-three ${activeKeyThree ? "active" : ""}`}
          onChange={handleCollapseChangeThree}
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
                Banking Information
              </span>
            }
            key="3"
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
                        name="bank"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your Bank name!",
                          },
                        ]}
                      >
                        <Input
                          label="Bank name"
                          placeholder="Bank name"
                          className={"infoInput"}
                        />
                      </Form.Item>
                    </Col>
                    <Col lg={6} sm={12}>
                      <Form.Item
                        name="IBAN"
                        rules={[
                          {
                            required: true,
                            message: "Please enter your IBAN!",
                          },
                        ]}
                      >
                        <Input
                          label="IBAN"
                          placeholder="IBAN"
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
                    <p>Bank name</p>
                    <h1>Alinma Bank</h1>
                  </Col>
                  <Col lg={5} sm={12}>
                    <p>IBAN</p>
                    <h1>544675233463564</h1>
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