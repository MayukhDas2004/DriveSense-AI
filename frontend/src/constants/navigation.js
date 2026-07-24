import {
  LayoutDashboard,
  Activity,
  HeartPulse,
  TriangleAlert,
  Wrench,
  History,
  Settings,
} from "lucide-react";

const NAVIGATION = [
  {
    id: 1,
    name: "Dashboard",
    icon: LayoutDashboard,
    path: "/",
  },
  {
    id: 2,
    name: "Live Sensors",
    icon: Activity,
    path: "/live-sensors",
  },
  {
    id: 3,
    name: "Vehicle Health",
    icon: HeartPulse,
    path: "/vehicle-health",
  },
  {
    id: 4,
    name: "Alerts",
    icon: TriangleAlert,
    path: "/alerts",
  },
  {
    id: 5,
    name: "Maintenance",
    icon: Wrench,
    path: "/maintenance",
  },
  {
    id: 6,
    name: "History",
    icon: History,
    path: "/history",
  },
  {
    id: 7,
    name: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default NAVIGATION;