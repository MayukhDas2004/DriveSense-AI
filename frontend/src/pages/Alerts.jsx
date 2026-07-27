import { useEffect, useState } from "react";
import api from "../services/api";
import ConnectionStatus from "../components/dashboard/ConnectionStatus";

function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get("/alerts");

        setAlerts(response.data.data || []);
        setLastUpdated(new Date());
      } catch (err) {
        console.error(err);
        setError("Failed to load alerts.");
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();

    const interval = setInterval(fetchAlerts, 5000);

    return () => clearInterval(interval);
  }, []);

  const getSeverityStyle = (severity) => {
    switch (severity) {
      case "Low":
        return "bg-green-500/20 text-green-400 border border-green-500";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border border-yellow-500";
      case "High":
        return "bg-orange-500/20 text-orange-400 border border-orange-500";
      case "Critical":
        return "bg-red-500/20 text-red-400 border border-red-500";
      default:
        return "bg-slate-700 text-white";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Alerts
          </h1>

          <p className="text-slate-400 mt-2">
            Active alerts and notifications.
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

      {alerts.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
          <h2 className="text-xl font-semibold text-white">
            No Alerts Available
          </h2>

          <p className="text-slate-400 mt-2">
            All vehicles are operating normally.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div
              key={alert._id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-white">
                      Vehicle ID:
                    </span>{" "}
                    {alert.vehicleId}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Alert Type:
                    </span>{" "}
                    {alert.alertType}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Message:
                    </span>{" "}
                    {alert.message}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Status:
                    </span>{" "}
                    {alert.status}
                  </p>

                  <p className="text-sm text-slate-400">
                    {new Date(alert.createdAt).toLocaleString()}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${getSeverityStyle(
                    alert.severity
                  )}`}
                >
                  {alert.severity}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Alerts;