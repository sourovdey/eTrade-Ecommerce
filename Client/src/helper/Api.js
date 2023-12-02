import axios from "axios";

const instance = axios.create({
    baseURL : "http://localhost:8080/productapi"
});

export default instance;