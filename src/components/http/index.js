import axios from "axios";

export const API_URL = `https://kolos-api-prod.onrender.com/`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token 8e315cacba2e94513f4f904b301c96ddb949c656`,
    Accept: "*/*",
  },
});

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

export default $api;
