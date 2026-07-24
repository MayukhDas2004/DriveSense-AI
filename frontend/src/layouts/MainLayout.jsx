import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";
import HealthScoreCard from "../components/dashboard/HealthScoreCard";
import Dashboard from "../pages/Dashboard";

function MainLayout() {
  return (
    <div className="flex min-h-screen bg-slate-950">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Navbar */}
        <Navbar />

        {/* Dashboard Content */}
        <main className="flex-1 p-8 overflow-y-auto">
  <Dashboard />
</main>

      </div>
    </div>
  );
}

export default MainLayout;