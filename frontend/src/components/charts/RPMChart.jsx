import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", rpm: 2500 },
  { time: "10:05", rpm: 2800 },
  { time: "10:10", rpm: 3000 },
  { time: "10:15", rpm: 3200 },
  { time: "10:20", rpm: 3100 },
  { time: "10:25", rpm: 3400 },
];

function RPMChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-xl font-semibold text-white mb-4">
        Engine RPM
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <BarChart data={data}>
          <XAxis dataKey="time" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />

          <Bar
            dataKey="rpm"
            fill="#3B82F6"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default RPMChart;