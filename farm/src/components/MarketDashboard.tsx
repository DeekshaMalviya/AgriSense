import React from 'react';
import { TrendingUp, Package, BarChart } from 'lucide-react';
import { CropList } from './CropList';
import { MarketTrends } from './MarketTrends';
import { RegionalInsights } from './RegionalInsights';

export function MarketDashboard() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-green-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Market Activity</h3>
              <p className="text-gray-500">12% increase today</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <Package className="h-8 w-8 text-blue-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Active Listings</h3>
              <p className="text-gray-500">234 crops available</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex items-center">
            <BarChart className="h-8 w-8 text-purple-600" />
            <div className="ml-4">
              <h3 className="text-lg font-medium">Demand Index</h3>
              <p className="text-gray-500">High demand period</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CropList />
        </div>
        <div className="space-y-8">
          <MarketTrends />
          <RegionalInsights />
        </div>
      </div>
    </div>
  );
}