'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { CATALOG_ITEMS } from '@/lib/catalog-data';
import { ArrowRight } from 'lucide-react';

export default function MenuCatalog() {
  const [filter, setFilter] = useState<'all' | 'buffet' | 'ala-carte'>('all');

  const filteredItems = CATALOG_ITEMS.filter((item) => {
    if (filter === 'buffet') return item.id.startsWith('buffet');
    if (filter === 'ala-carte') return !item.id.startsWith('buffet');
    return true;
  });

  const handleOrderClick = () => {
    const orderSection = document.getElementById('pesan');
    if (orderSection) {
      orderSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="katalog" className="py-24 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Minimalist Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-2">
            <span className="text-xs uppercase tracking-[0.2em] text-amber-800/80 font-semibold block">
              Pilihan Sajian
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
              Katalog Menu
            </h2>
            <p className="text-stone-500 text-sm max-w-md font-light">
              Diracik higienis dari resep rumahan untuk melengkapi momen spesial Anda.
            </p>
          </div>

          {/* Clean minimal filter tabs */}
          <div className="flex items-center gap-1 bg-stone-100 p-1 rounded-full text-xs self-start md:self-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                filter === 'all'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Semua
            </button>
            <button
              onClick={() => setFilter('buffet')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                filter === 'buffet'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Buffet
            </button>
            <button
              onClick={() => setFilter('ala-carte')}
              className={`px-3.5 py-1.5 rounded-full transition-all ${
                filter === 'ala-carte'
                  ? 'bg-white text-stone-900 shadow-xs font-semibold'
                  : 'text-stone-500 hover:text-stone-900'
              }`}
            >
              Lauk & Stall
            </button>
          </div>
        </div>

        {/* Minimalist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-2xl overflow-hidden border border-stone-200/70 hover:border-stone-400/80 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo */}
                <div className="relative aspect-[16/11] w-full overflow-hidden bg-stone-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Info */}
                <div className="p-6 space-y-3">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-serif text-lg font-semibold text-stone-900">
                      {item.name}
                    </h3>
                    <span className="text-sm font-semibold text-amber-800 whitespace-nowrap">
                      {item.priceLabel}
                      <span className="text-stone-400 font-normal text-xs">/{item.unit}</span>
                    </span>
                  </div>

                  <p className="text-xs text-stone-500 leading-relaxed font-light">
                    {item.description}
                  </p>

                  {/* Clean list of items */}
                  <div className="pt-3 border-t border-stone-100">
                    <p className="text-[11px] text-stone-600 leading-relaxed">
                      <span className="font-semibold text-stone-700">Menu: </span>
                      {item.items.join(' • ')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-6 pt-0">
                <button
                  type="button"
                  onClick={handleOrderClick}
                  className="w-full py-2.5 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold text-stone-800 bg-stone-50 hover:bg-stone-900 hover:text-white border border-stone-200 hover:border-stone-900 transition-all flex items-center justify-center gap-1.5"
                >
                  <span>Pesan Sekarang</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
