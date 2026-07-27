import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


function BatteryChart({ sensorData }) {
  const data =
    sensorData
      ? [
          {
            time: "Now",
            battery: sensorData.batteryVoltage,
          },
        ]
      : [];
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