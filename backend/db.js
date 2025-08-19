// backend/db.js
import mongoose from "mongoose";

// Replace with your Atlas username/password
const MONGO_URI = "mongodb+srv://sani070504:07&05%04$@cluster0.mongodb.net/soilDB?retryWrites=true&w=majority";

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
