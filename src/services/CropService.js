class CropService {
  static cropDatabase = [
    {
      name: "Wheat",
      image: "/assets/crops/wheat.jpg",
      idealConditions: {
        temperature: { min: 10, max: 25 },       // °C
        rainfall: { min: 500, max: 800 },        // mm/year
        soilPH: { min: 6.0, max: 7.5 },         // pH
        nitrogen: { min: 150, max: 300 }        // kg/ha
      }
    },
    {
      name: "Rice",
      image: "/assets/crops/rice.jpg",
      idealConditions: {
        temperature: { min: 20, max: 35 },
        rainfall: { min: 1000, max: 2500 },
        soilPH: { min: 5.0, max: 6.5 },
        nitrogen: { min: 200, max: 400 }
      }
    },
    {
      name: "Maize",
      image: "/assets/crops/maize.jpg",
      idealConditions: {
        temperature: { min: 15, max: 30 },
        rainfall: { min: 600, max: 1200 },
        soilPH: { min: 5.8, max: 7.0 },
        nitrogen: { min: 180, max: 350 }
      }
    },
    {
      name: "Cotton",
      image: "/assets/crops/cotton.jpg",
      idealConditions: {
        temperature: { min: 21, max: 30 },
        rainfall: { min: 500, max: 1000 },
        soilPH: { min: 5.5, max: 8.5 },
        nitrogen: { min: 120, max: 250 }
      }
    },
    {
      name: "Jute",
      image: "/assets/crops/jute.jpg",
      idealConditions: {
        temperature: { min: 24, max: 37 },
        rainfall: { min: 1500, max: 2500 },
        soilPH: { min: 6.0, max: 7.5 },
        nitrogen: { min: 100, max: 200 }
      }
    },
    {
      name: "Tea",
      image: "/assets/crops/tea.jpg",
      idealConditions: {
        temperature: { min: 15, max: 25 },
        rainfall: { min: 1500, max: 3000 },
        soilPH: { min: 4.5, max: 5.5 },
        nitrogen: { min: 80, max: 150 }
      }
    },
    {
      name: "Coffee",
      image: "/assets/crops/coffee.jpg",
      idealConditions: {
        temperature: { min: 15, max: 24 },
        rainfall: { min: 1500, max: 2500 },
        soilPH: { min: 6.0, max: 6.5 },
        nitrogen: { min: 100, max: 200 }
      }
    },
    {
      name: "Pulses",
      image: "/assets/crops/pulses.jpg",
      idealConditions: {
        temperature: { min: 20, max: 30 },
        rainfall: { min: 400, max: 800 },
        soilPH: { min: 5.5, max: 7.5 },
        nitrogen: { min: 80, max: 180 }
      }
    },
    {
      name: "Sugarcane",
      image: "/assets/crops/sugarcane.jpg",
      idealConditions: {
        temperature: { min: 20, max: 32 },
        rainfall: { min: 1000, max: 1500 },
        soilPH: { min: 6.0, max: 7.5 },
        nitrogen: { min: 200, max: 400 }
      }
    }
  ];

  // Rest of your CropService methods (getTopRecommendations, calculateSuitabilityScore, etc.)
  static getTopRecommendations(fieldData, count = 3) {
    const scoredCrops = this.cropDatabase.map(crop => {
      const score = this.calculateSuitabilityScore(crop, fieldData);
      return {
        ...crop,
        score,
        suitability: this.getSuitabilityLabel(score),
        yield: this.estimateYield(score)
      };
    });
    
    return scoredCrops
      .sort((a, b) => b.score - a.score)
      .slice(0, count)
      .filter(crop => crop.score > 40);
  }

  static calculateSuitabilityScore(crop, fieldData) {
    let score = 0;
    const conditions = ['temperature', 'rainfall', 'soilPH', 'nitrogen'];
    
    conditions.forEach(condition => {
      if (fieldData[condition] && crop.idealConditions[condition]) {
        const value = parseFloat(fieldData[condition]);
        const { min, max } = crop.idealConditions[condition];
        
        if (value >= min && value <= max) {
          score += condition === 'temperature' || condition === 'rainfall' ? 30 : 20;
        }
      }
    });

    return Math.min(100, score);
  }

  static getSuitabilityLabel(score) {
    if (score >= 80) return "Highly Suitable";
    if (score >= 60) return "Suitable";
    if (score >= 40) return "Moderately Suitable";
    return "Not Recommended";
  }

  static estimateYield(score) {
    const baseYield = (score / 10) * (0.8 + Math.random() * 0.4);
    return `${baseYield.toFixed(1)}-${(baseYield * 1.3).toFixed(1)} tons/ha`;
  }
}

export default CropService;