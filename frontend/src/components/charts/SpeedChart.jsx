import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", speed: 45 },
  { time: "10:05", speed: 52 },
  { time: "10:10", speed: 60 },
  { time: "10:15", speed: 72 },
  { time: "10:20", speed: 68 },
  { time: "10:25", speed: 75 },
];

function SpeedChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-xl font-semibold text-white mb-4">
        Vehicle Speed
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />

          <Line
            type="monotone"
            dataKey="speed"
            stroke="#A855F7"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SpeedChart;