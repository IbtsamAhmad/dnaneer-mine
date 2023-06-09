import { Button } from "antd";

const ThirdColumn = ({ onViewDetail }) => {
  return (
    <div className="card-third-col">
      <Button
        shape="round"
        style={{ width: "98px", fontSize: "12px", height: "38px" }}
        type="primary"
        onClick={onViewDetail}
      >
        Details
      </Button>
      <div>
        <p className="card-text">Published 50 minutes ago</p>
      </div>
    </div>
  );
};

export default ThirdColumn;
