# 🍽️ Rey Catering - Website Usaha & Pemesanan Katering Rumahan

> **Slogan:** *"Harga Murah, Kualitas Mewah"*  
> **Lokasi Dapur:** Kp. Babakan Kalapa RT03 RW 07, Desa Pataruman, Kec. Tarogong Kidul, Garut, Jawa Barat  
> **Kontak WhatsApp:** [0812-2370-7322](https://wa.me/6281223707322)

Website resmi **Rey Catering** dengan konsep **minimalis, elegan, dan siap pakai**. Dibangun menggunakan **Next.js (App Router)** dan **Tailwind CSS**, terintegrasi langsung dengan **Google Forms** untuk menampung seluruh formulir pemesanan dan keluhan tanpa memerlukan database atau pengaturan server yang rumit.

---

## 📋 Integrasi Google Form

Seluruh data masuk otomatis ditampung ke dalam Google Form & Google Sheets:

1. **Formulir Pemesanan & Reservasi Katering:**  
   [Buka Google Form Reservasi](https://docs.google.com/forms/d/e/1FAIpQLScv0K9qq01i81ERh9zTp9Iq2CecyWCzdA9zODVQktGw-nhT1Q/viewform)
   - Tersemat langsung di halaman utama pada bagian `#pesan`.

2. **Formulir Perubahan Pesanan & Keluhan Pelanggan:**  
   [Buka Google Form Keluhan](https://docs.google.com/forms/d/e/1FAIpQLSdTs8HDMso-HunZ-RXv2ODOVT2WMbtWpzGXjnHOHD_WCKq8Fg/viewform)
   - Tersemat langsung di halaman utama pada bagian `#keluhan`.

---

## ✨ Fitur Halaman Utama

1. **Profil Usaha (Hero Section):**
   - Menampilkan identitas **Rey Catering**, slogan *"Harga Murah, Kualitas Mewah"*, alamat di Tarogong Kidul Garut, dan tombol langsung ke Katalog Menu & Reservasi.

2. **Katalog Produk (6 Pilihan Menu):**
   - **Paket Buffet 1** – Rp35.000/pack
   - **Paket Buffet 2** – Rp45.000/pack
   - **Paket Buffet 3** – Rp50.000/pack
   - **Paket Buffet 4** – Rp60.000/pack
   - **Menu Pilihan Lauk & Sayur** – Mulai Rp15.000/porsi
   - **Paket Stall & Dessert** – Mulai Rp10.000/porsi
   - Tombol **"Pesan Sekarang"** otomatis mengarahkan layar bergulir mulus ke formulir Google Form.

3. **Promo & Program Loyalitas:**
   - 3 kartu promo: Diskon 10% Repeat Order, Gratis 1 Stall min. 100 pack, dan Voucher Rp100.000 Referral.

4. **Informasi Pengiriman & Pengambilan:**
   - **Delivery:** Pengantaran langsung ke lokasi acara se-Kabupaten Garut & sekitarnya.
   - **Pick-Up:** Pengambilan mandiri di dapur Kp. Babakan Kalapa, Tarogong Kidul.

5. **Formulir Pemesanan & Keluhan Tersemat:**
   - Kedua Google Form disisipkan secara mulus (*responsive iframe*) dengan opsi tombol cepat buka di tab baru dan konsultasi WhatsApp.

6. **Tombol Melayang WhatsApp:**
   - Tersemat di pojok kanan bawah langsung menuju WhatsApp `081223707322`.

---

## 💻 Menjalankan di Lokal & Deploy ke Vercel

### Menjalankan Server Lokal:
```bash
npm install
npm run dev
```
Buka browser di [http://localhost:3000](http://localhost:3000).

### Deploy ke Vercel (Zero-Config):
1. Push proyek ini ke GitHub / GitLab.
2. Buka [Vercel](https://vercel.com) → **Add New Project** → Import repo.
3. Klik **Deploy** langsung tanpa perlu mengatur Environment Variables!
