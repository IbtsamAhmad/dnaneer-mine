import { useLayoutEffect, useState } from "react";
import AuthContainer from "components/AuthContainer/AuthContainer";
import OtpComponent from "./Otp/Otp";
import Phone from "../SingupComponents/PhoneNumber/Phone";
import Password from "../SingupComponents/Password/Password";
import Absher from "../SingupComponents/Absher/Absher";

const SingUpComponent = ({ individual, setIndividual }) => {
  const [showPhone, setShowPhone] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [absherCode, setAbsherCode] = useState(false);

  useLayoutEffect(() => {
    if (individual === "individual") {
      setShowPhone(true);
      setShowOtp(false);
    } else {
      setShowPhone(false);
      setShowOtp(true);
    }
  }, []);
  return (
    <AuthContainer>
      {showPhone && (
        <Phone
          setShowOtp={setShowOtp}
          setShowPhone={setShowPhone}
          setIndividual={setIndividual}
          setShowPassword={setShowPassword}
          individual={individual}
        />
      )}
      {showOtp && (
        <OtpComponent
          individual={individual}
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
          individual={individual}
        />
      )}
      {individual === "individual" && absherCode && (
        <Absher
          setShowPassword={setShowPassword}
          setAbsherCode={setAbsherCode}
        />
      )}
    </AuthContainer>
  );
};

export default SingUpComponent;
