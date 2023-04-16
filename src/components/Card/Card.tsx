import { ReactNode } from "react";
import { Card } from "antd";

import { ReactComponent as Info } from "assets/svgs/Info.svg";
import "./Card.scss";

interface CardProps {
  children?: ReactNode | ReactNode[] | string;
  className?: string;
  icon?: ReactNode | ReactNode[];
  heading?: string;
  headingClassName?: string;
  subHeadingClassName?: string;
  subHeading?: string;
  headingSpan?:string;
}

const AppCard = ({
  className,
  children,
}: CardProps) => {
  return (
    <Card
      className={className ? `createApp-Card ${className}` : "createApp-Card"}
      hoverable>
       {children}
    </Card>
  );
};

export default AppCard;
