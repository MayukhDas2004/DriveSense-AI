import { FaBell, FaUserCircle } from "react-icons/fa";
import LiveStatus from "./LiveStatus";

function Navbar() {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-8">

      {/* Left Section */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Vehicle Health Dashboard
        </h1>

        <p className="text-slate-400 text-sm mt-1">
          Real-Time Vehicle Monitoring
        </p>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">

        {/* Live Status */}
        <LiveStatus />

        {/* Notification */}
        <button className="relative text-white text-xl hover:text-cyan-400 transition duration-300">
          <FaBell />

          {/* Notification Badge */}
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full animate-pulse"></span>
        </button>

        {/* User Profile */}
        <div className="flex items-center gap-3">

          <FaUserCircle className="text-4xl text-cyan-400" />

          <div>
            <p className="text-white font-semibold">
              Admin
            </p>

            <p className="text-xs text-slate-400">
              Fleet Manager
            </p>
          </div>

        </div>

      </div>

    </header>
  );
}

export default Navbar;