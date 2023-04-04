import { useState } from "react";
import { DatePicker } from "antd";

import "./datePicker.scss";
interface MessageProps {
  onChange?: () => void;
  className?: string;
  icon?: JSX.Element | JSX.Element[];
  disabled?: boolean | undefined;
  block?: boolean;
  value?: any;
  prefix?: JSX.Element | JSX.Element[];
  placeholder?: string;
  label: string;
  type?: string;
}

const AppDatePicker = ({
  onChange,
  className,
  icon,
  disabled,
  block,
  value,
  prefix,
  placeholder,
  label,
  type,
}: MessageProps) => {
  const [focus, setFocus] = useState(false);
  if (!placeholder) placeholder = label;

  const isOccupied = focus || (value && value.length !== 0);

  const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

  //   const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <div
      className="float-label"
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      <DatePicker
        // block={block}
        value={value}
        className={className ? className : "appInput"}
        onChange={onChange}
        // suffixIcon={<img src={DateIcon} alt="" />}
        format="DD/MM/YYYY"
        placeholder=""
        showToday={false}
        allowClear={false}
      />
      <label className={labelClass}>{isOccupied ? label : placeholder}</label>
    </div>
  );
};

export default AppDatePicker;
