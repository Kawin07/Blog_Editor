import Blog from '../models/Blog.js';

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

    const blog = id
      ? await Blog.findByIdAndUpdate(id, data, { new: true })
      : await new Blog(data).save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

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

    const blog = id
      ? await Blog.findByIdAndUpdate(id, data, { new: true })
      : await new Blog(data).save();

    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    res.json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteBlog = async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

