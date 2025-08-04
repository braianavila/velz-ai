import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play, ChevronRight } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/30 rotate-12 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/25 rotate-45 animate-pulse"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight">
            Pronto para transformar sua{' '}
            <span className="text-accent">estratégia digital?</span>
          </h2>
          
          <p className="text-white/90 text-lg leading-relaxed max-w-2xl mx-auto">
            Não deixe a concorrência sair na frente. A Velz AI está pronta para 
            revolucionar seus resultados. Cada dia sem nossa IA é uma oportunidade perdida.
          </p>

          {/* Strategic Message */}
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h3 className="font-display font-semibold text-xl mb-4">
              "Na Velz, cada ação é pensada como em um jogo de xadrez"
            </h3>
            <div className="space-y-4 text-white/90">
              <div className="flex items-center space-x-3">
                <span className="text-accent font-bold">VISUAL</span>
                <span>+</span>
                <span className="text-accent font-bold">COPY</span>
                <span>+</span>
                <span className="text-accent font-bold">FUNIL</span>
                <span>+</span>
                <span className="text-accent font-bold">CONVERSÃO</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Button variant="accent" size="hero" className="group shadow-glow">
              Fale Conosco
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="hero" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm group"
            >
              <Play className="w-5 h-5" />
              Ver Demonstração
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-12 space-y-4">
            <p className="text-white/70 text-sm">
              Junte-se a mais de 500+ empresas que já transformaram seus resultados
            </p>
            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              {/* Placeholder for client logos */}
              <div className="w-24 h-8 bg-white/20 rounded"></div>
              <div className="w-24 h-8 bg-white/20 rounded"></div>
              <div className="w-24 h-8 bg-white/20 rounded"></div>
              <div className="w-24 h-8 bg-white/20 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};