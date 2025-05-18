import Blog from '../models/Blog.js';

// Save or update a blog draft
export const saveDraft = async (req, res) => {
  const { id, title, content, tags, image } = req.body;
  try {
    const data = {
      title,
      content,
      tags,
      image,
      status: 'draft',
      updated_at: new Date()
    };

    // Update existing draft or create new one
    const blog = id
      ? await Blog.findByIdAndUpdate(id, data, { new: true })
      : await new Blog(data).save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Publish a blog post (save or update)
export const publishBlog = async (req, res) => {
  const { id, title, content, tags, image } = req.body;
  try {
    const data = {
      title,
      content,
      tags,
      image,
      status: 'published',
      updated_at: new Date()
    };

    // Update existing blog or create new published post
    const blog = id
      ? await Blog.findByIdAndUpdate(id, data, { new: true })
      : await new Blog(data).save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all blogs regardless of status
export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single blog by ID
export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete a blog by ID
export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
