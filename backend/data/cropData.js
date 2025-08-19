const cropData = [
  {
    name: "Rice",
    image: "http://localhost:5000/images/rice.jpg",
    idealConditions: { nitrogen: { min: 60, max: 120 }, phosphorus: { min: 20, max: 60 }, potassium: { min: 30, max: 70 }, ph: { min: 5.0, max: 6.5 }, rainfall: { min: 1000, max: 2500 }, temperature: { min: 20, max: 35 } },
  },
  {
    name: "Wheat",
    image: "http://localhost:5000/images/wheat.jpg",
    idealConditions: { nitrogen: { min: 50, max: 100 }, phosphorus: { min: 30, max: 70 }, potassium: { min: 40, max: 80 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 500, max: 1000 }, temperature: { min: 10, max: 25 } },
  },
  {
    name: "Sugarcane",
    image:"http://localhost:5000/images/sugarcane.jpg",
    idealConditions: { nitrogen: { min: 80, max: 200 }, phosphorus: { min: 40, max: 100 }, potassium: { min: 100, max: 250 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 1500, max: 2500 }, temperature: { min: 20, max: 35 } },
  },
  {
    name: "Jute",
    image: "http://localhost:5000/images/jute.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 70 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 1500, max: 2500 }, temperature: { min: 24, max: 37 } },
  },
  {
    name: "Maize",
    image: "http://localhost:5000/images/maize.jpg",
    idealConditions: { nitrogen: { min: 70, max: 150 }, phosphorus: { min: 30, max: 80 }, potassium: { min: 50, max: 100 }, ph: { min: 5.8, max: 7.0 }, rainfall: { min: 600, max: 1200 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Tea",
    image: "http://localhost:5000/images/tea.jpg",
    idealConditions: { nitrogen: { min: 50, max: 100 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 40, max: 80 }, ph: { min: 4.5, max: 5.5 }, rainfall: { min: 1500, max: 3000 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Coffee",
    image: "http://localhost:5000/images/coffee.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 40 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 6.5 }, rainfall: { min: 1500, max: 2500 }, temperature: { min: 15, max: 28 } },
  },
  {
    name: "Cotton",
    image: "http://localhost:5000/images/cotton.jpg",
    idealConditions: { nitrogen: { min: 60, max: 120 }, phosphorus: { min: 25, max: 60 }, potassium: { min: 50, max: 100 }, ph: { min: 5.5, max: 8.5 }, rainfall: { min: 500, max: 1000 }, temperature: { min: 21, max: 37 } },
  },
  {
    name: "Pulses",
    image: "http://localhost:5000/images/pulses.jpg",
    idealConditions: { nitrogen: { min: 20, max: 50 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 20, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 800 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Barley",
    image: "http://localhost:5000/images/barley.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.0 }, rainfall: { min: 300, max: 800 }, temperature: { min: 10, max: 25 } },
  },
  {
    name: "Millets",
    image: "http://localhost:5000/images/millets.jpg",
    idealConditions: { nitrogen: { min: 30, max: 70 }, phosphorus: { min: 15, max: 40 }, potassium: { min: 20, max: 50 }, ph: { min: 5.5, max: 7.5 }, rainfall: { min: 300, max: 900 }, temperature: { min: 20, max: 35 } },
  },
  {
    name: "Sorghum",
    image: "http://localhost:5000/images/sorghum.jpg",
    idealConditions: { nitrogen: { min: 30, max: 70 }, phosphorus: { min: 15, max: 40 }, potassium: { min: 20, max: 50 }, ph: { min: 5.5, max: 7.5 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 25, max: 35 } },
  },
  {
    name: "Ragi",
    image: "http://localhost:5000/images/ragi.jpg",
    idealConditions: { nitrogen: { min: 25, max: 60 }, phosphorus: { min: 15, max: 40 }, potassium: { min: 20, max: 50 }, ph: { min: 5.0, max: 7.0 }, rainfall: { min: 400, max: 900 }, temperature: { min: 20, max: 35 } },
  },
  {
    name: "Peanuts",
    image: "http://localhost:5000/images/peanuts.jpg",
    idealConditions: { nitrogen: { min: 30, max: 60 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 5.5, max: 6.5 }, rainfall: { min: 500, max: 1000 }, temperature: { min: 20, max: 32 } },
  },
  {
    name: "Sunflower",
    image: "http://localhost:5000/images/sunflower.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 40, max: 80 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 20, max: 30 } },
  },
  {
    name: "Mustard",
    image: "http://localhost:5000/images/mustard.jpg",
    idealConditions: { nitrogen: { min: 30, max: 60 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 800 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Soybean",
    image: "http://localhost:5000/images/soyabean.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 40, max: 80 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 500, max: 1200 }, temperature: { min: 20, max: 30 } },
  },
  {
    name: "Green Gram",
    image: "http://localhost:5000/images/green gram.jpg",
    idealConditions: { nitrogen: { min: 20, max: 50 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 20, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 900 }, temperature: { min: 25, max: 35 } },
  },
  {
    name: "Black Gram",
    image: "http://localhost:5000/images/black gram.jpg",
    idealConditions: { nitrogen: { min: 20, max: 50 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 20, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 900 }, temperature: { min: 25, max: 35 } },
  },
  {
    name: "Mango",
    image: "http://localhost:5000/images/mango.jpg",
    idealConditions: { nitrogen: { min: 30, max: 60 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 800 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Guava",
    image: "http://localhost:5000/images/guava.jpg",
    idealConditions: { nitrogen: { min: 25, max: 55 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 20, max: 50 }, ph: { min: 6.0, max: 7.5 }, rainfall: { min: 400, max: 800 }, temperature: { min: 15, max: 30 } },
  },
  {
    name: "Tomato",
    image: "http://localhost:5000/images/tomato.jpg",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 30, max: 60 }, potassium: { min: 40, max: 80 }, ph: { min: 6.0, max: 6.8 }, rainfall: { min: 500, max: 1200 }, temperature: { min: 18, max: 30 } },
  },
  {
    name: "Potato",
    image: "http://localhost:5000/images/potato.jpg",
    idealConditions: { nitrogen: { min: 60, max: 120 }, phosphorus: { min: 40, max: 80 }, potassium: { min: 60, max: 120 }, ph: { min: 5.5, max: 6.5 }, rainfall: { min: 500, max: 1200 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Onion",
    image: "http://localhost:5000/images/onion.jp",
    
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 6.8 }, rainfall: { min: 400, max: 900 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Garlic",
    image: "http://localhost:5000/images/garlic.jp",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 6.8 }, rainfall: { min: 400, max: 900 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Cabbage",
    image: "http://localhost:5000/images/cabbage.jp",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.0 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Cauliflower",
    image: "http://localhost:5000/images/cauliflower.jp",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 7.0 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 15, max: 25 } },
  },
  {
    name: "Brinjal",
    image: "http://localhost:5000/images/brinjal.jp",
    idealConditions: { nitrogen: { min: 40, max: 80 }, phosphorus: { min: 20, max: 50 }, potassium: { min: 30, max: 60 }, ph: { min: 6.0, max: 6.8 }, rainfall: { min: 400, max: 1000 }, temperature: { min: 18, max: 30 } },
  }
];
export default cropData;



