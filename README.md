# AgriCalc Pro - Agricultural Spray Calculator PWA

A Progressive Web App for calculating agricultural spray volumes based on crop type, area, and product selection.

## Features

- 🌾 Multi-page navigation with Calculator and placeholder sections
- 📱 Progressive Web App (PWA) - installable on mobile devices
- 🧮 Automatic calculation of spray volumes
- 🎨 Clean, modern design with agricultural theme
- 📊 Support for multiple measurement units (Hectares, Acres, m²)
- 🌿 Pre-configured product and crop category options

## Products Included

- UltraGreen
- Amino Power
- Amino 16
- Amino 16 BZn
- FruitFix
- GranBrix
- MicroRS
- Amino Cell Antistress
- Amino Cell PK
- Amino Cell S
- Amino Cell Si3%

## Crop Categories

- Cereals / grains
- Legumes / pulses
- Field vegetables
- High-density vegetables / leafy greens
- Vineyards / small fruits
- Orchard / tree crops

## Calculation Logic

The calculator computes:

1. **Total Spray Volume** = Base volume (per m²) × Conversion factor × Crop area
   - Conversion factors: 10 for Hectares, 4 for Acres, 1 for m²
   
2. **Product Volume** = (Total Spray Volume / 1000) × Dosage
   - Dosage: 5 L/1000L for standard products, 3 L/1000L for Amino Cell products

## GitHub Pages Setup

1. Create a new repository on GitHub
2. Upload these files:
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `README.md`

3. Go to repository Settings → Pages
4. Under "Source", select your main branch
5. Click Save
6. Your app will be available at: `https://[username].github.io/[repository-name]`

## Optional: Add Icons

For a complete PWA experience, add app icons:
- `icon-192.png` (192x192 pixels)
- `icon-512.png` (512x512 pixels)

You can create these using any image editor with your logo or branding.

## Local Development

Simply open `index.html` in a web browser to test locally.

## Browser Support

Works on all modern browsers with PWA support:
- Chrome/Edge (desktop & mobile)
- Safari (iOS & macOS)
- Firefox

## License

Free to use and modify for your agricultural needs.
