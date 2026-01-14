
import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState('');

  // Função de Easing: EaseInOutQuart (A mesma do Header para consistência)
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

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === '#top') {
      animateScroll(0, 1200);
      return;
    }

    const element = document.getElementById(id.replace('#', ''));
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const targetY = elementPosition + window.pageYOffset - headerOffset;
      animateScroll(targetY, 1200);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validação simples de e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    setSubscribed(true);
    setEmail('');
    // Simula envio para API
    setTimeout(() => setSubscribed(false), 5000);
  };

  return (
    <footer className="pt-24 pb-12 px-6 border-t border-white/5 bg-[#010409] relative overflow-hidden">
      {/* Background Glow sutil */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div 
              className="flex items-center space-x-3 mb-8 group cursor-pointer" 
              onClick={() => animateScroll(0, 1500)}
            >
              <div className="bg-white px-2 py-0.5 rounded-lg shadow-lg flex items-center justify-center transition-all duration-300 group-hover:shadow-blue-500/40">
                <span className="text-[#1E3A8A] font-zen text-xs">SHC</span>
              </div>
              <span className="text-xl font-zen tracking-tighter text-white uppercase italic"></span>
            </div>
            <p className="text-slate-500 text-sm font-light leading-relaxed mb-6">
                Profissionalizando a logística brasileira com tecnologia SaaS de ponta. Sua operação, blindada.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.linkedin.com/company/shc-ti/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass-deep flex items-center justify-center border border-white/5 hover:border-blue-500/50 hover:text-blue-400 transition-all text-slate-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://wa.me/5574981094339" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass-deep flex items-center justify-center border border-white/5 hover:border-green-500/50 hover:text-green-400 transition-all text-slate-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Navegação</h4>
            <ul className="space-y-4 text-sm text-slate-500 font-light">
                <li><a href="#produto" onClick={(e) => handleLinkClick(e, '#produto')} className="hover:text-blue-400 transition-colors">Sistema SHC BOX</a></li>
                <li><a href="#recursos" onClick={(e) => handleLinkClick(e, '#recursos')} className="hover:text-blue-400 transition-colors">Recursos de Gestão</a></li>
                <li><a href="#contato" onClick={(e) => handleLinkClick(e, '#contato')} className="hover:text-blue-400 transition-colors">Falar com Consultor</a></li>
                <li><a href="#visual" onClick={(e) => handleLinkClick(e, '#visual')} className="hover:text-blue-400 transition-colors">Visão Operacional</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Canais de Contato</h4>
            <ul className="space-y-6 text-sm text-slate-500 font-light">
                <li className="flex flex-col group cursor-pointer" onClick={() => window.open('https://wa.me/5574981094339', '_blank')}>
                  <span className="text-[10px] text-slate-700 uppercase font-black tracking-widest group-hover:text-blue-500 transition-colors">WhatsApp Comercial</span>
                  <span className="text-white font-bold group-hover:translate-x-1 transition-transform inline-block">+55 (74) 98109-4339</span>
                </li>
                <li className="flex flex-col">
                  <span className="text-[10px] text-slate-700 uppercase font-black tracking-widest">E-mail Corporativo</span>
                  <a href="mailto:contato@shcsistemas.com.br" className="text-white font-bold hover:text-blue-400 transition-colors">contato@shcsistemas.com.br</a>
                </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-8">Novidades & Beta</h4>
            <p className="text-xs text-slate-500 mb-6 font-light">Receba o cronograma de liberação do BOX e garanta acesso antecipado.</p>
            {subscribed ? (
              <div className="bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs p-4 rounded-2xl animate-success flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                <span>E-mail cadastrado com sucesso!</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => {setEmail(e.target.value); setError('');}}
                    placeholder="Seu melhor e-mail" 
                    className={`bg-slate-900/80 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-xl px-4 py-3 text-xs text-white focus:outline-none focus:border-blue-500 flex-1 transition-all placeholder:text-slate-700`} 
                    required
                  />
                  <button 
                    type="submit"
                    className="bg-blue-600 p-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg active:scale-90"
                    aria-label="Inscrever-se"
                  >
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </button>
                </div>
                {error && <p className="text-[10px] text-red-500 font-bold ml-1">{error}</p>}
              </form>
            )}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-8">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <p className="text-slate-700 text-[10px] font-bold uppercase tracking-widest">© 2026 SHC TECNOLOGIA LTDA.</p>
            <div className="flex space-x-8">
               <button className="text-[10px] text-slate-700 uppercase font-black tracking-widest cursor-pointer hover:text-slate-400 transition-colors">Termos</button>
               <button className="text-[10px] text-slate-700 uppercase font-black tracking-widest cursor-pointer hover:text-slate-400 transition-colors">LGPD</button>
            </div>
          </div>
          
          <button 
            onClick={() => animateScroll(0, 1500)}
            className="group flex items-center gap-2 text-[10px] text-slate-500 font-black uppercase tracking-widest hover:text-white transition-colors"
          >
            Voltar ao Topo
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 group-hover:-translate-y-1 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/></svg>
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
