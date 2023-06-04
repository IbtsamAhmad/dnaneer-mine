import axios, { AxiosError, AxiosResponse, AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://stagingapp.dnaneer.com/",
});



axiosInstance.interceptors.request.use((config) => {
   const token =localStorage.getItem("token");
   console.log("token", typeof(token),  token);
    const token2 ="5|5Q7FXBjHVN0IDqZ2af97bGZaBF1iYUOwaAQjQ0ZI"
  if (token) {
     config.headers.Authorization = `Bearer ${token2}`;
  }
  return config;
});

axios.interceptors.response.use(
  function (response: AxiosResponse) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data

    return response?.data || null;
  },
  function (error: AxiosError) {
    const { data, status } = error.response!;
    console.log("data Status", data, status)
    switch (status) {
      case 400:
        console.error(data);
        break;

      case 401:
        console.error("unauthorised");
        break;

      case 404:
        console.error("not-found");
        break;

      case 500:
        console.error("server-error");
        break;
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
