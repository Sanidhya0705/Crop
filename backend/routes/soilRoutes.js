import express from 'express';
import SoilCondition from 'file:///C:/Users/sanidhya%20m%20jain/crop-yield-predictor/backend/models/soilCondition.js';

const router = express.Router();

// POST route to save soil data
router.post('/api/soil', async (req, res) => {
  try {
    const soilCondition = new SoilCondition(req.body);
    await soilCondition.save();
    res.status(201).json({ message: 'Soil data saved successfully', data: soilCondition });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;