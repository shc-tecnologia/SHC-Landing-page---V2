
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
      const headerOffset = 100;
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

  const textOffset = Math.min(scrollY * 0.08, 6);
  const headerScale = Math.max(1 - scrollY * 0.0002, 0.98);

  return (
    <>
      <header 
        className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-4 md:p-6 transition-all duration-500"
        style={{ 
          transform: `scale(${headerScale})`,
          paddingTop: scrollY > 50 ? '1rem' : '1.5rem'
        }}
      >
        <nav className={`glass-deep w-full max-w-7xl px-6 md:px-12 py-4 rounded-[2rem] flex items-center justify-between shadow-2xl relative transition-all duration-500 ${scrollY > 50 ? 'border-blue-500/30 shadow-blue-500/10' : 'border-white/10'}`}>
          <div 
            className="flex items-center cursor-pointer group" 
            onClick={(e) => {
              animateScroll(0, 1000);
              setIsMobileMenuOpen(false);
            }}
          >
            <div 
              className="bg-white px-3 py-1 rounded-xl shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-blue-500/40 group-hover:-translate-y-0.5 will-change-transform"
              style={{ transform: `translateY(${textOffset}px)` }}
            >
              <span className="font-zen text-xl md:text-2xl tracking-tighter text-[#1E3A8A] flex items-start leading-none">
                SHC
                <span className="text-[8px] md:text-[10px] ml-0.5 mt-0.5 font-sans font-bold">®</span>
              </span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-12 text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="hover:text-white transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center space-x-4">
              <button 
                onClick={() => handleActionClick(onLogin, 'login')}
                className={`text-xs font-black text-slate-500 hover:text-white transition-all uppercase tracking-widest relative group ${activeBtn === 'login' ? 'animate-click text-white' : ''}`}
              >
                Acesso Gestor
              </button>
              <button 
                onClick={() => handleActionClick(onSignUp, 'signup')}
                className={`btn-animate text-white px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-blue-900/40 active:scale-95 border border-white/10 shimmer-effect ${activeBtn === 'signup' ? 'animate-click' : ''}`}
              >
                Lista de Espera
              </button>
            </div>

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

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-4 right-4 z-[55] glass-deep p-8 rounded-[2.5rem] shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300">
            <div className="flex flex-col space-y-6 text-center">
              {navLinks.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href} 
                  className="text-lg font-bold text-slate-300 hover:text-white transition-colors"
                  onClick={(e) => scrollToSection(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <hr className="border-white/10" />
              <button 
                onClick={() => handleActionClick(onLogin, 'login-mob')}
                className={`text-sm font-black text-slate-400 uppercase tracking-widest py-2 transition-transform ${activeBtn === 'login-mob' ? 'animate-click' : ''}`}
              >
                Acesso Gestor
              </button>
              <button 
                onClick={() => handleActionClick(onSignUp, 'signup-mob')}
                className={`btn-animate text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs shadow-lg shadow-blue-900/40 shimmer-effect ${activeBtn === 'signup-mob' ? 'animate-click' : ''}`}
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
