// models/News.js
import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String, required: false },  // Optional field
  source: { type: String, required: true },
  publishedAt: { type: Date, default: Date.now }
});

// Indexing the publishedAt field for performance improvements
newsSchema.index({ publishedAt: -1 });

export default mongoose.model('News', newsSchema);
