// src/lib/design-tokens.ts
// Single source of truth for the MeerasEstuff artisanal Kerala heritage aesthetic.
// tailwind.config.ts reads these values; src/index.css HSL vars are kept in sync by hand.
export const designTokens = {
  colors: {
    brand: {
      primary: "#9E2A1B", // Deep roasted Kashmiri chili / terracotta crimson
      primaryDark: "#7A1E12", // Aged tamarind / deep spice
      secondary: "#C6933A", // Antique brass / warm turmeric ochre
      accent: "#214E34", // Deep curry-leaf / forest green
      whatsapp: "#1E7E48", // Refined forest-emerald for WhatsApp actions
    },
    neutral: {
      background: "#F9F5EE", // Warm unbleached parchment
      surface: "#F2ECE1", // Soft stone / linen surface
      text: "#1C1411", // Deep roasted clove ink
      textMuted: "#685A50", // Warm earth gray
      border: "#E2D7C5", // Hairline parchment rule
    },
    semantic: {
      success: "#214E34",
      warning: "#C6933A",
      error: "#9E2A1B",
      info: "#2D5A7B",
    },
  },
  typography: {
    fontFamily: {
      display: "'Cormorant Garamond', Georgia, serif", // Editorial heritage serif
      body: "'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif", // Crisp modern sans
    },
    scale: {
      xs: "0.75rem", // 12px
      sm: "0.8125rem", // 13px
      base: "0.9375rem", // 15px
      lg: "1.0625rem", // 17px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "1.875rem", // 30px
      "4xl": "2.375rem", // 38px
      "5xl": "3rem", // 48px
    },
  },
  spacing: {
    xs: "0.5rem", // 8px
    sm: "1rem", // 16px
    md: "1.5rem", // 24px
    lg: "2rem", // 32px
    xl: "3rem", // 48px
    "2xl": "4rem", // 64px
    "3xl": "6rem", // 96px
  },
  borderRadius: {
    sm: "0.125rem", // 2px
    md: "0.25rem", // 4px
    lg: "0.5rem", // 8px
    xl: "0.75rem", // 12px
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px rgba(28,20,17,0.04)",
    md: "0 4px 12px rgba(28,20,17,0.06)",
    lg: "0 12px 24px rgba(28,20,17,0.08)",
    xl: "0 20px 40px rgba(28,20,17,0.12)",
    warm: "0 12px 32px rgba(158,42,27,0.12)",
  },
  gradients: {
    hero: "linear-gradient(180deg, rgba(20,14,11,0.88) 0%, rgba(28,19,15,0.82) 55%, rgba(20,14,11,0.95) 100%)",
    cta: "linear-gradient(135deg, #1C1411 0%, #2D1E18 100%)",
  },
} as const;
