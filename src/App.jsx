import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/layout/Navigation";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import About from "./pages/About";
import ContactPage from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
      <div className="bg-white text-neutral-900 font-sans selection:bg-emerald-500 selection:text-white cursor-default">
        <Navigation />
        <main>
          <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
