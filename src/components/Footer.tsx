'use client';

import React from 'react';

export default function Footer() {
  const waUrl =
    'https://wa.me/6289529828306?text=Halo%20Rey%20Catering,%20saya%20ingin%20bertanya%20mengenai%20paket%20katering.';

  return (
    <footer className="border-t border-stone-200/60 bg-[#FAF7F2] text-stone-600 py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-stone-200/60">
          <div className="space-y-1">
            <span className="font-serif text-2xl font-normal text-stone-900 block">
              Rey Catering
            </span>
            <p className="text-xs italic text-stone-500 font-light">
              &ldquo;Harga Murah, Kualitas Mewah&rdquo;
            </p>
            <p className="text-xs text-stone-400 font-light pt-1">
              Kp. Babakan Kalapa RT03 RW 07, Desa Pataruman, Kec. Tarogong Kidul, Garut
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest font-medium text-stone-500">
            <a href="#katalog" className="hover:text-stone-900 transition-colors">
              Menu
            </a>
            <a href="#promo" className="hover:text-stone-900 transition-colors">
              Promo
            </a>
            <a href="#pengiriman" className="hover:text-stone-900 transition-colors">
              Pengiriman
            </a>
            <a href="#pesan" className="hover:text-stone-900 transition-colors">
              Pemesanan
            </a>
            <a href="#keluhan" className="hover:text-stone-900 transition-colors">
              Keluhan
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-stone-400 font-light">
          <p>&copy; {new Date().getFullYear()} Rey Catering. Seluruh hak cipta dilindungi.</p>
          <p>Katering Rumahan Terpercaya di Garut</p>
        </div>
      </div>
    </footer>
  );
}
