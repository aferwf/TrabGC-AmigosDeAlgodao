import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/20 shadow-md">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Amigos de Algodão" className="h-10 w-auto" />
            <h1 className="text-lg md:text-xl font-semibold text-foreground hidden sm:block">
              Amigos de Algodão
            </h1>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            <button
              onClick={() => scrollToSection("hero-section")}
              className="text-xs md:text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Início
            </button>
            <button
              onClick={() => scrollToSection("promo-section")}
              className="text-xs md:text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Promoção
            </button>
            <button
              onClick={scrollToForm}
              className="text-xs md:text-sm text-foreground/70 hover:text-foreground transition-colors"
            >
              Formulário
            </button>
            <a
              href="https://www.instagram.com/amigos_de_algodao_oficial?igsh=MTlvbDg4N3JrMHR5dQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <Button
              variant="cta"
              size="sm"
              onClick={scrollToForm}
              className="text-xs px-3 py-1 h-7"
            >
              Resgatar Cupom
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
