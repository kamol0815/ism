# 🛡️ ADMIN PANEL QO'LLANMASI

## Admin: @7789445876

## 📋 Mavjud Komandalar:

### 1️⃣ `/userinfo <telegram_id>`
**Maqsad:** Foydalanuvchi haqida to'liq ma'lumot olish

**Misol:**
```
/userinfo 85939027
```

**Natija:**
- Telegram ID, ism, username
- Obuna holati (faol/faol emas)
- Obuna tugash sanasi
- Bonus olgan/olmaganlik
- Ro'yxatdan o'tgan sana

---

### 2️⃣ `/revoke <telegram_id>`
**Maqsad:** Foydalanuvchining obunasini bekor qilish

⚠️ **DIQQAT:** Bu komanda **UMRBOD** obunalarni ham bekor qiladi!

**Misol:**
```
/revoke 85939027
```

**Natija:**
- Obuna to'liq bekor qilinadi
- isActive = false
- subscriptionEnd = null
- Foydalanuvchiga xabar yuboriladi

---

### 3️⃣ `/grant <telegram_id> <days>`
**Maqsad:** Foydalanuvchiga obuna berish

**Parametrlar:**
- `days = 0` → **UMRBOD** obuna (2099 yilgacha)
- `days > 0` → Kunlik obuna

**Misol:**
```
/grant 85939027 0       # UMRBOD obuna
/grant 85939027 30      # 30 kunlik obuna
/grant 85939027 365     # 1 yillik obuna
```

**Natija:**
- Foydalanuvchi faollashtiriladi
- Obuna muddati belgilanadi
- Foydalanuvchiga xabar yuboriladi

---

### 4️⃣ `/stats`
**Maqsad:** Bot statistikasi

**Natija:**
- Jami foydalanuvchilar soni
- Faol obunalar
- Umrbod obunalar (2099+ yilgacha)
- Faol emas foydalanuvchilar
- Bonus olganlar soni
- Admin komandalar ro'yxati

---

## 🎯 Stsenariylar:

### Umrbod obunani bekor qilish:
```bash
# 1. Avval ma'lumotni ko'rish
/userinfo 85939027

# 2. Obunani bekor qilish
/revoke 85939027

# 3. Natijani tekshirish
/userinfo 85939027
```

### Yangi umrbod obuna berish:
```bash
# 1. Foydalanuvchini tekshirish
/userinfo 85939027

# 2. Umrbod obuna berish (0 = umrbod)
/grant 85939027 0

# 3. Natijani tasdiqlash
/userinfo 85939027
```

### Pullik obuna qilish (30 kun):
```bash
/grant 85939027 30
```

---

## ✅ Xavfsizlik:

- Faqat siz (ID: 7789445876) admin komandalarni ishlatishingiz mumkin
- Boshqa foydalanuvchilar "❌ Bu komanda faqat adminlar uchun!" xabarini oladi
- Barcha admin amallar logga yoziladi
- Foydalanuvchilarga avtomatik xabar yuboriladi

---

## 📊 Texnik Ma'lumotlar:

**Database:** PostgreSQL (192.168.0.89:5432/names)

**Entities:**
- `users` - foydalanuvchilar
- `user_subscriptions` - obunalar
- `transactions` - to'lovlar

**Umrbod Subscription Logic:**
- `subscriptionEnd` > 2099-01-01 = umrbod obuna
- `/revoke` bu sanani null qiladi
- `/grant 0` bu sanani 2099-12-31 ga o'rnatadi

---

## 🚀 Serverni qayta ishga tushirish:

```bash
# Development mode
npm run start:dev

# Production mode
npm run start:prod

# PM2 orqali (agar ishlatilsa)
pm2 restart all
```

---

**Yaratilgan sana:** 2025-11-17
**Admin:** @7789445876
