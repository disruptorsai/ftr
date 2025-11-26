import React from 'react';
import { TEAM_MEMBERS } from '../constants';

export const About: React.FC = () => {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-20 bg-zinc-900 border-b border-white/5">
        <div className="container mx-auto px-6 text-center">
           <h1 className="font-display font-bold text-5xl md:text-6xl mb-8">Our Story</h1>
           <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
             "Fit to Recover was born out of a desire to connect. To find people who understood that recovery isn't just about what you give up—it's about what you gain."
           </p>
           <div className="mt-8 font-serif italic text-brand-gold">— Ian Acker, Founder</div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 relative overflow-hidden">
         <div className="absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2"></div>
         <div className="container mx-auto px-6">
            <div className="space-y-16">
               {[
                 { year: '2015', title: 'Founded', desc: 'Ian Acker starts FTR in a small park with a boombox and a few friends.' },
                 { year: '2017', title: 'First Gym', desc: 'We opened our first brick-and-mortar location in Salt Lake City.' },
                 { year: '2020', title: 'Creative Arts', desc: 'Expanded our programming to include music and art studio space.' },
                 { year: '2025', title: 'Statewide Impact', desc: 'Now serving 5 locations and 700+ people weekly.' }
               ].map((item, i) => (
                 <div key={item.year} className={`flex items-center justify-between ${i % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className="w-5/12 text-right p-4">
                       {i % 2 === 0 && (
                         <>
                           <div className="text-brand-red font-bold text-3xl font-display mb-2">{item.year}</div>
                           <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                           <p className="text-gray-400">{item.desc}</p>
                         </>
                       )}
                    </div>
                    <div className="w-2/12 flex justify-center relative z-10">
                       <div className="w-4 h-4 bg-brand-red rounded-full border-4 border-zinc-900 shadow-[0_0_15px_rgba(228,0,43,0.5)]"></div>
                    </div>
                    <div className="w-5/12 text-left p-4">
                       {i % 2 !== 0 && (
                         <>
                           <div className="text-brand-red font-bold text-3xl font-display mb-2">{item.year}</div>
                           <h3 className="text-white font-bold text-xl mb-2">{item.title}</h3>
                           <p className="text-gray-400">{item.desc}</p>
                         </>
                       )}
                    </div>
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white text-brand-dark">
         <div className="container mx-auto px-6">
            <h2 className="font-display font-bold text-4xl mb-12 text-center">Meet the Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
               {TEAM_MEMBERS.map((member, i) => (
                  <div key={i} className="text-center group">
                     <div className="relative mb-6 overflow-hidden rounded-2xl mx-auto max-w-xs">
                        <img src={member.image} alt={member.name} className="w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6">
                           <span className="text-white text-sm font-medium px-4">{member.bio}</span>
                        </div>
                     </div>
                     <h3 className="font-display font-bold text-xl mb-1">{member.name}</h3>
                     <p className="text-gray-500 text-sm uppercase tracking-wider">{member.role}</p>
                  </div>
               ))}
            </div>
         </div>
      </section>
    </div>
  );
};