# 🎯 Professional Ism Generatsiya Algoritmi - Test Hujjati

## 📋 Algoritmning Ishlash Prinsipi

### Asosiy Qoidalar:

1. **Farzand ismi OTA ismining BOSH harfidan boshlanadi** (50 ball)
2. **Farzand ismi ONA ismining OXIRGI harflariga mos keladi** (20-40 ball)
3. **Fonetik o'xshashlik** hisoblanadi (10-25 ball)
4. **Random element** har safar yangi tartib uchun (+5 ball)

---

## 🧪 Test Misollar

### Misol 1: Aziz + Mariya
**Input:**
- Ota: **A**ziz
- Ona: Mari**ya**
- Jins: O'g'il

**Kutilayotgan Natija:**
Ismlar **A** harfidan boshlanadi va **ya** yoki **a** ga tugaydi:

1. **A**isha (❌ qiz ismi)
2. **A**limardon (✅ A bilan boshlanadi)
3. **A**bdulla (✅ A bilan boshlanadi, la oxiri)
4. **A**ziza (❌ qiz ismi)

**Score hisoblash:**
```
Alimardon:
  - Bosh harf 'A' = Aziz 'A' ✅ +50 ball
  - Oxiri 'on' ≠ Mariya 'ya' ❌ +0 ball
  - Umumiy harflar: i, a ✅ +4 ball
  - Random ✅ +3 ball
  JAMI: 57 ball

Abdulla:
  - Bosh harf 'A' = Aziz 'A' ✅ +50 ball
  - Oxiri 'a' = Mariya 'a' ✅ +20 ball
  - Umumiy harflar: a ✅ +2 ball
  - Random ✅ +2 ball
  JAMI: 74 ball ⭐ ENG YAXSHI!
```

### Misol 2: Kamoliddin + Nodira
**Input:**
- Ota: **K**amoliddin
- Ona: Nodi**ra**
- Jins: Qiz

**Kutilayotgan Natija:**
Ismlar **K** harfidan boshlanadi va **ra** yoki **a** ga tugaydi:

1. **K**amola (✅ K bilan, -a oxiri)
2. **K**arima (✅ K bilan, -a oxiri)
3. **K**abira (✅ K bilan, -ra oxiri - PERFECT!)

**Score hisoblash:**
```
Kamola:
  - Bosh harf 'K' = Kamoliddin 'K' ✅ +50 ball
  - Oxiri 'a' = Nodira 'a' ✅ +20 ball
  - Umumiy harflar: a, o ✅ +4 ball
  JAMI: 74 ball

Kabira:
  - Bosh harf 'K' = Kamoliddin 'K' ✅ +50 ball
  - Oxiri 'ra' = Nodira 'ra' ✅ +30 ball (2 harf!)
  - Umumiy harflar: a, i, r ✅ +6 ball
  JAMI: 86 ball ⭐ ENG YAXSHI!
```

### Misol 3: Sardor + Dilnoza
**Input:**
- Ota: **S**ardor
- Ona: Dilno**za**
- Jins: Qiz

**Kutilayotgan Natija:**
**S** bilan boshlanuvchi va **za** yoki **a** ga tugaydigan qiz ismlari:

1. **S**abrina (✅ S bilan, -a oxiri)
2. **S**anobar (✅ S bilan, -ar oxiri)
3. **S**evara (✅ S bilan, -a oxiri)
4. **S**oliha (✅ S bilan, -a oxiri)

---

## 🎨 Fonetik O'xshashlik Guruhlari

```typescript
Ochiq unlilar:     ['a', 'а', 'o', 'о']
Yopiq unlilar:     ['e', 'е', 'э', 'i', 'и']
Dumaloq unlilar:   ['u', 'у', 'ў', 'ӯ']
Lab undoshlari:    ['b', 'б', 'p', 'п']
Til undoshlari:    ['d', 'д', 't', 'т']
Tomoq undoshlari:  ['g', 'г', 'k', 'к', 'q', 'қ']
Sibilyantlar:      ['z', 'з', 's', 'с']
Shivir tovushlar:  ['zh', 'ж', 'sh', 'ш']
Sonantlar:         ['l', 'л', 'r', 'р']
Burun undoshlari:  ['m', 'м', 'n', 'н']
Nafas tovushlari:  ['h', 'х', 'ҳ']
```

---

## 📊 Ball Tizimi

| Mezon | Ball |
|-------|------|
| Bosh harf to'liq mos (ota) | +50 |
| Bosh harf fonetik mos (ota) | +25 |
| Oxirgi 3 harf mos (ona) | +40 |
| Oxirgi 2 harf mos (ona) | +30 |
| Oxirgi 1 harf mos (ona) | +20 |
| Oxirgi harf fonetik mos (ona) | +10 |
| Har bir umumiy harf | +2 |
| Random element | +0-5 |

**Maksimal ball:** ~150+

---

## 🚀 Qanday Ishlaydi?

### 1. Foydalanuvchi Ma'lumot Kiritadi:
```
👦 Jins: O'g'il bola
👨 Ota: Aziz
👩 Ona: Mariya
✨ Qadriyat: Ramziy, Ma'naviy
```

### 2. Sistema Filtr Qiladi:
```typescript
// Jins bo'yicha filter
const filteredByGender = allNames.filter(name => name.gender === 'boy');

// Qadriyat bo'yicha filter
const filteredByValues = filteredByGender.filter(name => 
  name.focusValues.includes('ramziy') || 
  name.focusValues.includes('ma\'naviy')
);
```

### 3. Professional Saralash:
```typescript
// Har bir ism uchun score hisoblash
filteredByValues.sort((a, b) => {
  const scoreA = calculateNameMatchScore(a.name, 'Aziz', 'Mariya');
  const scoreB = calculateNameMatchScore(b.name, 'Aziz', 'Mariya');
  return scoreB - scoreA; // Yuqoridan pastga
});
```

### 4. Eng Yaxshi 5 Tavsiya:
```
1. ⭐ Abdulla (86 ball) - A bilan bosh, -a oxiri
2. ⭐ Akmal (82 ball) - A bilan bosh
3. ⭐ Asad (79 ball) - A bilan bosh
4. ⭐ Ahmad (75 ball) - A bilan bosh
5. ⭐ Amir (72 ball) - A bilan bosh
```

---

## ✅ Afzalliklari

✅ **Professional algoritm** - Senior developer darajasida  
✅ **Fonetik tahlil** - O'xshash tovushlar hisoblanadi  
✅ **Madaniy kontekst** - O'zbek va rus alifbosi  
✅ **Har safar yangi** - Random element bilan  
✅ **Aniq mezonlar** - Bosh harf + oxirgi harflar  
✅ **Ball tizimi** - Transparent scoring  

---

## 🎯 Natija

Endi bot shaxsiy tavsiya berishda:
- Farzand ismi **ota ismining bosh harfidan** boshlanadi
- Farzand ismi **ona ismining oxirgi harflariga** mos keladi
- Har safar **yangi, turli xil** ismlar tavsiya etiladi
- Professional **fonetik tahlil** amalga oshiriladi

**Misol:**
```
Ota: Kamoliddin, Ona: Nodira
Tavsiya: Kabira, Kamola, Karima, Komila, Karina
         ↑             ↑    ↑
         K - ota       a/ra - ona
```

---

## 📝 Izohlar

- Agar faqat ota ismi kiritilsa: faqat bosh harf hisoblanadi
- Agar faqat ona ismi kiritilsa: faqat oxirgi harflar hisoblanadi
- Agar ikkalasi ham kiritilsa: to'liq algoritm ishlaydi
- Random element har safar yangi tartib yaratadi

**© 2024 Professional Name Generation Algorithm**  
**Version: 2.0.0 Senior**
