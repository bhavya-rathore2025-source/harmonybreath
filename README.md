# HarmonyBreath

A guided breathing web application built with Astro. Features a three-phase breathing exercise with customizable audio tracks, visual timer, and breath pacing.

## Project Structure

```text
/
├── public/
│   ├── audio/            # Breathing exercise audio tracks
│   │   ├── guided-breathing-*.mp3
│   │   ├── breath-out-hold-*.mp3
│   │   ├── recovery-hold-*.mp3
│   │   ├── breath-inhale.mp3
│   │   ├── breath-exhale.mp3
│   │   └── chime.mp3
│   └── favicon.svg
├── src/
│   ├── assets/           # Static assets (images, SVGs)
│   ├── components/       # Astro/UI components
│   ├── config/           # App configuration (audio, etc.)
│   ├── layouts/          # Page layouts
│   ├── pages/            # Route pages
│   ├── styles/           # Global styles
│   └── utils/            # Utility functions
└── package.json
```

## Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Install dependencies                             |
| `npm run dev`             | Start local dev server at `localhost:4321`       |
| `npm run build`           | Build production site to `./dist/`               |
| `npm run preview`         | Preview build locally before deployment          |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
