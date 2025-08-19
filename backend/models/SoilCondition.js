// backend/models/SoilCondition.js
import mongoose from "mongoose";

const soilConditionSchema = new mongoose.Schema({
  rainfall: { type: Number, required: true },
  temperature: { type: Number, required: true },
  humidity: { type: Number, required: true },
  soilType: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

const SoilCondition = mongoose.model("SoilCondition", soilConditionSchema);

export default SoilCondition;
