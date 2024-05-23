import axios from "axios";

const RequestAPI = axios.create({
  baseURL: "https://e997-2a02-a03f-c29b-b000-d99d-8dc2-d9d2-a973.ngrok-free.app",
});

export default RequestAPI;
