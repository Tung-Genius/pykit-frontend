import axios from "axios";

const request = axios.create({
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 2500,
    headers: { 
        'Content-Type': 'application/json',
        'Accept': 'application/json',
     }
});

export const get = async (path, options = {}) => {
    const response = await request.get(path, options);
    return response.data;
}

export const post = async (path, body) => {
    const response = await request.post(path, body);
    return response.data;
}

export default request;