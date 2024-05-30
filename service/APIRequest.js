import axios from "axios";
import { useSelector } from "react-redux";

const APIRequest = axios.create({
  baseURL: "https://61a4-87-64-148-159.ngrok-free.app/api",
  withCredentials: false,
});

export default APIRequest;
