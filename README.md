## Adım 1 

kurulum için ilk kodumuzu terminale yazıyoruz

[`npx create-next-app myproject --use-npm`]
bu kod ile myproject ismi ile bir klasör 
oluşturup içine gerekli dosyaları atıyor.

tabi istersek mevcut bir klasörün içindeyken 
o klasöre kursun diye proje ismi yerine . nokta
koyarak da direk o ortama kurulum yapabiliriz.
[`npx create-next-app . --use-npm`]

öncelikle çalıştırmamız gereke kod
[`npm run dev`]



## HAYDİ BAŞLAYALIM

İlk olarak development server başlatalım :

```bash
npm run dev
# yada 
yarn dev
```

Sonucu görmek için [http://localhost:3000](http://localhost:3000) adresini tarayıcımızda görüntüleyelim.

Ekranımızı güncellemeye `pages/index.js` sayfası içeriğini editleyerek başlayabiliriz. Siz editleme yaptığınızda, değişiklikleriniz ekranda otomatik olarak görüntülenecektir.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Next.JS ?

Next.JS hakkında Daha Fazla Bilgi Edinmek İçin Aşağıdaki Kaynaklara gGöz Atmanızda Fayda Var :

- [Next.js Dökümantasyonu](https://nextjs.org/docs) - Next.js özellikleri ve API si hakkında bilgi edinin.
- [Next.js öğren](https://nextjs.org/learn) - interaktif bir Next.js dersi.



