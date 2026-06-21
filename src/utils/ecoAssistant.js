export function ecoAssistant(input) {

  let answer = "🌍 EcoPulse AI Advice\n\n";

  const text = input.toLowerCase();

  if (text.includes("car"))
    answer += "🚍 Use public transport when possible.\n";

  if (text.includes("electricity"))
    answer += "💡 Switch off unused appliances.\n";

  if (text.includes("waste"))
    answer += "♻ Practice recycling.\n";

  if (text.includes("meat"))
    answer += "🥗 Reduce meat consumption.\n";

  answer += "\nPotential monthly savings: 20-40 kg CO₂.";

  return answer;
}