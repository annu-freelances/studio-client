import React from 'react';
import HeroSection from '../components/home/HeroSection';
import PhilosophySection from '../components/home/PhilosophySection';
import ServiceCards from '../components/home/ServiceCards';
import PortfolioTeaser from '../components/home/PortfolioTeaser';

const Home = () => {
  return (
    <div className="animate-in fade-in duration-1000">
      <HeroSection />
      <PhilosophySection />
      <ServiceCards />
      <PortfolioTeaser />
    </div>
  );
};

export default Home;