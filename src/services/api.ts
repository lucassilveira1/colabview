import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

console.log("VITE_API_URL", API_URL);

export const api = axios.create({
    baseURL: API_URL,
});
