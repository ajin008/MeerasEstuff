const Footer = () => {
  return (
    <footer className="bg-foreground py-16 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="text-center md:text-left">
          <h3 className="font-heading text-background text-2xl font-light mb-1">
            MeerasEstuff
          </h3>
          <p className="font-body text-background/50 text-sm">
            Kerala, India
          </p>
        </div>

        <nav className="flex gap-8">
          {["Home", "Products", "About", "Contact"].map((link) => (
            <a
              key={link}
              href={link === "Home" ? "#" : link === "Products" ? "#products" : "#"}
              className="font-body text-background/60 text-sm tracking-wider uppercase hover:text-background transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>

      <div className="max-w-5xl mx-auto mt-12 pt-8 border-t border-background/10 text-center">
        <p className="font-body text-background/40 text-xs">
          © 2026 MeerasEstuff. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
