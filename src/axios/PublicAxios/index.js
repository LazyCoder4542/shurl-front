"use client"
import axios from "axios";
// https://qlnkr.vercel.app/api/v1/
var options = {
  baseURL: "http://localhost:8000/api/v1/",
  withCredentials: true
}
const PublicAxiosInstance = axios.create(options);


export default PublicAxiosInstance
export {options}