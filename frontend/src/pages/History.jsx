import PageHeader from "../components/common/PageHeader";

function History() {
  return (
    <div>
      <PageHeader
        title="History"
        subtitle="View historical vehicle data and trends."
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

export default History;