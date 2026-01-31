## Project Summary
Minerva Partners is a premium wealth management and strategic networking ecosystem. The website is a high-end, award-winning digital experience designed with a luxury minimal aesthetic, focusing on storytelling and "excellence without compromise."

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS 4
- **Animations**: Framer Motion
- **Fonts**: Stratford Serial (Titles/Brand), Inter (Body)

## Architecture
- `src/app`: Application routes and global styles.
- `src/components`: Reusable UI components including premium Navigation, ProgressRail, and Credibility sections.
- `public/fonts`: Local hosting for the "Stratford Serial" brand font.

## User Preferences
- **Aesthetic**: Luxury minimal, navy & gold, cinematographic.
- **Palette**: `minerva.blue` (#0f1829), `minerva.gold` (#C5A059), `minerva.dark` (#0a0f1c).
- **Navigation**: Fixed premium navbar with complex dropdowns and subtle blur effects.
- **Interaction**: Snap-scrolling storytelling sections with Framer Motion transitions.

## Project Guidelines
- No unnecessary comments in the code.
- Use `font-titles` for brand and headings.
- Maintain wide spacing and tracking for elegance.
- Adhere to the established color naming: `minerva.blue`, `minerva.gold`, `minerva.dark`.

## Common Patterns
- **Storytelling**: Use 100vh sections with `snap-section` class inside a `snap-container`.
- **Transitions**: Subtle blur, opacity, and translate animations for a cinematographic feel.
- **Progress**: A lateral `ProgressRail` tracks the user's journey through the story scenes.
