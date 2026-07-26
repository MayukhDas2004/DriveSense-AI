import useSensorData from "../hooks/useSensorData";
import SmartAlerts from "../components/dashboard/SmartAlerts";
import PageHeader from "../components/common/PageHeader";
import SummaryCards from "../components/dashboard/SummaryCards";
import SensorGrid from "../components/dashboard/SensorGrid";
import LiveLineChart from "../components/charts/LiveLineChart";

function Dashboard() {
  const sensorData = useSensorData();

  return (
    <div className="space-y-8">

      {/* Page Header */}
      <PageHeader
        title="DriveSense AI Command Center"
        subtitle="Real-Time Edge AI Vehicle Monitoring & Predictive Maintenance"
      />

      {/* Summary Cards */}
      <SummaryCards sensorData={sensorData} />

      {/* Live Sensor Cards */}
      <SensorGrid sensorData={sensorData} />

      {/* Live Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <LiveLineChart
          title="Engine Temperature"
          value={sensorData.temperature}
          color="#06B6D4"
          dataKey="temperature"
          unit="°C"
        />

        <LiveLineChart
          title="Battery Voltage"
          value={sensorData.battery}
          color="#FACC15"
          dataKey="battery"
          unit="V"
        />

        <LiveLineChart
          title="Engine RPM"
          value={sensorData.rpm}
          color="#8B5CF6"
          dataKey="rpm"
          unit="RPM"
        />

        <LiveLineChart
          title="Vehicle Speed"
          value={sensorData.speed}
          color="#22C55E"
          dataKey="speed"
          unit="km/h"
        />

      </div>
<SmartAlerts sensorData={sensorData} />
    </div>
  );
}

export default Dashboard;