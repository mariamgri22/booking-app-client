import axios from "axios";
import store from "./store";

const api = axios.create({
  baseURL: "http://localhost:5000",
});

api.interceptors.request.use((config) => {
  const { token } = store.getState().auth;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

const apiWithoutAuth = axios.create({
  baseURL: "http://localhost:5000",
});

export { api, apiWithoutAuth };
