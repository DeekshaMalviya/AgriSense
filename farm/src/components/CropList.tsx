import React from 'react';
import { Crop } from '../types';

const sampleCrops: Crop[] = [
  {
    id: '1',
    name: 'Organic Wheat',
    basePrice: 280,
    currentPrice: 295,
    quantity: 1000,
    unit: 'kg',
    farmerId: 'f1',
    region: 'Punjab',
    sustainabilityScore: 4.5,
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    name: 'Basmati Rice',
    basePrice: 350,
    currentPrice: 365,
    quantity: 500,
    unit: 'kg',
    farmerId: 'f2',
    region: 'Haryana',
    sustainabilityScore: 4.2,
    imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80'
  }
];

export function CropList() {
  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Available Crops</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sampleCrops.map((crop) => (
            <div key={crop.id} className="border rounded-lg overflow-hidden">
              <img 
                src={crop.imageUrl} 
                alt={crop.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{crop.name}</h3>
                <div className="mt-2 space-y-2">
                  <p className="text-gray-600">Region: {crop.region}</p>
                  <p className="text-gray-600">Quantity: {crop.quantity} {crop.unit}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-green-600 font-medium">
                      ₹{crop.currentPrice}/{crop.unit}
                    </span>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700">
                      Purchase
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}