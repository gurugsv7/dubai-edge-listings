
import { TrendingUp, Clock, Target } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Dubai's Daily Top 20 Property Listings
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          Curated for Brokers
        </p>
        <p className="text-lg mb-8 max-w-4xl mx-auto text-blue-50">
          High-ROI, sudden price drops, flexible payment plans, and more – all in one place, updated every 24 hours.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <TrendingUp className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
            <h3 className="font-semibold mb-2">High ROI Properties</h3>
            <p className="text-blue-100 text-sm">Investment opportunities with 8%+ rental yields</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Clock className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
            <h3 className="font-semibold mb-2">Daily Updates</h3>
            <p className="text-blue-100 text-sm">Fresh listings and price changes every 24 hours</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <Target className="h-8 w-8 mx-auto mb-3 text-yellow-400" />
            <h3 className="font-semibold mb-2">Broker-Focused</h3>
            <p className="text-blue-100 text-sm">Curated opportunities for real estate professionals</p>
          </div>
        </div>
      </div>
    </section>
  );
};
