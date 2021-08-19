import axios from "axios";

export default axios.create({
  baseURL: "http://localhost:5000/api/v1/tList",
  headers: {
    "Content-type": "application/json"
  }
});