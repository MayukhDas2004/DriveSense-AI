import PageHeader from "../components/common/PageHeader";

function Maintenance() {
  return (
    <div>
      <PageHeader
        title="Maintenance"
        subtitle="Predictive maintenance schedules and recommendations."
      />

      <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8 text-center">
        <h2 className="text-2xl font-bold text-white">
          🚧 Coming Soon
        </h2>

        <p className="text-slate-400 mt-3">
          This module is under development.
        </p>
      </div>
    </div>
  );
}

export default Maintenance;