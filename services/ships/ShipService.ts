import { API_URL } from '@/constants/constants';
import axios from 'axios';

// Get ships
export const getAllShips = async () => {
  return axios.get(`${API_URL}/ship/`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
