import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-6 px-4 bg-background border-t border-border/40">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm font-semibold text-foreground">Amigos de Algodão</p>
            <p className="text-xs text-foreground/60">Seu patinho, suas roupinhas, sua magia</p>
          </div>

          <a
            href="https://www.instagram.com/amigos_de_algodao_oficial?igsh=MTlvbDg4N3JrMHR5dQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-foreground/80 hover:text-foreground transition-colors"
          >
            <Instagram className="w-4 h-4" />
            <span className="text-sm font-medium">@amigos_de_algodao_oficial</span>
          </a>
        </div>

        <div className="mt-4 pt-4 border-t border-border/40 text-center">
          <p className="text-xs text-foreground/50">© 2024 Amigos de Algodão. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
