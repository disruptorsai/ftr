import React, { useState } from 'react';
import { SCHEDULE_DATA } from '../constants';
import { Button } from '../components/ui/Button';
import { Calendar as CalendarIcon, MapPin, User, Clock, Filter } from 'lucide-react';

export const Schedule: React.FC = () => {
  const [activeDay, setActiveDay] = useState('Monday');
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const pillars = ['Fitness', 'Nutrition', 'Creative Arts', 'Community Service'];

  const filteredSchedule = SCHEDULE_DATA.filter(item => {
    return item.day === activeDay && (!selectedPillar || item.pillar === selectedPillar);
  });

  return (
    <div className="pt-32 pb-20 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-5xl mb-4">Weekly Schedule</h1>
          <p className="text-gray-400">Join us for a class. All levels welcome. No prior experience needed.</p>
        </div>

        {/* Filters */}
        <div className="mb-12 space-y-6">
           {/* Day Selector */}
           <div className="flex flex-wrap justify-center gap-2">
              {days.map(day => (
                <button
                  key={day}
                  onClick={() => setActiveDay(day)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                    activeDay === day 
                    ? 'bg-white text-brand-dark shadow-lg scale-105' 
                    : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700'
                  }`}
                >
                  {day}
                </button>
              ))}
           </div>

           {/* Pillar Filter */}
           <div className="flex flex-wrap justify-center gap-3 items-center">
              <div className="flex items-center gap-2 text-gray-500 mr-2">
                 <Filter className="w-4 h-4" /> <span className="text-xs uppercase tracking-wider">Filter by:</span>
              </div>
              <button 
                onClick={() => setSelectedPillar(null)}
                className={`text-xs font-bold px-3 py-1 rounded border ${!selectedPillar ? 'bg-brand-red border-brand-red text-white' : 'border-gray-700 text-gray-400'}`}
              >
                ALL
              </button>
              {pillars.map(p => (
                 <button
                   key={p}
                   onClick={() => setSelectedPillar(p === selectedPillar ? null : p)}
                   className={`text-xs font-bold px-3 py-1 rounded border transition-colors ${
                     selectedPillar === p 
                     ? 'bg-brand-red border-brand-red text-white' 
                     : 'border-gray-700 text-gray-400 hover:border-gray-500'
                   }`}
                 >
                   {p.toUpperCase()}
                 </button>
              ))}
           </div>
        </div>

        {/* Schedule Grid */}
        <div className="grid gap-4 max-w-4xl mx-auto">
           {filteredSchedule.length > 0 ? (
             filteredSchedule.map((session) => (
               <div key={session.id} className="bg-zinc-900 border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row gap-6 items-center hover:border-brand-red/30 transition-colors group">
                  <div className="flex-shrink-0 w-full md:w-32 text-center md:text-left">
                     <div className="text-2xl font-display font-bold text-white">{session.time}</div>
                     <div className="text-sm text-brand-red font-medium">{session.pillar}</div>
                  </div>
                  
                  <div className="flex-grow text-center md:text-left">
                     <h3 className="text-xl font-bold text-white mb-2">{session.class}</h3>
                     <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-gray-400">
                        <div className="flex items-center gap-1">
                           <User className="w-4 h-4" /> {session.instructor}
                        </div>
                        <div className="flex items-center gap-1">
                           <MapPin className="w-4 h-4" /> {session.location}
                        </div>
                        <div className="flex items-center gap-1">
                           <Clock className="w-4 h-4" /> 60 min
                        </div>
                     </div>
                  </div>

                  <div className="flex-shrink-0">
                     <Button size="sm" variant="outline">Book Now</Button>
                  </div>
               </div>
             ))
           ) : (
             <div className="text-center py-20 bg-zinc-900/50 rounded-2xl border border-dashed border-gray-700">
                <CalendarIcon className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-300">No classes found</h3>
                <p className="text-gray-500">Try selecting a different day or filter.</p>
             </div>
           )}
        </div>
      </div>
    </div>
  );
};