import axios from "axios";

export const API_URL = `https://kolos-api-prod.onrender.com/`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token 2e28e907032dc797e9b65b2b25b2777b16682fb6`,
    Accept: "*/*",
  },
});

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

export default $api;
