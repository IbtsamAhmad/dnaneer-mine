import { Form, Radio, Space, Select } from "antd";
import { ReactComponent as PhoneIcon } from "assets/svgs/Phone.svg";
import AppInput from "components/Input/Input";
import Button from "components/Button/Button";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";
import { ReactComponent as Mail } from "assets/svgs/Mail.svg";

const {Option} = Select;

const LoginFields = ({ onFinish, onFinishFailed, userType, loader }) => {
  return (
    <Form
      name="basic"
      initialValues={{
        type: "individual",
        phone: "",
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      {userType === "individual" ? (
        <>
          <div className="phone-item">
            <Form.Item
              name="phone"
              rules={[
                {
                  type: "string",
                  required: true,
                  message: "Please enter your mobile number",
                },
                {
                  pattern: /^\d+$/,
                  message: "Please enter numbers only",
                },
                // {
                //   validator: (_, value) => {
                //     if (value && value.length > 9) {
                //       return Promise.reject(
                //         "Value should be less than 10 characters"
                //       );
                //     }
                //     return Promise.resolve();
                //   },
                // },
                {
                  max: 9,
                  message: "Value should be less than 10 characters",
                },
              ]}
            >
              <Space.Compact>
                <Select defaultValue="1">
                  <Option value="1">
                    <img
                      style={{ width: "15px" }}
                      src="https://cdn.jsdelivr.net/npm/country-flag-emoji-json@2.0.0/dist/images/SA.svg"
                      alt="flag"
                    />{" "}
                    +966
                  </Option>
                </Select>
                <AppInput
                  max={9}
                  maxLength={9}
                  label="Phone number"
                  placeholder="XXXXXXXX"
                  // value={phoneNum}
                  prefix={<PhoneIcon />}
                  // disabled={disabled}
                  // onChange={onChangePhone}
                  className={"appInput"}
                />
              </Space.Compact>
            </Form.Item>{" "}
          </div>
        </>
      ) : (
        <div style={{ marginTop: "34px" }}>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                required: true,
                message: "Please enter your email",
              },
            ]}
          >
            <AppInput label="Email" placeholder="Email" prefix={<Mail />} />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                type: "string",
                required: true,
                message: "Please enter your password",
              },
            ]}
          >
            <AppInput
              iconRender={true}
              label="Password"
              placeholder="Password"
              prefix={<FormLockIcon />}
              // onChange={onChangePassword}
            />
          </Form.Item>
        </div>
      )}
      <div style={{ display: "flex", justifyContent: "end", fontSize: "12px" }}>
        Forget passowrd?
      </div>
      <Form.Item>
        <Button
          loading={loader}
          htmlType="submit"
          block={true}
          style={{ height: "55px", marginTop: "5px" }}
        >
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginFields;
