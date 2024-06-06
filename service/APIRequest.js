import axios from "axios";
import { useSelector } from "react-redux";

const APIRequest = axios.create({
  baseURL: "https://0ab0-81-240-136-237.ngrok-free.app/api",
  withCredentials: false,
});

export default APIRequest;
