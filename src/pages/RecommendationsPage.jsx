import { useLocation, useNavigate } from "react-router-dom";
import PredictionResult from "./components/PredictionResult/PredictionResult"; // ✅ Import added

export default function RecommendationsPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const soilType = location.state?.soilType || "Unknown Soil";

  const cropSuggestions = {
    clay: ["Rice", "Wheat", "Sugarcane"],
    sandy: ["Millets", "Groundnut", "Cotton"],
    loamy: ["Pulses", "Maize", "Vegetables"],
  };

  const crops = cropSuggestions[soilType.toLowerCase()] || [
    "Wheat",
    "Rice",
    "Maize",
  ];

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        🌾 Recommended Crops for {soilType}
      </h1>

      <ul className="space-y-4 mb-8">
        {crops.map((crop, index) => (
          <li
            key={index}
            className="p-4 border border-green-300 rounded-lg shadow hover:bg-green-50 transition"
          >
            {crop}
          </li>
        ))}
      </ul>

      {/* ✅ Added PredictionResult here */}
      <PredictionResult results={location.state?.results || []} />

      <div className="text-center">
        <button
          onClick={() => navigate("/")} // Go back to HomePage form
          className="px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
        >
          ⬅ Back to Form
        </button>
      </div>
    </div>
  );
}
