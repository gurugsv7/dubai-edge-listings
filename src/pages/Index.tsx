
import { useState } from "react";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { FilterBar } from "@/components/FilterBar";
import { ListingsGrid } from "@/components/ListingsGrid";
import { ListingsTable } from "@/components/ListingsTable";
import { ViewToggle } from "@/components/ViewToggle";
import { mockListings } from "@/data/mockListings";

export type ViewMode = "grid" | "table";

export interface Filters {
  priceDropToday: boolean;
  highRentalYield: boolean;
  offPlanProjects: boolean;
  motivatedSellers: boolean;
  paymentPlanAvailable: boolean;
  area: string;
  propertyType: string;
}

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filters, setFilters] = useState<Filters>({
    priceDropToday: false,
    highRentalYield: false,
    offPlanProjects: false,
    motivatedSellers: false,
    paymentPlanAvailable: false,
    area: "",
    propertyType: "",
  });

  const filteredListings = mockListings.filter((listing) => {
    if (filters.priceDropToday && !listing.priceDropToday) return false;
    if (filters.highRentalYield && listing.roiPercentage < 8) return false;
    if (filters.offPlanProjects && !listing.isOffPlan) return false;
    if (filters.motivatedSellers && !listing.isMotivatedSeller) return false;
    if (filters.paymentPlanAvailable && !listing.hasPaymentPlan) return false;
    if (filters.area && !listing.area.toLowerCase().includes(filters.area.toLowerCase())) return false;
    if (filters.propertyType && listing.propertyType !== filters.propertyType) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />
      <HeroSection />
      <div className="container mx-auto px-4 pb-12">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 mb-8">
          <FilterBar filters={filters} onFiltersChange={setFilters} />
        </div>
        
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {filteredListings.length} Properties Found
            </h2>
            <p className="text-slate-600">Premium investment opportunities curated for you</p>
          </div>
          <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>
        
        <div className="transition-all duration-300">
          {viewMode === "grid" ? (
            <ListingsGrid listings={filteredListings} />
          ) : (
            <ListingsTable listings={filteredListings} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
