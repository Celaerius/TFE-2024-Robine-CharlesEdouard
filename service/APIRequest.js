import axios from "axios";
import { useSelector } from "react-redux";

const APIRequest = axios.create({
  baseURL:
    "https://27e7-2a02-a03f-c29b-b000-c8f7-7d27-f5d2-5639.ngrok-free.app/api",
  withCredentials: false,
});

export default APIRequest;
