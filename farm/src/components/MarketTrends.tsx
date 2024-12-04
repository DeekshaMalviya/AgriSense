import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export function MarketTrends() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Market Trends</h2>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Wheat</p>
            <p className="text-sm text-gray-500">High demand</p>
          </div>
          <div className="flex items-center text-green-600">
            <TrendingUp className="w-4 h-4 mr-1" />
            <span>+5.2%</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-medium">Rice</p>
            <p className="text-sm text-gray-500">Stable</p>
          </div>
          <div className="flex items-center text-red-600">
            <TrendingDown className="w-4 h-4 mr-1" />
            <span>-1.8%</span>
          </div>
        </div>
      </div>
    </div>
  );
}