import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "10:00", battery: 98 },
  { time: "10:05", battery: 97 },
  { time: "10:10", battery: 97 },
  { time: "10:15", battery: 96 },
  { time: "10:20", battery: 95 },
  { time: "10:25", battery: 95 },
];

function BatteryChart() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-xl font-semibold text-white mb-4">
        Battery Health
      </h2>

      <ResponsiveContainer width="100%" height={280}>
        <AreaChart data={data}>
          <XAxis dataKey="time" stroke="#94A3B8" />
          <YAxis stroke="#94A3B8" />
          <Tooltip />

          <Area
            type="monotone"
            dataKey="battery"
            stroke="#22C55E"
            fill="#22C55E"
            fillOpacity={0.25}
            strokeWidth={3}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BatteryChart;