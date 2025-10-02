import { Button } from "./ui/button";
import VelzLogo from "./VelzLogo";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3">
            <VelzLogo className="h-10 w-10 text-primary" />
            <span className="font-display text-2xl font-bold text-foreground">
              Velz Hub
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#solucoes" className="text-foreground hover:text-primary transition-colors">
              Soluções
            </a>
            <a href="#beneficios" className="text-foreground hover:text-primary transition-colors">
              Benefícios
            </a>
            <a href="#contato" className="text-foreground hover:text-primary transition-colors">
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden sm:inline-flex">
              Fale Conosco
            </Button>
            <Button>
              Começar Agora
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
