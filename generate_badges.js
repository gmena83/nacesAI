// SVG para badge de Constancia
const constanciaBadgeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="constancia-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a2e" />
      <stop offset="100%" stop-color="#00b8d4" stop-opacity="0.3" />
    </linearGradient>
    <filter id="constancia-glow">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <polygon points="100,10 190,50 190,150 100,190 10,150 10,50" fill="url(#constancia-gradient)" stroke="#00b8d4" stroke-width="2" filter="url(#constancia-glow)" />
  <text x="100" y="80" font-family="'JetBrains Mono', monospace" font-size="16" fill="#00b8d4" text-anchor="middle">CONSTANCIA</text>
  <text x="100" y="120" font-family="'JetBrains Mono', monospace" font-size="40" fill="#ffffff" text-anchor="middle">
    <tspan x="100" y="120">📅</tspan>
  </text>
</svg>
`;

// SVG para badge de Concentración
const concentracionBadgeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="concentracion-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a2e" />
      <stop offset="100%" stop-color="#00e676" stop-opacity="0.3" />
    </linearGradient>
    <filter id="concentracion-glow">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <polygon points="100,10 190,50 190,150 100,190 10,150 10,50" fill="url(#concentracion-gradient)" stroke="#00e676" stroke-width="2" filter="url(#concentracion-glow)" />
  <text x="100" y="80" font-family="'JetBrains Mono', monospace" font-size="16" fill="#00e676" text-anchor="middle">CONCENTRACIÓN</text>
  <text x="100" y="120" font-family="'JetBrains Mono', monospace" font-size="40" fill="#ffffff" text-anchor="middle">
    <tspan x="100" y="120">🧠</tspan>
  </text>
</svg>
`;

// SVG para badge de Customer Discovery
const customerBadgeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="customer-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a2e" />
      <stop offset="100%" stop-color="#ff4081" stop-opacity="0.3" />
    </linearGradient>
    <filter id="customer-glow">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <polygon points="100,10 190,50 190,150 100,190 10,150 10,50" fill="url(#customer-gradient)" stroke="#ff4081" stroke-width="2" filter="url(#customer-glow)" />
  <text x="100" y="80" font-family="'JetBrains Mono', monospace" font-size="16" fill="#ff4081" text-anchor="middle">CUSTOMER</text>
  <text x="100" y="120" font-family="'JetBrains Mono', monospace" font-size="40" fill="#ffffff" text-anchor="middle">
    <tspan x="100" y="120">💬</tspan>
  </text>
</svg>
`;

// SVG para badge de Plan de Negocio
const planBadgeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="plan-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a2e" />
      <stop offset="100%" stop-color="#ffab40" stop-opacity="0.3" />
    </linearGradient>
    <filter id="plan-glow">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <polygon points="100,10 190,50 190,150 100,190 10,150 10,50" fill="url(#plan-gradient)" stroke="#ffab40" stroke-width="2" filter="url(#plan-glow)" />
  <text x="100" y="80" font-family="'JetBrains Mono', monospace" font-size="16" fill="#ffab40" text-anchor="middle">PLAN DE NEGOCIO</text>
  <text x="100" y="120" font-family="'JetBrains Mono', monospace" font-size="40" fill="#ffffff" text-anchor="middle">
    <tspan x="100" y="120">📝</tspan>
  </text>
</svg>
`;

// SVG para badge de Autocuidado
const autocuidadoBadgeSVG = `
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="autocuidado-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#1a1a2e" />
      <stop offset="100%" stop-color="#69f0ae" stop-opacity="0.3" />
    </linearGradient>
    <filter id="autocuidado-glow">
      <feGaussianBlur stdDeviation="5" result="blur" />
      <feComposite in="SourceGraphic" in2="blur" operator="over" />
    </filter>
  </defs>
  <polygon points="100,10 190,50 190,150 100,190 10,150 10,50" fill="url(#autocuidado-gradient)" stroke="#69f0ae" stroke-width="2" filter="url(#autocuidado-glow)" />
  <text x="100" y="80" font-family="'JetBrains Mono', monospace" font-size="16" fill="#69f0ae" text-anchor="middle">AUTOCUIDADO</text>
  <text x="100" y="120" font-family="'JetBrains Mono', monospace" font-size="40" fill="#ffffff" text-anchor="middle">
    <tspan x="100" y="120">❤️</tspan>
  </text>
</svg>
`;

// Guardar los SVGs como archivos
const fs = require('fs');
const path = require('path');

const badgesDir = path.join(__dirname, 'badges');

// Asegurarse de que el directorio existe
if (!fs.existsSync(badgesDir)) {
  fs.mkdirSync(badgesDir, { recursive: true });
}

// Guardar cada badge como archivo SVG
fs.writeFileSync(path.join(badgesDir, 'constancia.svg'), constanciaBadgeSVG);
fs.writeFileSync(path.join(badgesDir, 'concentracion.svg'), concentracionBadgeSVG);
fs.writeFileSync(path.join(badgesDir, 'customer.svg'), customerBadgeSVG);
fs.writeFileSync(path.join(badgesDir, 'plan.svg'), planBadgeSVG);
fs.writeFileSync(path.join(badgesDir, 'autocuidado.svg'), autocuidadoBadgeSVG);

console.log('Badges SVG generados correctamente en el directorio badges/');
