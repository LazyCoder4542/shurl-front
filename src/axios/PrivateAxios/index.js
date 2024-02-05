"use client"
import axios from "axios";
import {options} from "../PublicAxios";
const PrivateAxiosInstance = axios.create(options);
PrivateAxiosInstance.interceptors.request.use(function (config) {
  // Do something before request is sent
  token = localStorage.getItem('authToken');
  config.headers.Authorization = `Bearer ${token}`
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
})

// Add a response interceptor
PrivateAxiosInstance.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});

export default PrivateAxiosInstance