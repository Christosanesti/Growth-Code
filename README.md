# GrowthCode Website

A modern Next.js website showcasing the GrowthCode team, built with Next.js, Tailwind CSS, shadcn/ui, Three.js, drei, and react-three/fiber.

## Features

- 🎨 Modern UI with Tailwind CSS and shadcn/ui components
- 🎭 Interactive 3D scene using Three.js and react-three/fiber
- 👥 Team introduction section with member cards
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 (App Router)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page with team introduction
│   └── globals.css     # Global styles
├── components/
│   ├── ui/             # shadcn/ui components
│   ├── Scene3D.tsx     # 3D scene component
│   └── TeamMember.tsx  # Team member card component
└── lib/
    └── utils.ts        # Utility functions
```

## Customization

### Team Members

Edit the `teamMembers` array in `app/page.tsx` to update team member information.

### 3D Scene

Modify `components/Scene3D.tsx` to customize the 3D animation and effects.

### Styling

- Global styles: `app/globals.css`
- Tailwind config: `tailwind.config.ts`
- Component styles: Individual component files

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **Three.js** - 3D graphics library
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful helpers for react-three/fiber

## License

Private - GrowthCode
