import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    // Removed deprecated options
    await mongoose.connect(process.env.MONGO_URI);
    console.log('✅ MongoDB Connected!');
  } catch (err) {
    console.error('❌ MongoDB Connection Error:', err.message);
    process.exit(1); // Exit on failure
  }
};

export default connectDB;
