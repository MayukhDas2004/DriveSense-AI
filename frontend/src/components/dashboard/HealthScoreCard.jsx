function HealthScoreCard() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6 shadow-lg border border-slate-800 hover:border-cyan-500 transition-all duration-300">
      
      <h3 className="text-gray-400 text-sm font-medium">
        Overall Vehicle Health
      </h3>

      <div className="mt-4 flex items-center justify-between">
        <h1 className="text-5xl font-bold text-cyan-400">
          89%
        </h1>

        <div className="text-5xl">
          🚗
        </div>
      </div>

      <div className="mt-6 w-full bg-slate-700 rounded-full h-3">
        <div
          className="bg-cyan-400 h-3 rounded-full"
          style={{ width: "89%" }}
        ></div>
      </div>

      <p className="mt-4 text-green-400 font-semibold">
        Healthy
      </p>
    </div>
  );
}

export default HealthScoreCard;