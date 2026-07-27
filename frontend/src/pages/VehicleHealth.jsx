import { useEffect, useState } from "react";
import api from "../services/api";
import AIPredictionCard from "../components/dashboard/AIPredictionCard";
import ConnectionStatus from "../components/dashboard/ConnectionStatus";

function VehicleHealth() {
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchPrediction = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get("/predictions");

        if (response.data.data.length > 0) {
          setPrediction(response.data.data[0]);
        } else {
          setPrediction(null);
        }

        setLastUpdated(new Date());
      } catch (err) {
        console.error(err);
        setError("Failed to load prediction.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrediction();

    const interval = setInterval(fetchPrediction, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Vehicle Health
          </h1>

          <p className="text-slate-400 mt-2">
            AI prediction and vehicle health analysis.
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

      {prediction ? (
        <AIPredictionCard prediction={prediction} />
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
          <h2 className="text-xl font-semibold text-white">
            No Prediction Available
          </h2>

          <p className="text-slate-400 mt-2">
            Waiting for AI prediction results.
          </p>
        </div>
      )}
    </div>
  );
}

export default VehicleHealth;