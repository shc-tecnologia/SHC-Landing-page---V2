
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Seg', entregas: 420 },
  { name: 'Ter', entregas: 380 },
  { name: 'Qua', entregas: 650 },
  { name: 'Qui', entregas: 890 },
  { name: 'Sex', entregas: 740 },
  { name: 'Sab', entregas: 980 },
  { name: 'Dom', entregas: 550 },
];

const DashboardPreview: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 group reveal">
      <div className="glass rounded-[3rem] p-4 lg:p-10 overflow-hidden shadow-2xl border border-white/5 relative">
        <div className="flex flex-col lg:flex-row gap-10 relative z-10">
          {/* Sidebar Mock */}
          <div className="reveal-left delay-300 hidden lg:flex flex-col w-72 space-y-8 bg-slate-900/50 p-8 rounded-[2rem] border border-white/5">
             <div className="flex items-center gap-3 px-2">
                <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center font-zen text-[10px]">SHC</div>
                <div className="font-zen text-sm text-white tracking-tighter uppercase">BOX</div>
             </div>
             <div className="space-y-3">
                <div className="bg-blue-600/20 text-blue-400 px-5 py-3 rounded-xl flex items-center space-x-3 border border-blue-500/20">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                  <span className="text-sm font-bold">Operações</span>
                </div>
                <div className="text-slate-500 px-5 py-3 rounded-xl flex items-center space-x-3 hover:text-slate-300 transition-colors cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                  <span className="text-sm font-bold">Veículos</span>
                </div>
                <div className="text-slate-500 px-5 py-3 rounded-xl flex items-center space-x-3 hover:text-slate-300 transition-colors cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                  <span className="text-sm font-bold">Motoristas</span>
                </div>
                <div className="text-slate-500 px-5 py-3 rounded-xl flex items-center space-x-3 hover:text-slate-300 transition-colors cursor-pointer">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-800"></div>
                  <span className="text-sm font-bold">Financeiro</span>
                </div>
             </div>
          </div>

          {/* Main Content Mock */}
          <div className="flex-1 space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { label: 'Entregas Ativas', val: '1.248', color: 'border-b-blue-600/50', delay: 'delay-100' },
                { label: 'Frota Online', val: '92%', color: 'border-b-sky-600/50', delay: 'delay-200' },
                { label: 'SLA de Entrega', val: '99.8%', color: 'border-b-blue-900/50', delay: 'delay-300' }
              ].map((card, idx) => (
                <div key={idx} className={`reveal ${card.delay} glass-card p-8 rounded-[2rem] border-b-4 ${card.color}`}>
                  <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black mb-2">{card.label}</p>
                  <p className="text-4xl font-bold text-white">{card.val}</p>
                </div>
              ))}
            </div>

            <div className="reveal delay-500 glass-card p-8 rounded-[2.5rem] h-80 relative overflow-hidden">
              <div className="flex justify-between items-start mb-10">
                <div>
                    <p className="text-sm font-bold text-white mb-1">Fluxo de Entregas Semanais</p>
                    <p className="text-xs text-slate-500 font-light italic">Painel de Monitoramento Dinâmico</p>
                </div>
                <div className="flex gap-2">
                    <span className="text-[10px] bg-blue-600/20 text-blue-400 px-2 py-1 rounded-md border border-blue-500/20 font-bold uppercase">Ao Vivo</span>
                </div>
              </div>
              <div className="absolute inset-0 pt-28 px-4 opacity-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorEntregas" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.4}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} strokeOpacity={0.2} />
                      <XAxis dataKey="name" stroke="#64748b" fontSize={10} tickLine={false} axisLine={false} />
                      <YAxis hide />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#020617', border: '1px solid rgba(59,130,246,0.2)', borderRadius: '16px' }}
                        itemStyle={{ color: '#60a5fa', fontWeight: 'bold' }}
                        labelStyle={{ color: '#94a3b8', fontSize: '10px' }}
                      />
                      <Area type="monotone" dataKey="entregas" stroke="#3b82f6" strokeWidth={4} fillOpacity={1} fill="url(#colorEntregas)" />
                    </AreaChart>
                  </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPreview;
