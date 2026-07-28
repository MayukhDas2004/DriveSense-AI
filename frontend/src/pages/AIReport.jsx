import PageHeader from "../components/common/PageHeader";
import ScoreCards from "../components/aiReport/ScoreCards";
import DiagnosisSummary from "../components/aiReport/DiagnosisSummary";
import FailureProbability from "../components/aiReport/FailureProbability";
import MaintenanceTimeline from "../components/aiReport/MaintenanceTimeline";

function AIReport() {
  return (
    <div className="space-y-8">

      <PageHeader
        title="AI Vehicle Report"
        subtitle="Comprehensive AI-generated diagnostics and predictive maintenance analysis."
      />
<ScoreCards />
<DiagnosisSummary />
<FailureProbability />
<MaintenanceTimeline />
    </div>
  );
}

export default AIReport;