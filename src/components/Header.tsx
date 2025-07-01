import { Building2, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b mt-4">
      <div className="container mx-auto px-2 py-2 md:px-4 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Building2 className="h-7 w-7 text-blue-600 md:h-8 md:w-8" />
            <div>
              <h1 className="text-lg font-bold text-gray-900 md:text-2xl">
                BrokerEdge Dubai
              </h1>
              {/* Hide subtitle on mobile */}
              <p className="hidden md:block text-sm text-gray-600">
                Premium Real Estate Intelligence
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <div className="text-right">
              <p className="text-xs font-medium text-gray-900 md:text-sm">
                Last Updated
              </p>
              <p className="text-[10px] text-gray-600 md:text-xs">
                Today, 6:00 AM
              </p>
            </div>
            {/* Only show Alerts button on md+ */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden p-2 h-8 w-8"
            >
              <Bell className="h-4 w-4" />
              <span className="sr-only">Alerts</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center"
            >
              <Bell className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Alerts</span>
            </Button>
            {/* Only show Profile button on md+ */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden p-2 h-8 w-8"
            >
              <User className="h-4 w-4" />
              <span className="sr-only">Profile</span>
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="hidden md:flex items-center"
            >
              <User className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
