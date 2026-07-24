import {
  FaTachometerAlt,
  FaCar,
  FaBell,
  FaTools,
  FaHistory,
  FaCog,
} from "react-icons/fa";

const menuItems = [
  { name: "Dashboard", icon: <FaTachometerAlt /> },
  { name: "Live Sensors", icon: <FaCar /> },
  { name: "Alerts", icon: <FaBell /> },
  { name: "Maintenance", icon: <FaTools /> },
  { name: "History", icon: <FaHistory /> },
  { name: "Settings", icon: <FaCog /> },
];

function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-slate-700">
  <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    DriveSense AI
  </h1>

  <p className="text-gray-400 text-sm mt-1">
    Edge Vehicle Monitoring
  </p>
</div>

      {/* Menu */}
      <nav className="flex-1 mt-6">
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-4 hover:bg-slate-800 cursor-pointer transition-all duration-300"
          >
            <span className="text-lg">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;