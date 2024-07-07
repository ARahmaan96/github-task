import axios from 'axios';

const endPoint = 'https://api.github.com';
const api = axios.create({
  baseURL: endPoint,
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
});

export default api;
