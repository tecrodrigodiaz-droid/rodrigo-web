# Rodrigo M. Díaz · Electrotecnia e Iluminación
## Web corporativa — Next.js 14 + Tailwind CSS

---

## 🚀 Pasos para subir a Vercel (gratis)

### 1. Instalar dependencias
```bash
npm install
```

### 2. Probar en local
```bash
npm run dev
# Abre http://localhost:3000
```

### 3. Subir a GitHub
```bash
git init
git add .
git commit -m "primera versión web"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/rodrigo-web.git
git push -u origin main
```

### 4. Desplegar en Vercel
1. Ve a https://vercel.com
2. Crea cuenta gratuita con GitHub
3. Haz clic en "Add New Project"
4. Importa tu repositorio
5. Vercel detecta Next.js automáticamente
6. Haz clic en "Deploy" — listo en 2 minutos

---

## ✏️ Personalizar antes de subir

### Teléfono y WhatsApp
En `components/Contacto.tsx` reemplaza:
- `https://wa.me/34XXXXXXXXX` → tu número de WhatsApp (ej: `https://wa.me/34612345678`)
- `tel:+34XXXXXXXXX` → tu teléfono real
- `info@rodrigodiazelectrico.es` → tu email real

### Dominio personalizado
En Vercel → Settings → Domains → añade tu dominio propio.

---

## 📁 Estructura del proyecto

```
rodrigo-web/
├── app/
│   ├── layout.tsx      ← SEO meta tags para Valencia
│   ├── page.tsx        ← Página principal
│   └── globals.css     ← Variables CSS y animaciones
├── components/
│   ├── Navbar.tsx      ← Navegación sticky con menú mobile
│   ├── Logo.tsx        ← Logo SVG fiel al original
│   ├── Hero.tsx        ← Sección principal con fotos
│   ├── Servicios.tsx   ← 6 servicios con imágenes
│   ├── Diagnostico.tsx ← 4 tipos de diagnóstico
│   ├── Nosotros.tsx    ← 20 años como eje + 6 razones
│   ├── Resenas.tsx     ← Reseña real + CTA
│   ├── Tarifas.tsx     ← Urgencias + tabla servicios
│   ├── Contacto.tsx    ← WhatsApp, teléfono, email
│   └── Footer.tsx      ← Logo + links + legal
├── next.config.js
├── tailwind.config.ts
└── package.json
```

---

## 🎨 Identidad visual
- Fondo: `#0b1929`
- Naranja principal: `#e85d00`
- Turquesa logo: `#3dbfb8`
- Azul marino logo: `#1a3a6e`

## 🔍 SEO configurado para
- "electricista Valencia"
- "electricista Comunitat Valenciana"
- "luminotecnia Valencia"
- "instalaciones eléctricas Valencia"
- "diagnóstico eléctrico Valencia"
