import React, { useState, useEffect } from 'react';
import { RESOURCES } from '../constants';
import { Search, ExternalLink, Calendar, CheckCircle, RefreshCw } from 'lucide-react';
import { Button } from '../components/ui/Button';

// Mini Component: Sobriety/Habit Counter
const SobrietyCounter = () => {
  const [days, setDays] = useState(0);
  const [habit, setHabit] = useState('Sobriety');

  useEffect(() => {
    const savedDate = localStorage.getItem('ftr_start_date');
    const savedHabit = localStorage.getItem('ftr_habit_name');
    
    if (savedHabit) setHabit(savedHabit);

    if (savedDate) {
      const start = new Date(savedDate).getTime();
      const now = new Date().getTime();
      const diff = Math.floor((now - start) / (1000 * 60 * 60 * 24));
      setDays(diff > 0 ? diff : 0);
    }
  }, []);

  const handleReset = () => {
    if (confirm("Start a new streak?")) {
        const now = new Date().toISOString();
        localStorage.setItem('ftr_start_date', now);
        setDays(0);
    }
  };

  const handleSetHabit = () => {
     const name = prompt("What habit are you tracking?", habit);
     if (name) {
         setHabit(name);
         localStorage.setItem('ftr_habit_name', name);
     }
  };

  return (
    <div className="bg-gradient-to-br from-zinc-800 to-black p-8 rounded-3xl border border-white/10 shadow-xl text-center relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 blur-3xl rounded-full"></div>
      
      <div className="relative z-10">
        <h3 className="text-gray-400 uppercase tracking-widest text-xs font-bold mb-2">My Journey</h3>
        <div className="text-6xl font-display font-bold text-white mb-2 tabular-nums">{days}</div>
        <button onClick={handleSetHabit} className="text-brand-red font-medium mb-6 hover:underline decoration-brand-red underline-offset-4">
            Days of {habit}
        </button>
        
        <div className="flex justify-center gap-4">
             {!days && (
                 <Button size="sm" onClick={() => {
                     localStorage.setItem('ftr_start_date', new Date().toISOString());
                     setDays(0);
                 }}>Start Timer</Button>
             )}
             {days > 0 && (
                 <button onClick={handleReset} className="text-xs text-gray-500 hover:text-white flex items-center gap-1 mx-auto transition-colors">
                    <RefreshCw className="w-3 h-3" /> Reset Counter
                 </button>
             )}
        </div>
      </div>
    </div>
  );
};

export const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Crisis', 'Reading', 'Podcast', 'Local', 'Tool'];

  const filteredResources = RESOURCES.filter(res => {
     const matchesSearch = res.title.toLowerCase().includes(searchTerm.toLowerCase()) || res.description.toLowerCase().includes(searchTerm.toLowerCase());
     const matchesCategory = activeCategory === 'All' || res.category === activeCategory;
     return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        
        {/* Header & Personal Tracker */}
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
           <div className="flex-1">
              <h1 className="font-display font-bold text-5xl mb-6">Recovery Resources</h1>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                 Recovery doesn't happen in isolation. We've curated a list of tools, hotlines, and media to support your journey outside the gym.
              </p>
              <div className="flex items-center gap-2 text-sm text-brand-green bg-brand-green/10 px-4 py-2 rounded-lg w-fit">
                 <CheckCircle className="w-4 h-4" /> Vetted by our clinical team
              </div>
           </div>
           <div className="w-full max-w-sm">
              <SobrietyCounter />
           </div>
        </div>

        {/* Search & Filter */}
        <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8">
                <div className="relative w-full md:max-w-md">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
                    <input 
                        type="text" 
                        placeholder="Search resources..." 
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-zinc-900 border border-white/10 rounded-full pl-12 pr-6 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-red/50 transition-all"
                    />
                </div>
                
                <div className="flex gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${activeCategory === cat ? 'bg-white text-black' : 'bg-zinc-800 text-gray-400 hover:text-white'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredResources.map((res) => (
                    <a href={res.link} key={res.id} className="bg-zinc-900 border border-white/5 p-6 rounded-2xl hover:border-brand-red/50 hover:-translate-y-1 transition-all group block">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-10 h-10 bg-zinc-800 rounded-lg flex items-center justify-center text-gray-400 group-hover:text-brand-red transition-colors">
                                <res.icon className="w-5 h-5" />
                            </div>
                            <ExternalLink className="w-4 h-4 text-gray-600 group-hover:text-white transition-colors" />
                        </div>
                        <h3 className="font-bold text-white text-lg mb-2">{res.title}</h3>
                        <p className="text-gray-400 text-sm">{res.description}</p>
                        <div className="mt-4 pt-4 border-t border-white/5">
                            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">{res.category}</span>
                        </div>
                    </a>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};