import { ReactNode } from "react";
import { Button } from "antd";
import "./button.scss";

interface MessageProps {
  children: ReactNode | ReactNode[] | string;
  htmlType?: "submit" | "reset" | "button" | undefined;
  onClick?: () => void;
  className?: string;
  icon?: ReactNode | ReactNode[];
  loading?: boolean;
  disabled?: boolean | undefined;
  block?: boolean;
}


const AppButton = ({
  children,
  htmlType,
  onClick,
  className,
  icon,
  loading,
  disabled,
  block,
}: MessageProps): JSX.Element => {
  return (
    <Button
      block={block}
      disabled={disabled}
      icon={icon}
      className={className || "createApp-Button"}
      onClick={onClick}
      loading={loading}
      htmlType={htmlType || "button"}
    >
      {children}
    </Button>
  );
};

export default AppButton;
