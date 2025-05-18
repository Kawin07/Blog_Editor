import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Connect to MongoDB using URI from environment variables
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected!');
  } catch (err) {
    // Log error and exit process if connection fails
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
