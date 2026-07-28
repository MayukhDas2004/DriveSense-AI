import {
  FaCheckCircle,
  FaRobot,
} from "react-icons/fa";

function HealthSummary() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl h-full">

      <div className="flex items-center gap-3 mb-6">
        <FaRobot className="text-cyan-400 text-2xl" />

        <h2 className="text-2xl font-bold text-white">
          AI Health Summary
        </h2>
      </div>

      <div className="space-y-5">

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400" />
          <span className="text-slate-300">
            Engine operating normally
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400" />
          <span className="text-slate-300">
            Battery health is excellent
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400" />
          <span className="text-slate-300">
            Tire pressure is optimal
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400" />
          <span className="text-slate-300">
            Brake system functioning correctly
          </span>
        </div>

      </div>

      <div className="mt-8 p-4 rounded-2xl bg-slate-800 border border-slate-700">

        <p className="text-slate-400 text-sm">
          AI Prediction Confidence
        </p>

        <h3 className="text-3xl font-bold text-cyan-400 mt-2">
          98%
        </h3>

      </div>

    </div>
  );
}

export default HealthSummary;