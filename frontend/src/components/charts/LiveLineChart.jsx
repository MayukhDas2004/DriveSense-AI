import { useMemo } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import useSensorHistory from "../../hooks/useSensorHistory";

function LiveLineChart({
  title,
  value,
  color,
  dataKey,
  unit,
}) {
  const history = useSensorHistory(value);

  const chartData = useMemo(() => {
    return history.map((item, index) => ({
      time: index + 1,
      [dataKey]: item,
    }));
  }, [history, dataKey]);

  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800 hover:border-cyan-500 transition-all duration-300">

      <div className="flex justify-between items-center mb-5">

        <div>
          <h2 className="text-xl font-semibold text-white">
            {title}
          </h2>

          <p className="text-slate-400 text-sm mt-1">
            Current Value
          </p>
        </div>

        <div className="text-right">
          <h3
            className="text-3xl font-bold"
            style={{ color }}
          >
            {value}
          </h3>

          <p className="text-slate-400 text-sm">
            {unit}
          </p>
        </div>

      </div>

      <ResponsiveContainer width="100%" height={260}>

        <LineChart data={chartData}>

          <XAxis
            dataKey="time"
            stroke="#94A3B8"
          />

          <YAxis
            stroke="#94A3B8"
            domain={["dataMin - 2", "dataMax + 2"]}
          />

          <Tooltip />

          <Line
            type="monotone"
            dataKey={dataKey}
            stroke={color}
            strokeWidth={3}
            dot={false}
            isAnimationActive
          />

        </LineChart>

      </ResponsiveContainer>

    </div>
  );
}

export default LiveLineChart;