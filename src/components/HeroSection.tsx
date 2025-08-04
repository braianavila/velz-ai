import React from 'react';
import { Button } from '@/components/ui/button';
import { Play, ChevronRight, Brain, Target, Zap } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-20 h-20 border border-white/30 rotate-45"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white/20 rotate-12"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border border-white/25 rotate-45"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/15 rotate-12"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="text-white space-y-8">
            <div className="space-y-2">
              <p className="text-accent font-medium tracking-wide uppercase text-sm">
                INTELIGÊNCIA ARTIFICIAL
              </p>
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight">
                IA criada para{' '}
                <span className="text-accent">impulsionar</span>{' '}
                soluções digitais
              </h1>
            </div>
            
            <p className="text-white/90 text-lg leading-relaxed max-w-2xl">
              A Velz AI é a inteligência que alimenta estratégias digitais completas. 
              Capacitando empresas com soluções instantâneas e personalizadas que 
              transformam performance em resultados reais.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white/90 font-medium">IA Estratégica</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white/90 font-medium">Performance</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-accent" />
                </div>
                <span className="text-white/90 font-medium">Resultados</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="accent" size="hero" className="group">
                Fale com nossa equipe
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <Play className="w-5 h-5" />
                Assista ao vídeo
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-glow">
              {/* Chess piece or strategic visual would go here */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
                  <span className="text-white text-sm">IA analisando estratégias em tempo real</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-accent text-sm font-medium">Performance Digital</span>
                      <span className="text-white text-sm">+145%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-4/5 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-accent text-sm font-medium">Conversões</span>
                      <span className="text-white text-sm">+89%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                  
                  <div className="bg-white/5 rounded-lg p-4 border border-white/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-accent text-sm font-medium">ROI</span>
                      <span className="text-white text-sm">+234%</span>
                    </div>
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div className="bg-accent h-2 rounded-full w-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};