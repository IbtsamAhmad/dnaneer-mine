import { useState} from "react"

import LoginForm from "./LoginForm/LoginForm";
import AuthWrapper from "components/HOC/Auth";
const LoginComponent = AuthWrapper(LoginForm);
const Login = () => { 
  const [individual,setIndividual]  = useState<boolean>(true)
  return (
    <LoginComponent individual={individual} setIndividual={setIndividual} />
  );
};

export default Login;
