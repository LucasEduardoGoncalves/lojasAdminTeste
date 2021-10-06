import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.10ejos.com'
});

export default api;