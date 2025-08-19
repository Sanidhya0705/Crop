// backend/routes/soilRoutes.js
import express from "express";
import SoilCondition from "../models/SoilCondition.js";

const router = express.Router();

// POST: Add new soil condition
router.post("/", async (req, res) => {
  try {
    const { rainfall, temperature, humidity, soilType } = req.body;
    const newSoil = new SoilCondition({ rainfall, temperature, humidity, soilType });
    const savedSoil = await newSoil.save();
    res.status(201).json(savedSoil);
  } catch (err) {
    res.status(500).json({ message: "Failed to save soil data", error: err.message });
  }
});

// GET: Retrieve all soil conditions
router.get("/", async (req, res) => {
  try {
    const allSoil = await SoilCondition.find();
    res.status(200).json(allSoil);
  } catch (err) {
    res.status(500).json({ message: "Failed to fetch soil data", error: err.message });
  }
});

export default router;
