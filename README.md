# Blokland

Telefonda va kompyuterda brauzer orqali o'ynaladigan blokli (voksel) sandbox o'yini prototipi. O'yinchi orolni o'rganadi, bloklarni qazadi, ularni yig'adi va o'z uyini quradi.

O'yin to'liq original: bloklar, teksturalar, hayvonlar va ovozlar kod ichida noldan chiziladi, boshqa o'yinlarning aktivlari ishlatilmagan.

## Imkoniyatlar

- 128 × 128 blokli protsedural orol: o'tloqlar, o'rmonlar, qumli qirg'oqlar, qorli tog'lar, ko'llar va okean
- 13 xil blok: o'tli tuproq, tuproq, tosh, qum, yog'och, barg, taxta, suv, qor, g'isht, ko'mir rudasi, shag'al tosh, shisha
- Ikki rejim: **Omon qolish** (bloklarni qazib yig'asiz) va **Ijodiy** (cheksiz bloklar, uchish)
- Kun va tun sikli (6 daqiqa), quyosh, oy, yulduzlar va bulutlar
- Orolda yuradigan hayvonlar (qo'zi va echki)
- O'yin brauzerda avtomatik saqlanadi

## Boshqaruv

| Telefon | Kompyuter | Amal |
| --- | --- | --- |
| Ekranning chap tomonida suring | W A S D | Yurish |
| O'ng tomonda suring | Sichqoncha | Atrofga qarash |
| ▲ tugmasi | Probel | Sakrash (suvda suzish) |
| Bir marta bosing | O'ng tugma | Blok qo'yish |
| Bosib turing | Chap tugmani ushlab turing | Blokni qazish |
| Pastki paneldan tanlang | 1–9 yoki g'ildirak | Blok tanlash |
| "Uchish" tugmasi (ijodiy) | F | Uchish |

## Ishga tushirish

Hech narsa o'rnatish shart emas. `index.html` faylini brauzerda oching yoki GitHub Pages'ni yoqing:

1. Repo sahifasida **Settings → Pages** bo'limiga o'ting.
2. **Source** qatorida "Deploy from a branch", branch sifatida `main` va `/ (root)` ni tanlang.
3. Bir-ikki daqiqadan keyin o'yin `https://inomjon92.github.io/Blockland/` manzilida ochiladi.

## Android ilovasi (APK)

Har safar `main` branchga o'zgarish yuklanganda GitHub o'yinni avtomatik ravishda Android ilovasiga (APK) yig'adi.

1. Repo sahifasida **Actions** bo'limiga o'ting va eng so'nggi yashil belgili **Android APK** jarayonini oching.
2. Sahifa pastidagi **Artifacts** qismidan **blokland-apk** ni yuklab oling. Bu ZIP fayl, ichida `app-debug.apk` bor.
3. Telefonda ZIP'ni oching va `app-debug.apk` ni o'rnating. Telefon "noma'lum manbalardan o'rnatish"ga ruxsat so'rasa, ruxsat bering.

Bu sinov (debug) versiyasi. Google Play'ga joylash uchun keyinchalik imzolangan reliz versiyasi kerak bo'ladi.

## Texnologiyalar

- [three.js](https://threejs.org/) r149 (WebGL), repoga qo'shilgan, internetsiz ham ishlaydi
- Toza JavaScript, bitta HTML fayl
- [Capacitor](https://capacitorjs.com/) — o'yinni Android ilovasiga o'rash uchun

## Keyingi qadamlar

To'liq loyiha rejasi texnik topshiriqda: [docs/texnik-topshiriq.md](docs/texnik-topshiriq.md).
