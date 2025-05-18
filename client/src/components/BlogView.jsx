import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from '../api/axios';
import './BlogView.css'; // Component-specific styles

// Helper function to display "time ago" format
const timeAgo = (dateString) => {
  const now = new Date();
  const then = new Date(dateString);
  const seconds = Math.floor((now - then) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 }
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count >= 1) {
      return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
    }
  }
  return 'Just now';
};

const BlogView = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  // Fetch blog data on component mount
  useEffect(() => {
    axios.get(`/${id}`).then(res => setBlog(res.data));
  }, [id]);

  if (!blog) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2>{blog.title}</h2>

      <div className="image-wrapper mx-auto mb-3">
        <img
          src={blog.image || '/assets/img/default-avatar.png'}
          alt={blog.title}
          className="blog-img"
        />
      </div>

      <p>{blog.content}</p>
      <p><strong>Tags:</strong> {blog.tags.join(', ')}</p>
      <p><strong>Author:</strong> {blog.author}</p>
      <p><strong>Published:</strong> {timeAgo(blog.publishedAt)}</p>

      {/* Blog status (e.g., "Draft", "Published") */}
      <div className="status">{blog.status}</div>
    </div>
  );
};

export default BlogView;
