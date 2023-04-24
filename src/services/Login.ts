import axios from "axios";
type DataProps = {
  email?: string;
  user_type: 1 | 2;
  password?: string;
  phone_number?: string;
};

export const register = (data: DataProps) => {
  return axios.post("https://dan.htmlpro.net/api/register", data);
};

type VerifyOTPProps = {
  user_id: number;
  otp: string;
};

export const verifyOTP = (data: VerifyOTPProps) => {
  return axios.post("https://dan.htmlpro.net/api/verify", data);
};
