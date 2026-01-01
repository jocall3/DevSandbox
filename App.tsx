import React from 'react';
import WrappedSandboxView from './components/SandboxView';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans selection:bg-cyan-500 selection:text-white">
      <main className="p-4 md:p-8 max-w-7xl mx-auto">
        <WrappedSandboxView />
      </main>
    </div>
  );
};

export default App;