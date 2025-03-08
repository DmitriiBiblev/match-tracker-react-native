import AxiosInstance = Axios.AxiosInstance;
import axios from "axios";

const API_URL: string = 'https://app.ftoyd.com/fronttemp-service';

export const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5_000,
});
