import React, { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Heart, ShieldCheck, DollarSign, Calendar } from 'lucide-react';

export const Donate: React.FC = () => {
  const [amount, setAmount] = useState<number | null>(100);
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('once');
  const [customAmount, setCustomAmount] = useState('');

  const amounts = [25, 50, 100, 250, 500];

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(null);
  };

  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column: Impact */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 text-brand-red border border-brand-red/20 mb-6">
               <Heart className="w-3 h-3 fill-current" />
               <span className="text-xs font-bold uppercase tracking-wider">Your Impact</span>
            </div>
            <h1 className="font-display font-bold text-5xl mb-6 leading-tight">
              Invest in <span className="text-brand-red">Life Change</span>
            </h1>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Fit2Recover provides free and low-cost recovery support services to over 700 people every week. Your donation helps us keep the lights on, the gym open, and the community connected.
            </p>

            <div className="space-y-6">
               <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl flex items-start gap-4">
                  <div className="bg-brand-green/20 p-3 rounded-lg text-brand-green">
                     <DollarSign className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-lg">$25 Donation</h4>
                     <p className="text-gray-400 text-sm">Provides one week of unlimited fitness classes for a member in early recovery.</p>
                  </div>
               </div>
               
               <div className="bg-zinc-900 border border-white/5 p-6 rounded-2xl flex items-start gap-4">
                  <div className="bg-brand-red/20 p-3 rounded-lg text-brand-red">
                     <Heart className="w-6 h-6" />
                  </div>
                  <div>
                     <h4 className="font-bold text-white text-lg">$100 Donation</h4>
                     <p className="text-gray-400 text-sm">Sponsors a full month of nutrition supplies for our community meal prep program.</p>
                  </div>
               </div>
            </div>

            <div className="mt-12 flex items-center gap-4">
               <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Charity_Navigator_Logo.svg/1200px-Charity_Navigator_Logo.svg.png" className="h-10 opacity-70 grayscale hover:grayscale-0 transition-all" alt="Charity Navigator" />
               <div className="text-xs text-gray-500 max-w-[200px]">
                 Top-rated for financial transparency and accountability.
               </div>
            </div>
          </div>

          {/* Right Column: Donation Form */}
          <div className="bg-white text-brand-dark rounded-3xl p-8 shadow-2xl">
             <div className="flex bg-gray-100 p-1 rounded-xl mb-8">
                <button 
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${frequency === 'once' ? 'bg-brand-dark text-white shadow-lg' : 'text-gray-500 hover:text-gray-900'}`}
                  onClick={() => setFrequency('once')}
                >
                  One-Time
                </button>
                <button 
                  className={`flex-1 py-3 text-sm font-bold rounded-lg transition-all ${frequency === 'monthly' ? 'bg-brand-red text-white shadow-lg' : 'text-gray-500 hover:text-gray-900'}`}
                  onClick={() => setFrequency('monthly')}
                >
                  Monthly
                </button>
             </div>

             <div className="grid grid-cols-3 gap-3 mb-6">
                {amounts.map((amt) => (
                  <button
                    key={amt}
                    onClick={() => { setAmount(amt); setCustomAmount(''); }}
                    className={`py-4 rounded-xl font-bold text-lg border-2 transition-all ${
                       amount === amt 
                       ? 'border-brand-red bg-brand-red/5 text-brand-red' 
                       : 'border-gray-200 text-gray-600 hover:border-gray-300'
                    }`}
                  >
                    ${amt}
                  </button>
                ))}
                <div className="relative">
                   <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">$</span>
                   <input 
                      type="number" 
                      placeholder="Custom"
                      value={customAmount}
                      onChange={handleCustomChange}
                      className={`w-full h-full rounded-xl border-2 pl-6 font-bold text-lg focus:outline-none focus:border-brand-red transition-colors ${
                         amount === null ? 'border-brand-red bg-brand-red/5' : 'border-gray-200'
                      }`}
                   />
                </div>
             </div>

             <div className="space-y-4 mb-8">
                <input type="text" placeholder="Full Name" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all" />
                <input type="email" placeholder="Email Address" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-red/20 focus:border-brand-red transition-all" />
                
                {/* Stripe Element Placeholder */}
                <div className="border border-gray-200 rounded-xl p-4 bg-gray-50">
                   <div className="flex justify-between items-center mb-2">
                      <span className="text-xs font-bold text-gray-400 uppercase">Card Information</span>
                      <div className="flex gap-2">
                         <div className="w-8 h-5 bg-gray-300 rounded"></div>
                         <div className="w-8 h-5 bg-gray-300 rounded"></div>
                      </div>
                   </div>
                   <div className="h-6 bg-white border border-gray-200 rounded px-2"></div>
                </div>
             </div>

             <Button size="lg" className="w-full text-lg shadow-xl shadow-brand-red/20">
                Donate ${amount || customAmount || '0'} {frequency === 'monthly' ? '/ month' : ''}
             </Button>
             
             <div className="mt-6 flex items-center justify-center gap-2 text-xs text-gray-500">
                <ShieldCheck className="w-4 h-4 text-brand-green" />
                Secure 256-bit SSL Encrypted Payment
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
