import { useState, useEffect } from "react";
import { mockListings } from "@/data/mockListings";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/HeroSection";
import { Search, Star } from "lucide-react";

const getBedroomOptions = (listings: any[]) => {
  const set = new Set<number>();
  listings.forEach((l) => set.add(Number(l.bedroom_count)));
  return Array.from(set).sort((a, b) => a - b);
};

function isTodaysBest(listing: any) {
  return listing.top_1_price && listing.top_1_price.link === listing.link;
}

// Utility: Normalize title for display (remove "Bayut.com", trim, capitalize first letter)
function normalizeTitle(title: string) {
  if (!title) return "";
  let t = title.replace(/ *\| *Bayut\.com */i, "").trim();
  return t.charAt(0).toUpperCase() + t.slice(1);
}

const Index = () => {
  const navigate = useNavigate();
  // Restore state from sessionStorage if available
  const [search, setSearch] = useState(() => sessionStorage.getItem("search") ?? "");
  const [bedroomFilter, setBedroomFilter] = useState<string | number>(() => {
    const val = sessionStorage.getItem("bedroomFilter");
    return val === null ? "" : isNaN(Number(val)) ? val : Number(val);
  });
  const [showOnlyBest, setShowOnlyBest] = useState(() => sessionStorage.getItem("showOnlyBest") === "true");

  // Price range state
  const prices = mockListings.map(l => l.price_number).filter(Boolean);
  const minListingPrice = Math.min(...prices);
  const maxListingPrice = Math.max(...prices);
  const [minPrice, setMinPrice] = useState<number | "">(() => {
    const val = sessionStorage.getItem("minPrice");
    return val === null ? "" : Number(val);
  });
  const [maxPrice, setMaxPrice] = useState<number | "">(() => {
    const val = sessionStorage.getItem("maxPrice");
    return val === null ? "" : Number(val);
  });

  let filteredListings = mockListings.filter((listing) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      listing.location.toLowerCase().includes(searchLower) ||
      (listing.building_url && listing.building_url.toLowerCase().includes(searchLower));
    const matchesBedroom =
      bedroomFilter === "" ? true : Number(listing.bedroom_count) === Number(bedroomFilter);
    const matchesPrice =
      (minPrice === "" || listing.price_number >= minPrice) &&
      (maxPrice === "" || listing.price_number <= maxPrice);
    const matchesBest = !showOnlyBest || isTodaysBest(listing);
    return matchesSearch && matchesBedroom && matchesPrice && matchesBest;
  });

  filteredListings = [
    ...filteredListings.filter(isTodaysBest),
    ...filteredListings.filter((l) => !isTodaysBest(l)),
  ];

  // Restore scroll position if returning from details
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("homeScrollY");
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll, 10));
      sessionStorage.removeItem("homeScrollY");
    }
  }, []);

  // Persist state to sessionStorage on change
  useEffect(() => {
    sessionStorage.setItem("search", search);
    sessionStorage.setItem("bedroomFilter", bedroomFilter === undefined ? "" : String(bedroomFilter));
    sessionStorage.setItem("showOnlyBest", String(showOnlyBest));
    sessionStorage.setItem("minPrice", minPrice === "" ? "" : String(minPrice));
    sessionStorage.setItem("maxPrice", maxPrice === "" ? "" : String(maxPrice));
  }, [search, bedroomFilter, showOnlyBest, minPrice, maxPrice]);

  return (
    <div>
      <HeroSection />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex flex-col md:flex-row md:items-center md:gap-4 justify-center">
          <div className="relative w-full max-w-xl mb-3 md:mb-0">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search className="h-5 w-5" />
            </span>
            <input
              type="text"
              placeholder="Search by location or building..."
              className="w-full border border-gray-300 rounded-full pl-10 pr-4 py-2 text-base shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
          <select
            className="border border-gray-300 rounded-full px-4 py-2 text-base shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-full md:w-auto"
            value={bedroomFilter}
            onChange={(e) => setBedroomFilter(e.target.value === "" ? "" : Number(e.target.value))}
            style={{ maxWidth: 200, marginRight: 12 }}
          >
            <option value="">All Bedrooms</option>
            <option value={0}>Studio</option>
            <option value={1}>1 Bedroom</option>
            <option value={2}>2 Bedrooms</option>
            <option value={3}>3 Bedrooms</option>
            <option value={4}>4 Bedrooms</option>
          </select>
          <div style={{ display: "flex", alignItems: "center", gap: 8, marginRight: 12 }}>
            <input
              type="number"
              min={minListingPrice}
              max={maxListingPrice}
              placeholder={`Min (${minListingPrice})`}
              value={minPrice}
              onChange={e => setMinPrice(e.target.value === "" ? "" : Number(e.target.value))}
              className="border border-gray-300 rounded-full px-3 py-2 text-base shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-28"
              style={{ marginRight: 4 }}
            />
            <span>-</span>
            <input
              type="number"
              min={minListingPrice}
              max={maxListingPrice}
              placeholder={`Max (${maxListingPrice})`}
              value={maxPrice}
              onChange={e => setMaxPrice(e.target.value === "" ? "" : Number(e.target.value))}
              className="border border-gray-300 rounded-full px-3 py-2 text-base shadow focus:outline-none focus:ring-2 focus:ring-blue-400 transition w-28"
            />
          </div>
          <label className="flex items-center gap-2 ml-0 md:ml-4 mt-3 md:mt-0 cursor-pointer select-none">
            <input
              type="checkbox"
              className="accent-yellow-500 h-4 w-4"
              checked={showOnlyBest}
              onChange={() => setShowOnlyBest((v) => !v)}
            />
            <span className="text-yellow-800 font-semibold flex items-center text-sm">
              <Star className="h-4 w-4 mr-1" /> Show only Today's Best
            </span>
          </label>
        </div>
        <h1 className="text-2xl font-bold mb-6">Dubai Edge Listings</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing, idx) => (
            <div key={idx} className={`bg-white rounded-lg shadow p-4 flex flex-col gap-2 border relative`}>
              <div className="flex items-center justify-between mb-1">
                <div className="text-blue-900 font-extrabold text-base md:text-lg">
                  {idx + 1}. {listing.location}
                </div>
                {isTodaysBest(listing) && (
                  <div className="flex items-center gap-1 bg-yellow-100 border border-yellow-300 text-yellow-800 px-2 py-0.5 rounded-full text-xs font-semibold z-10 ml-2">
                    <Star className="h-4 w-4 mr-1" /> Today's Best
                  </div>
                )}
              </div>
              <div className="text-gray-700 font-normal text-sm md:text-base mb-1">{normalizeTitle(listing.title)}</div>
              <div className="text-blue-700 font-bold text-xl">{listing.price}</div>
              <div className="text-xs text-gray-400">Beds: {listing.beds} | Size: {listing.size}</div>
              <div className="flex gap-2 mt-2">
                <Button
                  size="sm"
                  onClick={() => {
                    sessionStorage.setItem("homeScrollY", window.scrollY.toString());
                    navigate(`/property/${mockListings.indexOf(listing)}`);
                  }}
                >
                  View Details
                </Button>
                <Button
                  asChild
                  size="sm"
                  variant="outline"
                >
                  <a
                    href={listing.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      sessionStorage.setItem("search", search);
                      sessionStorage.setItem("bedroomFilter", bedroomFilter === undefined ? "" : String(bedroomFilter));
                      sessionStorage.setItem("showOnlyBest", String(showOnlyBest));
                      sessionStorage.setItem("minPrice", minPrice === "" ? "" : String(minPrice));
                      sessionStorage.setItem("maxPrice", maxPrice === "" ? "" : String(maxPrice));
                      sessionStorage.setItem("homeScrollY", window.scrollY.toString());
                    }}
                  >
                    Bayut
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
