import SingUpComponents from './SingupComponents/SignupComponents'
import AuthWrapper from "components/HOC/Auth";

const SingUpComponent = AuthWrapper(SingUpComponents);

const SignUp = () => {

  return <SingUpComponent />;
};

export default SignUp;
