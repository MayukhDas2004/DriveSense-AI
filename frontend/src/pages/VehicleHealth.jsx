import PageHeader from "../components/common/PageHeader";
import HealthGauge from "../components/vehicleHealth/HealthGauge";
import HealthSummary from "../components/vehicleHealth/HealthSummary";
import ComponentGrid from "../components/vehicleHealth/ComponentGrid";
import MaintenanceRecommendation from "../components/vehicleHealth/MaintenanceRecommendation";


function VehicleHealth() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="Vehicle Health"
        subtitle="AI-powered overall vehicle diagnostics and health monitoring."
      />

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
  <HealthGauge />
  <HealthSummary />
</div>
<ComponentGrid />
<MaintenanceRecommendation />
    </div>
  );
}

export default VehicleHealth;