import axios from "axios";

const api = axios.create({
  baseURL: "https://www.anapioficeandfire.com/api",
  headers: {
    "Content-type": "application/json"
  }
});

export default api;