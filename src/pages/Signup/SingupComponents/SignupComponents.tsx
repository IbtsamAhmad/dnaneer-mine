import {useState} from "react"
import OtpComponent from "./Otp/Otp";
import Phone from "../SingupComponents/PhoneNumber/Phone"
import Password from "../SingupComponents/Password/Password";
import Absher from "../SingupComponents/Absher/Absher";

import { ReactComponent as Start } from "assets/svgs/Start.svg";
import { ReactComponent as Close } from "assets/svgs/Close.svg";
import { ReactComponent as FormLockIcon } from "assets/svgs/form-lock-icon.svg";



const SingUpComponent = ({ individual, setIndividual }) => {
  const [showPhone, setShowPhone] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [absherCode, setAbsherCode] = useState(false);

  return (
    <div className="signUp-container">
      <div className="close-icon">
        <Close />
      </div>
      <div className="start-icon">
        <Start />
      </div>

      <div className="signUp-form-container">
        {showPhone && (
          <Phone
            setShowOtp={setShowOtp}
            setShowPhone={setShowPhone}
            setIndividual={setIndividual}
          />
        )}
        {showOtp && (
          <OtpComponent
            setShowPassword={setShowPassword}
            setShowPhone={setShowPhone}
            setShowOtp={setShowOtp}
          />
        )}
        {showPassword && (
          <Password
            setShowPassword={setShowPassword}
            setShowOtp={setShowOtp}
            setAbsherCode={setAbsherCode}
          />
        )}
        {absherCode && <Absher />}
      </div>
      <div className="copy-right">
        Dnaneer © Copyright 2023, All Rights Reserved
      </div>
    </div>
  );
};

export default SingUpComponent;
