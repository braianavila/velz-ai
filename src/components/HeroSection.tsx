import { Button } from "./ui/button";
import { ArrowRight, Zap, Target, TrendingUp } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/5" />
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-display font-semibold">
                INTELIGÊNCIA ARTIFICIAL
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-display font-black text-foreground leading-tight">
              IA criada para{" "}
              <span className="text-primary">impulsionar</span> suas soluções digitais
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Transforme sua marca em uma jogadora estratégica. Conectamos inteligência, performance e design para resultados que não sustentam a partida — mas dominam o jogo.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Fale com a equipe
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                Assista ao vídeo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Zap className="h-5 w-5" />
                  <span className="text-2xl font-display font-bold">98%</span>
                </div>
                <p className="text-sm text-muted-foreground">Agilidade em entregas</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <Target className="h-5 w-5" />
                  <span className="text-2xl font-display font-bold">100%</span>
                </div>
                <p className="text-sm text-muted-foreground">Foco em resultados</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-primary">
                  <TrendingUp className="h-5 w-5" />
                  <span className="text-2xl font-display font-bold">150%</span>
                </div>
                <p className="text-sm text-muted-foreground">ROI médio</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary via-secondary to-accent p-1">
              <div className="h-full w-full bg-background rounded-xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary">
                    <svg viewBox="0 0 100 100" className="w-12 h-12" fill="currentColor">
                      <path d="M30 20 L50 60 L40 60 L20 20 Z" />
                      <path d="M50 60 L70 20 L60 20 L40 60 Z" />
                      <path d="M35 65 L45 65 L50 75 L55 65 L65 65 L50 90 Z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-xl font-bold">Velz Hub</h3>
                  <p className="text-muted-foreground">
                    Onde inteligência encontra performance
                  </p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
