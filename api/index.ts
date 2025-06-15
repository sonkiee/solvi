// src/lib/apiClient.ts

import Storage from "@/lib/storage";
import axios from "axios";

const API_BASE_URL = process.env.EXPO_PUBLIC_API_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

apiClient.interceptors.request.use(
  async (config) => {
    const token = await Storage.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    const fullUrl = `${config.baseURL}${config.url}`;
    console.log("FULL REQUEST URL:", fullUrl);

    return config;
  },
  (error) => Promise.reject(error)
);

apiClient.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    const apiError = error.response?.data;
    const message = apiError?.message || "An unknown error occurred";

    return Promise.reject(new Error(message));
  }
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
    // console.error(`[API ${method.toUpperCase()} Error]:`, error);
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
