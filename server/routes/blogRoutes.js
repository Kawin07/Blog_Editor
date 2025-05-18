import express from 'express';
import {
  getAllBlogs,
  getBlogById,
  saveDraft,
  publishBlog,
  deleteBlog,
} from '../controllers/blogController.js';

const router = express.Router();

// Get all blogs
router.get('/', getAllBlogs);

// Get blog by ID
router.get('/:id', getBlogById);

// Save or update a draft
router.post('/save-draft', saveDraft);

// Publish a blog post
router.post('/publish', publishBlog);

// Delete a blog by ID
router.delete('/:id', deleteBlog);

export default router;
