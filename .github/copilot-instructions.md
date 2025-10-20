# Ink Portfolio - Instructions de développement

Ce projet est un portfolio moderne avec design Apple-inspired utilisant Next.js 14, TypeScript, Tailwind CSS et Framer Motion.

## Architecture

- **Framework**: Next.js 14 avec App Router
- **Style**: Tailwind CSS avec design minimal et plat
- **Animations**: Framer Motion pour micro-animations
- **State**: Zustand pour la timeline
- **Drag & Drop**: @dnd-kit/core pour la timeline interactive
- **Scroll**: Lenis pour smooth scrolling

## Composants principaux

1. **Dock** - Navigation type Apple en bas d'écran
2. **SectionReveal** - Animations au scroll
3. **Timeline** - Mini timeline Premiere Pro avec drag & drop
4. **Pages** - Accueil, Projets, Services, Contact

## Guidelines de développement

- Mobile-first responsive
- Accessibilité (aria-labels, focus visible)
- Code modulaire et réutilisable
- Animations fluides et naturelles
- Design cohérent et minimal