
import { Building2, Bell, User, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm border-b border-slate-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl p-2">
              <Building2 className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                BrokerEdge Dubai
              </h1>
              <p className="text-sm text-slate-600 font-medium">Premium Real Estate Intelligence</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-slate-100 rounded-full px-4 py-2">
              <Search className="h-4 w-4 text-slate-500 mr-2" />
              <span className="text-sm text-slate-600">Search properties...</span>
            </div>
            
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold text-slate-900">Last Updated</p>
              <p className="text-xs text-slate-600">Today, 6:00 AM GST</p>
            </div>
            
            <Button variant="outline" size="sm" className="border-slate-300 hover:bg-slate-50">
              <Bell className="h-4 w-4 mr-2" />
              Alerts
            </Button>
            <Button variant="outline" size="sm" className="border-slate-300 hover:bg-slate-50">
              <User className="h-4 w-4 mr-2" />
              Profile
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
