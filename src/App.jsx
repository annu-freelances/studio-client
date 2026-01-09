import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import CustomCursor from './components/ui/customCursor';

// Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import About from './pages/About';

const App = () => {
  return (
    <Router>
      <div className="bg-white text-neutral-900 font-sans selection:bg-emerald-500 selection:text-white cursor-default">
        <CustomCursor />
        <Navigation />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;