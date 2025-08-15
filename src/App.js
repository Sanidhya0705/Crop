import React, { useState } from 'react';
import CropDisplay from './components/CropDisplay';
import YieldChart from './components/YieldChart';
import FarmMap from './components/FarmMap';
import CropService from './services/CropService';
import './styles.css';

function App() {
  const [recommendations, setRecommendations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleGetRecommendations = (soilConditions) => {
    setIsLoading(true);
    
    // Simulate processing delay
    setTimeout(() => {
      const results = CropService.getTopRecommendations(soilConditions);
      setRecommendations(results);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary-700 text-white py-6 shadow-md">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold text-center">🌾 Crop Yield Predictor</h1>
          <p className="text-center mt-2 text-primary-100">
            Get the best crop recommendations for your soil
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column - Form */}
          <div className="lg:w-2/3">
            <CropDisplay 
              onGetRecommendations={handleGetRecommendations} 
              isLoading={isLoading}
            />
          </div>

          {/* Right Column - Results */}
          <div className="lg:w-1/3 space-y-6">
            <YieldChart cropData={recommendations} />
            <FarmMap />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-primary-800 text-white py-4 mt-8">
        <div className="container mx-auto px-4 text-center text-sm">
          <p>© {new Date().getFullYear()} AgriTech Solutions. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
