# TZO Kukljica — Web stranica

Next.js 14 · TypeScript · Tailwind CSS · Framer Motion · next-intl (HR/EN) · Sanity CMS

---

## Pokretanje projekta

### 1. Instaliraj dependencies

```bash
npm install
```

### 2. Postavi environment varijable

```bash
cp .env.local.example .env.local
```

Otvori `.env.local` i popuni:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=tvoj-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

> Sanity project ID nađeš na: https://www.sanity.io/manage

### 3. Pokreni development server

```bash
npm run dev
```

Otvori http://localhost:3000

---

## Sanity CMS postavljanje

### Kreiranje projekta

1. Idi na https://www.sanity.io i prijavi se
2. Kreiraj novi projekt: **"TZO Kukljica"**, dataset: **production**
3. Kopiraj **Project ID** u `.env.local`

### Pokretanje Sanity Studija

Sanity Studio se može pokrenuti na dva načina:

**Opcija A — Sanity Cloud Studio (preporučeno):**
Studio je automatski dostupan na: `https://[project-id].sanity.studio`

**Opcija B — lokalno:**
```bash
npm install -g @sanity/cli
cd sanity
sanity init --project [tvoj-project-id]
sanity dev
```

### Dodavanje klijenata

1. Otvori https://www.sanity.io/manage
2. Odaberi projekt → **Members** → **Add member**
3. Unesi email klijenta, odaberi rolu **Editor**
4. Klijent dobiva link na Studio gdje može unositi sadržaj

---

## Struktura projekta

```
tzo-kukljica/
├── messages/           # Prijevodi (hr.json, en.json)
├── sanity/             # Sanity schema definicije
│   └── schemaTypes/    # post.ts, event.ts
├── src/
│   ├── app/[locale]/   # Sve stranice (HR na /, EN na /en)
│   ├── components/     # Navbar, Footer, sekcije
│   ├── i18n/           # next-intl konfiguracija
│   └── lib/            # Sanity client i GROQ queries
├── .env.local.example
├── next.config.ts
├── tailwind.config.ts  # Boje i fontovi
└── sanity.config.ts
```

---

## Prilagodba boja i fontova

Otvori `tailwind.config.ts`:

```ts
colors: {
  forest: { 800: '#1A2F0E', ... },  // Boja navbara/headera
  olive: { 600: '#8B7427', ... },   // Zlatni accent
}
```

---

## Dodavanje novih stranica

1. Kreiraj `src/app/[locale]/nova-stranica/page.tsx`
2. Dodaj prijevode u `messages/hr.json` i `messages/en.json`
3. Dodaj link u `Navbar.tsx`

---

## Deploy na Vercel

```bash
# Instaliraj Vercel CLI
npm i -g vercel

# Deploy
vercel

# Postavi environment varijable u Vercel dashboardu:
# NEXT_PUBLIC_SANITY_PROJECT_ID
# NEXT_PUBLIC_SANITY_DATASET
# NEXT_PUBLIC_SANITY_API_VERSION
```

---

## Lokalizacija

- HR je defaultni jezik, dostupan na `/`
- EN je dostupan na `/en`
- Svi tekstovi su u `messages/hr.json` i `messages/en.json`
- U komponentama koristiti: `const t = useTranslations('namespace')`
