import axios from "axios";

const RequestAPI = axios.create({
  baseURL: "https://bcfd-2a02-a03f-c29b-b000-4df0-8333-18f5-eea.ngrok-free.app",
});

export default RequestAPI;
