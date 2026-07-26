import { FaRobot, FaBrain } from "react-icons/fa";

function ScoreCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6">

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-slate-400">
              Overall Health Score
            </p>

            <h2 className="text-6xl font-bold text-cyan-400 mt-4">
              89%
            </h2>

            <span className="inline-block mt-4 px-4 py-2 rounded-full bg-green-500/20 text-green-400">
              Healthy
            </span>

          </div>

          <FaRobot className="text-6xl text-cyan-400" />

        </div>

      </div>

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 shadow-xl">

        <div className="flex justify-between items-center">

          <div>

            <p className="text-slate-400">
              AI Confidence
            </p>

            <h2 className="text-6xl font-bold text-purple-400 mt-4">
              98%
            </h2>

            <span className="inline-block mt-4 px-4 py-2 rounded-full bg-purple-500/20 text-purple-400">
              Very High
            </span>

          </div>

          <FaBrain className="text-6xl text-purple-400" />

        </div>

      </div>

    </div>
  );
}

export default ScoreCards;