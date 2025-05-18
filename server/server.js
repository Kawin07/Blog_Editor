import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import blogRoutes from './routes/blogRoutes.js';
import newsRoutes from './routes/newsRoutes.js';

dotenv.config(); // Load environment variables from .env

const app = express();

// Set Content Security Policy headers for security
app.use((req, res, next) => {
  res.setHeader(
    "Content-Security-Policy", 
    "default-src 'self'; " +
    "font-src 'self' https://fonts.gstatic.com; " +  // Allow Google Fonts
    "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;"
  );
  next();
});

// Enable CORS and JSON body parsing with size limit
app.use(cors());
app.use(express.json({ limit: '50mb' }));

// Register API routes
app.use('/api/blogs', blogRoutes);
app.use('/api/news', newsRoutes);

// Connect to MongoDB then start the server
connectDB().then(() => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});
