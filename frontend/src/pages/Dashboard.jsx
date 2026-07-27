import { useEffect, useState } from "react";
import api from "../services/api";
import AIPredictionCard from "../components/dashboard/AIPredictionCard";
import SummaryCards from "../components/dashboard/SummaryCards";
import SensorGrid from "../components/dashboard/SensorGrid";
import TemperatureChart from "../components/charts/TemperatureChart";
import BatteryChart from "../components/charts/BatteryChart";
import RPMChart from "../components/charts/RPMChart";
import SpeedChart from "../components/charts/SpeedChart";
import ActiveAlertsCard from "../components/dashboard/ActiveAlertsCard";
import ConnectionStatus from "../components/dashboard/ConnectionStatus";



function Dashboard() {
  const [dashboardData, setDashboardData] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchDashboard = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get("/dashboard");

        setDashboardData(response.data.data);
        setLastUpdated(new Date());
      } catch (err) {
        console.error("Dashboard API Error:", err);
        setError("Failed to load dashboard.");
      } finally {
        setLoading(false);
      }
    };

      fetchDashboard();

    const interval = setInterval(() => {
      fetchDashboard();
    }, 5000);

    return () => clearInterval(interval);
}, []);

  return (
    <div className="space-y-8">
      {/* Page Title */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Vehicle Health Dashboard
          </h1>

          <p className="text-slate-400 mt-2">
            Real-Time AI Vehicle Monitoring & Predictive Maintenance
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <ConnectionStatus
            loading={loading}
            error={error}
          />

          <p className="text-sm text-slate-400">
            Last Updated:{" "}
            {lastUpdated
              ? lastUpdated.toLocaleTimeString()
              : "--:--:--"}
          </p>
        </div>
      </div>
      <SummaryCards dashboardData={dashboardData} />

      {/* Live Sensors */}
      <SensorGrid sensorData={dashboardData?.latestSensorData} />

      {/* AI Prediction */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <AIPredictionCard
            prediction={dashboardData?.latestPrediction}
          />
        </div>

        <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
          <h2 className="text-2xl font-bold text-cyan-400 mb-4">
            🚗 Vehicle Statistics
          </h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Total Vehicles</span>
              <span className="font-bold">
                {dashboardData?.totalVehicles ?? 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Healthy</span>
              <span className="text-green-400 font-bold">
                {dashboardData?.healthyVehicles ?? 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Warning</span>
              <span className="text-yellow-400 font-bold">
                {dashboardData?.warningVehicles ?? 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Critical</span>
              <span className="text-red-400 font-bold">
                {dashboardData?.criticalVehicles ?? 0}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Active Alerts</span>
              <span className="text-orange-400 font-bold">
                {dashboardData?.totalAlerts ?? 0}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Alerts & Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

        {/* Active Alerts */}
        <div>
          <ActiveAlertsCard
            totalAlerts={dashboardData?.totalAlerts ?? 0}
          />
        </div>

        {/* Charts */}
        <div className="xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-6">
          <TemperatureChart
            sensorData={dashboardData?.latestSensorData}
          />
          <BatteryChart
            sensorData={dashboardData?.latestSensorData}
          />
          <RPMChart
            sensorData={dashboardData?.latestSensorData}
          />
          <SpeedChart
            sensorData={dashboardData?.latestSensorData}
          />
        </div>

      </div>
    </div>
  );
};

export default Dashboard;