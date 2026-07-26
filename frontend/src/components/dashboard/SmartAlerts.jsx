import generateAlerts from "../../utils/generateAlerts";
import AlertCard from "../alerts/AlertCard";

function SmartAlerts({ sensorData }) {
  const alerts = generateAlerts(sensorData);

  return (
    <div className="space-y-4">

      <div>
        <h2 className="text-2xl font-bold text-white">
          AI Smart Alerts
        </h2>

        <p className="text-slate-400">
          Live predictive maintenance recommendations.
        </p>
      </div>

      {alerts.map((alert) => (
        <AlertCard
          key={alert.id}
          alert={alert}
        />
      ))}

    </div>
  );
}

export default SmartAlerts;