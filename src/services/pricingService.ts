import { supabase } from '../lib/supabase';
import { TrackPricing } from '../types/pricing';

const CACHE_TTL = 5 * 60 * 1000;
const FALLBACK_PRICES = {
  individual: 450,
  group: 220
};

let priceCache: Map<string, TrackPricing> | null = null;
let cacheExpires = 0;

export const pricingService = {
  async fetchAllPrices(): Promise<Map<string, TrackPricing>> {
    const now = Date.now();

    if (priceCache && now < cacheExpires) {
      return priceCache;
    }

    try {
      const { data, error } = await supabase
        .from('track_pricing')
        .select('*');

      if (error) {
        console.warn('Database offline o errore di connessione. Utilizzo fallback locali.');
        return new Map();
      }

      priceCache = new Map();
      if (data && data.length > 0) {
        (data as TrackPricing[]).forEach((pricing) => {
          priceCache!.set(pricing.track_id, pricing);
        });
      }

      cacheExpires = now + CACHE_TTL;
      return priceCache;
    } catch (error) {
      return new Map();
    }
  },

  getPriceByTrackId(trackId: string, prices: Map<string, TrackPricing>) {
    const pricing = prices.get(trackId);

    if (pricing) {
      return {
        individual: pricing.individual_price,
        group: pricing.group_price
      };
    }

    return FALLBACK_PRICES;
  },

  clearCache() {
    priceCache = null;
    cacheExpires = 0;
  }
};
