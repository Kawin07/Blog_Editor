// src/api/axiosNews.js
import axios from 'axios';

const newsAxios = axios.create({
  baseURL: 'http://localhost:5000/api/news',
});

export default newsAxios;
