import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";

const InstagramSection = () => {
  return (
    <section className="relative min-h-[28vh] flex items-center justify-center overflow-hidden gradient-pastel py-12">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-3xl mx-auto space-y-6">
          
          <h2 className="text-3xl md:text-4xl font-bold text-white text-shadow-soft animate-fade-in">
            Não Perca as Próximas Promoções!
          </h2>

          <p className="text-lg md:text-xl text-white/90 font-medium">
            Siga nosso Instagram e fique por dentro de todas as novidades
          </p>

          <div className="pt-4">
            <Button 
              variant="cta" 
              size="lg"
              onClick={() => window.open('https://www.instagram.com/amigos_de_algodao_oficial?igsh=MTlvbDg4N3JrMHR5dQ==', '_blank')}
              className="gap-3"
            >
              <Instagram className="w-5 h-5" />
              Seguir no Instagram
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
