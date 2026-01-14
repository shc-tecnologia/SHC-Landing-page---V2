
import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">
              Fale com um Especialista
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 italic leading-tight">
              Sua operação merece <br/> 
              <span className="text-blue-500">atendimento premium.</span>
            </h2>
            <p className="text-slate-400 text-lg font-light leading-relaxed mb-10 max-w-xl">
              Dúvidas sobre como o SHC BOX pode se adaptar à sua frota? Nossa equipe comercial está pronta para entender seu cenário.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-deep flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Número Comercial</p>
                  <p className="text-xl font-bold text-white tracking-tight">+55 (74) 98109-4339</p>
                </div>
              </div>

              <div className="flex items-center gap-6 group">
                <div className="w-14 h-14 rounded-2xl glass-deep flex items-center justify-center border border-white/10 group-hover:border-blue-500/50 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">E-mail</p>
                  <p className="text-xl font-bold text-white tracking-tight">contato@shcsistemas.com.br</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-deep p-1 rounded-[3rem] border border-white/10 shadow-2xl">
              <div className="bg-slate-900/50 rounded-[2.8rem] p-10">
                <h4 className="text-2xl font-bold text-white mb-6 italic">Agende uma demonstração</h4>
                <div className="space-y-4">
                  <a 
                    href="https://wa.me/5574981094339" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-6 rounded-2xl bg-blue-600/5 border border-blue-500/10 hover:bg-blue-600/10 hover:border-blue-500/30 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-white font-bold">Via WhatsApp</p>
                      <svg className="w-4 h-4 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </div>
                    <p className="text-slate-400 text-sm font-light">Atendimento imediato para pequenas frotas.</p>
                  </a>
                  
                  <a 
                    href="https://www.linkedin.com/company/shc-ti/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer group"
                  >
                    <div className="flex justify-between items-center mb-1">
                      <p className="text-white font-bold">Via LinkedIn</p>
                      <svg className="w-4 h-4 text-white/50 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                    </div>
                    <p className="text-slate-400 text-sm font-light">Para parcerias corporativas e Enterprise.</p>
                  </a>
                </div>
              </div>
            </div>
            {/* Elemento Decorativo */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-blue-500/20 blur-3xl rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
