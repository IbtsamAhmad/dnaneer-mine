import { Button } from "antd";

const AuthButton = ({ name, htmlType }) => {
  return (
    <Button
      block
      type="primary"
      shape="round"
      htmlType={htmlType}
      style={{ height: "55px" }}
    >
      {name}
    </Button>
  );
};

export default AuthButton;
