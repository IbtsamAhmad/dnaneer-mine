import { useState} from "react"
import AuthContainer from "components/AuthContainer/AuthContainer";
import SwitchUser from "components/SwitchUser/SwitchUser";
import LoginForm from "./LoginForm/LoginForm";
import LoginOtp from "./LoginOtp/LoginOtp";

const LoginComponent = ({ individual, setIndividual }) => {
  const [switchForms, setSwitchForm] = useState<"login" | "otp">("login");
  const [userId,setUserId] = useState(null)

  return (
    <AuthContainer>
      <>
        {switchForms === "login" && (
          <>
            <h1>Login As</h1>
            <SwitchUser userType={individual} setUserType={setIndividual} />
            <LoginForm
              setSwitchForm={setSwitchForm}
              userType={individual}
              setUserId={setUserId}
            />
          </>
        )}
        {switchForms === "otp" && (
          <LoginOtp
            userType={individual}
            setSwitchForm={setSwitchForm}
            userId={userId}
          />
        )}
      </>
    </AuthContainer>
  );
};

export default LoginComponent;
