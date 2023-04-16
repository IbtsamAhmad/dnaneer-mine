import { Avatar } from "antd";

import { ReactComponent as Hand } from "assets/svgs/Hand.svg";
import "./Greeting.scss";

interface GreetingProps {
  className?: string;
  name?: string;
  role?: string;
  src?: string;
}

const Greeting = ({ className, name, role, src }: GreetingProps) => {
  return (
    <div
      className={
        className ? `greeting-container ${className}` : "greeting-container"
      }
    >
      <Avatar src="/assets/images/Avatar 2.png" />

      <div style={{marginLeft:"16px"}}>
        <div className="role">
          <span>{role}</span>{" "}
        </div>
        <h1>
          Hi, {name} <Hand />
        </h1>
        <p>We hope you make Dnaneer today.</p>
      </div>
    </div>
  );
};

export default Greeting;
