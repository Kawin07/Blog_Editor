// routes/newsRoutes.js
import express from 'express';
import { getAllNews } from '../controllers/newsController.js';

const router = express.Router();

// GET /api/news - Fetch all news articles
router.get('/', getAllNews);

export default router;
