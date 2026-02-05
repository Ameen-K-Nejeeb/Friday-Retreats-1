
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

// --- Types & Constants ---
interface Deal {
  id: string;
  location: string;
  price: string;
  description: string;
  imageUrl: string;
}

const DEALS: Deal[] = [
  {
    id: '1',
    location: 'Uluwatu, Bali',
    price: 'From $1,200 / night',
    description: 'Private clifftop villas with infinite ocean horizons.',
    imageUrl: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    location: 'Oia, Santorini',
    price: 'From $1,800 / night',
    description: 'Iconic cave suites carved into the caldera volcanic rock.',
    imageUrl: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    location: 'Amalfi, Italy',
    price: 'From $1,450 / night',
    description: 'Classic Mediterranean elegance overlooking the Tyrrhenian Sea.',
    imageUrl: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&q=80&w=800'
  }
];

// --- AI Service Logic ---
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

const getAIResponse = async (prompt: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the 'Friday Retreats' elite travel concierge. Your tone is sophisticated, welcoming, and helpful. You recommend luxury destinations and help with travel planning. Keep it brief and high-end.",
      }
    });
    return response.text;
  } catch (err) {
    return "Our concierge is currently attending to another guest. How else may I assist you?";
  }
};

// --- App Component ---
export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'ai', text: "Good afternoon. I am your Friday Retreats concierge. Where in the world shall we take you?" }]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatScrollRef.current) chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
  }, [messages, loading]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setLoading(true);
    const aiText = await getAIResponse(userText);
    setMessages(prev => [...prev, { role: 'ai', text: aiText || '' }]);
    setLoading(false);
  };

  return (
    <div className={isDarkMode ? 'dark' : ''}>
      {/* Header */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-stone-200 dark:border-stone-800 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary dark:text-accent">diamond</span>
          <h1 className="font-display text-xl font-bold tracking-tight">FRIDAY RETREATS</h1>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-bold uppercase tracking-widest text-stone-500 dark:text-stone-400">
          <a href="#destinations" className="hover:text-primary transition-colors">Destinations</a>
          <a href="#experiences" className="hover:text-primary transition-colors">Experiences</a>
          <a href="#membership" className="hover:text-primary transition-colors">Membership</a>
        </div>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode(!isDarkMode)} className="p-2 hover:bg-stone-100 dark:hover:bg-stone-800 rounded-full transition-colors">
            <span className="material-symbols-outlined">{isDarkMode ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button className="bg-primary text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-stone-800 transition-all">
            Join Now
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover opacity-80 dark:opacity-40"
            alt="Luxury Landscape"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-bg-linen/20 to-bg-linen dark:to-bg-onyx"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h2 className="font-display text-6xl md:text-8xl font-black mb-6 animate-in fade-in slide-in-from-bottom-10 duration-1000">
            Escapism, <br/><span className="italic font-normal text-primary dark:text-accent">Perfected.</span>
          </h2>
          <p className="text-lg md:text-xl text-stone-600 dark:text-stone-300 mb-10 max-w-xl mx-auto leading-relaxed">
            Discover a curated collection of the world's most evocative private retreats, designed for those who seek the extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-white px-10 py-5 rounded-full font-bold shadow-2xl hover:scale-105 transition-all">
              Explore The Collection
            </button>
            <button className="glass px-10 py-5 rounded-full font-bold border border-stone-200 dark:border-stone-700 hover:bg-white dark:hover:bg-stone-800 transition-all">
              Our Philosophy
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section id="destinations" className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h3 className="text-stone-400 font-bold uppercase tracking-widest text-xs mb-2">Featured Escapes</h3>
            <h2 className="font-display text-4xl font-bold">The Friday Collection</h2>
          </div>
          <p className="max-w-md text-stone-500 text-sm leading-relaxed">
            Every retreat in our portfolio is hand-selected and personally vetted to ensure it meets our rigorous standards of privacy, service, and aesthetic excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {DEALS.map((deal) => (
            <div key={deal.id} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-[4/5] shadow-xl">
                <img 
                  src={deal.imageUrl} 
                  alt={deal.location}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-xs font-bold text-primary">
                  {deal.price}
                </div>
              </div>
              <h4 className="font-display text-2xl font-bold mb-2">{deal.location}</h4>
              <p className="text-stone-500 text-sm mb-4 leading-relaxed">{deal.description}</p>
              <button className="text-xs font-bold uppercase tracking-widest text-primary border-b border-primary/20 pb-1 group-hover:border-primary transition-all">
                View Retreat
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-stone-100 dark:bg-stone-900/50 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" 
              className="rounded-[3rem] shadow-2xl relative z-10"
              alt="Luxury Interior"
            />
          </div>
          <div>
            <h2 className="font-display text-4xl font-bold mb-8">Uncompromising Standards</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
                <div>
                  <h4 className="font-bold mb-2">Exclusive Privacy</h4>
                  <p className="text-stone-500 text-sm">Every retreat is situated to provide absolute seclusion from the outside world.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">room_service</span>
                <div>
                  <h4 className="font-bold mb-2">24/7 Personal Concierge</h4>
                  <p className="text-stone-500 text-sm">Your dedicated host handles everything from private aviation to bespoke local dining.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <span className="material-symbols-outlined text-primary text-3xl">restaurant</span>
                <div>
                  <h4 className="font-bold mb-2">Private Culinary Arts</h4>
                  <p className="text-stone-500 text-sm">Enjoy world-class gastronomy prepared by in-house Michelin-trained chefs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking / Contact */}
      <section className="py-24 px-6 text-center max-w-2xl mx-auto">
        <h2 className="font-display text-4xl font-bold mb-6">Begin Your Journey</h2>
        <p className="text-stone-500 mb-10">Connect with our travel artisans to curate your next escape.</p>
        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Full Name" className="w-full bg-white dark:bg-stone-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary shadow-sm" />
          <input type="email" placeholder="Email Address" className="w-full bg-white dark:bg-stone-800 border-none rounded-2xl py-4 px-6 focus:ring-2 focus:ring-primary shadow-sm" />
          <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold shadow-xl hover:bg-stone-800 transition-all">
            Inquire Now
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-16 px-6 text-center border-t border-stone-800">
        <div className="flex justify-center items-center gap-2 mb-8 text-white">
          <span className="material-symbols-outlined text-accent">diamond</span>
          <h1 className="font-display text-xl font-bold tracking-tight">FRIDAY RETREATS</h1>
        </div>
        <div className="flex justify-center gap-8 text-xs font-bold uppercase tracking-widest mb-8">
          <a href="#" className="hover:text-white">Instagram</a>
          <a href="#" className="hover:text-white">Vogue Travel</a>
          <a href="#" className="hover:text-white">Press</a>
        </div>
        <p className="text-xs">&copy; 2025 Friday Retreats. All Rights Reserved. Curating Excellence Since 2012.</p>
      </footer>

      {/* AI Concierge Widget */}
      <div className="fixed bottom-8 right-8 z-[60]">
        {!chatOpen ? (
          <button 
            onClick={() => setChatOpen(true)}
            className="size-16 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95"
          >
            <span className="material-symbols-outlined text-3xl">concierge</span>
          </button>
        ) : (
          <div className="w-80 md:w-96 h-[500px] glass border border-stone-200 dark:border-stone-800 rounded-[2rem] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
            <div className="p-4 bg-primary text-white flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest">Friday Concierge</span>
              <button onClick={() => setChatOpen(false)} className="material-symbols-outlined text-sm">close</button>
            </div>
            <div ref={chatScrollRef} className="flex-1 overflow-y-auto p-6 space-y-4 no-scrollbar">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                    ? 'bg-primary text-white rounded-br-none' 
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-bl-none'
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-stone-100 dark:bg-stone-800 p-4 rounded-2xl rounded-bl-none animate-pulse">
                    <div className="flex gap-1">
                      <div className="size-1.5 bg-stone-400 rounded-full"></div>
                      <div className="size-1.5 bg-stone-400 rounded-full"></div>
                      <div className="size-1.5 bg-stone-400 rounded-full"></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="p-4 bg-white/50 dark:bg-black/20 flex gap-2">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Where would you like to go?"
                className="flex-1 bg-white dark:bg-stone-800 border-none rounded-xl px-4 py-2 text-sm focus:ring-1 focus:ring-primary"
              />
              <button 
                onClick={handleSendMessage}
                disabled={loading}
                className="size-10 bg-primary text-white rounded-xl flex items-center justify-center disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
