import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import NAVIGATION from "../../constants/navigation";

function Sidebar() {
  return (
    <aside className="w-72 min-h-screen bg-slate-950 border-r border-slate-800 flex flex-col">
      {/* Logo */}
      <div className="p-8 border-b border-slate-800">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          DriveSense AI
        </h1>

        <p className="text-slate-400 mt-2 text-sm">
          Intelligent Vehicle Command Center
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-2">
        {NAVIGATION.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `block rounded-xl transition-all ${
                  isActive
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500"
                    : "text-slate-300 hover:bg-slate-900"
                }`
              }
            >
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 p-4"
              >
                <Icon size={22} />
                <span className="font-medium">{item.name}</span>
              </motion.div>
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-6 border-t border-slate-800">
        <div className="rounded-xl bg-slate-900 p-4">
          <p className="text-sm text-slate-400">Vehicle Status</p>

          <p className="mt-2 text-green-400 font-semibold">
            ● All Systems Normal
          </p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;