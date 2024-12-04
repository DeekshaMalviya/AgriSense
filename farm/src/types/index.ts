export interface Crop {
  id: string;
  name: string;
  basePrice: number;
  currentPrice: number;
  quantity: number;
  unit: string;
  farmerId: string;
  region: string;
  sustainabilityScore: number;
  imageUrl: string;
}

export interface MarketTrend {
  cropId: string;
  demandScore: number;
  priceHistory: number[];
  predictedDemand: number;
  regionalImpact: number;
}

export interface FarmerProfile {
  id: string;
  name: string;
  region: string;
  sustainabilityBadges: string[];
  crops: Crop[];
  rating: number;
}