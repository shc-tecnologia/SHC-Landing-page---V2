
import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import LogisticsVisual from './components/LogisticsVisual';
import DashboardPreview from './components/DashboardPreview';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'signup' | 'login'>('signup');

  const openSignUp = () => {
    setModalType('signup');
    setIsModalOpen(true);
  };

  const openLogin = () => {
    setModalType('login');
    setIsModalOpen(true);
  };

  return (
    <div className="relative min-h-screen grid-bg">
      {/* Elementos Decorativos de Fundo */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-900/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-sky-900/10 blur-[100px] rounded-full"></div>
      </div>

      <Header onSignUp={openSignUp} onLogin={openLogin} />
      
      <main>
        <Hero onSignUp={openSignUp} />
        
        <section id="visual" className="py-12">
          <LogisticsVisual />
        </section>

        <section id="recursos" className="py-24">
          <div className="max-w-7xl mx-auto px-6 mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 italic">Organize o Caos.</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              Deixe as planilhas para trás. O SHC BOX centraliza tudo o que você precisa para crescer sua frota com segurança.
            </p>
          </div>
          <Features />
        </section>

        <section id="produto" className="py-24 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 mb-20 text-center lg:text-left">
            <div className="inline-block px-4 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              Interface Amigável
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Feito para quem bota a mão na massa.</h2>
            <p className="text-slate-400 max-w-xl text-lg">
              Não precisa ser expert em TI. Nossa tela foi desenhada para que você entenda sua operação em 5 segundos.
            </p>
          </div>
          <DashboardPreview />
        </section>

        <ContactSection />
      </main>

      <Footer />
      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} type={modalType} />
    </div>
  );
};

export default App;
