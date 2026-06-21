import { useState } from "react";

import CarbonForm from "./components/CarbonForm";
import ResultCard from "./components/ResultCard";
import ProgressBar from "./components/ProgressBar";
import SuggestionCard from "./components/SuggestionCard";
import HistoryCard from "./components/HistoryCard";
import PieChartCard from "./components/PieChartCard";

import { calculateCarbon } from "./utils/calculateCarbon";
import { generateAdvice } from "./utils/generateAdvice";

import "./App.css";

function App() {
  const [result, setResult] = useState(null);
  const [tips, setTips] = useState([]);
  const [history, setHistory] = useState([]);

  function handleCalculate(data) {
    const res = calculateCarbon(data);

    setResult(res);

    setTips(generateAdvice(data));

    setHistory([
      {
        date: new Date().toLocaleDateString(),
        total: res.total,
      },
      ...history,
    ]);
  }

  return (
    <div className="app">

      <CarbonForm onCalculate={handleCalculate} />

      {result && (
        <>
          <div className="result-card">
            <ResultCard result={result} />
          </div>

          <div className="result-card">
            <ProgressBar score={result.score} />
          </div>

          <div className="result-card">
            <PieChartCard data={result.breakdown} />
          </div>

          <div className="result-card">
            <SuggestionCard tips={tips} />
          </div>
        </>
      )}

      <div className="result-card">
        <HistoryCard history={history} />
      </div>

    </div>
  );
}

export default App;