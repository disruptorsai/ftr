import React, { useState } from 'react';
import { PILLARS } from '../constants';
import { Button } from '../components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const Programs: React.FC = () => {
  const navigate = useNavigate();
  const [mood, setMood] = useState<string | null>(null);

  const moodMap: Record<string, { title: string; desc: string; pillarId: string }> = {
    'Anxious': { title: 'Try Yoga or Art', desc: 'Calming movements or creative expression can help ground you.', pillarId: 'p3' },
    'Low Energy': { title: 'Try Nutrition or Service', desc: 'A healthy meal or helping others can spark new energy.', pillarId: 'p2' },
    'Restless': { title: 'Try HIIT or Boxing', desc: 'Burn off excess energy with high-intensity movement.', pillarId: 'p1' },
    'Lonely': { title: 'Try Community Meals', desc: 'Connection happens over shared food and conversation.', pillarId: 'p4' },
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 bg-zinc-900 border-b border-white/5 overflow-hidden">
        <div className="absolute inset-0 bg-brand-red/5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">
            Four Pillars of <span className="text-brand-red">Recovery</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl leading-relaxed">
            We believe recovery is more than just stopping a behavior—it's about starting a new life. Our four pillars provide a holistic foundation for lasting change.
          </p>
        </div>
      </section>

      {/* Interactive Mood Selector */}
      <section className="py-12 bg-zinc-800 border-b border-white/5">
        <div className="container mx-auto px-6">
          <div className="bg-gradient-to-r from-brand-dark to-zinc-900 p-8 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                 <div className="flex items-center gap-2 text-brand-gold mb-2">
                    <Sparkles className="w-5 h-5 animate-pulse" />
                    <span className="font-bold uppercase tracking-wider text-sm">Find Your Fit</span>
                 </div>
                 <h3 className="text-2xl font-display font-bold text-white mb-4">How are you feeling today?</h3>
                 <div className="flex flex-wrap gap-3">
                    {Object.keys(moodMap).map(m => (
                      <button 
                        key={m}
                        onClick={() => setMood(m)}
                        className={`px-4 py-2 rounded-full border transition-all ${mood === m ? 'bg-brand-red border-brand-red text-white' : 'border-white/20 text-gray-300 hover:border-white'}`}
                      >
                        {m}
                      </button>
                    ))}
                 </div>
              </div>
              
              <div className="flex-1 w-full">
                {mood ? (
                  <div className="bg-white/5 p-6 rounded-xl border border-white/10 animate-fade-in-up">
                     <h4 className="text-xl font-bold text-white mb-2">{moodMap[mood].title}</h4>
                     <p className="text-gray-400 mb-4">{moodMap[mood].desc}</p>
                     <Button size="sm" onClick={() => navigate('/schedule')}>View Schedule</Button>
                  </div>
                ) : (
                  <div className="text-center text-gray-500 italic p-6">
                    Select a mood to get a personalized recommendation from our team.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pillars */}
      <div className="container mx-auto px-6 py-20 space-y-32">
        {PILLARS.map((pillar, index) => (
          <div key={pillar.id} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center group`}>
            <div className="flex-1">
               <div className={`w-16 h-16 ${pillar.color} rounded-2xl flex items-center justify-center mb-8 shadow-lg shadow-${pillar.color}/20`}>
                 <pillar.lucideIcon className="w-8 h-8 text-white" />
               </div>
               <h2 className="font-display font-bold text-4xl mb-6">{pillar.title}</h2>
               <p className="text-gray-400 text-lg leading-relaxed mb-8">{pillar.description}</p>
               
               <div className="space-y-4 mb-8">
                  {pillar.type === 'Fitness' && ['Yoga', 'CrossFit', 'Bootcamp'].map(i => (
                    <div key={i} className="flex items-center gap-3 text-gray-300"><div className="w-2 h-2 rounded-full bg-brand-red"></div>{i}</div>
                  ))}
                  {pillar.type === 'Nutrition' && ['Meal Prep', 'Cooking Classes', 'Nutrition Education'].map(i => (
                    <div key={i} className="flex items-center gap-3 text-gray-300"><div className="w-2 h-2 rounded-full bg-brand-green"></div>{i}</div>
                  ))}
                  {pillar.type === 'Creative Arts' && ['Music Production', 'Painting', 'Creative Writing'].map(i => (
                    <div key={i} className="flex items-center gap-3 text-gray-300"><div className="w-2 h-2 rounded-full bg-brand-gold"></div>{i}</div>
                  ))}
                  {pillar.type === 'Community Service' && ['Local Cleanups', 'Food Bank Support', 'Mentorship'].map(i => (
                    <div key={i} className="flex items-center gap-3 text-gray-300"><div className="w-2 h-2 rounded-full bg-blue-500"></div>{i}</div>
                  ))}
               </div>

               <Button onClick={() => navigate('/schedule')}>
                  Join a {pillar.title} Class <ArrowRight className="w-4 h-4 ml-2" />
               </Button>
            </div>
            
            <div className="flex-1 relative">
               <div className={`absolute inset-0 ${pillar.color} blur-3xl opacity-20 rounded-full`}></div>
               <div className="relative bg-zinc-800 rounded-3xl overflow-hidden border border-white/10 aspect-video lg:aspect-square shadow-2xl">
                 <img 
                    src={pillar.image} 
                    alt={pillar.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
               </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};