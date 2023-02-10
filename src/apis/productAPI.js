import axios from 'axios';

const productAPI = axios.create({
  baseURL: '  http://localhost:3002/products',
  headers: { 'Content-Type': 'application/json' },
});

export default productAPI;
