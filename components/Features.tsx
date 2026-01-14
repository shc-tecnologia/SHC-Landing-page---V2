
import React from 'react';

const features = [
  {
    title: "BOX Financeiro",
    subtitle: "Controle seu Dinheiro",
    description: "Saiba exatamente quanto custa cada entrega. Faturamento automático e controle de repasse para motoristas sem erro.",
    icon: "💰",
    delay: "delay-100"
  },
  {
    title: "BOX Rotas",
    subtitle: "Menos Combustível",
    description: "Nosso sistema calcula o melhor caminho. Suas vans rodam menos quilômetros e entregam mais pacotes por dia.",
    icon: "🗺️",
    delay: "delay-200"
  },
  {
    title: "BOX Frota",
    subtitle: "Veículos Saudáveis",
    description: "Aviso de manutenção, controle de pneus e documentos. Não deixe seu caminhão parado por falta de cuidado.",
    icon: "🚛",
    delay: "delay-300"
  },
  {
    title: "BOX Motorista",
    subtitle: "App de Campo",
    description: "Aplicativo simples para o motorista dar baixa. Foto da entrega e GPS em tempo real na palma da mão.",
    icon: "📱",
    delay: "delay-400"
  }
];

const Features: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((f, i) => (
        <div key={i} className={`reveal ${f.delay} glass-card p-10 rounded-[2.5rem] flex flex-col group`}>
          <div className="text-4xl mb-6 group-hover:scale-125 transition-transform duration-300">
            {f.icon}
          </div>
          <p className="text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-2">{f.subtitle}</p>
          <h3 className="text-2xl font-bold text-white mb-4 italic">{f.title}</h3>
          <p className="text-slate-400 font-light leading-relaxed">
            {f.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Features;
