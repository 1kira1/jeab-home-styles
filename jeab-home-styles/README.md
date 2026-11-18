# JEAB — 11 homepage styles

Five different homepage designs for **JEAB — Original Thai Restaurant & Bar Karaoké** (Rue de Monthoux 25, 1201 Genève).
Plain HTML/CSS/JS — no build step, no dependencies. Fonts load from Google Fonts.

| # | File | Style |
|---|------|-------|
| 01 | `styles/01-elegant.html` | Ivory, serif, editorial |
| 02 | `styles/02-crazy-neon.html` | Neon, glitch title, marquees, spotlight, retro grid |
| 03 | `styles/03-minimal.html` | White, Swiss typography, hover-preview menu |
| 04 | `styles/04-street-poster.html` | Red/yellow, neo-brutalist poster look |
| 05 | `styles/05-botanical-zen.html` | Sage green, arch images, soft floating motion |

`index.html` is a gallery linking to all five.

## Run locally
Open `index.html` in a browser, or `python3 -m http.server` and visit http://localhost:8000.

## Publish on GitHub Pages
Settings → Pages → Deploy from branch → `main` / root. Site: `https://<user>.github.io/<repo>/`.

## Edit the content
- **Phone / address / Instagram / email**: `assets/js/config.js` (applies to all 11 styles).
- **Opening hours**: `assets/js/shared.js` (`S` = minutes since midnight, `ROWS` = displayed rows). The "Ouvert / Fermé" badge uses Europe/Paris time and handles after-midnight closing.
- **Images** (all in `assets/img/`, keep the file names so every style updates):
  - `hero.webp`, `venue-1.webp`, `venue-2.webp` (portrait), `venue-3.webp` — restaurant & karaoke photos
  - `dish-1…3.webp` — dish photos (4:3). `dish-4/5.webp` are spare.
  - `logo.webp`
  - Extras not wired in yet: `gallery/` (interior + karaoke nights), `menu/` (the 20 menu cards), `brand/` (posters).
- Dish photos were cropped from the client's posters (small, ~400 px). Replace `dish-*.webp` with real photos (about 1200×900) for sharper results.

## Notes
- No form backend: reservation buttons call the phone number from `config.js`.
- Menu items shown are 3 highlights; prices live in the menu cards under `assets/img/menu/`.
- `prefers-reduced-motion` is respected.
- Photos are the client's own (supplied via Drive); check usage rights for people shown in `gallery/soiree-*`.

Site by Origora.


## Styles 06–11 (vidéos)
06 Cinematic Temple · 07 Royal Stage · 08 Jade Dining (anciens designs, photos réelles) · 09 Cinema Triptych · 10 Stories · 11 Bento.
Les vidéos sont dans `assets/video/` (mp4 compressés + poster jpg) et se lancent via `assets/js/video.js` (attribut `data-v`).

## Déploiement GitHub Pages
1. Push sur `main`.
2. Settings → Pages → Source: Deploy from a branch → `main` / root.
3. (Optionnel) Domaine perso : créer un fichier `CNAME` à la racine contenant le sous-domaine (ex. `jeab-preview.origora-tech.com`) + un enregistrement DNS CNAME vers `<user>.github.io`.
