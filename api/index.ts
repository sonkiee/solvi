// src/lib/apiClient.ts
import Storage from "@/lib/storage";
import axios from "axios";

const API_BASE_URL = "https://api.example.com";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  (config) => {
    const token = Storage.get("token"); // no await
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

const request = async (
  method: string,
  url: string,
  data?: any,
  params?: any
) => {
  try {
    const response = await apiClient.request({
      method,
      url,
      data,
      params,
    });
    return response.data;
  } catch (error) {
    console.error(`[API ${method.toUpperCase()} Error]:`, error);
    throw error;
  }
};

export const Api = {
  get: (url: string, params?: any) => request("get", url, null, params),
  post: (url: string, data?: any) => request("post", url, data),
  put: (url: string, data?: any) => request("put", url, data),
  patch: (url: string, data?: any) => request("patch", url, data),
  delete: (url: string) => request("delete", url),
  client: apiClient,
};

export default Api;
