# Sanastro - KP Astrology Application

A comprehensive, user-friendly KP (Krishnamurti Paddhati) Astrology application that provides accurate horoscope calculations, predictions, and analysis based on the KP system.

![Sanastro](https://img.shields.io/badge/Astro-5.x-orange?style=flat-square&logo=astro)
![React](https://img.shields.io/badge/React-19.x-blue?style=flat-square&logo=react)
![TailwindCSS](https://img.shields.io/badge/Tailwind-4.x-38B2AC?style=flat-square&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## Features

- **Birth Data Input** - Comprehensive form with geocoding support
- **KP Horoscope Charts** - South Indian and North Indian style charts
- **Cusp Table** - All 12 house cusps with Sign, Star, and Sub Lords
- **Planet Positions** - Detailed positions with Nakshatra and Sub Lord
- **Significators Analysis** - 4-fold significator system
- **Vimshottari Dasha** - Complete dasha timeline with periods
- **Life Predictions** - Marriage, Career, Finance, Health, Education, Travel
- **Ruling Planets** - Current ruling planets for event timing

## Tech Stack

- **Framework**: [Astro](https://astro.build/) 5.x
- **UI Components**: [React](https://react.dev/) 19.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) 4.x
- **Deployment**: [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/sanastro.git
cd sanastro
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser.

### Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Project Structure

```
sanastro/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   ├── layouts/         # Page layouts
│   ├── pages/           # Route pages
│   │   ├── index.astro       # Landing page
│   │   ├── birth-data.astro  # Birth data form
│   │   ├── dashboard.astro   # User dashboard
│   │   ├── chart.astro       # Birth chart view
│   │   ├── predictions.astro # Predictions page
│   │   └── dasha.astro       # Dasha timeline
│   └── styles/          # Global styles & tokens
├── docs/
│   └── design/          # Design system documentation
├── astro.config.mjs     # Astro configuration
├── package.json
└── vercel.json          # Vercel deployment config
```

## Design System

The project includes a comprehensive design system with:

- **Style Guide** - Design principles, colors, typography
- **Design Tokens** - CSS custom properties and JSON tokens
- **Component Specs** - Detailed UI component specifications
- **Tailwind Config** - Custom Tailwind configuration

See `/docs/design/` for full documentation.

## Commands

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `npm install`     | Installs dependencies                        |
| `npm run dev`     | Starts local dev server at `localhost:4321`  |
| `npm run build`   | Build your production site to `./dist/`      |
| `npm run preview` | Preview your build locally, before deploying |

## Deployment on Vercel

### Option 1: Deploy via Vercel Dashboard

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Astro - click "Deploy"

### Option 2: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. For production:
```bash
vercel --prod
```

## Environment Variables

Create a `.env` file for local development:

```env
# Add your environment variables here
PUBLIC_API_URL=your_api_url
```

For Vercel, add environment variables in the project settings.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- KP Astrology principles based on the works of K.S. Krishnamurti
- Design inspired by modern wellness and spiritual aesthetics

---

Built with ✨ by Lakshman
