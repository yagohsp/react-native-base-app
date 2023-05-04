import axios from 'axios';
import { REACT_APP_URL } from '@env';

export const api = axios.create({
  baseURL: REACT_APP_URL
});
