import { useEffect, useState } from 'react';
import axios from '../api/axios';
import Hero from './Hero';
import Feature from './Feature';
import MyBlog from './MyBlog';
import Trending from './Trending';
import Footer from './Footer';

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  // Fetch all blogs once component mounts
  useEffect(() => {
    axios.get('/')
      .then(res => setBlogs(res.data))
      .catch(() => console.error('Failed to fetch blogs'));
  }, []);

  return (
    <>
      {/* Hero banner section */}
      <Hero />

      {/* Features and benefits of the blog editor */}
      <Feature />

      {/* Display user's blogs */}
      <MyBlog />

      {/* Show trending blogs or popular posts */}
      <Trending />

      {/* Footer with site info and links */}
      <Footer />
    </>
  );
};

export default Home;
