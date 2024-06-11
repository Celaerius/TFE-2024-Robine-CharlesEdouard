import axios from "axios";
import { useSelector } from "react-redux";

const APIRequest = axios.create({
  baseURL:
    "https://9747-2a02-a03f-c29b-b000-748b-3ef8-65a6-4c4a.ngrok-free.app/api",
  withCredentials: false,
});

export default APIRequest;
