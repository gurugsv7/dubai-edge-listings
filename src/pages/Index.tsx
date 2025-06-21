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
  studioApartments: boolean;
  bedroomType: string;
}

const Index = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filters, setFilters] = useState<Filters>({
    studioApartments: false,
    bedroomType: "all",
  });

  const filteredListings = mockListings.filter((listing) => {
    if (filters.studioApartments && (listing.bedrooms !== 0 && listing.propertyType !== "Studio")) return false;
    if (filters.bedroomType && filters.bedroomType !== "all" && String(listing.bedrooms) !== filters.bedroomType) return false;
    return true;
  });

  // Sort listings by today's price as cheapest, then today's price in top 3, then others
  const sortedListings = [...filteredListings].sort((a, b) => {
    const getSortRank = (listing) => {
      if (!listing.top3Prices || listing.top3Prices.length === 0) return 2;
      const todayIdx = listing.top3Prices.findIndex(p => p.is_today_listing);
      if (todayIdx === -1) return 2;
      const minPrice = Math.min(...listing.top3Prices.map(p => p.price));
      if (listing.top3Prices[todayIdx].price === minPrice) return 0;
      return 1;
    };
    return getSortRank(a) - getSortRank(b);
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <HeroSection />
      <div className="container mx-auto px-4 pb-8">
        <FilterBar filters={filters} onFiltersChange={setFilters} />
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            {sortedListings.length} Properties Found
          </h2>
          <ViewToggle viewMode={viewMode} onViewModeChange={setViewMode} />
        </div>
        {viewMode === "grid" ? (
          <ListingsGrid listings={sortedListings} />
        ) : (
          <ListingsTable listings={sortedListings} />
        )}
      </div>
    </div>
  );
};

export default Index;
