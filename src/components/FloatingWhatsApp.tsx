import { motion } from "framer-motion";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const FloatingWhatsApp = () => {
  return (
    <motion.a
      href={getWhatsAppUrl("Hello, I want to order MeerasEstuff pickles")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-whatsapp text-whatsapp-foreground rounded-full flex items-center justify-center shadow-xl hover:opacity-90 transition-opacity"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping opacity-40" />
      <WhatsAppIcon className="relative w-7 h-7" />
    </motion.a>
  );
};

export default FloatingWhatsApp;
