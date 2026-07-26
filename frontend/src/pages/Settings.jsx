import PageHeader from "../components/common/PageHeader";

function Settings() {
  return (
    <div>
      <PageHeader
        title="Settings"
        subtitle="Configure application  and vehicle preferences."
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

export default Settings;