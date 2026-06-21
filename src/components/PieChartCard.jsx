import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  Legend
} from "recharts";

const COLORS = [
  "#22c55e",
  "#3b82f6",
  "#f97316",
  "#ef4444"
];

function PieChartCard({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div
      className="card"
      role="region"
      aria-label="Emission Breakdown"
    >
      <h2>📊 Breakdown</h2>

      <PieChart width={400} height={300}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          outerRadius={100}
        >
          {data.map((entry, index) => (
            <Cell
              key={index}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>

        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default PieChartCard;