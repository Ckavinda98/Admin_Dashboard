import axios from "axios";
  
const axiosApiInstance = axios.create({
  baseURL: "http://localhost:9090/api",
  headers: {
   "Content-Type": "application/json",
   
 },
});
export default axiosApiInstance;