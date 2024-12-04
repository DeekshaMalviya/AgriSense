import React from 'react';
import { Navigation } from './components/Navigation';
import { MarketDashboard } from './components/MarketDashboard';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      <MarketDashboard />
    </div>
  );
}

export default App;