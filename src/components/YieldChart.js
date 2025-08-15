import React from 'react';

const YieldChart = ({ cropData = [] }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-primary-800 mb-4">Yield Prediction</h2>
      
      <div className="space-y-4">
        {cropData.length > 0 ? (
          cropData.map((crop, index) => (
            <div key={index} className="border border-gray-200 p-4 rounded-lg">
              <div className="flex items-center space-x-4 mb-3">
                <img
                  src={crop.image}
                  alt={crop.name}
                  className="w-16 h-16 object-cover rounded-md"
                  onError={(e) => {
                    e.target.src = '/assets/crops/default.jpg';
                  }}
                />
                <div>
                  <h3 className="font-medium text-lg capitalize">{crop.name}</h3>
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    crop.suitability === 'Highly Suitable' ? 'bg-green-100 text-green-800' :
                    crop.suitability === 'Suitable' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {crop.suitability}
                  </span>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Yield Potential:</span>
                  <span className="font-medium">{crop.yield}</span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-primary-500 h-2 rounded-full" 
                    style={{ width: `${crop.score}%` }}
                  />
                </div>
                
                <div className="text-xs text-gray-500 text-right">
                  Score: {crop.score}%
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">
            <p>No yield data available</p>
            <p className="text-sm mt-1">Submit soil conditions to generate predictions</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default YieldChart;