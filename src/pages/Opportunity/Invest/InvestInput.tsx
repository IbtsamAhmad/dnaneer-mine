import { Input } from "antd";

const InvestInput = ({ investInpuVal, setInvestInput }) => {
  return (
    <div className="invest-input">
      <Input
        // shape="round"
        value={investInpuVal}
        onChange={(e) => {
          setInvestInput(e.target.value);
        }}
        style={{ background: "#fff" }}
        suffix="SAR"
        placeholder="Enter the amount"
      />
    </div>
  );
};

export default InvestInput;
