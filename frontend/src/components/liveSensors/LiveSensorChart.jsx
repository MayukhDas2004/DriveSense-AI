import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", temperature: 88 },
  { time: "10:05", temperature: 90 },
  { time: "10:10", temperature: 91 },
  { time: "10:15", temperature: 92 },
  { time: "10:20", temperature: 91 },
  { time: "10:25", temperature: 93 },
  { time: "10:30", temperature: 92 },
];

function LiveSensorChart() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-6">
      <h2 className="text-xl font-bold text-white mb-6">
        Engine Temperature Trend
      </h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

          <XAxis dataKey="time" stroke="#94a3b8" />

          <YAxis stroke="#94a3b8" />

          <Tooltip
  contentStyle={{
    backgroundColor: "#0f172a",
    border: "1px solid #334155",
    borderRadius: "12px",
    color: "#ffffff",
  }}
/>
<Line
  type="monotone"
  dataKey="temperature"
  stroke="#22d3ee"
  strokeWidth={4}
  dot={{
    r: 5,
    fill: "#22d3ee",
    strokeWidth: 2,
  }}
  activeDot={{
    r: 8,
    fill: "#06b6d4",
  }}
  animationDuration={1500}
/>
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default LiveSensorChart;