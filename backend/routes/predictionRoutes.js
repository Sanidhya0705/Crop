import express from "express";

const router = express.Router();

// POST prediction
router.post("/recommendation", (req, res) => {
  const input = req.body; // { nitrogen, phosphorus, potassium, ph, rainfall, temperature }


  const calculateScore = (crop, input) => {
    let score = 0;
    const totalConditions = Object.keys(crop.idealConditions).length;

    for (const [key, range] of Object.entries(crop.idealConditions)) {
      const value = input[key];
      if (value >= range.min && value <= range.max) {
        score += 1;
      } else {
        const distance = Math.min(
          Math.abs(value - range.min),
          Math.abs(value - range.max)
        );
        const penalty = distance / (range.max - range.min);
        score += 1 - penalty;
      }
    }
    return score / totalConditions;
  };

  const cropScores = cropData.map((crop) => ({
    crop,
    score: calculateScore(crop, input),
  }));

  cropScores.sort((a, b) => b.score - a.score);

  res.json(cropScores.slice(0, 3)); // top 3 crops
});

export default router;

