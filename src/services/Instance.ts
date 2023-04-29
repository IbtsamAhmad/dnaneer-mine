import axios, { AxiosError, AxiosResponse, AxiosInstance } from "axios";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: "https://dan.htmlpro.net/",
});

axiosInstance.interceptors.request.use((config) => {
  // if (token) {
  //   config.headers.Authorization = `Bearer ${token}`;
  // }
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
