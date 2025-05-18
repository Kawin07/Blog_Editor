import axios from 'axios';

// Axios instance for news-related API calls
const newsAxios = axios.create({
  baseURL: 'http://localhost:5000/api/news',
});

export default newsAxios;