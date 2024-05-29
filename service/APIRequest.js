import axios from "axios";
import { useSelector } from "react-redux";

const RequestAPI = axios.create({
  baseURL: "https://c3f8-87-64-148-159.ngrok-free.app/api",
  withCredentials: false,
});

export default RequestAPI;
