import { Radio } from "antd";

const options = [
  { label: "All", value: "all" },
  { label: "12 months", value: "12-m" },
  { label: "24 months", value: "24-m" },
  { label: "48 months", value: "48-m" },
];

const RadioOptions = () => {
  return (
    <div className="opportunites-radio" style={{ padding: "0 29px" }}>
      <Radio.Group defaultValue={"all"}  className="radio-group">
        {options.map((el) => {
          return (
            <Radio.Button
              className="radio-button"
              value={el.value}
              key={el.value}
            >
              {el.label}
            </Radio.Button>
          );
        })}
      </Radio.Group>
    </div>
  );
};

export default RadioOptions;
