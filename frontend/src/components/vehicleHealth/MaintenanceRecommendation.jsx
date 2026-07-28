import { FaRobot, FaTools, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function MaintenanceRecommendation() {
  const navigate = useNavigate();

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

      {/* Header */}
      <div className="flex items-center gap-3 mb-6">
        <FaRobot className="text-cyan-400 text-2xl" />

        <h2 className="text-2xl font-bold text-white">
          AI Maintenance Recommendation
        </h2>
      </div>

      {/* Recommendation */}
      <div className="space-y-5">

        <div className="flex items-start gap-4">

          <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center">
            <FaTools className="text-cyan-400 text-xl" />
          </div>

          <div>
            <h3 className="text-white font-semibold">
              Preventive Maintenance
            </h3>

            <p className="text-slate-400 mt-1">
              Based on current sensor readings, schedule an engine oil
              inspection within the next{" "}
              <span className="text-cyan-400 font-semibold">
                500 km
              </span>.
            </p>
          </div>

        </div>

        {/* AI Risk Card */}
        <div className="rounded-2xl bg-slate-800 border border-slate-700 p-5">

          <p className="text-slate-400 text-sm">
            AI Risk Score
          </p>

          <h2 className="text-4xl font-bold text-green-400 mt-2">
            Low Risk
          </h2>

          <p className="text-slate-500 mt-2">
            Estimated failure probability:{" "}
            <span className="text-white font-semibold">
              4%
            </span>
          </p>

        </div>

      </div>

      {/* Button */}
      <button
        onClick={() => navigate("/ai-report")}
        className="mt-8 flex items-center gap-3 bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 hover:scale-105 px-6 py-3 rounded-xl font-semibold text-slate-950 shadow-lg"
      >
        View Full AI Report
        <FaArrowRight />
      </button>

    </div>
  );
}

export default MaintenanceRecommendation;