import { useEffect, useState } from 'react';
import axios from '../api/axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('/');
      setBlogs(res.data);
    } catch (err) {
      toast.error('Failed to load blogs');
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${id}`);
      toast.success('Blog deleted');
      fetchBlogs();
    } catch (err) {
      toast.error('Error deleting blog');
    }
  };

  return (
    <div className="container mt-5">
      <h2>All Blogs</h2>
      <ul className="list-group">
        {blogs.map((blog) => (
          <li key={blog._id} className="list-group-item d-flex justify-content-between align-items-center">
            <div>
              <strong>{blog.title}</strong> — <em>{blog.status}</em>
            </div>
            <div className="btn-group">
              <Link to={`/blog/${blog._id}`} className="btn btn-sm btn-outline-primary">View</Link>
              <button className="btn btn-sm btn-outline-danger" onClick={() => handleDelete(blog._id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
