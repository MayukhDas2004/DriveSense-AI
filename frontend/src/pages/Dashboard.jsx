import SummaryCards from "../components/dashboard/SummaryCards";
import SensorGrid from "../components/dashboard/SensorGrid";
import TemperatureChart from "../components/charts/TemperatureChart";
import BatteryChart from "../components/charts/BatteryChart";
import RPMChart from "../components/charts/RPMChart";
import SpeedChart from "../components/charts/SpeedChart";

function Dashboard() {
  return (
    <div className="space-y-8">

      {/* Page Title */}
      <div>
        <h1 className="text-3xl font-bold text-white">
          Vehicle Health Dashboard
        </h1>

        <p className="text-slate-400 mt-2">
          Real-Time AI Vehicle Monitoring & Predictive Maintenance
        </p>
      </div>

      {/* Summary Cards */}
      <SummaryCards />

      {/* Live Sensors */}
      <SensorGrid />

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <TemperatureChart />
        <BatteryChart />
        <RPMChart />
        <SpeedChart />
      </div>

    </div>
  );
}

export default Dashboard;