import { useEffect, useState } from "react";
import { Menu, ArrowUpRight } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/logo.jpg";

const navLinks = [
  { label: "Signature Garlic", href: "#signature-garlic" },
  { label: "The Pantry", href: "#products" },
  { label: "Craft & Heritage", href: "#about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Trade", href: "#trade" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300 border-b",
        scrolled
          ? "bg-background/95 backdrop-blur-md border-border py-3.5 shadow-sm"
          : "bg-transparent border-white/10 py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between">
        {/* Brand Wordmark + Emblem */}
        <a href="#home" className="group flex items-center gap-3">
          <img
            src={logoImg}
            alt="MeerasEstuff — Something Special"
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full object-cover ring-1 ring-secondary/50 shadow-sm shrink-0"
          />
          <div className="flex flex-col">
            <span
              className={cn(
                "font-heading text-2xl sm:text-[26px] font-semibold tracking-tight leading-none transition-colors",
                scrolled ? "text-foreground" : "text-[#F9F5EE]",
              )}
            >
              Meeras<span className="italic font-normal text-secondary">Estuff</span>
            </span>
            <span
              className={cn(
                "font-body text-[9px] tracking-[0.26em] uppercase mt-1 transition-colors",
                scrolled ? "text-muted-foreground" : "text-white/60",
              )}
            >
              Something Special · Kerala
            </span>
          </div>
        </a>

        {/* Editorial Desktop Nav */}
        <nav className="hidden md:flex items-center gap-9">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-xs font-medium tracking-[0.16em] uppercase transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-secondary hover:after:w-full after:transition-all",
                scrolled
                  ? "text-foreground/75 hover:text-foreground"
                  : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Direct Order Button */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={getWhatsAppUrl("Hello, I would like to order MeerasEstuff Signature Garlic Pickle")}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-5 py-2.5 text-xs font-body font-medium tracking-[0.14em] uppercase transition-all border",
              scrolled
                ? "bg-foreground text-background border-foreground hover:bg-primary hover:border-primary"
                : "bg-white/10 text-white border-white/25 backdrop-blur-sm hover:bg-secondary hover:text-foreground hover:border-secondary",
            )}
          >
            <span>Direct Order</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Drawer */}
        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className={cn(
                "md:hidden p-2 transition-colors",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              <Menu className="w-5 h-5" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background border-l border-border flex flex-col justify-between">
            <div>
              <SheetTitle className="font-heading text-2xl font-semibold text-left border-b border-border pb-4 flex items-center gap-3">
                <img
                  src={logoImg}
                  alt="MeerasEstuff logo"
                  className="w-10 h-10 rounded-full object-cover ring-1 ring-secondary/50 shrink-0"
                />
                <div>
                  Meeras<span className="italic font-normal text-primary">Estuff</span>
                  <span className="block font-body text-[9px] tracking-[0.24em] uppercase text-muted-foreground font-normal mt-0.5">
                    Something Special · Kerala
                  </span>
                </div>
              </SheetTitle>
              <nav className="flex flex-col gap-5 mt-8">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      className="font-heading text-2xl font-medium text-foreground hover:text-primary transition-colors flex items-center justify-between border-b border-border/50 pb-3"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground" />
                    </a>
                  </SheetClose>
                ))}
              </nav>
            </div>

            <div className="pt-6 border-t border-border">
              <p className="font-body text-xs text-muted-foreground mb-4">
                Fresh small-batch jars dispatched directly from our kitchen in Kerala.
              </p>
              <SheetClose asChild>
                <a
                  href={getWhatsAppUrl("Hello, I would like to order MeerasEstuff Signature Garlic Pickle")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex justify-center items-center gap-2 px-5 py-3.5 bg-foreground text-background font-body text-xs font-medium tracking-[0.16em] uppercase"
                >
                  <span>Order via WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
