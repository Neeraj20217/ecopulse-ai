function ProgressBar({ score }) {
  if (score === null || score === undefined) return null;

  return (
    <div
      className="card"
      role="region"
      aria-label="Eco Score Progress"
    >
      <h3>Eco Score : {score}/100</h3>

      <div
        style={{
          width: "100%",
          background: "#ddd",
          borderRadius: "20px",
          overflow: "hidden",
          height: "20px"
        }}
      >
        <div
          style={{
            width: `${score}%`,
            height: "100%",
            background: "#16a34a",
            transition: "width 0.5s ease"
          }}
        />
      </div>
    </div>
  );
}

export default ProgressBar;