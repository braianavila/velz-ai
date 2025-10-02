import { Brain, Rocket, Shield, BarChart3, Users, Sparkles } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const benefits = [
  {
    icon: Brain,
    title: "IA Estratégica",
    description: "Soluções inteligentes que aprendem com seu negócio e otimizam processos automaticamente",
    stat: "40% mais eficiência"
  },
  {
    icon: Rocket,
    title: "Performance Acelerada",
    description: "Aplicações otimizadas para velocidade máxima e experiência excepcional",
    stat: "3x mais rápido"
  },
  {
    icon: Shield,
    title: "Segurança Total",
    description: "Proteção avançada de dados com as melhores práticas do mercado",
    stat: "99.9% uptime"
  },
  {
    icon: BarChart3,
    title: "Análise em Tempo Real",
    description: "Dashboards inteligentes que transformam dados em decisões estratégicas",
    stat: "+200 métricas"
  },
  {
    icon: Users,
    title: "Time Especializado",
    description: "Profissionais experientes dedicados ao sucesso do seu projeto",
    stat: "15+ anos experiência"
  },
  {
    icon: Sparkles,
    title: "Inovação Contínua",
    description: "Sempre à frente com as últimas tecnologias e tendências do mercado",
    stat: "100% atualizado"
  }
];

const BenefitsSection = () => {
  return (
    <section id="beneficios" className="py-20 px-4 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-display font-semibold inline-block">
            BENEFÍCIOS
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-black text-foreground">
            Por que escolher a <span className="text-primary">Velz Hub</span>?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            No xadrez e no marketing, quem joga só pela aparência... perde rápido.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card 
              key={index} 
              className="border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 group bg-card"
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <div className="p-3 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-display font-bold text-primary">
                    {benefit.stat}
                  </span>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-display font-bold text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
