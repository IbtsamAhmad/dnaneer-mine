import { Input } from "antd";

const InvestInput = ({ investInpuVal, setInvestInput }) => {
  return (
    <div className="invest-input">
      <Input
        // shape="round"
        value={investInpuVal}
        onChange={(e) => {
          const { value } = e.target;
          const onlyNumbersRegex = /^\d*$/;
          // Remove non-numeric characters
          const numericValue = value.replace(/\D/g, "");
          // Format with commas
          const formattedValue = numericValue.replace(
            /\B(?=(\d{3})+(?!\d))/g,
            ","
          );
          // Perform regex test
          const isValid = onlyNumbersRegex.test(numericValue);
          if (isValid) {
            setInvestInput(formattedValue);
          }
        }}
        style={{ background: "#fff", fontWeight:"700" }}
        suffix="SAR"
        placeholder="Enter the amount"
      />
    </div>
  );
};

export default InvestInput;
