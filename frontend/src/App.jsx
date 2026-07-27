import { Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import LiveSensors from "./pages/LiveSensors";
import VehicleHealth from "./pages/VehicleHealth";
import Alerts from "./pages/Alerts";
import Maintenance from "./pages/Maintenance";
import History from "./pages/History";
import Settings from "./pages/Settings";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/live-sensors" element={<LiveSensors />} />
        <Route path="/vehicle-health" element={<VehicleHealth />} />
        <Route path="/alerts" element={<Alerts />} />
        <Route path="/maintenance" element={<Maintenance />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
      </Route>
    </Routes>
  );
}

export default App;