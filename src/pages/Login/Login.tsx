import LoginForm from "./LoginForm/LoginForm";
import AuthWrapper from "components/HOC/Auth";

const LoginComponent = AuthWrapper(LoginForm);

const Login = () => {
  return <LoginComponent />;
};

export default Login;
