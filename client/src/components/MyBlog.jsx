import { useEffect, useState } from 'react';
import axios from '../api/axios';
import './MyBlog.css';

const MyBlog = () => {
  // State to hold fetched blog posts
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch all blogs from API on component mount
    axios.get('/').then(res => {
      // Filter only published blogs and take first 4
      const publishedBlogs = res.data.filter(blog => blog.status === 'published');
      setBlogs(publishedBlogs.slice(0, 4));
    });
  }, []);

  // Format date to DD/MM/YYYY HH:mm 
  const pad = (num) => num.toString().padStart(2, '0');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(date.getHours())}:${pad(date.getMinutes())}`;
  };
  

  return (
    <section className="container my-5">
      {/* Header with section title and 'View All' button */}
      <div className="header-container">
        <h3 className="mb-3">My Blog</h3>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="row">
        {/* Map over blogs to create individual blog cards */}
        {blogs.map((blog, i) => (
          <div key={i} className="col-md-6 col-lg-3 mb-4">
            <div className="card MyBlog-card h-100">
              {/* Blog image or default image if none */}
              <img
                src={blog.image || '/assets/img/default-avatar.png'}
                alt={blog.title}
                className="card-img-top MyBlog-img"
              />
              <div className="card-body d-flex flex-column">
                {/* Blog title */}
                <h5 className="card-title">{blog.title}</h5>
                {/* Short snippet from blog content */}
                <p className="card-text text-muted small flex-grow-1">
                  {blog.content.slice(0, 80)}...
                </p>
                {/* Footer with author and published date */}
                <div className="card-footer d-flex justify-content-between">
                  <small className="text-muted">{blog.author || 'Unknown Author'}</small>
                  <small className="text-muted">{formatDate(blog.publishedAt)}</small>
                </div>
                {/* Link to full blog post */}
                <a href={`/blog/${blog._id}`} className="btn btn-sm btn-outline-primary mt-3">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyBlog;
