import { motion } from "framer-motion";

function HealthGauge() {
  const health = 89;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="
        bg-slate-900
        border
        border-slate-700
        rounded-3xl
        p-8
        flex
        flex-col
        items-center
        justify-center
        shadow-xl
      "
    >
      <h2 className="text-xl font-semibold text-white mb-8">
        Overall Health Score
      </h2>

      <div className="relative w-56 h-56">

        {/* Background Circle */}
        <svg className="w-full h-full -rotate-90">
          <circle
            cx="112"
            cy="112"
            r="90"
            stroke="#1e293b"
            strokeWidth="16"
            fill="none"
          />

          <motion.circle
            cx="112"
            cy="112"
            r="90"
            stroke="#22d3ee"
            strokeWidth="16"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={565}
            strokeDashoffset={565 - (565 * health) / 100}
            initial={{ strokeDashoffset: 565 }}
            animate={{
              strokeDashoffset: 565 - (565 * health) / 100,
            }}
            transition={{
              duration: 1.5,
            }}
          />
        </svg>

        {/* Score */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">

          <h1 className="text-5xl font-bold text-cyan-400">
            {health}%
          </h1>

          <p className="mt-2 text-green-400 font-medium">
            Healthy
          </p>

        </div>

      </div>

      <p className="mt-8 text-center text-slate-400 max-w-xs">
        AI analysis indicates the vehicle is operating normally with no critical issues detected.
      </p>

    </motion.div>
  );
}

export default HealthGauge;