import { useLayoutEffect, useState } from "react";
// import AuthContainer from "components/AuthContainer/AuthContainer";
import OtpComponent from "./Otp/Otp";
import Phone from "../SingupComponents/PhoneNumber/Phone";
import Password from "../SingupComponents/Password/Password";
import Absher from "../SingupComponents/Absher/Absher";
import Naftah from "./Naftah/Naftah";
const SingUpComponent = ({ individual, setIndividual }) => {
  const [showPhone, setShowPhone] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [absherCode, setAbsherCode] = useState(false);
  const [showNaftah, setShowNaftah] = useState(false);
  const [userId,setUserId] = useState(null);
  const [nafathInfo,setNafathInfo] = useState(null);
  const [passwordIno,setPasswordInfo] = useState(null)

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
    <>
      {showPhone && (
        <Phone
          setShowOtp={setShowOtp}
          setShowPhone={setShowPhone}
          setIndividual={setIndividual}
          setShowPassword={setShowPassword}
          individual={individual}
          setUserId={setUserId}
        />
      )}
      {showOtp && (
        <OtpComponent
          individual={individual}
          setShowPassword={setShowPassword}
          setShowPhone={setShowPhone}
          setShowOtp={setShowOtp}
          userId={userId}

        />
      )}
      {showPassword && (
        <Password
          setShowNaftah={setShowNaftah}
          setShowPassword={setShowPassword}
          setShowOtp={setShowOtp}
          setAbsherCode={setAbsherCode}
          individual={individual}
          userId={userId}
          setNafathInfo={setNafathInfo}
          setPasswordInfo={setPasswordInfo}
        />
      )}
      {individual === "individual" && absherCode && (
        <Absher
          setShowPassword={setShowPassword}
          setAbsherCode={setAbsherCode}
        />
      )}

      {showNaftah && (
        <Naftah
          setShowPassword={setShowPassword}
          setShowNaftah={setShowNaftah}
          nafathInfo={nafathInfo}
          userId={userId}
          passwordIno={passwordIno}
        />
      )}
    </>
  );
};

export default SingUpComponent;
