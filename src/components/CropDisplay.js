import React, { useState } from 'react';

const CropDisplay = ({ onGetRecommendations, isLoading }) => {
  const [soilConditions, setSoilConditions] = useState({
    soilPH: '',
    temperature: '',
    rainfall: '',
    nitrogen: '',
    humidity: '',
    pestCondition: 'moderate'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSoilConditions(prev => ({
      ...prev,
      [name]: name === 'pestCondition' ? value : parseFloat(value) || ''
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onGetRecommendations(soilConditions);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-primary-800 mb-6">Enter Soil Conditions</h2>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Soil pH */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Soil pH (0-14)</label>
            <input
              type="number"
              name="soilPH"
              min="0"
              max="14"
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={soilConditions.soilPH}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Temperature */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Temperature (°C)</label>
            <input
              type="number"
              name="temperature"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={soilConditions.temperature}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Rainfall */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Rainfall (mm/year)</label>
            <input
              type="number"
              name="rainfall"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={soilConditions.rainfall}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Nitrogen */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Nitrogen (kg/ha)</label>
            <input
              type="number"
              name="nitrogen"
              min="0"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={soilConditions.nitrogen}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Humidity */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Humidity (%)</label>
            <input
              type="number"
              name="humidity"
              min="0"
              max="100"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={soilConditions.humidity}
              onChange={handleInputChange}
              required
            />
          </div>

          {/* Pest Condition */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Pest Condition</label>
            <select
              name="pestCondition"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              value={soilConditions.pestCondition}
              onChange={handleInputChange}
            >
              <option value="low">Low</option>
              <option value="moderate">Moderate</option>
              <option value="high">High</option>
            </select>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 rounded-md shadow-sm text-white bg-primary-500 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${
              isLoading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Processing...' : 'Predict Yield'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CropDisplay;