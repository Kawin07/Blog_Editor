import { useEffect, useState } from 'react';
import newsAxios from '../api/axiosNews'; // Axios instance configured for news API
import './Trending.css';

// Helper function to format date as "time ago"
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

const Trending = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch top news items on component mount
    newsAxios.get('')
      .then(res => {
        setNews(res.data.slice(0, 4)); // Display only the top 4 news items
      })
      .catch(err => {
        console.error('Failed to fetch news:', err);
      });
  }, []);

  return (
    <section className="container my-5">
      <h3 className="mb-4 text-center">Trending Today</h3>
      <div className="row">
        {news.map((item, index) => (
          <div className="col-md-6 col-lg-3 mb-4" key={index}>
            <div className="card trending-news-card h-100">
              <img
                src={item.image}
                className="card-img-top news-img"
                alt={item.title}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text text-muted small flex-grow-1">
                  {item.description?.slice(0, 100) || 'No description available'}...
                </p>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <small className="text-muted source-label">{item.source || 'News Channel'}</small>
                  <small className="text-muted">{timeAgo(item.publishedAt)}</small>
                </div>
                <a
                  href={`/news/${item._id}`}
                  className="btn btn-sm btn-outline-primary mt-3 read-more"
                >
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

export default Trending;
