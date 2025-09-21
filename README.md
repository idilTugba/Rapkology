# 🎤 Rapkology

Next.js 15, TailwindCSS ve Vercel üzerinde geliştirilmiştir.

🔗 **Live Demo HOMEPAGE:** [rapkology.vercel.app](https://vercel.com/idil-tugbas-projects/rapkology)  
🔗 **BLOG:** [rapkology.vercel.app](https://vercel.com/idil-tugbas-projects/rapkology/blog)

---

## 🚀 Özellikler

- ⚡ **Next.js 15 App Router** ile modern React mimarisi
- 🎨 **TailwindCSS** ile responsive ve hızlı tasarım
- 📱 **Swiper Slider** ile mobil uyumlu kaydırmalı bileşenler
- 🔎 **Dynamic Routes** → `/blog/[slug]` yapısı
- 📝 **SEO Metadata** → `generateMetadata` ile dinamik başlık & açıklamalar
- ⏱ **ISR / Revalidate** ile içerik önbellekleme ve otomatik yenileme
- ☁️ **Vercel Deploy** entegrasyonu

---

## 📂 Sayfalar

- `/` → Ana sayfa, trendler, slider ve öne çıkan içerikler
- `/blog` → Tüm blog yazılarının listelendiği sayfa
- `/blog/[slug]` → Dinamik blog detay sayfası

---

## 📂 Proje Yapısı

```bash
src/
 ├─ app/
 │   ├─ page.tsx             # Ana sayfa
 │   ├─ blog/page.tsx        # Blog listesi
 │   ├─ blog/[slug]/page.tsx # Blog detay sayfası
 │   └─ layout.tsx           # Root layout
 │
 ├─ components/              # UI bileşenleri (Header, Footer, Card vs.)
 ├─ lib/                     # API çağrıları, tipler, util fonksiyonlar
 ├─ hooks/                   # Custom React hook'lar
 └─ styles/                  # Global stiller


# 1. Repo'yu klonla
git clone https://github.com/idilTugba/rapkology.git
cd rapkology

# 2. Bağımlılıkları yükle
npm install

# 3. Geliştirme sunucusunu başlat
npm run dev

# 4. Tarayıcıda aç
http://localhost:3000
```
