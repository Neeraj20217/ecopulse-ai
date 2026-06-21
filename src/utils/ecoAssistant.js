export function ecoAssistant(input) {
  let answer = "🌍 EcoPulse AI Advice\n\n";

  const text = input.toLowerCase();

  if (text.includes("car")) {
    answer +=
      "🚍 Use buses or public transport whenever possible.\n";
  }

  if (text.includes("electricity")) {
    answer +=
      "💡 Switch off unused appliances and use LED lighting.\n";
  }

  if (text.includes("waste")) {
    answer +=
      "♻ Practice recycling and compost organic waste.\n";
  }

  if (text.includes("meat")) {
    answer +=
      "🥗 Reduce meat consumption and include plant-based meals.\n";
  }

  if (
    !text.includes("car") &&
    !text.includes("electricity") &&
    !text.includes("waste") &&
    !text.includes("meat")
  ) {
    answer +=
      "🌱 Continue following sustainable practices.\n";
  }

  answer +=
    "\nEstimated monthly savings: 20-40 kg CO₂.";

  return answer;
}