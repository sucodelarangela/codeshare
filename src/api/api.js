import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://codeshare-server.onrender.com/'
});