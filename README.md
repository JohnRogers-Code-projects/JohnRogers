# John Rogers - Portfolio

Personal engineering portfolio showcasing backend and systems work, with a focus on AI safety, correctness, and explicit system boundaries.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Railway

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Main page composition
│   └── globals.css      # Global styles and theme
├── components/
│   ├── ui/              # Reusable UI components
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Section.tsx
│   │   └── Badge.tsx
│   └── sections/        # Page sections
│       ├── Hero.tsx
│       ├── Projects.tsx
│       ├── Experience.tsx
│       ├── Philosophy.tsx
│       ├── Contact.tsx
│       └── Navigation.tsx
└── data/
    └── projects.ts      # Project and experience data
```

## Deployment

This project is configured for Railway deployment with:
- Standalone output for optimized container size
- Automatic health checks
- Restart policy on failure

Deploy to Railway:
1. Connect your GitHub repository
2. Railway auto-detects Next.js and deploys

## Customization

Update project data in `src/data/projects.ts`:
- Projects array for featured work
- Experiences array for CV/work history
- Engineering philosophy points

## License

MIT
