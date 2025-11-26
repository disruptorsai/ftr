import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ChatWidget } from './components/ChatWidget';
import { Home } from './pages/Home';
import { Donate } from './pages/Donate';
import { Programs } from './pages/Programs';
import { Schedule } from './pages/Schedule';
import { Locations } from './pages/Locations';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Resources } from './pages/Resources';

// Simple placeholder components for pages still under construction
const PlaceholderPage: React.FC<{ title: string }> = ({ title }) => (
  <div className="pt-32 pb-20 container mx-auto px-6 text-center">
    <h1 className="text-5xl font-display font-bold mb-6 text-white">{title}</h1>
    <p className="text-gray-400">Coming soon.</p>
  </div>
);

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/shop" element={<PlaceholderPage title="FTR Shop" />} />
          <Route path="/membership" element={<PlaceholderPage title="Membership" />} />
        </Routes>
      </Layout>
      <ChatWidget />
    </Router>
  );
};

export default App;