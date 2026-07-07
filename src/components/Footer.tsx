import { getWhatsAppUrl, WHATSAPP_NUMBER } from "@/lib/whatsapp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
  { label: "Trade Enquiry", href: "#trade" },
];

const displayNumber = `+${WHATSAPP_NUMBER.slice(0, 2)} ${WHATSAPP_NUMBER.slice(2, 7)} ${WHATSAPP_NUMBER.slice(7)}`;

const Footer = () => {
  return (
    <footer className="relative bg-foreground pt-16 pb-10 px-6">
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-cta" />

      <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-12 text-center sm:text-left">
        <div>
          <h3 className="font-heading text-background text-2xl font-bold mb-2">
            Meeras<span className="text-secondary">Estore</span>
          </h3>
          <p className="font-body text-background/60 text-sm leading-relaxed">
            Authentic homemade Kerala pickles, crafted with love and
            traditional recipes.
          </p>
        </div>

        <div>
          <h4 className="font-heading text-background text-sm font-bold uppercase tracking-wider mb-4">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-background/60 text-sm hover:text-secondary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <h4 className="font-heading text-background text-sm font-bold uppercase tracking-wider mb-4">
            Get In Touch
          </h4>
          <p className="font-body text-background/60 text-sm mb-2">
            Kerala, India
          </p>
          <a
            href={getWhatsAppUrl("Hello, I want to know more about MeerasEstore pickles")}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-body text-secondary text-sm font-semibold hover:underline"
          >
            {displayNumber}
          </a>
          <a
            href="mailto:meerasestuff1974@gmail.com"
            className="block font-body text-background/60 text-sm mt-2 hover:text-secondary transition-colors"
          >
            meerasestuff1974@gmail.com
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-background/10 text-center">
        <p className="font-body text-background/40 text-xs">
          © 2026 MeerasEstore. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
