import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': process.env.NEXT_PUBLIC_API_PROXY_AUTH,
  },
});

export default instance;
