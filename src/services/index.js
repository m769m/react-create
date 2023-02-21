import axios from "axios";

const instance = axios.create({
  baseURL: "baseURL",
});

instance.interceptors.request.use((config) => {
  if (config.headers) {
    const newConfig = { ...config };

    newConfig.headers.Authorization = `Bearer ${window.localStorage.getItem("token")}`;

    return newConfig;
  }

  return config;
});

export default instance;
