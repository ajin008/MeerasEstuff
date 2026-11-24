import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import logoImg from "@/assets/logo.jpg";

const navLinks = [
  { label: "Signature Garlic", href: "#signature-garlic" },
  { label: "Complete Pantry", href: "#products" },
  { label: "Craft & Heritage", href: "#about" },
  { label: "The Standard", href: "#why-us" },
  { label: "Patron Notes", href: "#reviews" },
  { label: "Trade Enquiries", href: "#trade" },
];

const displayNumber = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 7)} ${WHATSAPP_NUMBER.slice(7)}`;

const Footer = () => {
  return (
    <footer className="bg-[#0F0A08] text-[#F9F5EE] pt-16 pb-12 px-6 lg:px-10">
      <div className="max-w-7xl mx-auto grid sm:grid-cols-12 gap-12 pb-14 border-b border-white/10">
        <div className="sm:col-span-5">
          <div className="flex items-center gap-3.5 mb-3">
            <img
              src={logoImg}
              alt="MeerasEstuff — Something Special"
              className="w-12 h-12 rounded-full object-cover ring-1 ring-secondary/50 shadow-md shrink-0"
            />
            <div>
              <h3 className="font-heading text-2xl sm:text-3xl font-medium text-white leading-none">
                Meeras<span className="italic font-normal text-secondary">Estuff</span>
              </h3>
              <p className="font-body text-[10px] tracking-[0.24em] uppercase text-secondary/80 mt-1">
                Something Special · Kerala
              </p>
            </div>
          </div>
          <p className="font-body text-white/65 text-xs sm:text-sm leading-relaxed max-w-sm mt-3">
            Home of our signature slow-cured Whole Garlic Pickle (Veluthulli
            Achar), traditional Sadya preserves, and coastal non-veg delicacies
            handcrafted in Kerala.
          </p>
        </div>

        <div className="sm:col-span-4">
          <h4 className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary mb-4">
            Index
          </h4>
          <nav className="grid grid-cols-2 gap-y-2.5 gap-x-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-white/65 text-xs hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="sm:col-span-3">
          <h4 className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-secondary mb-4">
            Dispatch &amp; Desk
          </h4>
          <p className="font-body text-white/65 text-xs mb-3">
            Kerala, South India
          </p>
          <a
            href={getWhatsAppUrl("Hello, I want to know more about MeerasEstuff pickles")}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-body text-white text-xs font-medium tracking-wide hover:text-secondary transition-colors"
          >
            WhatsApp: {displayNumber}
          </a>
          <a
            href="mailto:meerasestuff1974@gmail.com"
            className="block font-body text-white/65 text-xs mt-2 hover:text-secondary transition-colors"
          >
            meerasestuff1974@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/40 font-body text-[11px]">
        <p>© 2026 MeerasEstuff. Handcrafted in Kerala. All rights reserved.</p>
        <p className="tracking-[0.18em] uppercase text-[10px]">
          Small Batch · Zero Synthetic Preservatives
        </p>
      </div>
    </footer>
  );
};

export default Footer;
