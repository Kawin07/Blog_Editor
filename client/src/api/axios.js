import axios from 'axios';

// Axios instance for blog-related API calls
const instance = axios.create({
  baseURL: 'http://localhost:5000/api/blogs',
});

export default instance;