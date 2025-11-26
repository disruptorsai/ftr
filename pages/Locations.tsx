import React from 'react';
import { LOCATIONS } from '../constants';
import { MapPin, Phone, Clock, Navigation } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const Locations: React.FC = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <h1 className="font-display font-bold text-5xl mb-6 text-center">Our Locations</h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Fit2Recover has grown from a single gym to a multi-location community serving the Wasatch Front. Find the location nearest you.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          {LOCATIONS.map((loc) => (
            <div key={loc.id} className="bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 flex flex-col">
               {/* Map Placeholder Area */}
               <div className="h-48 bg-zinc-800 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-[url('https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Salt_Lake_City_montage_19_July_2011.jpg/800px-Salt_Lake_City_montage_19_July_2011.jpg')] bg-cover bg-center grayscale opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
                  <div className="absolute inset-0 bg-brand-dark/50"></div>
                  <div className="absolute bottom-4 left-4">
                     <span className="bg-brand-red text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Open Now</span>
                  </div>
               </div>
               
               <div className="p-8 flex-grow">
                  <h3 className="text-2xl font-display font-bold text-white mb-2">{loc.name}</h3>
                  <p className="text-gray-400 mb-6 flex items-start gap-2">
                     <MapPin className="w-5 h-5 text-brand-red shrink-0 mt-1" />
                     {loc.address}
                  </p>

                  <div className="space-y-4 mb-8">
                     <div className="flex items-center gap-3 text-gray-300">
                        <Phone className="w-4 h-4 text-brand-gold" />
                        <a href={`tel:${loc.phone}`} className="hover:text-white transition-colors">{loc.phone}</a>
                     </div>
                     <div className="flex items-center gap-3 text-gray-300">
                        <Clock className="w-4 h-4 text-brand-green" />
                        <span>Mon-Fri: 6am - 8pm, Sat: 8am - 2pm</span>
                     </div>
                  </div>

                  <div className="flex gap-4 mt-auto">
                     <Button size="sm" className="flex-1">
                        <Navigation className="w-4 h-4 mr-2" /> Directions
                     </Button>
                     <Button size="sm" variant="outline" className="flex-1">
                        View Schedule
                     </Button>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};