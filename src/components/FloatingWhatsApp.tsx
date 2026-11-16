'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function FloatingWhatsApp() {
  const waUrl =
    'https://wa.me/6281223707322?text=Halo%20Rey%20Catering,%20saya%20ingin%20bertanya%20mengenai%20paket%20katering.%20Mohon%20informasi%20pilihan%20menu,%20harga,%20dan%20ketersediaan%20jadwal%20untuk%20acara%20saya.';

  return (
    <aside aria-label="Kontak WhatsApp" className="fixed bottom-6 right-6 z-40">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Tanya via WhatsApp"
        title="Tanya Rey Catering via WhatsApp"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-stone-900 text-white flex items-center justify-center shadow-lg hover:bg-stone-800 hover:scale-105 active:scale-95 transition-all duration-200"
      >
        <MessageCircle className="w-6 h-6 fill-white" />
      </a>
    </aside>
  );
}
