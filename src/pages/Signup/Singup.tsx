import { useState } from "react";

import SingUpComponents from "./SingupComponents/SignupComponents";
import AuthWrapper from "components/HOC/Auth";

const SingUpComponent = AuthWrapper(SingUpComponents);

const SignUp = () => {
  const [individual, setIndividual] = useState<boolean>(true);
  return (
    <SingUpComponent individual={individual} setIndividual={setIndividual} />
  );
};

export default SignUp;
