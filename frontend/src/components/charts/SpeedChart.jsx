import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


function SpeedChart({ sensorData }) {
  const data =
    sensorData
      ? [
          {
            time: "Now",
            speed: sensorData.speed,
          },
        ]
      : [];
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