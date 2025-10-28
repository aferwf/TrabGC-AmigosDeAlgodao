import { Button } from "@/components/ui/button";
import halloweenDucks from "@/assets/halloween-ducks-new.jpg";

const PromoSection = () => {
  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    formSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="promo-section" className="py-20 px-4 bg-background relative overflow-hidden">

      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-8 order-2 md:order-1">
            <div className="inline-block">
              <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
                Receba uma receita gratuita!
              </h2>
              <div className="h-2 w-32 bg-gradient-to-r from-primary via-accent to-secondary rounded-full"></div>
            </div>

            <div className="space-y-4 text-lg text-foreground/80">
              <p className="leading-relaxed">
                Ao se inscrever, você vai receber <span className="font-bold text-primary">gratuitamente</span> a receita do <span className="font-bold">Kit de Amigurumi de Patinhos - Edição Halloween!</span>
              </p>
              
              <p className="leading-relaxed">
                <span className="font-bold text-primary">Promoção exclusiva do mês de outubro!</span>
              </p>

              <p className="font-bold text-secondary text-xl">
                Crie seus próprios patinhos fofos com fantasias de Halloween!
              </p>

              <ul className="space-y-3 pt-4 list-disc list-inside">
                <li>Receita completa passo a passo</li>
                <li>Fantasias temáticas de Halloween</li>
                <li>Material exclusivo e gratuito</li>
              </ul>
            </div>

            <Button 
              variant="hero" 
              size="xl" 
              onClick={scrollToForm}
              className="w-full md:w-auto"
            >
              RESGATAR SEU CUPOM
            </Button>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <img 
                src={halloweenDucks} 
                alt="Patinhos de crochê com fantasias de Halloween - morcego, abóbora, múmia, gatinho e monstros" 
                className="w-full h-auto object-contain"
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoSection;
