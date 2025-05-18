import { useEffect, useState } from 'react';
import axios from '../api/axios';
import './MyBlog.css';

const MyBlog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('/').then(res => {
      const publishedBlogs = res.data.filter(blog => blog.status === 'published');
      setBlogs(publishedBlogs.slice(0, 4));
    });
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
  };

  return (
    <section className="container my-5">
      <div className="header-container">
        <h3 className="mb-3">My Blog</h3>
        <button className="view-all-btn">View All</button>
      </div>

      <div className="row">
        {blogs.map((blog, i) => (
          <div key={i} className="col-md-6 col-lg-3 mb-4">
            <div className="card MyBlog-card h-100">
              <img
                src={blog.image || '/assets/img/default-avatar.png'}
                alt={blog.title}
                className="card-img-top MyBlog-img"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text text-muted small flex-grow-1">
                  {blog.content.slice(0, 80)}...
                </p>
                <div className="card-footer d-flex justify-content-between">
                  <small className="text-muted">{blog.author || 'Unknown Author'}</small>
                  <small className="text-muted">{formatDate(blog.publishedAt)}</small>
                </div>
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
