import React from 'react';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1438032005730-c779502df39b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40" />
      </div>
      
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center h-screen text-center text-white">
          <span className="text-church-gold font-medium tracking-wider mb-4">WELCOME TO</span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hallelujah Assembly<br />of God Church
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl font-light">
            Experience the transformative power of faith in a community that cares
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-24">
            <Button 
              size="lg" 
              className="bg-church-gold hover:bg-church-gold/90 text-black px-8 py-6 text-lg"
            >
              Join Us Sunday at 10:00 AM
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-2 border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
            >
              Watch Live
            </Button>
          </div>

          <div className="absolute bottom-24 left-0 right-0 text-center">
            <div className="inline-block p-4 rounded-lg bg-black/30 backdrop-blur-sm">
              <p className="text-lg font-medium mb-2">Sunday Services</p>
              <p className="text-sm opacity-80">Morning Worship: 10:00 AM</p>
              <p className="text-sm opacity-80">Evening Service: 6:00 PM</p>
            </div>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ChevronDown className="w-8 h-8 animate-bounce" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;