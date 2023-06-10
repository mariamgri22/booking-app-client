import axios from "axios";


const apiWithoutAuth = axios.create({
  baseURL: "http://localhost:5000",
});

export {  apiWithoutAuth };
