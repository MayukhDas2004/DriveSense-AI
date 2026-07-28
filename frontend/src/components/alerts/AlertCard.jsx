import {
  FaCheckCircle,
  FaExclamationTriangle,
  FaTimesCircle,
} from "react-icons/fa";

function AlertCard({ alert }) {
  let icon;
  let border;
  let bg;

  switch (alert.type) {
    case "critical":
      icon = <FaTimesCircle className="text-red-400 text-2xl" />;
      border = "border-red-500";
      bg = "bg-red-500/10";
      break;

    case "warning":
      icon = <FaExclamationTriangle className="text-yellow-400 text-2xl" />;
      border = "border-yellow-500";
      bg = "bg-yellow-500/10";
      break;

    default:
      icon = <FaCheckCircle className="text-green-400 text-2xl" />;
      border = "border-green-500";
      bg = "bg-green-500/10";
  }

  return (
    <div
      className={`rounded-2xl p-5 border ${border} ${bg} transition-all duration-300`}
    >
      <div className="flex gap-4">

        {icon}

        <div>
          <h3 className="text-white font-semibold text-lg">
            {alert.title}
          </h3>

          <p className="text-slate-300 mt-2">
            {alert.message}
          </p>
        </div>

      </div>
    </div>
  );
}

export default AlertCard;