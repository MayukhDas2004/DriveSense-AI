import { FaRobot, FaCheckCircle } from "react-icons/fa";

function DiagnosisSummary() {
  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

      <div className="flex items-center gap-3 mb-6">
        <FaRobot className="text-cyan-400 text-2xl" />

        <h2 className="text-2xl font-bold text-white">
          AI Diagnosis Summary
        </h2>
      </div>

      <p className="text-slate-300 leading-8">
        The AI model analyzed real-time sensor data including engine
        temperature, battery voltage, tire pressure, oil temperature,
        vibration levels and engine RPM.
      </p>

      <div className="mt-8 space-y-4">

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400" />
          <span className="text-slate-300">
            Engine performance is stable.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400" />
          <span className="text-slate-300">
            No abnormal vibration detected.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400" />
          <span className="text-slate-300">
            Battery voltage is within the recommended range.
          </span>
        </div>

        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-400" />
          <span className="text-slate-300">
            Overall vehicle condition is healthy.
          </span>
        </div>

      </div>
    </div>
  );
}

export default DiagnosisSummary;