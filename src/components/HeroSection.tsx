import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToPromo = () => {
    const promoSection = document.getElementById("promo-section");
    promoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero-section" className="relative min-h-[85vh] flex items-center justify-center overflow-hidden gradient-pastel pt-16">
      {/* Decorative floating elements */}
      {/* Decorative floating elements removed */}

      <div className="container mx-auto px-4 py-16 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">

          <h1 className="text-5xl md:text-7xl font-bold text-white text-shadow-soft animate-fade-in">
            Amigos de Algodão
          </h1>

          <div className="inline-block">
            <p className="text-xl md:text-2xl font-semibold text-white/95">
              ‧₊˚🕷‧₊˚ Promoção de Halloween! ‧₊˚ ☾. ⋅
            </p>
          </div>

          <p className="text-lg md:text-xl text-white/90 font-medium italic max-w-2xl mx-auto">
            Seu patinho, suas roupinhas, sua magia
          </p>

          <div className="pt-8 animate-scale-in">
            <Button 
              variant="cta" 
              size="xl" 
              onClick={scrollToPromo}
              className="animate-float"
            >
              QUERO SABER MAIS
            </Button>
          </div>

        </div>
      </div>

      {/* Bottom wave decoration */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="hsl(var(--background))" fillOpacity="0.8"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
