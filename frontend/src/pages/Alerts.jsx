import PageHeader from "../components/common/PageHeader";

function Alerts() {
  return (
    <div>

      <PageHeader
        title="Vehicle Alerts"
        subtitle="Monitor active alerts and AI detected vehicle issues."
      />

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center">

        <h2 className="text-2xl font-bold text-white">
          🚨 No Alerts Yet
        </h2>

        <p className="text-slate-400 mt-3">
          Active alerts will appear here when abnormal vehicle conditions are detected.
        </p>

      </div>

    </div>
  );
}

export default Alerts;