'use client';

import React from 'react';

export default function PromoSection() {
  const promos = [
    {
      title: 'Repeat Order',
      highlight: 'Diskon 10%',
      desc: 'Potongan harga langsung untuk pemesanan kedua dan seterusnya bagi pelanggan setia.',
    },
    {
      title: 'Pesanan Besar',
      highlight: 'Gratis 1 Stall',
      desc: 'Bonus 1 menu Stall/Dessert pilihan untuk pemesanan prasmanan minimal 100 pack.',
    },
    {
      title: 'Program Referral',
      highlight: 'Voucher Rp100.000',
      desc: 'Voucher potongan harga setiap kali merekomendasikan Rey Catering kepada rekan Anda.',
    },
  ];

  return (
    <section id="promo" className="py-24 border-t border-stone-200/60 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-800/80 font-semibold block">
            Apresiasi Pelanggan
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Penawaran Spesial
          </h2>
          <p className="text-stone-500 text-sm font-light">
            Benefit eksklusif untuk melengkapi kemeriahan acara Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 border border-stone-200/80 hover:border-stone-400 transition-colors space-y-3"
            >
              <span className="text-xs uppercase tracking-widest text-stone-400 font-medium block">
                {promo.title}
              </span>
              <div className="font-serif text-2xl font-normal text-stone-900">
                {promo.highlight}
              </div>
              <p className="text-xs text-stone-500 leading-relaxed font-light">
                {promo.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
