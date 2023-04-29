import AuthContainer from "components/AuthContainer/AuthContainer";
import SwitchUser from "components/SwitchUser/SwitchUser";
import LoginForm from "./LoginForm/LoginForm";

const LoginComponent = ({ individual, setIndividual }) => {
  return (
    <AuthContainer>
      <>
        <h1>Login As</h1>
        <SwitchUser userType={individual} setUserType={setIndividual} />
        <LoginForm userType={individual} />
      </>
    </AuthContainer>
  );
};

export default LoginComponent;
