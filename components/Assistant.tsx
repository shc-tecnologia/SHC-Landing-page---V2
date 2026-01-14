
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant', text: string }[]>([
    { role: 'assistant', text: 'Olá! Como a tecnologia da SHC pode otimizar sua frota hoje?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);

  // Implement handleSend using Gemini API to provide real logistics expertise
  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      // Using gemini-3-flash-preview for quick and helpful logistics support
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          // Build context from conversation history
          ...messages.map(m => ({
            role: m.role === 'assistant' ? 'model' : 'user',
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: userMessage }] }
        ],
        config: {
          systemInstruction: 'Você é o Expert SHC, um assistente virtual especializado em logística e no software ERP SHC BOX. Seja profissional, prestativo e foque em como o SHC BOX ajuda transportadoras a gerir frotas, finanças e rotas. Responda em Português do Brasil de forma concisa e amigável.',
        }
      });

      // Extract text directly from the response object as per SDK guidelines (property, not method)
      const assistantText = response.text || 'Desculpe, não consegui processar sua solicitação no momento.';
      setMessages(prev => [...prev, { role: 'assistant', text: assistantText }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'assistant', text: 'Desculpe, ocorreu um erro de conexão. Tente novamente em breve.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-10 right-10 z-[60]">
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 glass rounded-[2.5rem] p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-blue-500/20 animate-in fade-in slide-in-from-bottom-6 duration-500 flex flex-col max-h-[500px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center font-zen text-sm shadow-xl shadow-blue-500/20 text-white">S</div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-4 border-[#0a0f1d] rounded-full"></div>
            </div>
            <div>
              <p className="text-sm font-bold text-white uppercase tracking-wider">Expert SHC</p>
              <p className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Logistics SaaS</p>
            </div>
          </div>
          
          <div className="space-y-4 mb-6 overflow-y-auto pr-2 custom-scrollbar flex-1">
            {messages.map((msg, idx) => (
              <div key={idx} className={`${msg.role === 'user' ? 'bg-blue-600/20 border-blue-500/10 ml-4' : 'bg-white/5 border-white/5 mr-4'} rounded-2xl p-4 text-xs text-slate-300 leading-relaxed border`}>
                {msg.text}
              </div>
            ))}
            {isLoading && (
              <div className="bg-white/5 rounded-2xl p-4 text-xs text-slate-300 leading-relaxed border border-white/5 animate-pulse">
                Processando...
              </div>
            )}
          </div>

          <div className="relative">
            <input 
              type="text" 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Digite sua dúvida..." 
              className="w-full bg-black/40 border border-white/5 rounded-2xl px-5 py-3 text-xs text-white focus:outline-none focus:border-blue-500/50 transition-all placeholder:text-slate-600"
              disabled={isLoading}
            />
            <button 
              onClick={handleSend}
              disabled={isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-white transition-colors disabled:opacity-50"
            >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"/></svg>
            </button>
          </div>
        </div>
      )}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-[1.5rem] flex items-center justify-center transition-all shadow-2xl shadow-blue-600/30 active:scale-90 border-2 ${isOpen ? 'bg-slate-900 border-blue-500/50 scale-110' : 'bg-blue-600 border-white/20 hover:bg-blue-500'}`}
      >
        {isOpen ? (
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/></svg>
        ) : (
          <div className="relative">
              <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/></svg>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
              </span>
          </div>
        )}
      </button>
    </div>
  );
};

export default Assistant;
