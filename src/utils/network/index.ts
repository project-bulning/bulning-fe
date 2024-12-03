import axios from 'axios';
import { tokenStorage } from '@/utils/tokenStorage';

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const nextConfig = config;

  const token = tokenStorage.get();
  if (!token) {
    return nextConfig;
  }
  nextConfig.headers.Authorization = `Bearer ${token}`;
  return nextConfig;
});
export default axiosInstance;
