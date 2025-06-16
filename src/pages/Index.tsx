
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
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <div className="container mx-auto px-4 pb-8">
        <FilterBar filters={filters} onFiltersChange={setFilters} />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {filteredListings.length} Properties Found
          </h2>
          <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>
        {viewMode === "grid" ? (
          <ListingsGrid listings={filteredListings} />
        ) : (
          <ListingsTable listings={filteredListings} />
        )}
      </div>
    </div>
  );
};

export default Index;
