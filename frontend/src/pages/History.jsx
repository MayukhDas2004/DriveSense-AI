import { useEffect, useState } from "react";
import api from "../services/api";
import ConnectionStatus from "../components/dashboard/ConnectionStatus";

function History() {
  const [history, setHistory] = useState({
    sensors: [],
    predictions: [],
    alerts: [],
    maintenance: [],
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchHistory = async () => {
      try {
        setLoading(true);
        setError(null);

        const [sensorRes, predictionRes, alertRes, maintenanceRes] =
          await Promise.all([
            api.get("/sensors"),
            api.get("/predictions"),
            api.get("/alerts"),
            api.get("/maintenance"),
          ]);

        setHistory({
          sensors: sensorRes.data.data || [],
          predictions: predictionRes.data.data || [],
          alerts: alertRes.data.data || [],
          maintenance: maintenanceRes.data.data || [],
        });

        setLastUpdated(new Date());
      } catch (err) {
        console.error(err);
        setError("Failed to load history.");
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();

    const interval = setInterval(fetchHistory, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Vehicle History
          </h1>

          <p className="text-slate-400 mt-2">
            Historical sensor readings, predictions, alerts and maintenance.
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <ConnectionStatus loading={loading} error={error} />

          <p className="text-sm text-slate-400">
            Last Updated:{" "}
            {lastUpdated
              ? lastUpdated.toLocaleTimeString()
              : "--:--:--"}
          </p>
        </div>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-6">
        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-slate-400">Sensor Records</h2>
          <p className="text-3xl font-bold text-cyan-400">
            {history.sensors.length}
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-slate-400">Predictions</h2>
          <p className="text-3xl font-bold text-green-400">
            {history.predictions.length}
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-slate-400">Alerts</h2>
          <p className="text-3xl font-bold text-red-400">
            {history.alerts.length}
          </p>
        </div>

        <div className="bg-slate-900 rounded-xl p-6 border border-slate-800">
          <h2 className="text-slate-400">Maintenance</h2>
          <p className="text-3xl font-bold text-yellow-400">
            {history.maintenance.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;