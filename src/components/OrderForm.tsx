'use client';

import React from 'react';
import { ExternalLink, MessageCircle } from 'lucide-react';

export default function OrderForm() {
  const googleFormEmbedUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLScv0K9qq01i81ERh9zTp9Iq2CecyWCzdA9zODVQktGw-nhT1Q/viewform?embedded=true';
  const googleFormDirectUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLScv0K9qq01i81ERh9zTp9Iq2CecyWCzdA9zODVQktGw-nhT1Q/viewform';
  const waUrl =
    'https://wa.me/6289529828306?text=Halo%20Rey%20Catering,%20saya%20ingin%20bertanya%20mengenai%20reservasi%20paket%20katering.';

  return (
    <section id="pesan" className="py-24 border-t border-stone-200/60 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-10 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-800/80 font-semibold block">
            Reservasi Acara
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Formulir Pemesanan
          </h2>
          <p className="text-stone-500 text-sm font-light">
            Silakan lengkapi formulir di bawah ini untuk memesan paket katering Rey Catering.
          </p>

          {/* Quick link button bar */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <a
              href={googleFormDirectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-stone-700 hover:text-stone-900 bg-white hover:bg-stone-50 px-4 py-2 rounded-full border border-stone-200/80 transition-all shadow-xs"
            >
              <span>Buka di Tab Baru</span>
              <ExternalLink className="w-3.5 h-3.5 text-stone-400" />
            </a>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 hover:bg-stone-800 px-4 py-2 rounded-full transition-all"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Tanya WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Embedded Google Form Card */}
        <div className="bg-white rounded-3xl border border-stone-200/80 shadow-xs overflow-hidden">
          <iframe
            src={googleFormEmbedUrl}
            width="100%"
            height="960"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Formulir Pemesanan Rey Catering"
            className="w-full"
          >
            Memuat formulir…
          </iframe>
        </div>
      </div>
    </section>
  );
}
