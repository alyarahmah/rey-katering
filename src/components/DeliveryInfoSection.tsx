'use client';

import React from 'react';
import { Truck, Store } from 'lucide-react';

export default function DeliveryInfoSection() {
  return (
    <section id="pengiriman" className="py-24 border-t border-stone-200/60">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-[0.2em] text-amber-800/80 font-semibold block">
            Kenyamanan Anda
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-normal text-stone-900 tracking-tight">
            Pengiriman & Pengambilan
          </h2>
          <p className="text-stone-500 text-sm font-light">
            Dua opsi penerimaan hidangan yang fleksibel dan tepat waktu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Delivery Card */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/80 hover:border-stone-400 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900">
                Pengiriman (Delivery)
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed font-light">
                Pesanan diantar langsung ke lokasi acara sesuai jadwal yang disepakati bersama.
                Melayani seluruh wilayah Garut dan sekitarnya dengan hidangan yang tetap hangat dan tertata rapi.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] text-stone-400">
              Area: Tarogong, Garut Kota, Samarang, Banyuresmi, & sekitarnya
            </div>
          </div>

          {/* Pick-Up Card */}
          <div className="bg-white rounded-2xl p-8 border border-stone-200/80 hover:border-stone-400 transition-colors flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-700">
                <Store className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-stone-900">
                Pengambilan (Pick-Up)
              </h3>
              <p className="text-xs text-stone-500 leading-relaxed font-light">
                Pesanan dapat diambil langsung di dapur Rey Catering sesuai jam yang telah ditentukan
                tanpa biaya tambahan.
              </p>
            </div>
            <div className="pt-6 mt-6 border-t border-stone-100 text-[11px] text-stone-400">
              Lokasi: Kp. Babakan Kalapa RT03 RW 07, Tarogong Kidul
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
