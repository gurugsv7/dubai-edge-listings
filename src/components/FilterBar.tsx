
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { TrendingDown, TrendingUp, Building, UserCheck, CreditCard, MapPin, Home, X } from "lucide-react";
import { Filters } from "@/pages/Index";

interface FilterBarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const FilterBar = ({ filters, onFiltersChange }: FilterBarProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const updateFilter = (key: keyof Filters, value: boolean | string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      priceDropToday: false,
      highRentalYield: false,
      offPlanProjects: false,
      motivatedSellers: false,
      paymentPlanAvailable: false,
      area: "",
      propertyType: "",
    });
  };

  const activeFiltersCount = Object.values(filters).filter(v => v === true || (typeof v === 'string' && v !== '')).length;

  return (
    <div className="bg-white rounded-lg shadow-sm border mb-6 sticky top-0 z-10">
      <div className="p-4">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Button
            variant={filters.priceDropToday ? "default" : "outline"}
            size="sm"
            onClick={() => updateFilter("priceDropToday", !filters.priceDropToday)}
            className="flex items-center gap-2"
          >
            <TrendingDown className="h-4 w-4" />
            Price Drop Today
          </Button>
          
          <Button
            variant={filters.highRentalYield ? "default" : "outline"}
            size="sm"
            onClick={() => updateFilter("highRentalYield", !filters.highRentalYield)}
            className="flex items-center gap-2"
          >
            <TrendingUp className="h-4 w-4" />
            High Rental Yield
          </Button>
          
          <Button
            variant={filters.offPlanProjects ? "default" : "outline"}
            size="sm"
            onClick={() => updateFilter("offPlanProjects", !filters.offPlanProjects)}
            className="flex items-center gap-2"
          >
            <Building className="h-4 w-4" />
            Off-Plan Projects
          </Button>
          
          <Button
            variant={filters.motivatedSellers ? "default" : "outline"}
            size="sm"
            onClick={() => updateFilter("motivatedSellers", !filters.motivatedSellers)}
            className="flex items-center gap-2"
          >
            <UserCheck className="h-4 w-4" />
            Motivated Sellers
          </Button>
          
          <Button
            variant={filters.paymentPlanAvailable ? "default" : "outline"}
            size="sm"
            onClick={() => updateFilter("paymentPlanAvailable", !filters.paymentPlanAvailable)}
            className="flex items-center gap-2"
          >
            <CreditCard className="h-4 w-4" />
            Payment Plan
          </Button>

          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            More Filters
          </Button>

          {activeFiltersCount > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={clearAllFilters}
              className="text-red-600 hover:text-red-700"
            >
              <X className="h-4 w-4 mr-1" />
              Clear All ({activeFiltersCount})
            </Button>
          )}
        </div>

        {isExpanded && (
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t">
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <Input
                placeholder="Search by area..."
                value={filters.area}
                onChange={(e) => updateFilter("area", e.target.value)}
                className="w-48"
              />
            </div>

            <div className="flex items-center gap-2">
              <Home className="h-4 w-4 text-gray-500" />
              <Select value={filters.propertyType} onValueChange={(value) => updateFilter("propertyType", value)}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">All Types</SelectItem>
                  <SelectItem value="Apartment">Apartment</SelectItem>
                  <SelectItem value="Villa">Villa</SelectItem>
                  <SelectItem value="Townhouse">Townhouse</SelectItem>
                  <SelectItem value="Penthouse">Penthouse</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )}

        {activeFiltersCount > 0 && (
          <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t">
            {filters.priceDropToday && <Badge variant="secondary">Price Drop Today</Badge>}
            {filters.highRentalYield && <Badge variant="secondary">High Rental Yield</Badge>}
            {filters.offPlanProjects && <Badge variant="secondary">Off-Plan Projects</Badge>}
            {filters.motivatedSellers && <Badge variant="secondary">Motivated Sellers</Badge>}
            {filters.paymentPlanAvailable && <Badge variant="secondary">Payment Plan</Badge>}
            {filters.area && <Badge variant="secondary">Area: {filters.area}</Badge>}
            {filters.propertyType && <Badge variant="secondary">Type: {filters.propertyType}</Badge>}
          </div>
        )}
      </div>
    </div>
  );
};
