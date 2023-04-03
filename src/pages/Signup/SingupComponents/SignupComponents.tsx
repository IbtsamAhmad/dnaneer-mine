import {useState} from "react"
import OtpComponent from "./Otp/Otp";
import Phone from "../SingupComponents/PhoneNumber/Phone"
import Password from "../SingupComponents/Password/Password";


const SingUpComponent = () => {
  const [showPhone,setShowPhone] = useState(true);
  const [showOtp,setShowOtp] = useState(false)
  const[showPassword,setShowPassword] = useState(false);

  return (
    <>
      {showPhone && (
        <Phone setShowOtp={setShowOtp} setShowPhone={setShowPhone} />
      )}
      {showOtp && (
        <OtpComponent
          setShowPassword={setShowPassword}
          setShowPhone={setShowPhone}
          setShowOtp={setShowOtp}
        />
      )}
      {showPassword && (
        <Password setShowPassword={setShowPassword} setShowOtp={setShowOtp} />
      )}
    </>
  );};

export default SingUpComponent;
