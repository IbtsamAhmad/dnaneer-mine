import type { RadioChangeEvent } from "antd";
import { Radio } from "antd";
import "./radioGroup.scss";

interface RadioProps {
  options: {
    label: string;
    value: string | number;
  }[];
  onChange?: (e: RadioChangeEvent) => void;
  className?: string;
  defaultValue?: string | number;
}

const AppInput = ({
  onChange,
  className,
  defaultValue,
  options,
}: RadioProps) => {
  return (
    <>
      <Radio.Group
        onChange={onChange}
        defaultValue={defaultValue}
        className="appRadioGroup"
      >
        {options.map((option, i) => (
          <Radio.Button
            key={i}
            value={option.value}
            className={className ? className : "appRadioBtn"}
          >
            {option.label}
          </Radio.Button>
        ))}
      </Radio.Group>
    </>
  );
};

export default AppInput;
