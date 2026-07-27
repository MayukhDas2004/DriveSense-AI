function ConnectionStatus({ loading, error }) {
  if (loading) {
    return (
      <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500 text-yellow-400 px-4 py-2 rounded-lg">
        <span className="w-3 h-3 rounded-full bg-yellow-400 animate-pulse"></span>
        Connecting...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center gap-2 bg-red-500/10 border border-red-500 text-red-400 px-4 py-2 rounded-lg">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        Backend Disconnected
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-green-500/10 border border-green-500 text-green-400 px-4 py-2 rounded-lg">
      <span className="w-3 h-3 rounded-full bg-green-500"></span>
      Backend Connected
    </div>
  );
}

export default ConnectionStatus;