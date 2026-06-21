function SuggestionCard({ tips }) {
  if (!tips || tips.length === 0) return null;

  return (
    <div
      className="card"
      role="region"
      aria-label="Suggestions"
    >
      <h2>💡 Suggestions</h2>

      <ul>
        {tips.map((tip, index) => (
          <li key={index}>
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SuggestionCard;