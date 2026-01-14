
import React, { useState } from 'react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'signup' | 'login';
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, type }) => {
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulação de processamento
    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        onClose();
      }, 3000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-md animate-backdrop">
      <div className="relative w-full max-w-md glass-deep rounded-[3rem] p-10 border border-blue-500/30 shadow-[0_40px_100px_rgba(0,0,0,0.8)] animate-modal">
        <button 
          onClick={onClose}
          disabled={isLoading}
          className="absolute top-8 right-8 text-slate-500 hover:text-white transition-all hover:rotate-90 duration-300 disabled:opacity-0"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        </button>

        {success ? (
          <div className="text-center py-10 animate-success">
            <div className="w-24 h-24 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border border-blue-500/30">
              <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
            </div>
            <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">Recebido!</h3>
            <p className="text-slate-400 font-light text-lg">Entraremos em contato em breve.</p>
          </div>
        ) : (
          <>
            <div className="mb-8">
              <h3 className="text-3xl font-black text-white mb-2 uppercase italic tracking-tighter">
                {type === 'signup' ? 'Lista de Espera' : 'Acesso Gestor'}
              </h3>
              <p className="text-slate-400 font-light text-sm">
                {type === 'signup' 
                  ? 'As vagas são limitadas para o lançamento antecipado.' 
                  : 'Digite suas credenciais de acesso corporativo.'}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {type === 'signup' && (
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1 block">Nome da Empresa / Gestor</label>
                  <input required type="text" disabled={isLoading} className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all disabled:opacity-50 placeholder:text-slate-700" placeholder="Ex: TransLog Brasil" />
                </div>
              )}
              <div>
                <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1 block">E-mail Profissional</label>
                <input required type="email" disabled={isLoading} className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all disabled:opacity-50 placeholder:text-slate-700" placeholder="seuemail@empresa.com.br" />
              </div>
              {type === 'signup' && (
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1 block">WhatsApp Comercial</label>
                  <input required type="tel" disabled={isLoading} className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all disabled:opacity-50 placeholder:text-slate-700" placeholder="(00) 00000-0000" />
                </div>
              )}
              {type === 'login' && (
                <div>
                  <label className="text-[10px] font-black uppercase text-slate-500 tracking-widest mb-1 block">Senha de Acesso</label>
                  <input required type="password" disabled={isLoading} className="w-full bg-slate-900/80 border border-white/10 rounded-2xl px-5 py-4 text-sm text-white focus:outline-none focus:border-blue-500 transition-all disabled:opacity-50 placeholder:text-slate-700" placeholder="********" />
                </div>
              )}
              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full py-5 flex items-center justify-center gap-3 text-white rounded-full font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-blue-900/40 active:scale-95 border-t border-white/20 mt-4 ${isLoading ? 'bg-blue-800' : 'btn-animate hover:shadow-blue-500/50'}`}
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 animate-spinner" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.2" />
                      <path d="M12 2a10 10 0 0 1 10 10" />
                    </svg>
                    <span>Processando...</span>
                  </>
                ) : (
                  <span>{type === 'signup' ? 'Solicitar Acesso Antecipado' : 'Entrar na Operação'}</span>
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
