import axios from "axios";

// Set config defaults when creating the instance
const myAxios = axios.create({
  baseURL: process.env.NEXT_PUBLIC_SERVER_URI,
});

export default myAxios;
