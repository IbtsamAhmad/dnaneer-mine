import AuthContainer from "components/AuthContainer/AuthContainer";
import SwitchUser from "components/SwitchUser/SwitchUser";
import LoginForm from "./LoginForm/LoginForm";
import LoginOtp from "./LoginOtp/LoginOtp";
import { useState } from "react";

const LoginComponent = ({ individual, setIndividual }) => {
  const [switchForms, setSwitchForm] = useState<"login" | "otp">("login");
  return (
    <AuthContainer>
      <>
        {switchForms === "login" && (
          <>
            <h1>Login As</h1>
            <SwitchUser userType={individual} setUserType={setIndividual} />
            <LoginForm setSwitchForm={setSwitchForm} userType={individual} />
          </>
        )}
        {switchForms === "otp" && (
          <LoginOtp userType={individual} setSwitchForm={setSwitchForm} />
        )}
      </>
    </AuthContainer>
  );
};

export default LoginComponent;
