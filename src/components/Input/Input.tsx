import { useState } from "react";
import { Input } from "antd";
import { ReactComponent as EyeOpen } from "assets/svgs/Eye_open.svg";
import "./input.scss";
// import Eye_open from "../../icons/Eye_open.svg"

interface MessageProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  icon?: JSX.Element | JSX.Element[];
  disabled?: boolean | undefined;
  block?: boolean;
  iconRender?: boolean;
  value?: string;
  prefix?: JSX.Element | JSX.Element[];
  placeholder?: string;
  label: string;
  type?: string;
}

const AppInput = ({
  onChange,
  className,
  icon,
  disabled,
  block,
  value,
  iconRender,
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
      {iconRender ? (
        <Input.Password
          //   placeholder={placeholder}
          prefix={prefix}
          onChange={onChange}
          defaultValue={value}
          className={className ? className : "appInput"}
          iconRender={(visible) => (visible ? <EyeOpen /> : <EyeOpen />)}
        />
      ) : (
        <Input
          type={type}
          prefix={prefix}
          //   placeholder={placeholder}
          //  autoFocus={true}
          onChange={onChange}
          defaultValue={value}
          className={className ? className : "appInput"}
        />
      )}
      <label className={labelClass}>{isOccupied ? label : placeholder}</label>
    </div>
  );
};

export default AppInput;
