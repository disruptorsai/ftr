import React, { useState, useEffect } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Heart, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, ArrowUp } from 'lucide-react';
import { NAV_LINKS } from '../constants';
import { Button } from './ui/Button';

// Robust Logo Component
const Logo: React.FC<{ className?: string }> = ({ className = "h-8 md:h-10 w-auto" }) => {
  const [error, setError] = useState(false);
  
  if (error) {
    // Text Fallback if image fails
    return (
      <div className={`flex flex-col leading-none font-display font-bold tracking-tighter ${className.includes('h-') ? '' : 'h-10'}`}>
        <span className="text-black text-xl">FIT <span className="text-brand-dark">TO</span></span>
        <span className="text-brand-red text-xl">RECOVER</span>
      </div>
    );
  }

  return (
    <img 
      src="https://fit2recover.org/wp-content/themes/yootheme/cache/fc/FTRlogo-transparent-fc74e446.webp" 
      alt="Fit2Recover" 
      className={`object-contain ${className}`}
      onError={() => setError(true)}
    />
  );
};

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-dark text-gray-100 font-sans selection:bg-brand-red selection:text-white">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
          isScrolled ? 'bg-brand-dark/90 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <NavLink to="/" className="flex items-center gap-2 group">
             <div className="bg-white p-2 rounded-lg shadow-lg shadow-brand-red/10 group-hover:shadow-brand-red/30 transition-all duration-300 transform group-hover:scale-105">
                <Logo />
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors hover:text-brand-red ${
                    isActive ? 'text-brand-red' : 'text-gray-300'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
             <Button 
                variant="primary" 
                size="sm" 
                onClick={() => navigate('/donate')}
                className="shadow-brand-red/20"
             >
                <Heart className="w-4 h-4 mr-2 fill-current" />
                Donate
             </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark z-30 pt-24 px-6 transition-transform duration-500 ease-in-out lg:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className="text-2xl font-display font-bold text-white hover:text-brand-red transition-colors"
            >
              {link.name}
            </NavLink>
          ))}
          <Button variant="primary" size="lg" className="mt-8 w-full" onClick={() => navigate('/donate')}>
            Donate Now
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-20 pb-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="bg-white w-fit p-2 rounded-lg">
                <Logo className="h-8 w-auto" />
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                A safe place for people in recovery to connect through fitness, nutrition, creative arts, and community service.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-red transition-colors text-white">
                    <Icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-display font-bold text-lg text-white mb-6">Programs</h5>
              <ul className="space-y-4">
                {['Fitness', 'Nutrition', 'Creative Arts', 'Community Service'].map((item) => (
                  <li key={item}>
                    <NavLink to="/programs" className="text-gray-400 hover:text-brand-red transition-colors text-sm">
                      {item}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="font-display font-bold text-lg text-white mb-6">Contact</h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-5 h-5 text-brand-red shrink-0" />
                  <span>1331 S Major St<br />Salt Lake City, UT 84115</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Phone className="w-5 h-5 text-brand-red shrink-0" />
                  <span>(801) 410-8988</span>
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <Mail className="w-5 h-5 text-brand-red shrink-0" />
                  <span>info@fit2recover.org</span>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="font-display font-bold text-lg text-white mb-6">Transparency</h5>
              <div className="flex gap-4 items-center mb-4">
                 <div className="bg-white/10 px-3 py-1 rounded text-xs">Best of State 2025</div>
                 <div className="bg-white/10 px-3 py-1 rounded text-xs">4-Star Charity</div>
              </div>
              <p className="text-gray-500 text-xs">
                EIN: 47-0998466<br/>
                All donations are tax-deductible.
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Fit2Recover. All rights reserved.</p>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Back to top <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};