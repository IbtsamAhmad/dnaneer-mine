
import Input from "components/Input/Input";
import { Row, Col,  Collapse, Form } from "antd";
import { ReactComponent as Expand } from "assets/svgs/Expand.svg";

const { Panel } = Collapse;
import "./info.scss"
const PersonalInformation = ({ editInfo }) => {
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
                  <Row>
                    <Col lg={5} sm={12}>
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
                    <Col lg={5} sm={12}>
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
                    <Col lg={5} sm={12}>
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
                    <Col lg={5} sm={12}>
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
                  <Row>
                    <Col lg={5} sm={12}>
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
                    <Col lg={5} sm={12}>
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
                    <Col lg={5} sm={12}>
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
                    <Col lg={5} sm={12}>
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

        <Collapse expandIcon={({ isActive }) => <Expand />}>
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
            key="1"
          >
            Financial Information
          </Panel>
        </Collapse>
        <Collapse
          defaultActiveKey={["1"]}
          expandIcon={({ isActive }) => <Expand />}
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
            key="1"
          >
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
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export default PersonalInformation;