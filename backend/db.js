// backend/db.js
import mongoose from "mongoose";

// Replace with your Atlas username/password
const MONGO_URI ="mongodb+srv://sani070504:07%2605%2504%24@cluster0.l0uscjt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
