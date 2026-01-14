
import React from 'react';

const LogisticsVisual: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-50">
      <div className="flex flex-col items-center justify-center p-8 glass-card rounded-[2rem]">
        <svg className="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 16V6a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1h1m8-1a1 1 0 01-1 1H9m4-1V8a1 1 0 011-1h5l3 3v6a1 1 0 01-1 1h-1m-4-1a1 1 0 01-1 1h-2" />
        </svg>
        <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">Gestão</span>
      </div>
      <div className="flex flex-col items-center justify-center p-8 glass-card rounded-[2rem]">
        <svg className="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 7m0 10V7m0 0l-6-3" />
        </svg>
        <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">Rotas Otimizadas</span>
      </div>
      <div className="flex flex-col items-center justify-center p-8 glass-card rounded-[2rem]">
        <svg className="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">Carga e Descarga</span>
      </div>
      <div className="flex flex-col items-center justify-center p-8 glass-card rounded-[2rem]">
        <svg className="w-12 h-12 text-blue-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="text-[10px] uppercase font-black tracking-widest text-slate-500">Lucro Real</span>
      </div>
    </div>
  );
};

export default LogisticsVisual;
