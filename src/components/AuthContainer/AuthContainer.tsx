import { ReactComponent as Close } from "assets/svgs/Close.svg";
import { ReactComponent as Start } from "assets/svgs/Start.svg";
const AuthContainer = ({ children }) => {
  return (
    <div className="signUp-container">
      <div className="close-icon">
        <a href="https://staging.dnaneer.com/">
          <Close />
        </a>
      </div>
      <div className="signUp-form-container">
        <div className="start-icon">
          <Start />
        </div>
        {children}
      </div>
      <div className="copy-right">
        Dnaneer © Copyright 2023, All Rights Reserved
      </div>
    </div>
  );
};

export default AuthContainer;
