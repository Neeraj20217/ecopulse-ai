function HistoryCard({ history }) {
  if (!history.length) return null;

  return (
    <div
      className="card"
      role="region"
      aria-label="History"
    >
      <h2>📜 History</h2>

      <ul>
        {history.map((item, index) => (
          <li key={index}>
            {item.date} - {item.total} kg CO₂
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HistoryCard;