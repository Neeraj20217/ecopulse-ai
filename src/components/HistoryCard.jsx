function HistoryCard({ history }) {

  if (!history.length) return null;

  return (

    <div className="card">

      <h2>📜 History</h2>

      {
        history.map((item, index)=>(

          <p key={index}>
            {item.date} - {item.total} kg CO₂
          </p>

        ))
      }

    </div>

  );
}

export default HistoryCard;