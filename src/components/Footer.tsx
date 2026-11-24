import { ArrowUpRight, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import logoImg from "@/assets/logo.jpg";

const navLinks = [
  { label: "Signature Garlic", href: "#signature-garlic" },
  { label: "The Complete Pantry", href: "#products" },
  { label: "Craft & Heritage", href: "#about" },
  { label: "The Standard", href: "#why-us" },
  { label: "Patron Notes", href: "#reviews" },
  { label: "Trade & Wholesale", href: "#trade" },
];

const signatureVarieties = [
  { label: "Whole Garlic Pickle (House #1)", href: "#signature-garlic", highlight: true },
  { label: "Sadya Cut Mango Pickle", href: "#products" },
  { label: "Roasted Dry Prawn Masala Mix", href: "#products" },
  { label: "Hot & Sweet Dates & Lemon", href: "#products" },
  { label: "Coastal Fish & Meat Achar", href: "#products" },
];

const localNumber = WHATSAPP_NUMBER.startsWith("91")
  ? WHATSAPP_NUMBER.slice(2)
  : WHATSAPP_NUMBER;
const displayNumber = `+91 ${localNumber.slice(0, 5)} ${localNumber.slice(5)}`;

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#110C0A] text-[#F9F5EE] border-t border-secondary/25 overflow-hidden">
      {/* Subtle top brass accent line */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-secondary/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-12">
        {/* Top Provenance Banner */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-12 border-b border-white/10">
          <div className="flex items-center gap-4">
            <img
              src={logoImg}
              alt="MeerasEstuff — Something Special"
              className="w-14 h-14 rounded-full object-cover ring-2 ring-secondary/60 shadow-lg shrink-0"
            />
            <div>
              <div className="flex items-center gap-2.5">
                <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-white tracking-tight leading-none">
                  Meeras<span className="italic font-normal text-secondary">Estuff</span>
                </h3>
                <span className="hidden sm:inline-block px-2.5 py-0.5 border border-secondary/30 bg-secondary/10 font-body text-[9px] tracking-[0.22em] uppercase text-secondary">
                  Something Special
                </span>
              </div>
              <p className="font-heading text-sm sm:text-base italic text-white/65 mt-1">
                Traditional Kerala Food Varieties · Handcrafted in Small Batches
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={getWhatsAppUrl("Hello, I want to order MeerasEstuff Signature Garlic Pickle")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 bg-secondary text-secondary-foreground font-body text-xs font-semibold tracking-[0.15em] uppercase hover:bg-secondary/90 transition-colors"
            >
              <span>Order on WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="inline-flex items-center gap-2 px-4 py-3 border border-white/15 text-white/75 font-body text-xs tracking-[0.15em] uppercase hover:border-secondary hover:text-secondary transition-colors"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main 4-Column Architectural Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 py-14 border-b border-white/10">
          {/* Col 1: About & Philosophy (4 cols) */}
          <div className="lg:col-span-4 lg:pr-6">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary block mb-4">
              Our Kitchen Philosophy
            </span>
            <p className="font-body text-white/70 text-xs sm:text-sm leading-relaxed mb-6">
              Born in a Kerala home kitchen, <strong className="text-white font-medium">MeerasEstuff</strong> preserves the unhurried art of traditional pickle-making. From our flagship slow-matured <span className="text-secondary">Whole Garlic Pickle (വെളുത്തുള്ളി അച്ചാർ)</span> to coastal dry-prawn masalas, every jar is cured in pure cold-pressed gingelly oil with zero synthetic preservatives.
            </p>
            <div className="inline-flex items-center gap-3 px-3.5 py-2 border border-white/10 bg-white/[0.02]">
              <span className="w-2 h-2 rounded-full bg-whatsapp animate-pulse" />
              <span className="font-body text-[11px] tracking-[0.14em] uppercase text-white/75">
                Fresh Batches Dispatched Daily
              </span>
            </div>
          </div>

          {/* Col 2: Signature Varieties (3 cols) */}
          <div className="lg:col-span-3">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary block mb-4">
              Signature Jars
            </span>
            <ul className="space-y-2.5">
              {signatureVarieties.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={
                      item.highlight
                        ? "font-body text-xs text-white font-medium hover:text-secondary transition-colors flex items-center gap-2"
                        : "font-body text-xs text-white/65 hover:text-secondary transition-colors block"
                    }
                  >
                    {item.highlight && (
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    )}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Navigation Index (2 cols) */}
          <div className="lg:col-span-2">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary block mb-4">
              Explore
            </span>
            <nav className="flex flex-col space-y-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-body text-xs text-white/65 hover:text-secondary transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 4: Customer Care & Direct Desk (3 cols) */}
          <div className="lg:col-span-3">
            <span className="font-body text-[10px] font-semibold uppercase tracking-[0.24em] text-secondary block mb-4">
              Customer Care &amp; Orders
            </span>
            <div className="bg-[#19120E] border border-white/10 p-5 space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <span className="font-body text-[10px] uppercase tracking-[0.18em] text-white/45 block">
                    Customer Care / WhatsApp
                  </span>
                  <a
                    href={getWhatsAppUrl("Hello, I want to know more about MeerasEstuff pickles")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm font-semibold text-white hover:text-secondary transition-colors"
                  >
                    {displayNumber}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <Mail className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <span className="font-body text-[10px] uppercase tracking-[0.18em] text-white/45 block">
                    Email Desk
                  </span>
                  <a
                    href="mailto:meerasestuff@gmail.com"
                    className="font-body text-xs text-white/85 hover:text-secondary transition-colors break-all block"
                  >
                    meerasestuff@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-white/10">
                <MapPin className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                <div>
                  <span className="font-body text-[10px] uppercase tracking-[0.18em] text-white/45 block">
                    Origin
                  </span>
                  <span className="font-body text-xs text-white/80">
                    Kerala, South India
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar + Subtle Editorial Watermark */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/45 font-body text-xs">
          <p>
            © {new Date().getFullYear()} <span className="text-white/75">MeerasEstuff</span>. Crafted with love in Kerala. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-[10px] tracking-[0.2em] uppercase">
            <span>100% Homemade</span>
            <span className="text-secondary">·</span>
            <span>Cold-Pressed Oils</span>
            <span className="text-secondary">·</span>
            <span>Small Batch</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
