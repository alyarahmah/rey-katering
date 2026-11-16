'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { MessageCircle, Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Menu', href: '#katalog' },
    { name: 'Promo', href: '#promo' },
    { name: 'Pengiriman', href: '#pengiriman' },
    { name: 'Pesan', href: '#pesan' },
    { name: 'Keluhan', href: '#keluhan' },
  ];

  const waHref =
    'https://wa.me/6281223707322?text=Halo%20Rey%20Catering,%20saya%20ingin%20bertanya%20mengenai%20paket%20katering.%20Mohon%20informasi%20pilihan%20menu,%20harga,%20dan%20ketersediaan%20jadwal%20untuk%20acara%20saya.';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FCFAF6]/90 backdrop-blur-md border-b border-stone-200/60 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <Link href="#profil" className="group">
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 group-hover:text-amber-800 transition-colors">
              Rey Catering
            </span>
            <span className="block text-[11px] tracking-widest uppercase text-amber-700/80 font-medium">
              Harga Murah, Kualitas Mewah
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-xs uppercase tracking-widest font-medium text-stone-600 hover:text-stone-900 transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 hover:bg-stone-800 rounded-full transition-all"
            >
              <span>WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-400" />
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center gap-3 md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-800"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FCFAF6] border-b border-stone-200 px-6 py-6 space-y-4">
          <div className="space-y-3">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm uppercase tracking-wider font-medium text-stone-800 hover:text-amber-800"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-stone-200 flex items-center justify-between">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 text-xs uppercase tracking-wider font-semibold text-white bg-stone-900 rounded-full"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat WhatsApp</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
