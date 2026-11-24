import { getWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppIcon from "./icons/WhatsAppIcon";

const FloatingWhatsApp = () => {
  return (
    <a
      href={getWhatsAppUrl("Hello, I want to order MeerasEstuff Signature Garlic Pickle")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2.5 bg-[#18110E] text-[#F9F5EE] border border-secondary/40 px-4 py-3 shadow-xl hover:bg-primary hover:border-primary transition-colors group"
      aria-label="Order on WhatsApp"
    >
      <WhatsAppIcon className="w-4 h-4 text-secondary group-hover:text-white transition-colors" />
      <span className="font-body text-[11px] font-medium tracking-[0.16em] uppercase hidden sm:inline">
        Order on WhatsApp
      </span>
    </a>
  );
};

export default FloatingWhatsApp;
