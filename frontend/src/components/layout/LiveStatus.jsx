import { useEffect, useState } from "react";
import { FaCircle } from "react-icons/fa";

function LiveStatus() {
  const [time, setTime] = useState(new Date());

  const [latency, setLatency] = useState(18);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());

      setLatency(Math.floor(Math.random() * 8) + 15);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center gap-6">

      {/* LIVE Badge */}
      <div className="flex items-center gap-2 bg-green-500/10 px-4 py-2 rounded-xl border border-green-500/30">

        <FaCircle className="text-green-400 text-xs animate-pulse" />

        <span className="text-green-400 font-semibold">
          LIVE
        </span>

      </div>

      {/* Vehicle Status */}
      <div className="text-right">

        <p className="text-slate-400 text-xs">
          Vehicle
        </p>

        <p className="text-white font-semibold">
          Connected
        </p>

      </div>

      {/* Last Update */}
      <div className="text-right">

        <p className="text-slate-400 text-xs">
          Last Update
        </p>

        <p className="text-cyan-400 font-semibold">
          {time.toLocaleTimeString()}
        </p>

      </div>

      {/* Latency */}
      <div className="text-right">

        <p className="text-slate-400 text-xs">
          Latency
        </p>

        <p className="text-green-400 font-semibold">
          {latency} ms
        </p>

      </div>

    </div>
  );
}

export default LiveStatus;