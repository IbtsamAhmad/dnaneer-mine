import { ReactNode } from "react";
interface MessageProps {
  children: ReactNode | ReactNode[] | string;
}

const DashboardCardsContainer = ({ children }: MessageProps): JSX.Element => {
  return <div style={{ maxWidth: "388px", marginLeft:"auto"}}>{children}</div>;
};

export default DashboardCardsContainer;
