import axios from 'axios';

const userAPI = axios.create({
  baseURL: '  http://localhost:3002/users',
  headers: { 'Content-Type': 'application/json' },
});

export default userAPI;
