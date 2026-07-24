import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", temp: 82 },
  { time: "10:05", temp: 84 },
  { time: "10:10", temp: 86 },
  { time: "10:15", temp: 90 },
  { time: "10:20", temp: 88 },
  { time: "10:25", temp: 92 },
];

function TemperatureChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-xl font-semibold text-white mb-4">
        Engine Temperature
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data}>
          <XAxis dataKey="time" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="temp"
            stroke="#06B6D4"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default TemperatureChart;