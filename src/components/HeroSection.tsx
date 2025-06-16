
import { TrendingUp, Clock, Target, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white py-20 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-4 py-2 mb-6">
            <Zap className="h-4 w-4 text-yellow-400" />
            <span className="text-sm font-medium text-blue-100">Updated Daily at 6:00 AM GST</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Dubai's Daily
            <span className="block bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
              Top 20 Properties
            </span>
            <span className="block text-3xl md:text-4xl font-medium text-slate-300 mt-2">
              Curated for Brokers
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl mb-8 text-slate-200 max-w-4xl mx-auto font-light">
            High-ROI opportunities, sudden price drops, flexible payment plans, and exclusive deals – 
            <span className="text-yellow-400 font-medium"> all in one place</span>
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 group"
            >
              Explore Today's Opportunities
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl p-3 w-fit mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">High ROI Properties</h3>
              <p className="text-slate-300 leading-relaxed">
                Investment opportunities with <span className="text-green-400 font-semibold">8%+ rental yields</span> and proven market performance
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-blue-400 to-cyan-500 rounded-xl p-3 w-fit mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Daily Updates</h3>
              <p className="text-slate-300 leading-relaxed">
                Fresh listings and <span className="text-blue-400 font-semibold">price changes every 24 hours</span> to keep you ahead
              </p>
            </div>
            
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl p-3 w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">Broker-Focused</h3>
              <p className="text-slate-300 leading-relaxed">
                <span className="text-purple-400 font-semibold">Curated opportunities</span> designed specifically for real estate professionals
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};
