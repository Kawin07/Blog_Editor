import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';
import Hero from './Hero';
import MyBlog from './MyBlog';
import Feature from './Feature';
import Trending from './Trending';
import Footer from './Footer';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/').then(res => setBlogs(res.data));
  }, []);

  return (
    <>
      <Hero />
      <Feature />
      <MyBlog />
      <Trending />  
      <Footer />
    </>
  );
};

export default Home;
