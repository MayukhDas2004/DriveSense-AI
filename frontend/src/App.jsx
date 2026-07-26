import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Dashboard from "./pages/Dashboard";
import LiveSensors from "./pages/LiveSensors";
import VehicleHealth from "./pages/VehicleHealth";
import Alerts from "./pages/Alerts";
import Maintenance from "./pages/Maintenance";
import History from "./pages/History";
import Settings from "./pages/Settings";
import AIReport from "./pages/AIReport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="live-sensors" element={<LiveSensors />} />
          <Route path="vehicle-health" element={<VehicleHealth />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="maintenance" element={<Maintenance />} />
          <Route path="history" element={<History />} />
          <Route path="settings" element={<Settings />} />
          <Route path="ai-report" element={<AIReport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;