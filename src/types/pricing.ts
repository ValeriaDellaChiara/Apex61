export interface TrackPricing {
  id: string;
  track_id: string;
  track_name: string;
  individual_price: number;
  group_price: number;
  created_at: string;
  updated_at: string;
}

export interface PricingCache {
  data: Map<string, TrackPricing>;
  expiresAt: number;
}
