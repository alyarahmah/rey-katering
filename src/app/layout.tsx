import type { Metadata } from 'next';
import './globals.css';

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
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FAF8F5] text-stone-800 font-sans antialiased selection:bg-amber-100 selection:text-amber-900">
        {children}
      </body>
    </html>
  );
}
