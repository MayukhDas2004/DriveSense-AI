function AIPredictionCard({ prediction }) {
  const status = prediction?.status || "Unknown";
  const healthScore = prediction?.healthScore;


  const statusStyle = {
    Healthy: "bg-green-500/20 text-green-400 border border-green-500",
    Normal: "bg-green-500/20 text-green-400 border border-green-500",
    Warning: "bg-yellow-500/20 text-yellow-400 border border-yellow-500",
    Critical: "bg-red-500/20 text-red-400 border border-red-500",
    Fault: "bg-red-500/20 text-red-400 border border-red-500",
  };
  return (
    <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
      <h2 className="text-2xl font-bold text-cyan-400 mb-4">
        🤖 AI Prediction
      </h2>

      <div className="space-y-3 text-slate-300">
        <p>
          <span className="font-semibold text-white">Vehicle ID:</span>{" "}
          {prediction?.vehicleId ?? "--"}
        </p>

        <p>
          <span className="font-semibold text-white">Predicted Fault:</span>{" "}
          {prediction?.predictedFault ?? "--"}
        </p>

        <p>
          <span className="font-semibold text-white">Confidence:</span>{" "}
          {prediction?.confidence != null
            ? `${prediction.confidence}%`
            : "--"}
        </p>

        <div>
          <div className="flex justify-between mb-2">
            <span className="font-semibold text-white">
              Health Score
            </span>

            <span className="font-bold text-cyan-400">
              {healthScore ?? "--"}%
            </span>
          </div>

          <div className="w-full bg-slate-700 rounded-full h-3">
            <div
              className={`h-3 rounded-full transition-all duration-500 ${
                healthScore >= 80
                  ? "bg-green-500"
                  : healthScore >= 50
                  ? "bg-yellow-500"
                  : "bg-red-500"
              }`}
              style={{
                width: healthScore != null ? `${healthScore}%` : "0%",
              }}
            />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-white">Status:</span>

          <span
            className={`px-3 py-1 rounded-full text-sm font-semibold ${
              statusStyle[status] || "bg-slate-700 text-white"
            }`}
          >
            {status}
          </span>
        </div>

        <p>
          <span className="font-semibold text-white">
            Recommended Action:
          </span>
        </p>

        <div className="bg-slate-800 rounded-lg p-3 text-slate-200">
          {prediction?.recommendedAction ?? "No recommendation available."}
        </div>
      </div>
    </div>
  );
}

export default AIPredictionCard;