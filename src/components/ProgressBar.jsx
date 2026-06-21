function ProgressBar({ score }) {
  return (
    <>
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
            background: "#16a34a"
          }}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;