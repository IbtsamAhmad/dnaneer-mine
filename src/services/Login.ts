import axiosInstance from "./Instance";
type DataProps = {
  email?: string;
  user_type: 1 | 2;
  password?: string;
  phone_number?: string;
};

export const register = (data: DataProps) => {
  return axiosInstance.post("api/register", data);
};

type VerifyOTPProps = {
  user_id: number;
  otp: string;
};

export const verifyOTP = (data: VerifyOTPProps) => {
  return axiosInstance.post("api/verify", data);
};
