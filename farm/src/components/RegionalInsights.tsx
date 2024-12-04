import React from 'react';
import { MapPin } from 'lucide-react';

export function RegionalInsights() {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-bold mb-4">Regional Insights</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-green-600 mt-1" />
          <div className="ml-3">
            <p className="font-medium">Punjab</p>
            <p className="text-sm text-gray-500">
              Wheat production up 15% from last season
            </p>
          </div>
        </div>
        <div className="flex items-start">
          <MapPin className="w-5 h-5 text-blue-600 mt-1" />
          <div className="ml-3">
            <p className="font-medium">Haryana</p>
            <p className="text-sm text-gray-500">
              Rice demand expected to increase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}