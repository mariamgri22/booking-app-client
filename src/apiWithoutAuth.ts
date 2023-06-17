import axios from "axios";

const apiWithoutAuth = axios.create({
  // baseURL: "https://booking-api-450n.onrender.com",
  baseURL:"http://localhost:5000",
});

export { apiWithoutAuth };
