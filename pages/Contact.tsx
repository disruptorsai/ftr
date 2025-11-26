import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send to API would go here
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h1 className="font-display font-bold text-5xl mb-6">Get in Touch</h1>
            <p className="text-gray-400 text-lg mb-12">
              Have questions about our programs, volunteering, or how to get started? We're here to help.
            </p>

            <div className="space-y-8">
               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-brand-red shrink-0">
                     <Phone className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-white font-bold text-lg mb-1">Call Us</h3>
                     <p className="text-gray-400 mb-1">Salt Lake City: (801) 410-8988</p>
                     <p className="text-gray-400">Provo: (801) 875-0603</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-brand-red shrink-0">
                     <Mail className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-white font-bold text-lg mb-1">Email Us</h3>
                     <p className="text-gray-400">info@fit2recover.org</p>
                     <p className="text-gray-500 text-sm mt-1">We typically reply within 24 hours.</p>
                  </div>
               </div>

               <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-zinc-800 rounded-full flex items-center justify-center text-brand-red shrink-0">
                     <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                     <h3 className="text-white font-bold text-lg mb-1">Visit Us</h3>
                     <p className="text-gray-400">1331 S Major St</p>
                     <p className="text-gray-400">Salt Lake City, UT 84115</p>
                  </div>
               </div>
            </div>
          </div>

          <div className="bg-zinc-900 border border-white/5 p-8 rounded-3xl">
             {submitted ? (
               <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-fade-in-up">
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                     <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                     </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Thanks for reaching out. Someone from our team will be in touch shortly.</p>
                  <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>Send Another</Button>
               </div>
             ) : (
               <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-2 gap-6">
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400">First Name</label>
                        <input required type="text" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-brand-red focus:outline-none" />
                     </div>
                     <div className="space-y-2">
                        <label className="text-sm font-bold text-gray-400">Last Name</label>
                        <input required type="text" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-brand-red focus:outline-none" />
                     </div>
                  </div>
                  
                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-400">Email</label>
                     <input required type="email" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-brand-red focus:outline-none" />
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-400">Subject</label>
                     <select className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-brand-red focus:outline-none">
                        <option>General Inquiry</option>
                        <option>Volunteering</option>
                        <option>Donations</option>
                        <option>Programs</option>
                     </select>
                  </div>

                  <div className="space-y-2">
                     <label className="text-sm font-bold text-gray-400">Message</label>
                     <textarea required rows={5} className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white focus:border-brand-red focus:outline-none"></textarea>
                  </div>

                  <Button type="submit" className="w-full">Send Message</Button>
               </form>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};