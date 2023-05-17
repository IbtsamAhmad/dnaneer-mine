import { useState } from "react";
import { Select } from "antd";

import { ReactComponent as Selecticon } from "assets/svgs/Selecticon.svg";
import "./Select.scss";

interface SelectProps {
  options?: {
    label: string;
    value: string | number;
  }[];
  children?: JSX.Element | JSX.Element[];
  onChange?: (value: string) => void;
  className?: string;
  disabled?: boolean | undefined;
  placeholder?: string;
  label: string;
  value?: string;
}

const FloatSelect = ({
  placeholder,
  children,
  className,
  disabled,
  value,
  options,
  label,
  onChange,
}: SelectProps) => {
  // const [focus, setFocus] = useState(false);

  // if (!placeholder) placeholder = label;

  // const isOccupied = focus || (value && value.length !== 0);

  // const labelClass = isOccupied ? "label as-label" : "label as-placeholder";

  //   const requiredMark = required ? <span className="text-danger">*</span> : null;

  return (
    <div
      className="float-label"
      // onBlur={() => setFocus(false)}
      // onFocus={() => setFocus(true)}
    >
      <Select
        // filterOption={filterOption}
        //  autoFocus={true}
        // showSearch={showSearch}
        className={className}
        placeholder={placeholder}
        optionFilterProp="children"
        onChange={onChange}
        suffixIcon={<Selecticon />}
      >
        {children}
      </Select>
      {/* <label className={labelClass}>{isOccupied ? label : placeholder}</label> */}
    </div>
  );
};

export default FloatSelect;
