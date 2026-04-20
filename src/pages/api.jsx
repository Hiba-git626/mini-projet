import axios from 'axios';
const API = axios.create({
    baseURL: '  https://192.168.56.1:8000/',
    headers: {
    'ngrok-skip-browser-warning': 'true'
  }
});
export default API;