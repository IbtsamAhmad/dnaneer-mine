import { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import AuthWrapper from "components/HOC/BorrowerAuth";

const LoginComponent = AuthWrapper(LoginForm);

const Login = () => {
  const [individual, setIndividual] = useState<string>("borrower");

  return (
    <LoginComponent individual={individual} setIndividual={setIndividual} />
  );
};

export default Login;
