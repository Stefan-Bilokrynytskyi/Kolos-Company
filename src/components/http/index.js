import axios from "axios";

export const API_URL = `https://kolos-api-prod.onrender.com/`;

const $api = axios.create({
  withCredentials: true,
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Token f699518f244c6ac48a95b7bf34a9aaad030d13fc`,
    Accept: "*/*",
  },
});

// $api.interceptors.request.use((config) => {
//   config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
//   return config;
// });

export default $api;
