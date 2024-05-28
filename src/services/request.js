import axios from "axios";

const axiosInstance = axios.create({});

axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 响应拦截
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(response, "---");
    return response.data;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);

export default axiosInstance;
