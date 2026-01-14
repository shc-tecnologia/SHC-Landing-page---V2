
import React from 'react';

interface PricingProps {
  onSelectPlan: (planName: string) => void;
}

const plans = [
  {
    name: "Starter BOX",
    price: "R$ 299",
    description: "Para quem está começando a frota.",
    features: ["Até 5 Motoristas", "Controle de Entregas", "Relatórios Básicos", "Suporte via WhatsApp"],
    popular: false
  },
  {
    name: "Professional BOX",
    price: "R$ 649",
    description: "O motor de crescimento para sua empresa.",
    features: ["Até 20 Motoristas", "Otimizador de Rotas IA", "Financeiro Completo", "App Customizado", "Suporte Prioritário"],
    popular: true
  },
  {
    name: "Enterprise BOX",
    price: "Consultar",
    description: "Sob medida para grandes frotas.",
    features: ["Motoristas Ilimitados", "Integração via API", "Infraestrutura Dedicada", "Gerente de Conta", "Treinamento VIP"],
    popular: false
  }
];

const Pricing: React.FC<PricingProps> = ({ onSelectPlan }) => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white italic tracking-tighter mb-4">Investimento.</h2>
        <p className="text-slate-500 max-w-xl mx-auto font-light">
          Planos flexíveis que crescem com você. Sem multas abusivas ou contratos que te prendem.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div key={i} className={`relative glass-card p-12 rounded-[3.5rem] flex flex-col transition-all duration-500 ${p.popular ? 'border-blue-500/50 scale-105 bg-blue-600/5 shadow-[0_40px_80px_rgba(14,165,233,0.15)]' : ''}`}>
            {p.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-blue-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-xl">Recomendado</span>
            )}
            <h3 className="text-xl font-bold text-white mb-2 italic tracking-tight">{p.name}</h3>
            <p className="text-slate-500 text-xs mb-8">{p.description}</p>
            <div className="flex items-baseline gap-1 mb-10">
              <span className="text-5xl font-black text-white">{p.price}</span>
              <span className="text-slate-500 text-xs font-bold uppercase tracking-widest">{p.price !== 'Consultar' ? '/mês' : ''}</span>
            </div>
            
            <ul className="space-y-5 mb-12 flex-1">
              {p.features.map((f, fi) => (
                <li key={fi} className="flex items-center gap-4 text-slate-300 text-sm font-light">
                  <div className="w-5 h-5 bg-blue-500/10 rounded-full flex items-center justify-center border border-blue-500/20">
                    <svg className="w-3 h-3 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"/></svg>
                  </div>
                  {f}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => onSelectPlan(p.name)}
              className={`w-full py-5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all ${p.popular ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-xl shadow-blue-900/40' : 'glass-deep text-white hover:bg-white/5 border-white/10'}`}
            >
              Assinar Agora
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
