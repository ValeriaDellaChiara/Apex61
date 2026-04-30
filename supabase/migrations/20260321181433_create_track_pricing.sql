/*
  # Create Track Pricing Table

  1. New Tables
    - `track_pricing`
      - `id` (uuid, primary key)
      - `track_id` (text, unique identifier for track)
      - `track_name` (text, display name)
      - `individual_price` (numeric, price per person for one-to-one courses)
      - `group_price` (numeric, price per person for group courses)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on `track_pricing` table
    - Create policy for public read access (pricing is public information)
    - No write access needed for frontend

  3. Initial Data
    - Insert pricing for all 6 tracks (Misano, Magione, Pomposa, Mugello, Cremona, Vallelunga)
    - All tracks start with €450 individual and €220 group pricing
    - Prices can be updated independently per track via Supabase console
*/

CREATE TABLE IF NOT EXISTS track_pricing (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  track_id VARCHAR(50) UNIQUE NOT NULL,
  track_name VARCHAR(100) NOT NULL,
  individual_price NUMERIC(10, 2) NOT NULL,
  group_price NUMERIC(10, 2) NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now() 
);

ALTER TABLE track_pricing ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access to track pricing"
  ON track_pricing
  FOR SELECT
  USING (true);

DELETE FROM track_pricing WHERE track_id IN ('misano', 'magione', 'pomposa', 'mugello', 'cremona','vallelunga');

INSERT INTO track_pricing (track_id, track_name, individual_price, group_price) VALUES
  ('misano', '', 850.00, 500.00),
  ('magione', 'Magione', 700.00, 450.00),
  ('pomposa', 'Pomposa', 850.00, 450.00),
  ('mugello', 'Mugello', 1000.00, 500.00),
  ('cremona', 'Cremona', 450.00, 250.00),
  ('vallelunga', 'Vallelunga', 800.00, 450.00)
