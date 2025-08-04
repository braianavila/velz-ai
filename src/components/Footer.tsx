import React from 'react';
import { VelzLogo } from './VelzLogo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-velz-dark text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <VelzLogo size="lg" variant="light" />
              <span className="font-display font-bold text-2xl">Velz AI</span>
            </div>
            <p className="text-white/80 leading-relaxed max-w-md mb-6">
              Conectando inteligência, crescimento e performance digital. 
              Cada estratégia é uma jogada pensada para o sucesso.
            </p>
            <div className="flex space-x-4">
              {/* Social links placeholder */}
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Li</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Tw</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Ig</span>
              </div>
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Soluções</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">IA Estratégica</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Performance Digital</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Analytics Avançado</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Automação</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Empresa</h4>
            <ul className="space-y-3 text-white/80">
              <li><a href="#" className="hover:text-accent transition-colors">Sobre</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Carreira</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contato</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Velz AI. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Termos
            </a>
            <a href="#" className="text-white/60 hover:text-accent text-sm transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};