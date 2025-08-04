import React from 'react';
import { Button } from '@/components/ui/button';
import { VelzLogo } from './VelzLogo';

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <VelzLogo size="md" variant="dark" />
            <span className="font-display font-bold text-xl text-velz-dark">
              Velz AI
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#solutions" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Soluções
            </a>
            <a 
              href="#benefits" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Benefícios
            </a>
            <a 
              href="#resources" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Recursos
            </a>
            <a 
              href="#contact" 
              className="text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
            >
              Contato
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
              Entrar
            </Button>
            <Button variant="hero" size="sm">
              Demonstração
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};