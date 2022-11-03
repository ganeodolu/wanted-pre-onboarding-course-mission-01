import axios from "axios";

const API = axios.create({
  baseURL: " https://preonboarding.platdev.net/api/"
});

export default API;
