import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Products", href: "#products" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-40 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur shadow-md py-3"
          : "bg-transparent py-6",
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className={cn(
            "font-heading text-xl sm:text-2xl font-bold tracking-tight transition-colors",
            scrolled ? "text-foreground" : "text-white",
          )}
        >
          Meeras<span className="text-secondary">Estuff</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "font-body text-sm font-semibold tracking-wide uppercase transition-colors",
                scrolled
                  ? "text-foreground/70 hover:text-primary"
                  : "text-white/80 hover:text-white",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={getWhatsAppUrl("Hello, I want to know more about MeerasEstuff pickles")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-whatsapp text-whatsapp-foreground font-body text-sm font-bold tracking-wide uppercase shadow-md hover:opacity-90 transition-opacity"
        >
          Order on WhatsApp
        </a>

        <Sheet>
          <SheetTrigger asChild>
            <button
              type="button"
              aria-label="Open menu"
              className={cn(
                "md:hidden p-2 rounded-md transition-colors",
                scrolled ? "text-foreground" : "text-white",
              )}
            >
              <Menu className="w-6 h-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-background">
            <SheetTitle className="font-heading text-2xl font-bold">
              Meeras<span className="text-primary">Estuff</span>
            </SheetTitle>
            <nav className="flex flex-col gap-6 mt-10">
              {navLinks.map((link) => (
                <SheetClose asChild key={link.href}>
                  <a
                    href={link.href}
                    className="font-body text-lg font-semibold uppercase tracking-wide text-foreground/80 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <a
                  href={getWhatsAppUrl("Hello, I want to know more about MeerasEstuff pickles")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center px-5 py-3 rounded-full bg-whatsapp text-whatsapp-foreground font-body text-sm font-bold tracking-wide uppercase shadow-md"
                >
                  Order on WhatsApp
                </a>
              </SheetClose>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Header;
