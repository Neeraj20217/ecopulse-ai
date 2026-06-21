export function generateAdvice(data) {

  let tips = [];

  if (data.transport === "Car")
    tips.push("🚍 Use public transport twice a week.");

  if (data.electricity > 150)
    tips.push("💡 Reduce electricity usage by 15%.");

  if (data.waste > 10)
    tips.push("♻ Reduce household waste.");

  if (data.diet === "Non-Vegetarian")
    tips.push("🥗 Include more plant-based meals.");

  if (tips.length === 0)
    tips.push("🌎 Great job! Keep maintaining your eco lifestyle.");

  return tips;
}