# 🛍️ Bahodiy Market

Milliy marketplace — HTML, CSS, JavaScript va Express.js bilan qurilgan.

**Admin:** `admin@bahodiy.uz` / `admin123`

---

## 🚀 GITHUB GA YUKLASH

### 1. GitHub'da repo yarating
1. [github.com](https://github.com) → yuqori **"+"** → **"New repository"**
2. Name: `bahodiy`
3. **Public** tanlang, hech qanday belgi qo'ymang
4. **"Create repository"** bosing

### 2. Git va Node.js o'rnating
- Git: [git-scm.com](https://git-scm.com/download/win)
- Node.js: [nodejs.org](https://nodejs.org) → LTS

### 3. Papkani yuklang
`bahodiy` papkasi ichida terminal/cmd oching:
```bash
git init
git add .
git commit -m "Bahodiy Market"
git branch -M main
git remote add origin https://github.com/SIZNING_USERNAME/bahodiy.git
git push -u origin main
```
> USERNAME o'rniga o'z GitHub username'ingizni yozing

---

## 🚂 RAILWAY GA DEPLOY

### 1. Railway'ga kiring
1. [railway.app](https://railway.app) → **"Login with GitHub"**

### 2. Project yarating
1. **"New Project"** → **"Deploy from GitHub repo"**
2. `bahodiy` reponi tanlang
3. Deploy avtomatik boshlanadi ✅

### 3. Domain olish (to'g'ri yo'l)
> Settings → Domains topa olmadingizmi? Mana to'g'ri yo'l:

1. Project ichida **"bahodiy"** servisni (qutichani) bosing
2. Yuqoridagi tablardan **"Settings"** ni bosing
3. **Pastga scroll qiling** → **"Networking"** bo'limini toping
4. **"Generate Domain"** tugmasini bosing
5. `bahodiy-xxx.up.railway.app` — bu sizning saytingiz! 🎉

---

## 💻 Local ishga tushirish
```bash
npm install
npm start
# http://localhost:3000
```
