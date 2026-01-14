
import React, { useState } from 'react';

interface HeroProps {
  onSignUp: () => void;
}

const Hero: React.FC<HeroProps> = ({ onSignUp }) => {
  const [activeBtn, setActiveBtn] = useState<string | null>(null);

  // Utilizamos o caminho direto do arquivo na raiz. 
  // Em ambientes Vite/React, arquivos na raiz do projeto ou na pasta public 
  // são servidos diretamente pelo caminho '/delivery_img.png'
  const deliveryImgPath = '/delivery_img.png';

  const handleAction = (type: 'signup' | 'product') => {
    setActiveBtn(type);
    
    // Pequeno atraso para a animação visual antes da ação real
    setTimeout(() => {
      setActiveBtn(null);
      if (type === 'signup') {
        onSignUp();
      } else {
        const element = document.getElementById('produto');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }, 150);
  };

  return (
    <section className="relative pt-48 pb-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left z-10">
          <div className="reveal inline-flex items-center space-x-3 px-4 py-2 mb-8 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[10px] font-black uppercase tracking-[0.3em]">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></span>
            <span>SHC BOX - Software de gestão</span>
          </div>
          
          <h1 className="reveal delay-100 font-modern text-6xl md:text-8xl font-black text-white mb-8 leading-tight tracking-tighter">
            SUAS ENTREGAS <br/> 
            <span className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 pr-6 py-2 -mr-6">
              DENTRO DA <span className="italic">BOX.</span>
            </span>
          </h1>
          
          <p className="reveal delay-200 max-w-xl mx-auto lg:mx-0 text-slate-400 text-lg md:text-xl font-light leading-relaxed mb-12">
            O <strong className="text-white font-bold">SHC BOX</strong> é o sistema definitivo para centralizar a gestão da sua transportadora.
Controle rotas, entregas, lucro e os principais apps que você já usa de marketplace — como <strong className="text-white font-bold">Mercado Livre, Shopee, Amazon e afins</strong> — tudo em um só lugar.
          </p>
          
          <div className="reveal delay-300 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">
            <button 
              onClick={() => handleAction('signup')}
              className={`w-full sm:w-auto px-12 py-6 bg-blue-600 text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-blue-500 transition-all shadow-2xl shadow-blue-500/30 active:scale-95 border-t border-white/20 shimmer-effect ${activeBtn === 'signup' ? 'animate-click' : ''}`}
            >
              ADQUIRIR SHC BOX
            </button>
            <button 
              onClick={() => handleAction('product')}
              className={`w-full sm:w-auto px-12 py-6 glass-deep text-white rounded-full font-black text-sm uppercase tracking-widest hover:bg-white/5 transition-all border border-blue-500/20 active:scale-95 ${activeBtn === 'product' ? 'animate-click' : ''}`}
            >
              VER POR DENTRO
            </button>
          </div>
        </div>

        <div className="reveal-right delay-200 flex-1 relative w-full group">
          <div className="relative z-10">
             <div className="glass-deep p-4 rounded-[3.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent pointer-events-none"></div>
                <div className="bg-slate-900 rounded-[3rem] overflow-hidden border border-white/5 relative aspect-video lg:aspect-square">
                  <img 
                    src={deliveryImgPath} 
                    alt="Operação logística SHC BOX" 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
                    fetchPriority="high"
                    decoding="async"
                    loading="eager"
                    onError={(e) => {
                      // Fallback visual caso a imagem física não seja encontrada
                      const target = e.target as HTMLImageElement;
                      target.src = "https://images.pexels.com/photos/7362883/pexels-photo-7362883.jpeg";
                      target.style.opacity = "0.4";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent"></div>
                  
                  <div className="absolute top-8 left-8 flex items-center space-x-2 glass-deep px-4 py-2 rounded-xl border-blue-500/30">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-black uppercase text-white">Conheça o sistema</span>
                  </div>
                </div>
             </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
