import axios from "axios";

const API = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Authorization: "Basic" + process.env.REACT_APP_API_TOKEN
  }
});

export default API;
