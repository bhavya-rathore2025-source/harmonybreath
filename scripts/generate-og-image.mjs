import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

const width = 1200;
const height = 630;

const svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0c0a09;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1c1917;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="accent" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#a78bfa;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#818cf8;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#bg)" />
  <circle cx="200" cy="315" r="180" fill="none" stroke="url(#accent)" stroke-width="2" opacity="0.15" />
  <circle cx="200" cy="315" r="120" fill="none" stroke="url(#accent)" stroke-width="1.5" opacity="0.25" />
  <circle cx="200" cy="315" r="60" fill="none" stroke="url(#accent)" stroke-width="1" opacity="0.35" />
  <text x="600" y="280" text-anchor="middle" font-family="Georgia, serif" font-size="64" font-weight="bold" fill="white">HarmonyBreath</text>
  <text x="600" y="350" text-anchor="middle" font-family="system-ui, sans-serif" font-size="24" fill="#a78bfa">Master Every Breath, Elevate Mind &amp; Body</text>
  <text x="600" y="420" text-anchor="middle" font-family="system-ui, sans-serif" font-size="16" fill="#57534e">Wim Hof Breathing · Box Breathing · Breathwork Timer</text>
  <line x1="400" y1="460" x2="800" y2="460" stroke="#292524" stroke-width="1" />
  <text x="600" y="490" text-anchor="middle" font-family="system-ui, sans-serif" font-size="13" fill="#44403c">harmonybreath.com</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outputPath);
console.log('✅ OG image created:', outputPath);
