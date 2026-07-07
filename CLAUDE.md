# Pickle Brand Website — Design System

## Brand Identity

**Product:** Artisanal pickles and preserves
**Vibe:** Warm, artisanal, handcrafted, earthy, premium but approachable
**Target audience:** Food lovers, home cooks, gift-givers , region kerala,india,south india

## Design Tokens

All design tokens are defined in `src/lib/design-tokens.ts`.
**ALWAYS import and use these tokens.** Never hardcode colors, spacing, or fonts.

## Color Palette

- **Primary (Terracotta):** #B85C38 — Use for buttons, headings, accents
- **Secondary (Cream):** #F5E6D3 — Use for backgrounds, cards
- **Accent (Deep Green):** #2D5A27 — Use for success states, herbs/ingredients
- **Gold:** #C49B3D — Use for highlights, badges, premium feel
- **Background:** #FDF8F4 (warm white)
- **Text:** #1A1A1A (dark)
- **Text Muted:** #6B5E55 (warm gray)

## Typography

- **Headings:** Playfair Display (serif) — elegant, artisanal feel
- **Body:** Inter (sans-serif) — clean, readable

## Spacing

- Use the spacing scale from design tokens (xs → 3xl)
- Consistent padding: cards use `p-6`, sections use `py-12` or `py-16`

## Component Style Rules

- **Buttons:** Use brand.primary background with white text. Rounded-lg.
- **Cards:** White background, subtle shadow (shadow-warm), rounded-xl
- **Images:** Rounded-lg, subtle warmth filter if needed
- **Headings:** Use display font, brand.primary color for emphasis

## Images

- All product images are in `src/assets/` (01.jpg through 09.jpg)
- Hero background: `hero-bg.jpg`
- About background: `about-bg.jpg`

## WhatsApp Integration

- Use FloatingWhatsApp component for the floating button
- Use WhatsAppCTA for inline CTAs
- Phone number: 9496987436

## Code Style

- Use shadcn/ui components where possible
- Use Tailwind classes from the design system
- Prefer server components unless client interaction is needed
- Keep components small and focused

## File Structure

- Components: `src/components/`
- Pages: `src/pages/`
- Data: `src/data/products.ts`
- Hooks: `src/hooks/`
- Utils: `src/lib/`

## When Building New Components

1. Check if a shadcn/ui component exists first
2. Use design tokens for all colors/spacing
3. Add animation (fade-in) for polish
4. Ensure mobile responsiveness
5. Test with the WhatsApp integration

should not look like a a generic ai generated ui/ux
