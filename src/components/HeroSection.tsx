'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowDown, MapPin, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const waHref =
    'https://wa.me/6289529828306?text=Halo%20Rey%20Catering,%20saya%20ingin%20konsultasi%20menu%20dan%20jadwal%20acara.';

  return (
    <section
      id="profil"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Minimalist Editorial Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.2em] text-amber-800/80 font-semibold block">
                Katering Rumahan Garut
              </span>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-stone-900 tracking-tight leading-[1.1]">
                Rey Catering
              </h1>
              <p className="font-serif italic text-xl sm:text-2xl text-stone-600 font-normal">
                &ldquo;Harga Murah, Kualitas Mewah&rdquo;
              </p>
            </div>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed max-w-lg font-light">
              Penyedia jasa katering rumahan yang melayani berbagai acara keluarga,
              rapat kantor, hingga hajatan dengan pilihan menu beragam, bercitarasa lezat,
              dan terjamin higienis.
            </p>

            {/* Address */}
            <div className="flex items-center gap-2 text-xs text-stone-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              <span>Kp. Babakan Kalapa RT03 RW 07, Desa Pataruman, Kec. Tarogong Kidul</span>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href="#katalog"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-full transition-all"
              >
                <span>Lihat Menu</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>

              <a
                href="#pesan"
                className="inline-flex items-center px-5 py-3 text-xs uppercase tracking-wider font-medium text-stone-600 hover:text-stone-900 border border-stone-300 hover:border-stone-900 rounded-full transition-all"
              >
                Pesan Sekarang
              </a>
            </div>
          </div>

          {/* Right Column: Clean Photographic Frame */}
          <div className="lg:col-span-6">
            <div className="relative aspect-[4/3] sm:aspect-[5/4] w-full rounded-2xl overflow-hidden bg-stone-100 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=85"
                alt="Hidangan Katering Rey Catering Garut"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
