import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-10" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground">
              Na Velz, cada ação é pensada como em um{" "}
              <span className="text-primary">jogo de xadrez</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              <span className="font-display font-bold text-foreground">
                Visual + Copy + Funil + Conversão.
              </span>
              <br />
              Quer transformar sua marca em uma jogadora estratégica?
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="gap-2 text-base">
              Fale Conosco
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Ver Demonstração
            </Button>
          </div>

          <div className="pt-8 flex items-center justify-center gap-8 flex-wrap text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-primary rounded-full" />
              Sem setup complexo
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-primary rounded-full" />
              Suporte 24/7
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 bg-primary rounded-full" />
              Resultados garantidos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
