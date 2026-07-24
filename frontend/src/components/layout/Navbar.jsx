import { FaBell, FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <header className="h-20 bg-slate-900 border-b border-slate-700 flex items-center justify-between px-8">
      
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          Vehicle Health Dashboard
        </h1>
        <p className="text-gray-400 text-sm">
          Real-Time Vehicle Monitoring
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="text-white text-xl hover:text-cyan-400 transition">
          <FaBell />
        </button>

        {/* User */}
        <div className="flex items-center gap-2 text-white">
          <FaUserCircle className="text-3xl" />
          <div>
            <p className="font-semibold">Admin</p>
            <p className="text-xs text-gray-400">Fleet Manager</p>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;