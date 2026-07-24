import { useEffect, useState } from "react";
import {
  Bell,
  Search,
  UserCircle2,
  Circle,
} from "lucide-react";

function Navbar() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      setTime(
        now.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="h-20 bg-slate-900 border-b border-slate-800 flex items-center justify-between px-8">

      {/* Left */}
      <div className="flex items-center gap-6">

        {/* Search */}
        <div className="hidden md:flex items-center bg-slate-800 rounded-xl px-4 py-2 w-80">

          <Search
            size={18}
            className="text-slate-400"
          />

          <input
            type="text"
            placeholder="Search vehicle..."
            className="bg-transparent outline-none text-white ml-3 w-full placeholder:text-slate-500"
          />
        </div>

      </div>

      {/* Right */}
      <div className="flex items-center gap-6">

        {/* Live Status */}
        <div className="hidden lg:flex items-center gap-2 text-green-400">

          <Circle
            size={10}
            fill="currentColor"
          />

          <span className="text-sm">
            Live
          </span>

        </div>

        {/* Time */}

        <div className="hidden md:block text-slate-300 font-medium">
          {time}
        </div>

        {/* Notification */}

        <button className="relative p-2 rounded-xl bg-slate-800 hover:bg-slate-700 transition">

          <Bell size={20} />

          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center">
            3
          </span>

        </button>

        {/* Profile */}

        <div className="flex items-center gap-3">

          <UserCircle2
            size={42}
            className="text-cyan-400"
          />

          <div>

            <p className="font-semibold text-white">
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