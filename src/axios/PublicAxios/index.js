"use client"
import axios from "axios";
// https://qlnkr.vercel.app/api/v1/
var options = {
  baseURL: "api/v1/",
}
const PublicAxiosInstance = axios.create(options);


export default PublicAxiosInstance
export {options}