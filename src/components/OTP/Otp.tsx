import { SetStateAction, Dispatch } from "react";
import OtpInput from "react-otp-input";
import "./otp.scss";

interface OtpProps {
  otp: string;
  setOtp: Dispatch<SetStateAction<string>>;
}

export default function Otp({ otp, setOtp }: OtpProps): JSX.Element {
  return (
    <OtpInput
      containerStyle={"otp-container"}
      shouldAutoFocus
      inputStyle={{
        width: "55px",
      }}
      value={otp}
      onChange={setOtp}
      numInputs={6}
      renderSeparator={""}
      renderInput={(props) => <input {...props} />}
    />
  );
}
