
import React, { useState, useRef, useEffect } from 'react';
import { getConciergeResponse } from '../geminiService';
import { ChatMessage } from '../types';

const ConciergeChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: "Welcome to Friday Retreats. I am your personal concierge. How may I assist you with your dream escape today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await getConciergeResponse(userMsg, messages);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="size-16 bg-maroon-dark text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 animate-bounce-slow"
        >
          <span className="material-symbols-outlined text-3xl">support_agent</span>
        </button>
      ) : (
        <div className="w-[350px] md:w-[400px] h-[500px] bg-white dark:bg-[#221013] rounded-3xl shadow-2xl flex flex-col overflow-hidden border border-gray-100 dark:border-white/10 animate-in zoom-in-95 duration-200">
          <div className="p-4 bg-maroon-dark text-white flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined">concierge</span>
              <span className="font-bold tracking-wide">Concierge Service</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded-full">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-4 rounded-2xl text-sm leading-relaxed ${
                  m.role === 'user' 
                  ? 'bg-primary text-white rounded-br-none' 
                  : 'bg-background-light dark:bg-white/5 dark:text-gray-200 rounded-bl-none border border-gray-100 dark:border-transparent'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-background-light dark:bg-white/5 p-4 rounded-2xl rounded-bl-none border border-gray-100 dark:border-transparent">
                  <div className="flex gap-1">
                    <div className="size-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="size-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-.3s]"></div>
                    <div className="size-2 bg-gray-400 rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-gray-100 dark:border-white/10 flex gap-2 items-center">
            <input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me anything..."
              className="flex-1 bg-background-light dark:bg-background-dark border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary dark:text-white"
            />
            <button 
              onClick={handleSend}
              className="size-10 bg-maroon-dark text-white rounded-xl flex items-center justify-center hover:bg-primary transition-colors disabled:opacity-50"
              disabled={!input.trim() || isLoading}
            >
              <span className="material-symbols-outlined">send</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConciergeChat;
