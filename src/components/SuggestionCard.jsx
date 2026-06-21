function SuggestionCard({ tips }) {

  if (!tips) return null;

  return (

    <div className="card">

      <h2>💡 Suggestions</h2>

      {
        tips.map((tip, index) => (

          <p key={index}>
            {tip}
          </p>

        ))
      }

    </div>

  );
}

export default SuggestionCard;