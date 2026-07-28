import PageHeader from "../components/common/PageHeader";
import LiveSensorCard from "../components/liveSensors/LiveSensorCard";
import { liveSensorData } from "../data/liveSensorData";
import LiveSensorChart from "../components/liveSensors/LiveSensorChart";

function LiveSensors() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Live Sensors"
        subtitle="Monitor real-time vehicle sensor readings."
      />

      {/* Sensor Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {liveSensorData.map((sensor) => (
          <LiveSensorCard
            key={sensor.id}
            title={sensor.title}
            value={sensor.value}
            unit={sensor.unit}
            icon={sensor.icon}
            color={sensor.color}
            status={sensor.status}
          />
        ))}
      </div>
{/* Live Sensor Chart */}
<LiveSensorChart />
    </div>
  );
}

export default LiveSensors;