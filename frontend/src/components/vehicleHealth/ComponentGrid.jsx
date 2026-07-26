import {
  FaCar,
  FaBatteryFull,
  FaOilCan,
  FaCog,
  FaTachometerAlt,
} from "react-icons/fa";

import { GiCarWheel } from "react-icons/gi";

import ComponentCard from "./ComponentCard";

function ComponentGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

      <ComponentCard
        title="Engine"
        value={95}
        status="Excellent"
        icon={FaCog}
        color="text-cyan-400"
      />

      <ComponentCard
        title="Battery"
        value={91}
        status="Healthy"
        icon={FaBatteryFull}
        color="text-green-400"
      />

      <ComponentCard
        title="Tires"
        value={88}
        status="Good"
        icon={GiCarWheel}
        color="text-purple-400"
      />

      <ComponentCard
        title="Brakes"
        value={97}
        status="Excellent"
        icon={FaCar}
        color="text-red-400"
      />

      <ComponentCard
        title="Oil System"
        value={93}
        status="Healthy"
        icon={FaOilCan}
        color="text-orange-400"
      />

      <ComponentCard
        title="Transmission"
        value={90}
        status="Good"
        icon={FaTachometerAlt}
        color="text-blue-400"
      />

    </div>
  );
}

export default ComponentGrid;