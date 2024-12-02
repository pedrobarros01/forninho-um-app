import axios from "axios";

const api = axios.create({
    baseURL: 'http://localhost:8000'
});
const BASE_URL_BACKEND = "http://192.168.88.242:8000"
export {api, BASE_URL_BACKEND}