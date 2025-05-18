import News from '../models/News.js';

// Fetch all news sorted by published date (newest first)
export const getAllNews = async (req, res) => {
  try {
    const news = await News.find().sort({ publishedAt: -1 });

    // Return 404 if no news found
    if (!news || news.length === 0) {
      return res.status(404).json({ message: 'No news found' });
    }

    res.status(200).json(news);
  } catch (err) {
    console.error('Error fetching news:', err.message);
    res.status(500).json({ error: 'Server error while fetching news' });
  }
};
