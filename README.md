# 🎤 Rapkology

🔗 **Live Demo HOMEPAGE:** [rapkology.vercel.app](https://vercel.com/idil-tugbas-projects/rapkology)  
🔗 **BLOG:** [rapkology.vercel.app](https://vercel.com/idil-tugbas-projects/rapkology/blog)

---

## 🚀 Hydration ve Mimari Tercihleri

Ana sayfa ve Blog, Blog Detail sayfalarında ortak yapılar var. Blog ve Detail sayfasını SEO ve performans sebebiyle server component olarak geliştirdiğimde ana sayfada ortak kullandığım parçalardan dolayı ana sayfayı da Server side yapabilirdim ancak yine performans sebebiyle ana sayfayı client side bırakmayı tercih ettim. Ana sayfayada slider, filtreleme ve “daha fazla göster” gibi interaktif özellikler çok fazla. Bu yapılar state yönetimiyle daha esnek şekilde kontrol edilebiliyor.

⚡ Ana sayfa (Client ağırlıklı): Slider (Swiper) ve “daha fazla göster” gibi interaktif bileşenler yoğun olduğu için client component olarak kurgulandı. Server sadece başlangıç HTML’i üretir; tarayıcıda React ile hydration tamamlanınca slider kontrolleri ve buton etkileşimleri aktifleşir.

⚡ Blog ve Blog Detail (Server ağırlıklı): SEO ve performans öncelikli sayfalar olduğu için server component olarak geliştirildi. İçerikler doğrudan SSR/ISR ile render edilerek hızlı ve arama motoru dostu HTML üretildi.

⚡ Client adaları: Breadcrumbs, ShowAllLink gibi küçük interaktif bölgeler server page’lerin içine “ada” olarak gömüldü. Hydration sonrasında yalnızca bu alanlar JavaScript ile aktive oldu.

## 🚀 Özellikler

- ⚡ **Next.js 15 App Router**
- 🎨 **TailwindCSS**
- 📱 **Swiper Slider**
- 🔎 **Dynamic Routes** → `/blog/[slug]`
- 📝 **SEO Metadata** → `generateMetadata`
- ⏱ **ISR / Revalidate**
- ⚡ **Prettier**
- ☁️ **Vercel Deploy**

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
