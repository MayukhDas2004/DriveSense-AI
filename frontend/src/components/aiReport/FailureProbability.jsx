function FailureProbability() {
  const components = [
    { name: "Engine", probability: 3, color: "bg-green-500" },
    { name: "Battery", probability: 2, color: "bg-green-500" },
    { name: "Brakes", probability: 1, color: "bg-green-500" },
    { name: "Transmission", probability: 5, color: "bg-yellow-500" },
    { name: "Tires", probability: 6, color: "bg-yellow-500" },
    { name: "Cooling System", probability: 4, color: "bg-cyan-500" },
  ];

  return (
    <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

      <h2 className="text-2xl font-bold text-white mb-8">
        Failure Probability Analysis
      </h2>

      <div className="space-y-6">

        {components.map((item) => (
          <div key={item.name}>

            <div className="flex justify-between mb-2">
              <span className="text-slate-300">
                {item.name}
              </span>

              <span className="text-white font-semibold">
                {item.probability}%
              </span>
            </div>

            <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden">

              <div
                className={`h-full rounded-full ${item.color}`}
                style={{
                  width: `${item.probability}%`,
                }}
              />

            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default FailureProbability;