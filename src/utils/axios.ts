import axios from "axios";

let baseURL = process.env.REACT_APP_BASE_URL;

const axiosInstance = axios.create({
  baseURL: `${baseURL}/`,
});
export default axiosInstance;
