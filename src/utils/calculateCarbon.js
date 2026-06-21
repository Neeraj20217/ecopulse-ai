export function calculateCarbon(data) {
  const transportFactor = {
    Car: 0.21,
    Bus: 0.08,
    Bike: 0.05,
    Train: 0.04,
    Walking: 0
  };

  const dietFactor = {
    Vegetarian: 1.5,
    Mixed: 2.5,
    "Non-Vegetarian": 3.5
  };

  const transport =
    (transportFactor[data.transport] || 0) *
    Number(data.distance);

  const electricity = Number(data.electricity) * 0.5;

  const diet = dietFactor[data.diet] || 0;

  const waste = Number(data.waste) * 0.2;

  const total = transport + electricity + diet + waste;

  let score = 100 - total;

  if (score < 0) score = 0;

  return {
    total: total.toFixed(2),
    score: score.toFixed(0),
    breakdown: [
      {
        name: "Transport",
        value: Number(transport.toFixed(2))
      },
      {
        name: "Electricity",
        value: Number(electricity.toFixed(2))
      },
      {
        name: "Diet",
        value: Number(diet.toFixed(2))
      },
      {
        name: "Waste",
        value: Number(waste.toFixed(2))
      }
    ]
  };
}