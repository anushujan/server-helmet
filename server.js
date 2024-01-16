const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(cors());
// Dummy data for demonstration purposes
const helmetData = [
  {
    id: 3,
    title: "Vega Thor",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/11/Thor-1.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 4,
    title: "Vega Thor",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/11/Thor-2.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 5,
    title: "Vega Thor",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/11/Thor-3.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 6,
    title: "Vega Thor",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/11/Thor-4.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 7,
    title: "Vega Black Panther",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/11/Black-Panter-Black-silver-1.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 8,
    title: "Vega Black Panther",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/11/Black-Panter-Black-silver-2.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 9,
    title: "Vega Black Panther",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/11/Black-Panter-Black-silver-3.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 10,
    title: "Vega Black Panther",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/11/Black-Panter-Black-silver-4.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 11,
    title: "Vega Hulk",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/11/Hulk-1.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 12,
    title: "Vega Hulk",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/11/Hulk-2.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 13,
    title: "Vega Hulk",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/11/Hulk-3.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 14,
    title: "Vega Hulk",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/11/Hulk-4.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 15,
    title: "Vega Crux",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/11/Teture-Black-1.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 16,
    title: "Vega Crux",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/11/Teture-Black-2.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 17,
    title: "Vega Crux",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/11/Teture-Black-3.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 18,
    title: "Vega Crux",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/11/Teture-Black-4.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 19,
    title: "Vega Crux Deadpool",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/12/CRUX-Deadpool-1.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 20,
    title: "Vega Crux Deadpool",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/12/CRUX-Deadpool-2.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 21,
    title: "Vega Crux Deadpool",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/12/CRUX-Deadpool-3.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 22,
    title: "Vega Crux Deadpool",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/12/CRUX-Deadpool-4.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 23,
    title: "Vega Jet",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/12/Jet-Black-Dull-1.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 24,
    title: "Vega Jet",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/12/Jet-Black-Dull-2.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 25,
    title: "Vega Jet",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/12/Jet-Black-Dull-3.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 26,
    title: "Vega Jet",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/12/Jet-Black-Dull-4.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 27,
    title: "Vega Jet Black",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/12/Jet-Black-1.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 28,
    title: "Vega Jet Black",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/12/Jet-Black-2.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 29,
    title: "Vega Jet Black",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/12/Jet-Black-3.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 30,
    title: "Vega Jet Black",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2023/12/Jet-Black-4.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 31,
    title: "Jet Marvel Captain America",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/11/Captain-America-1.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 32,
    title: "Jet Marvel Captain America",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/11/Captain-America-2.jpg",
    price: 35000,
    stock: "out of stock",
  },
  {
    id: 33,
    title: "Jet Marvel Captain America",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/11/Captain-America-3.jpg",
    price: 30000,
    stock: "out of stock",
  },
  {
    id: 34,
    title: "Jet Marvel Captain America",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/11/Captain-America-4.jpg",
    price: 35000,
    stock: "out of stock",
  },
];

const autogearData = [
  {
    id: 35,
    title: "Vega Bolt Top Vent",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/06/Bolt-Vents-1.jpg",
    price: 4000,
    stock: "out of stock",
  },
  {
    id: 36,
    title: "Vega Bolt Visor Fitting",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/04/Visor-Fitting-Front-.jpg",
    price: 3500,
    stock: "out of stock",
  },
  {
    id: 37,
    title: "Vega Bolt Visor Fitting",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/04/Visor-Fitting-Back-.jpg",
    price: 3500,
    stock: "out of stock",
  },
  {
    id: 38,
    title: "Bolt Smoke Spoiler",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2021/10/1.jpg",
    price: 3000,
    stock: "out of stock",
  },
  {
    id: 39,
    title: "Bolt Cheek Pads",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2021/08/EAR-ROLL.jpg",
    price: 3000,
    stock: "out of stock",
  },
  {
    id: 40,
    title: "Bolt Cheek Pads",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2021/05/Bolt-Ear-Roll.jpg",
    price: 3000,
    stock: "out of stock",
  },
  {
    id: 41,
    title: "Bolt Mouth Vent",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/06/Bolt-Vents-2.jpg",
    price: 4000,
    stock: "out of stock",
  },
  {
    id: 42,
    title: "Vega New Jet Visor Fitting",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2020/11/New-Jet-Visor-Fitting.jpg",
    price: 4000,
    stock: "out of stock",
  },
  {
    id: 43,
    title: "Vega Jet Peak",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2020/11/jet-peak.jpg",
    price: 3000,
    stock: "out of stock",
  },
  {
    id: 44,
    title: "Bolt Photochromic Visor",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2023/04/Bolt-Clear-Visor.jpg",
    price: 4500,
    stock: "out of stock",
  },
  {
    id: 45,
    title: "Bolt Blue Visor",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/06/Bolt-Visor-Blue.jpg",
    price: 4000,
    stock: "out of stock",
  },
  {
    id: 46,
    title: "Bolt Red Visor",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2022/06/Bolt-Visor-Red.jpg",
    price: 4000,
    stock: "out of stock",
  },
  {
    id: 47,
    title: "Bolt Clear Visor",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2021/08/clear.jpg",
    price: 3500,
    stock: "out of stock",
  },
  {
    id: 48,
    title: "Bolt Smoke Visor",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2021/08/SMOKE.jpg",
    price: 3500,
    stock: "out of stock",
  },
  {
    id: 49,
    title: "Bolt Mercury Visor",
    imageUrl: "https://vegaauto.com/wp-content/uploads/2021/08/MERCURY.jpg",
    price: 4000,
    stock: "out of stock",
  },
  {
    id: 50,
    title: "Vega Verve Clear Visor",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2020/11/Jet-Helmet-Clear-Visor.jpg",
    price: 3500,
    stock: "out of stock",
  },
  {
    id: 51,
    title: "Verve Smoke Visor",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2020/11/Jet-Helmet-Smoke-Visor.jpg",
    price: 3500,
    stock: "out of stock",
  },
  {
    id: 52,
    title: "Verve Mercury Visor",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2020/11/Jet-Helmet-Mercury-Visor.jpg",
    price: 4000,
    stock: "out of stock",
  },
  {
    id: 53,
    title: "Vega Jet Mercury Visor",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2020/11/Jet-Helmet-Mercury-Visor.jpg",
    price: 4500,
    stock: "out of stock",
  },
  {
    id: 54,
    title: "Jet Clear Visor",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2020/11/Jet-Helmet-Clear-Visor.jpg",
    price: 4000,
    stock: "out of stock",
  },
  {
    id: 55,
    title: "Jet Smoke Visor",
    imageUrl:
      "https://vegaauto.com/wp-content/uploads/2020/11/Jet-Helmet-Smoke-Visor.jpg",
    price: 4000,
    stock: "out of stock",
  },
];

// Define routes
app.get("/api/helmets", (req, res) => {
  res.json(helmetData);
});

app.get("/api/auto-gear", (req, res) => {
  res.json(autogearData);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
