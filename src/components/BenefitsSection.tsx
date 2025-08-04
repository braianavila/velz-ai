import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Brain, 
  Target, 
  Zap, 
  Shield, 
  BarChart3, 
  Rocket,
  CheckCircle,
  TrendingUp
} from 'lucide-react';

export const BenefitsSection: React.FC = () => {
  const benefits = [
    {
      icon: Brain,
      title: "Inteligência Estratégica",
      description: "IA que pensa como um estrategista, analisando dados e propondo soluções inteligentes para cada cenário de negócio.",
      stats: "95% de precisão"
    },
    {
      icon: Target,
      title: "Performance Direcionada",
      description: "Foco total em resultados mensuráveis. Cada ação é pensada para maximizar o ROI e acelerar o crescimento.",
      stats: "+180% ROI médio"
    },
    {
      icon: Zap,
      title: "Respostas Instantâneas",
      description: "Soluções em tempo real, sem espera. A velocidade da IA combinada com a precisão estratégica.",
      stats: "< 2s resposta"
    },
    {
      icon: Shield,
      title: "Segurança e Confiança",
      description: "Proteção total dos dados com criptografia avançada e compliance com todas as regulamentações.",
      stats: "100% seguro"
    },
    {
      icon: BarChart3,
      title: "Analytics Avançado",
      description: "Relatórios inteligentes que revelam insights ocultos e oportunidades de crescimento.",
      stats: "+50 métricas"
    },
    {
      icon: Rocket,
      title: "Escalabilidade Total",
      description: "Cresce junto com seu negócio. Da startup à enterprise, sempre com performance otimizada.",
      stats: "∞ escalável"
    }
  ];

  return (
    <section id="benefits" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Por que escolher a{' '}
            <span className="text-primary">Velz AI?</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-3xl mx-auto">
            Transformamos complexidade em simplicidade, dados em insights e estratégias em resultados. 
            Nossa IA não apenas responde - ela antecipa, planeja e executa.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-velz transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-md bg-card"
            >
              <CardContent className="p-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <span className="text-xs font-bold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {benefit.stats}
                    </span>
                  </div>
                  
                  <h3 className="font-semibold text-xl text-foreground group-hover:text-primary transition-colors">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Section */}
        <div className="bg-gradient-dark rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h3 className="font-display font-bold text-2xl lg:text-3xl">
                Resultados que falam por si
              </h3>
              <p className="text-white/90 leading-relaxed">
                Empresas que escolheram a Velz AI não apenas melhoraram seus resultados - 
                elas revolucionaram completamente sua abordagem digital.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Implementação em menos de 7 dias</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>ROI positivo no primeiro mês</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Suporte 24/7 especializado</span>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <TrendingUp className="w-6 h-6 text-accent mr-2" />
                  <span className="font-display font-bold text-3xl text-accent">234%</span>
                </div>
                <p className="text-white/80 text-sm">Aumento médio no ROI</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Target className="w-6 h-6 text-accent mr-2" />
                  <span className="font-display font-bold text-3xl text-accent">89%</span>
                </div>
                <p className="text-white/80 text-sm">Melhoria em conversões</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Zap className="w-6 h-6 text-accent mr-2" />
                  <span className="font-display font-bold text-3xl text-accent">1.8s</span>
                </div>
                <p className="text-white/80 text-sm">Tempo médio de resposta</p>
              </div>
              
              <div className="text-center">
                <div className="flex items-center justify-center mb-2">
                  <Shield className="w-6 h-6 text-accent mr-2" />
                  <span className="font-display font-bold text-3xl text-accent">100%</span>
                </div>
                <p className="text-white/80 text-sm">Uptime garantido</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};