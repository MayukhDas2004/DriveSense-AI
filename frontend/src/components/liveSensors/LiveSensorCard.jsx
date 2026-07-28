import { motion } from "framer-motion";

function LiveSensorCard({
  title,
  value,
  unit = "",
  icon: Icon,
  color = "text-cyan-400",
  status = "Normal",
}) {
  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      transition={{ duration: 0.25 }}
      className="
        bg-slate-900/80
        border
        border-slate-700
        rounded-3xl
        p-6
        backdrop-blur-lg
        shadow-lg
        hover:border-cyan-400
        hover:shadow-cyan-500/20
        transition-all
      "
    >
      <div className="flex justify-between items-center">

        <div>
          <p className="text-slate-400 text-sm">
            {title}
          </p>

          <h2 className={`text-4xl font-bold mt-3 ${color}`}>
            {value}
            <span className="text-xl ml-1">
              {unit}
            </span>
          </h2>

          <span className="inline-block mt-4 px-3 py-1 rounded-full bg-slate-800 text-green-400 text-sm">
            {status}
          </span>
        </div>

        <div className="w-16 h-16 rounded-2xl bg-slate-800 flex items-center justify-center">
          {Icon && <Icon className={`text-3xl ${color}`} />}
        </div>

      </div>
    </motion.div>
  );
}

export default LiveSensorCard;