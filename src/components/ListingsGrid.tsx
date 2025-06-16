
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyListing } from "@/data/mockListings";

interface ListingsGridProps {
  listings: PropertyListing[];
}

export const ListingsGrid = ({ listings }: ListingsGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {listings.map((listing) => (
        <PropertyCard key={listing.id} listing={listing} />
      ))}
    </div>
  );
};
