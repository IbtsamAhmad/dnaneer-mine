import axiosInstance from "./Instance";
// type DataProps = {
//   email?: string;
//   user_type: 1 | 2;
//   password?: string;
//   phone_number?: string;
// };

export const registerId = (data) => {
  return axiosInstance.post("api/send-nafath-notification", data);
};

export const nafathStatus = (data) => {
  return axiosInstance.post("api/nafath-notification-status", data);
};

export const register = (data) => {
  return axiosInstance.post("api/signup", data);
};


export const getOpportunityList = () => {
  return axiosInstance.get("api/admin/oppurtunity_list");
};

export const login = (data) => {
  return axiosInstance.post("api/login", data);
};

// type VerifyOTPProps = {
//   user_id: number;
//   otp: string;
//   module_type: string;
// };

export const verifyOTP = (data) => {
  return axiosInstance.post("api/verify-otp", data);
};

export const signUpInstitutional = (data) => {
  return axiosInstance.post("api/signup-institutional", data);
};


export const verifyLoginOTP = (data) => {
  return axiosInstance.post("api/verify-login-otp", data);
};
