# Wildan Portfolio

Portfolio produksi Wildan Firdaus untuk video editing, graphic design, motion graphics, advertising creative, AI content, dan karya YouTube.

**Production:** [wildanportfolio.site](https://wildanportfolio.site/)

## Fitur

- Galeri 65 koleksi proyek dengan filter kategori dan pemuatan bertahap.
- Folder proyek berisi galeri gambar atau video dengan modal responsif.
- Lightbox gambar dengan zoom, navigasi keyboard, mouse, dan sentuhan.
- Navigasi glassmorphism, animasi yang menghormati `prefers-reduced-motion`, serta fokus keyboard yang terlihat.
- Metadata Open Graph, Twitter Card, JSON-LD, sitemap, robots, dan halaman 404.
- Vanilla HTML, CSS, dan JavaScript tanpa proses build.

## Struktur utama

```text
├── index.html
├── portfolio-gallery.css
├── js/
│   ├── portfolio.js
│   └── lenis.min.js
├── assets/
├── 404.html
├── robots.txt
├── sitemap.xml
└── CNAME
```

## Menjalankan secara lokal

Gunakan server lokal agar perilakunya sama dengan produksi:

```powershell
node serve.js
```

Lalu buka alamat yang ditampilkan oleh server.

## Deployment

Situs diterbitkan melalui GitHub Pages dari branch `main`. File `CNAME` mempertahankan domain kustom `wildanportfolio.site`. Setiap push ke `main` memicu workflow Pages secara otomatis.

```powershell
git push origin main
```

Deployment tidak memerlukan build step atau platform hosting lain.
