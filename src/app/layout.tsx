import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Playfair_Display } from 'next/font/google';
import './globals.css';

const sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
});

const serif = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-serif',
});

export const metadata: Metadata = {
  title: 'Rey Catering — Harga Murah, Kualitas Mewah | Garut',
  description:
    'Layanan katering rumahan istimewa untuk pernikahan, rapat kantor, dan acara keluarga di Garut. "Harga Murah, Kualitas Mewah".',
  keywords: ['Rey Catering', 'Katering Garut', 'Catering Tarogong Kidul', 'Prasmanan Garut'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${sans.variable} ${serif.variable}`}>
      <body className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
