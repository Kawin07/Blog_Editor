// models/News.js
import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },         // News headline
  description: { type: String, required: true },   // News summary/content
  image: { type: String, required: false },        // Optional image URL/base64
  source: { type: String, required: true },        // Source of the news
  publishedAt: { type: Date, default: Date.now }   // Publication date
});

// Index on publishedAt for faster sorting and queries
newsSchema.index({ publishedAt: -1 });

export default mongoose.model('News', newsSchema);
