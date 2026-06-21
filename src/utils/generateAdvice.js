export function generateAdvice(data) {
  let tips = [];

  if (data.transport === "Car") {
    tips.push(
      "🚍 Use public transport twice a week to lower transport emissions."
    );
  }

  if (Number(data.electricity) > 150) {
    tips.push(
      "💡 Reduce electricity usage by 15% by turning off unused appliances."
    );
  }

  if (Number(data.waste) > 10) {
    tips.push(
      "♻ Separate recyclable waste and compost biodegradable waste."
    );
  }

  if (data.diet === "Non-Vegetarian") {
    tips.push(
      "🥗 Include more plant-based meals to reduce food-related emissions."
    );
  }

  if (Number(data.distance) > 50) {
    tips.push(
      "🚶 Consider walking or cycling for shorter trips."
    );
  }

  if (tips.length === 0) {
    tips.push(
      "🌎 Great job! Keep maintaining your eco-friendly lifestyle."
    );
  }

  return tips;
}