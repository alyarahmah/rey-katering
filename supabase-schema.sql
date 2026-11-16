-- ==============================================================================
-- REY CATERING - SUPABASE DATABASE SCHEMA
-- "Harga Murah, Kualitas Mewah"
-- ==============================================================================

-- 1. Buat Tabel `orders` (Pemesanan Katering)
CREATE TABLE IF NOT EXISTS public.orders (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    product_choice TEXT NOT NULL,
    quantity INTEGER NOT NULL CHECK (quantity > 0),
    event_date DATE NOT NULL,
    delivery_method TEXT NOT NULL CHECK (delivery_method IN ('Pengiriman', 'Pengambilan')),
    notes TEXT,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index untuk performa sorting pesanan terbaru
CREATE INDEX IF NOT EXISTS idx_orders_created_at ON public.orders (created_at DESC);
CREATE INDEX IF NOT EXISTS idx_orders_event_date ON public.orders (event_date ASC);

-- 2. Buat Tabel `complaints` (Perubahan Pesanan & Keluhan Pelanggan)
CREATE TABLE IF NOT EXISTS public.complaints (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    customer_name TEXT NOT NULL,
    whatsapp TEXT NOT NULL,
    request_type TEXT NOT NULL CHECK (request_type IN ('Perubahan Pesanan', 'Keluhan')),
    description TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Index untuk performa sorting keluhan/perubahan terbaru
CREATE INDEX IF NOT EXISTS idx_complaints_created_at ON public.complaints (created_at DESC);

-- ==============================================================================
-- KEBIJAKAN KEAMANAN (Row Level Security / RLS)
-- Mengizinkan pengunjung mengisi form (INSERT) & admin membaca data (SELECT)
-- tanpa sistem login / autentikasi.
-- ==============================================================================

-- Aktifkan RLS pada tabel orders
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can insert orders" ON public.orders;
CREATE POLICY "Public can insert orders" 
ON public.orders 
FOR INSERT 
TO public, anon, authenticated 
WITH CHECK (true);

DROP POLICY IF EXISTS "Public can view orders" ON public.orders;
CREATE POLICY "Public can view orders" 
ON public.orders 
FOR SELECT 
TO public, anon, authenticated 
USING (true);

DROP POLICY IF EXISTS "Public can delete orders" ON public.orders;
CREATE POLICY "Public can delete orders" 
ON public.orders 
FOR DELETE 
TO public, anon, authenticated 
USING (true);

-- Aktifkan RLS pada tabel complaints
ALTER TABLE public.complaints ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Public can insert complaints" ON public.complaints;
CREATE POLICY "Public can insert complaints" 
ON public.complaints 
FOR INSERT 
TO public, anon, authenticated 
WITH CHECK (true);

DROP POLICY IF EXISTS "Public can view complaints" ON public.complaints;
CREATE POLICY "Public can view complaints" 
ON public.complaints 
FOR SELECT 
TO public, anon, authenticated 
USING (true);

DROP POLICY IF EXISTS "Public can delete complaints" ON public.complaints;
CREATE POLICY "Public can delete complaints" 
ON public.complaints 
FOR DELETE 
TO public, anon, authenticated 
USING (true);

-- ==============================================================================
-- DUMMY SEED DATA (Opsional - untuk demo / pengujian awal)
-- ==============================================================================
INSERT INTO public.orders (customer_name, whatsapp, product_choice, quantity, event_date, delivery_method, notes)
VALUES 
('Ibu Ratna Sari', '081234567890', 'Paket Buffet 2 (Rp45.000/pack)', 80, CURRENT_DATE + INTERVAL '5 days', 'Pengiriman', 'Acara syukuran khitanan di Jl. Cimanuk. Mohon tiba pukul 10.30 WIB.'),
('Bpk. Hendra Wijaya', '085712349988', 'Paket Buffet 4 (Rp60.000/pack)', 150, CURRENT_DATE + INTERVAL '12 days', 'Pengiriman', 'Resepsi pernikahan. Tambahkan porsi kerupuk.'),
('Teh Gina Maulani', '089678123456', 'Paket Stall & Dessert (Mulai Rp10.000)', 100, CURRENT_DATE + INTERVAL '2 days', 'Pengambilan', 'Pilihan: Dimsum 50 porsi & Es Goyobod 50 porsi. Diambil jam 14.00 WIB.');

INSERT INTO public.complaints (customer_name, whatsapp, request_type, description)
VALUES 
('Ibu Ratna Sari', '081234567890', 'Perubahan Pesanan', 'Mohon ubah jumlah porsi dari 80 pack menjadi 100 pack karena ada tambahan tamu keluarga.'),
('Bpk. Asep Kurnia', '082199887766', 'Keluhan', 'Mohon konfirmasi waktu pengiriman untuk pesanan kemarin, belum ada update via WhatsApp.');
