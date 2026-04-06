# Cisco Flashcards

Single-page Cisco CCNA practice app generated from `mod1.md`, `mod2.md`, and `mod3.md`.

## Run locally

```bash
pnpm install
pnpm dev
```

Vite will print a `Network` URL such as `http://192.168.x.x:5173/`.
Open that URL on your phone while both devices are on the same hotspot or local network.

## Build a static version

```bash
pnpm build
pnpm preview
```

The production files are written to `dist/`.

## Publish on GitHub Pages

1. Create a GitHub repository and push this folder.
2. In GitHub, enable Pages with `GitHub Actions` as the source.
3. The included workflow in `.github/workflows/pages.yml` will build and publish the app.

## Publish on Vercel

1. Import the repository into Vercel.
2. Framework preset: `Vite`.
3. Build command: `pnpm build`
4. Output directory: `dist`

## Study flow

- `Quiz` mode lets you pick answers, then reveal the explanation.
- `Flashcard` mode hides the options so you can mentally answer first.
- `Need work` brings back cards you have missed.
- `Mastered` shows cards with a streak of 3 or more.
- Progress is stored in browser local storage on the device you use.
- Live site: https://lucian-adrian.github.io/ccna-quiz/
