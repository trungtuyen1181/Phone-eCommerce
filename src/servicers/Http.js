import axios from "axios";
import { BASE_API } from "../share/constants/app-api";

const Http = axios.create({
  baseURL: BASE_API,
});

export default Http;
