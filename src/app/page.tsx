import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MenuCatalog from '@/components/MenuCatalog';
import PromoSection from '@/components/PromoSection';
import DeliveryInfoSection from '@/components/DeliveryInfoSection';
import OrderForm from '@/components/OrderForm';
import ComplaintForm from '@/components/ComplaintForm';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FAF8F5]">
      {/* Header Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1">
        {/* 1. Profil Usaha (Hero Section) */}
        <HeroSection />

        {/* 2. Katalog Produk (6 Menu Pilihan) */}
        <MenuCatalog />

        {/* 3. Promo & Program Loyalitas */}
        <PromoSection />

        {/* 4. Informasi Pengiriman & Pengambilan */}
        <DeliveryInfoSection />

        {/* 5. Formulir Pemesanan & Reservasi (Google Form Tersemat) */}
        <OrderForm />

        {/* 6. Formulir Perubahan Pesanan atau Keluhan (Google Form Tersemat) */}
        <ComplaintForm />
      </main>

      {/* 7. Tombol Melayang WhatsApp */}
      <FloatingWhatsApp />

      {/* 8. Footer */}
      <Footer />
    </div>
  );
}
