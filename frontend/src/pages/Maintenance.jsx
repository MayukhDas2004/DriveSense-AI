import { useEffect, useState } from "react";
import api from "../services/api";
import ConnectionStatus from "../components/dashboard/ConnectionStatus";

function Maintenance() {
  const [records, setRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchMaintenance = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get("/maintenance");

        setRecords(response.data.data || []);
        setLastUpdated(new Date());
      } catch (err) {
        console.error(err);
        setError("Failed to load maintenance records.");
      } finally {
        setLoading(false);
      }
    };

    fetchMaintenance();

    const interval = setInterval(fetchMaintenance, 5000);

    return () => clearInterval(interval);
  }, []);

  const getPriorityStyle = (priority) => {
    switch (priority) {
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
            Maintenance
          </h1>

          <p className="text-slate-400 mt-2">
            Maintenance recommendations and schedules.
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

      {records.length === 0 ? (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
          <h2 className="text-xl font-semibold text-white">
            No Maintenance Records
          </h2>

          <p className="text-slate-400 mt-2">
            No maintenance recommendations are available.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {records.map((record) => (
            <div
              key={record._id}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="flex justify-between items-start flex-wrap gap-4">
                <div className="space-y-2">
                  <p>
                    <span className="font-semibold text-white">
                      Vehicle ID:
                    </span>{" "}
                    {record.vehicleId}
                  </p>

                  <p>
                    <span className="font-semibold text-white">
                      Recommendation:
                    </span>{" "}
                    {record.recommendation}
                  </p>

                  <p className="text-sm text-slate-400">
                    {new Date(record.createdAt).toLocaleString()}
                  </p>
                </div>

                <span
                  className={`px-4 py-2 rounded-full font-semibold ${getPriorityStyle(
                    record.priority
                  )}`}
                >
                  {record.priority}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Maintenance;