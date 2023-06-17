import axios from "axios";

const apiWithoutAuth = axios.create({
  baseURL: "https://booking-api-450n.onrender.com",
});

export { apiWithoutAuth };
