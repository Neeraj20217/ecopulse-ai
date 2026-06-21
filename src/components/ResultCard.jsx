function ResultCard({ result }) {

  if (!result) return null;

  return (
    <div className="card">
      <h2>🌍 Carbon Footprint</h2>

      <h1>{result.total} kg CO₂</h1>

      <h3>Eco Score: {result.score}/100</h3>

    </div>
  );
}

export default ResultCard;