import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Phone, Menu, X, ArrowUp } from "lucide-react"; // Facebook retiré pour éviter warning
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { path: "/", label: "Accueil" },
    { path: "/a-propos", label: "À Propos" },
    { path: "/services", label: "Services" },
    { path: "/realisations", label: "Réalisations" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-background/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" data-testid="link-home">
              <div className="flex items-center gap-3 hover-elevate active-elevate-2 px-4 py-2 rounded-md cursor-pointer transition-transform">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src="/images/logo.png" // <-- Nouveau logo sans background
                    alt="Logo Delage Mécanique"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xl font-bold text-foreground leading-tight">
                    Delage Mécanique
                  </div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">
                    Inc.
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} asChild>
                  <Button
                    variant="ghost"
                    className={`${
                      location === link.path
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }`}
                    data-testid={`link-nav-${link.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
            </nav>

            {/* Desktop Phone */}
            <div className="hidden md:block">
              <Button variant="default" className="gap-2" asChild>
                <a href="tel:4188458551" data-testid="button-call-desktop">
                  <Phone className="w-4 h-4" />
                  (418) 845-8551
                </a>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background/98 backdrop-blur-md border-t">
            <nav className="px-4 py-6 space-y-2">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path} asChild>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-lg ${
                      location === link.path
                        ? "bg-accent text-accent-foreground"
                        : ""
                    }`}
                    data-testid={`link-nav-mobile-${link.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                  >
                    {link.label}
                  </Button>
                </Link>
              ))}
              <Button
                variant="default"
                className="w-full gap-2 mt-4"
                asChild
                data-testid="button-call-mobile"
              >
                <a href="tel:4188458551">
                  <Phone className="w-4 h-4" />
                  (418) 845-8551
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1 pt-20">{children}</main>

      {/* Footer */}
      <footer className="bg-card border-t mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 flex items-center justify-center">
                  <img
                    src="/images/logo.png" // <-- Logo mis à jour ici aussi
                    alt="Logo Delage Mécanique"
                    className="object-contain w-full h-full"
                  />
                </div>
                <div>
                  <div className="text-lg font-bold text-card-foreground">
                    Delage Mécanique Inc.
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Votre confiance nous tient à cœur. Service automobile
                professionnel à Québec depuis des années.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">
                Liens rapides
              </h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path}>
                      <span
                        className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
                        data-testid={`link-footer-${link.label
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                      >
                        {link.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-card-foreground mb-4">
                Contactez-nous
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <a
                    href="tel:4188458551"
                    className="hover:text-primary transition-colors"
                    data-testid="link-footer-phone"
                  >
                    <Phone className="w-4 h-4 inline mr-2" />
                    (418) 845-8551
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@delagemecanique.com"
                    className="hover:text-primary transition-colors"
                    data-testid="link-footer-email"
                  >
                    info@delagemecanique.com
                  </a>
                </li>
                <li>2660 Bd Bastien, Québec, QC G2B 1A5</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Delage Mécanique Inc. Tous droits
            réservés.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          size="icon"
          className="fixed bottom-8 right-8 rounded-full shadow-xl z-40"
          onClick={scrollToTop}
          data-testid="button-back-to-top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}
    </div>
  );
}
