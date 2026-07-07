// src/lib/whatsapp.ts
export const WHATSAPP_NUMBER = "919496987436"; // +91 94969 87436

export const getWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
