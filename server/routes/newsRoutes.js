// routes/newsRoutes.js
import express from 'express';
import { getAllNews } from '../controllers/newsController.js';

const router = express.Router();

// GET /api/news → returns all or trending news articles
router.get('/', getAllNews);

export default router;
