"use client"
import PrivateAxiosInstance from "./PrivateAxios";
import PublicAxiosInstance from "./PublicAxios";

export function login(body) {
  return PublicAxiosInstance.post('/auth/login', body)
}
export function signup(body) {
  return PublicAxiosInstance.post('/auth/signup', body)
}
export function getUserDetails() {
  return PrivateAxiosInstance.get('/me')
}