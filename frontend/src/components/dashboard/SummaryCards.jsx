import {
  Activity,
  Car,
  BatteryCharging,
  ShieldCheck,
} from "lucide-react";

import SummaryCard from "../common/SummaryCard";

function SummaryCards({ sensorData }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      <SummaryCard
        title="Vehicle Health"
        value={sensorData.health}
        unit="%"
        icon={Car}
        iconColor="text-cyan-400"
        valueColor="text-cyan-400"
        trend="▲ Live Monitoring"
        trendColor="text-green-400"
      />

      <SummaryCard
        title="Engine Status"
        value={
          sensorData.temperature > 100
            ? "Warning"
            : "Normal"
        }
        icon={Activity}
        iconColor={
          sensorData.temperature > 100
            ? "text-red-400"
            : "text-green-400"
        }
        valueColor={
          sensorData.temperature > 100
            ? "text-red-400"
            : "text-green-400"
        }
        trend={`${sensorData.temperature} °C`}
        trendColor="text-cyan-400"
      />

      <SummaryCard
        title="Battery"
        value={sensorData.battery}
        unit="V"
        icon={BatteryCharging}
        iconColor="text-yellow-400"
        valueColor="text-yellow-400"
        trend="Healthy"
        trendColor="text-green-400"
      />

      <SummaryCard
        title="AI Status"
        value="Ready"
        icon={ShieldCheck}
        iconColor="text-purple-400"
        valueColor="text-purple-400"
        trend={`Updated ${sensorData.updated.toLocaleTimeString()}`}
        trendColor="text-cyan-400"
      />

    </div>
  );
}

export default SummaryCards;