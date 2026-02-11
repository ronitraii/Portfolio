# Ronit Rai Portfolio

A cybersecurity and AI research portfolio featuring projects in digital forensics, IDS/IPS, threat intelligence, and image forgery detection.

## Structure
- `index.html` — Main portfolio page (subtle theme, responsive)
- `assets/css/styles.css` — Global styles (light/dark modes)
- `assets/js/script.js` — Interactions (smooth scroll, dark mode, link handling)
- `assets/images/profile/` — Profile image(s)
- `assets/documents/cv/` — CV PDF
- `assets/documents/certificates/` — Certificates (PDF/PNG)
- `robots.txt` — Limits crawler access to documents
- `vercel.json` — Caching headers and clean URLs

## Development
Open `index.html` locally or serve statically.

## Deploy (Vercel)
1. Push this folder to GitHub (repo name: `portfolio`).
2. In Vercel, **Add New Project** → Import the `portfolio` repo.
3. Framework: **Other**, Root Directory: `/`.
4. Deploy. PDFs and images will be cached by `vercel.json`.

## Deploy (GitHub Pages)
1. Push to GitHub.
2. In repo Settings → Pages → Build & deployment → Source: GitHub Actions or Deploy from a branch.
3. Your site will be available at `https://<username>.github.io/portfolio/`.

## Privacy & Safety
- `robots.txt` discourages indexing of documents.
- Caching with `Cache-Control` is enabled for PDFs/images.
- Links to GitHub repos are preserved; placeholder project links point to `https://github.com/ronitraii`.

## License
Personal portfolio — content © Ronit Rai.
