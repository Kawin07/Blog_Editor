import express from 'express';
import {getAllBlogs, getBlogById, saveDraft, publishBlog, deleteBlog,} from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/:id', getBlogById);
router.post('/save-draft', saveDraft);
router.post('/publish', publishBlog);
router.delete('/:id', deleteBlog); // This matches DELETE /api/blogs/:id

export default router;
