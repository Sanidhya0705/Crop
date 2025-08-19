// server.js
import express from "express";
import cors from "cors";
import cropData from "./data/cropData.js";










const app = express();
app.use(cors());
app.use(express.json());

// Serve static files from "public" folder
// This will make http://localhost:5000/images/your-image.jpg accessible
app.use("/images", express.static("public/images"));

// API endpoint to get crop data
app.get("/api/crops", (req, res) => {
  res.json(cropData);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend running at http://localhost:${PORT}`);
});
