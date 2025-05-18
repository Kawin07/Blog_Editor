import mongoose from 'mongoose';

// Blog schema definition
const blogSchema = new mongoose.Schema({
  title: String,          // Blog title
  content: String,        // Blog content/body
  tags: [String],         // Array of tags
  image: String,          // Image URL or base64 string
  status: {               // Blog status: draft or published
    type: String,
    enum: ['draft', 'published'],
    default: 'draft'
  },
  created_at: {           // Creation timestamp
    type: Date,
    default: Date.now
  },
  updated_at: {           // Last update timestamp
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('Blog', blogSchema);
