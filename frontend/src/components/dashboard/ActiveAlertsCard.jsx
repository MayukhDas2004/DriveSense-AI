function ActiveAlertsCard({ totalAlerts = 0 }) {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-2xl font-bold text-red-400 mb-4">
        🚨 Active Alerts
      </h2>

      {totalAlerts > 0 ? (
        <div>
          <p className="text-5xl font-bold text-red-500">
            {totalAlerts}
          </p>

          <p className="text-slate-400 mt-2">
            Active alert{totalAlerts > 1 ? "s" : ""} detected.
          </p>
        </div>
      ) : (
        <div>
          <p className="text-3xl font-bold text-green-400">
            No Active Alerts
          </p>

          <p className="text-slate-400 mt-2">
            All vehicles are operating normally.
          </p>
        </div>
      )}
    </div>
  );
}

export default ActiveAlertsCard;