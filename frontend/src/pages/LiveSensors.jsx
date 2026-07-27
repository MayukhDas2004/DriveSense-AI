import { useEffect, useState } from "react";
import api from "../services/api";
import SensorGrid from "../components/dashboard/SensorGrid";
import ConnectionStatus from "../components/dashboard/ConnectionStatus";

function LiveSensors() {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await api.get("/sensors");

        if (response.data.data.length > 0) {
          setSensorData(response.data.data[0]);
        } else {
          setSensorData(null);
        }

        setLastUpdated(new Date());
      } catch (err) {
        console.error(err);
        setError("Failed to load sensor data.");
      } finally {
        setLoading(false);
      }
    };

    fetchSensorData();

    const interval = setInterval(fetchSensorData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Live Sensor Monitoring
          </h1>

          <p className="text-slate-400 mt-2">
            Real-time vehicle sensor values from the latest reading.
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

      {sensorData ? (
        <SensorGrid sensorData={sensorData} />
      ) : (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-10 text-center">
          <h2 className="text-xl font-semibold text-white">
            No Sensor Data Available
          </h2>

          <p className="text-slate-400 mt-2">
            Waiting for sensor data from the simulator.
          </p>
        </div>
      )}
    </div>
  );
}

export default LiveSensors;