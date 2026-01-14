
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onSignUp: () => void;
  onLogin: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSignUp, onLogin }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const easeInOutQuart = (t: number): number => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  const animateScroll = (targetY: number, duration: number = 1000) => {
    const startY = window.pageYOffset;
    const difference = targetY - startY;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeInOutQuart(progress);

      window.scrollTo(0, startY + difference * easedProgress);

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const headerOffset = 80; // Ajustado para o novo header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const targetY = elementPosition + window.pageYOffset - headerOffset;
      animateScroll(targetY, 1200);
    }
  };

  const handleActionClick = (action: () => void, btnId: string) => {
    setActiveBtn(btnId);
    setTimeout(() => {
      setActiveBtn(null);
      action();
    }, 150);
  };

  const navLinks = [
    { label: 'O Sistema', href: '#recursos' },
    { label: 'Por dentro do BOX', href: '#produto' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 border-b ${
          scrollY > 20 
            ? 'glass-deep py-3 border-white/10 shadow-xl' 
            : 'bg-transparent py-6 border-transparent'
        }`}
      >
        <nav className="w-full max-w-[100%] px-6 md:px-12 lg:px-20 flex items-center justify-between">
          {/* Logo Section */}
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={(e) => {
              animateScroll(0, 1000);
              setIsMobileMenuOpen(false);
            }}
          >
            <div className="flex items-center">
              <div className="bg-white px-4 py-1.5 rounded-sm shadow-lg flex items-center justify-center transition-all duration-300 group-hover:bg-blue-600">
                <span className="font-zen text-xl md:text-2xl tracking-tighter text-[#1E3A8A] group-hover:text-white transition-colors leading-none flex items-start">
                  SHC
                  <span className="text-[10px] ml-0.5 mt-[-2px] font-sans font-bold">®</span>
                </span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-10 text-[11px] font-bold uppercase tracking-[0.25em] text-slate-400">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-white transition-colors relative group py-2"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* CTA Actions */}
          <div className="flex items-center space-x-6">
            <div className="hidden lg:flex items-center space-x-8">
              <button 
                onClick={() => handleActionClick(onLogin, 'login')}
                className={`text-[11px] font-black text-slate-500 hover:text-white transition-all uppercase tracking-[0.2em] relative group ${activeBtn === 'login' ? 'animate-click text-white' : ''}`}
              >
                Painel Gestor
              </button>
              <button 
                onClick={() => handleActionClick(onSignUp, 'signup')}
                className={`btn-animate text-white px-10 py-3.5 rounded-sm text-[11px] font-black uppercase tracking-[0.2em] transition-all shadow-xl shadow-blue-900/40 active:scale-95 border-t border-white/20 shimmer-effect ${activeBtn === 'signup' ? 'animate-click' : ''}`}
              >
                Lista de Espera
              </button>
            </div>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-white transition-transform active:scale-90"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </nav>

        {/* Mobile Menu (Overlay) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 z-[55] glass-deep border-b border-white/10 p-10 animate-in slide-in-from-top-4 fade-in duration-300">
            <div className="flex flex-col space-y-8 text-center max-w-sm mx-auto">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-xl font-bold text-slate-300 hover:text-white transition-colors uppercase tracking-widest"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/10" />
              <button 
                onClick={() => handleActionClick(onLogin, 'login-mob')}
                className={`text-xs font-black text-slate-400 uppercase tracking-widest py-2 transition-transform ${activeBtn === 'login-mob' ? 'animate-click text-white' : ''}`}
              >
                Acesso Gestor
              </button>
              <button 
                onClick={() => handleActionClick(onSignUp, 'signup-mob')}
                className={`btn-animate text-white py-5 rounded-sm font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-900/40 shimmer-effect ${activeBtn === 'signup-mob' ? 'animate-click' : ''}`}
              >
                Lista de Espera
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
