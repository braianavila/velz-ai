import VelzLogo from "./VelzLogo";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <VelzLogo className="h-8 w-8" />
              <span className="font-display text-xl font-bold">
                Velz Hub
              </span>
            </div>
            <p className="text-sm text-accent-foreground/80">
              Conectamos inteligência, performance e design para resultados que dominam o jogo.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">Soluções</h3>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">IA Estratégica</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Marketing Digital</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Desenvolvimento</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Design & UX</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">Empresa</h3>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cases</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Carreiras</a></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-bold text-lg">Contato</h3>
            <ul className="space-y-2 text-sm text-accent-foreground/80">
              <li><a href="#" className="hover:text-primary transition-colors">Fale Conosco</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Parcerias</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Imprensa</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-accent-foreground/20 text-center text-sm text-accent-foreground/60">
          <p>© 2025 Velz Hub. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
