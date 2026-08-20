import sharp from 'sharp';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = join(__dirname, '..', 'public', 'og-image.png');

const width = 1200;
const height = 630;

const svg = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="bgGlow" cx="25%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#14b8a6" stop-opacity="0.2" />
      <stop offset="50%" stop-color="#6366f1" stop-opacity="0.1" />
      <stop offset="100%" stop-color="#090d16" stop-opacity="1" />
    </radialGradient>

    <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#2dd4bf" />
      <stop offset="50%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#818cf8" />
    </linearGradient>

    <linearGradient id="textGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#5eead4" />
      <stop offset="100%" stop-color="#a78bfa" />
    </linearGradient>

    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="12" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>

  <!-- Background -->
  <rect width="${width}" height="${height}" fill="#090d16" />
  <rect width="${width}" height="${height}" fill="url(#bgGlow)" />

  <!-- Breathing Circles (Left Visual) -->
  <g filter="url(#glow)">
    <circle cx="280" cy="315" r="210" fill="none" stroke="url(#ringGrad)" stroke-width="6" opacity="0.35" />
    <circle cx="280" cy="315" r="160" fill="none" stroke="url(#ringGrad)" stroke-width="8" opacity="0.55" />
    <circle cx="280" cy="315" r="110" fill="none" stroke="url(#ringGrad)" stroke-width="10" opacity="0.75" />
    <circle cx="280" cy="315" r="60" fill="none" stroke="url(#ringGrad)" stroke-width="12" opacity="0.95" />
  </g>

  <!-- Glassmorphic Card Container -->
  <rect x="420" y="160" width="720" height="310" rx="24" fill="#0f172a" fill-opacity="0.65" stroke="#1e293b" stroke-width="1.5" />

  <!-- Content -->
  <text x="460" y="245" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="62" font-weight="800" fill="url(#textGrad)" letter-spacing="-1">HarmonyBreath</text>
  
  <text x="460" y="295" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="24" font-weight="500" fill="#94a3b8">Guided Breathwork &amp; Mindful Breathing Timers</text>

  <!-- Feature Badges -->
  <g font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif" font-size="14" font-weight="600">
    <!-- Wim Hof -->
    <rect x="460" y="340" width="105" height="34" rx="17" fill="#1e293b" stroke="#334155" />
    <text x="512" y="362" text-anchor="middle" fill="#cbd5e1">Wim Hof</text>

    <!-- Box Breathing -->
    <rect x="577" y="340" width="135" height="34" rx="17" fill="#1e293b" stroke="#334155" />
    <text x="644" y="362" text-anchor="middle" fill="#cbd5e1">Box Breathing</text>

    <!-- 4-7-8 Breathing -->
    <rect x="724" y="340" width="140" height="34" rx="17" fill="#1e293b" stroke="#334155" />
    <text x="794" y="362" text-anchor="middle" fill="#cbd5e1">4-7-8 Breathing</text>

    <!-- Nadi Shodhana -->
    <rect x="876" y="340" width="145" height="34" rx="17" fill="#1e293b" stroke="#334155" />
    <text x="948" y="362" text-anchor="middle" fill="#cbd5e1">Nadi Shodhana</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(outputPath);
console.log('✅ OG image created:', outputPath);

