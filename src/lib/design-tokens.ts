// src/lib/design-tokens.ts
// Single source of truth for the MeerasEstore bold/vibrant spice palette.
// tailwind.config.ts reads these values; src/index.css HSL vars are kept in sync by hand.
export const designTokens = {
  colors: {
    brand: {
      primary: "#E8402C", // Chili red
      primaryDark: "#C22A1C", // Chili red, hover/gradient end
      secondary: "#FFB627", // Turmeric gold
      accent: "#1F7A4D", // Banana-leaf green
      whatsapp: "#25D366", // Reserved for WhatsApp CTAs so they stay recognizable
    },
    neutral: {
      background: "#FFF7ED", // Warm cream
      surface: "#FFFFFF",
      text: "#201510", // Warm ink
      textMuted: "#6B5A4E",
      border: "#F0DFCB",
    },
    semantic: {
      success: "#1F7A4D",
      warning: "#FFB627",
      error: "#E8402C",
      info: "#2D6E8C",
    },
  },
  typography: {
    fontFamily: {
      display: "Clash Display, sans-serif", // Headings
      body: "Satoshi, sans-serif", // Body copy
    },
    scale: {
      xs: "0.75rem", // 12px
      sm: "0.875rem", // 14px
      base: "1rem", // 16px
      lg: "1.125rem", // 18px
      xl: "1.25rem", // 20px
      "2xl": "1.5rem", // 24px
      "3xl": "2rem", // 32px
      "4xl": "2.5rem", // 40px
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
    sm: "0.25rem", // 4px
    md: "0.5rem", // 8px
    lg: "1rem", // 16px
    xl: "1.5rem", // 24px
    full: "9999px",
  },
  shadows: {
    sm: "0 1px 2px rgba(0,0,0,0.05)",
    md: "0 4px 6px rgba(0,0,0,0.07)",
    lg: "0 10px 15px rgba(0,0,0,0.08)",
    xl: "0 20px 25px rgba(0,0,0,0.1)",
    warm: "0 8px 32px rgba(232,64,44,0.25)",
  },
  gradients: {
    hero: "linear-gradient(135deg, rgba(232,64,44,0.85) 0%, rgba(194,42,28,0.7) 45%, rgba(255,182,39,0.55) 100%)",
    cta: "linear-gradient(120deg, #E8402C 0%, #C22A1C 100%)",
  },
} as const;
