import { motion } from "framer-motion";

function ComponentCard({
  title,
  value,
  status,
  icon: Icon,
  color = "text-cyan-400",
}) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="bg-slate-900 border border-slate-700 rounded-3xl p-6 shadow-xl"
    >
      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-400">
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${color}`}>
            {value}%
          </h2>

          <span className="inline-block mt-3 px-3 py-1 rounded-full bg-slate-800 text-green-400 text-sm">
            {status}
          </span>
        </div>

        <div className="w-14 h-14 rounded-2xl bg-slate-800 flex items-center justify-center">
          <Icon className={`text-3xl ${color}`} />
        </div>

      </div>

      {/* Progress Bar */}

      <div className="mt-6 h-2 rounded-full bg-slate-800 overflow-hidden">

        <div
          className="h-full bg-cyan-400 rounded-full"
          style={{ width: `${value}%` }}
        />

      </div>

    </motion.div>
  );
}

export default ComponentCard;