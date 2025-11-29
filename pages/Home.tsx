import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { PILLARS, TESTIMONIALS, IMPACT_STATS } from '../constants';
import { ArrowRight, Star, MapPin, ChevronRight, CheckCircle2, Play } from 'lucide-react';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="https://videos.files.wordpress.com/r1bEuvdt/ftr-cover-video.mp4" type="video/mp4" />
        </video>
        
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70 z-0"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-white/5 backdrop-blur border border-white/10 animate-fade-in-up">
            <span className="text-brand-green text-xs font-bold tracking-wider uppercase">501(c)(3) Nonprofit Organization</span>
          </div>
          <h1 className="font-display font-bold text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 text-shadow-lg">
            Recovery is <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red via-brand-red to-orange-500">
              Stronger Together
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 leading-relaxed font-light text-shadow">
            We connect the recovery community through fitness, nutrition, creative arts, and service. 
            Join 700+ weekly participants transforming their lives in Utah.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" onClick={() => navigate('/membership')}>
              Join Our Community
            </Button>
            <Button variant="outline" size="lg" onClick={() => navigate('/programs')}>
              Explore Programs
            </Button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-gray-400">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
          </svg>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-zinc-900 border-y border-white/5 relative z-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-12 h-12 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors duration-300 text-gray-400">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="font-display font-bold text-4xl md:text-5xl text-white mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-sm text-gray-400 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Video Section */}
      <section className="py-24 bg-black relative">
         <div className="container mx-auto px-6">
            <div className="flex flex-col items-center text-center mb-12">
               <h2 className="font-display font-bold text-4xl mb-4">Watch Our Story</h2>
               <p className="text-gray-400 max-w-2xl">See how Fit2Recover is changing lives in Utah through connection, sweat, and service.</p>
            </div>
            
            <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-zinc-900 group aspect-video">
               <video 
                 controls 
                 className="w-full h-full object-cover"
                 poster="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80"
               >
                 <source src="https://videos.files.wordpress.com/r1bEuvdt/ftr-cover-video.mp4" type="video/mp4" />
                 Your browser does not support the video tag.
               </video>
            </div>
         </div>
      </section>

      {/* Pillars Showcase */}
      <section className="py-32 relative bg-zinc-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">The Four Pillars</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our holistic approach to recovery addresses the whole person, providing multiple pathways to healing and connection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {PILLARS.map((pillar) => (
              <div 
                key={pillar.id}
                className="group relative h-96 bg-black rounded-2xl overflow-hidden border border-white/5 hover:border-brand-red/50 transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                onClick={() => navigate('/programs')}
              >
                {/* Background Image with Overlay */}
                <img 
                  src={pillar.image} 
                  alt={pillar.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" 
                />
                <div className={`absolute top-0 left-0 w-full h-1 ${pillar.color} z-10`} />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/95 z-0" />
                
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
                  <div className={`w-12 h-12 ${pillar.color} rounded-xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform text-white shadow-lg`}>
                    <pillar.lucideIcon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display font-bold text-2xl mb-3 text-white">{pillar.title}</h3>
                  <p className="text-gray-200 text-sm leading-relaxed mb-6 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    {pillar.description}
                  </p>
                  <div className="flex items-center text-xs font-bold uppercase tracking-wider text-white opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                    Learn More <ArrowRight className="w-4 h-4 ml-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white text-brand-dark overflow-hidden">
        <div className="container mx-auto px-6">
           <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="lg:w-1/3">
                 <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Stories of<br/>Transformation</h2>
                 <p className="text-gray-600 mb-8 leading-relaxed">
                   Recovery is more than just abstinence. It's about building a life filled with purpose, connection, and joy. Hear from our community.
                 </p>
                 <Button variant="secondary">
                   Read More Stories
                 </Button>
              </div>
              
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
                  {TESTIMONIALS.slice(0, 2).map((t) => (
                    <div key={t.id} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                       <div className="flex items-center gap-1 text-brand-gold mb-4">
                         {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                       </div>
                       <blockquote className="font-serif italic text-lg text-gray-800 mb-6">"{t.quote}"</blockquote>
                       <div className="flex items-center gap-4">
                          <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" />
                          <div>
                             <div className="font-bold font-display">{t.name}</div>
                             <div className="text-xs text-gray-500 uppercase tracking-wide">{t.role}</div>
                          </div>
                       </div>
                    </div>
                  ))}
              </div>
           </div>
        </div>
      </section>

      {/* Locations Map Teaser */}
      <section className="py-24 bg-zinc-900 border-t border-white/5 relative">
        <div className="container mx-auto px-6 text-center">
            <h2 className="font-display font-bold text-4xl mb-12">Five Locations Across Utah</h2>
            <div className="bg-zinc-800 rounded-3xl p-4 max-w-4xl mx-auto border border-white/5 shadow-2xl overflow-hidden relative min-h-[400px] flex items-center justify-center">
               <div className="absolute inset-0 opacity-20 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Utah_relief_location_map.jpg/1200px-Utah_relief_location_map.jpg')] bg-cover bg-center grayscale mix-blend-overlay"></div>
               {/* Simplified animated pins */}
               <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-4 w-full p-8">
                  {['Salt Lake City', 'Provo', 'Park City', 'Heber City'].map((city, i) => (
                     <div key={i} className="bg-brand-dark/80 backdrop-blur border border-white/10 p-6 rounded-xl flex items-center gap-4 hover:bg-brand-red/20 transition-colors cursor-pointer group" onClick={() => navigate('/locations')}>
                        <div className="w-10 h-10 rounded-full bg-brand-red/20 text-brand-red flex items-center justify-center group-hover:bg-brand-red group-hover:text-white transition-colors">
                           <MapPin className="w-5 h-5" />
                        </div>
                        <div className="text-left">
                           <div className="font-bold text-white">{city}</div>
                           <div className="text-xs text-gray-400 flex items-center">
                             View Details <ChevronRight className="w-3 h-3 ml-1" />
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-24 bg-brand-red text-white">
        <div className="container mx-auto px-6 text-center max-w-2xl">
           <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">Join the Movement</h2>
           <p className="text-white/80 mb-8">Stay updated on our programs, success stories, and upcoming events. We respect your inbox.</p>
           
           <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-4 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white text-white"
              />
              <button className="bg-white text-brand-red font-bold px-8 py-4 rounded-full hover:bg-gray-100 transition-colors shadow-lg">
                Subscribe
              </button>
           </form>
           <div className="mt-4 flex items-center justify-center gap-2 text-xs text-white/60">
             <CheckCircle2 className="w-3 h-3" /> GDPR Compliant • Unsubscribe anytime
           </div>
        </div>
      </section>
    </div>
  );
};