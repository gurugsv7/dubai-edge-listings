import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { mockListings } from "@/data/mockListings";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = mockListings.find((listing) => listing.id === id);

  if (!listing) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Property Not Found</h1>
            <Button onClick={() => navigate("/")} variant="outline">
              Back to Listings
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Find the cheapest of the top 3 prices
  const cheapest = listing.top3Prices && listing.top3Prices.length > 0
    ? listing.top3Prices.reduce((min, curr) => curr.price < min.price ? curr : min, listing.top3Prices[0])
    : null;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button onClick={() => navigate("/")} variant="outline" className="mb-4">
          Back to Listings
        </Button>
        <div className="bg-white rounded-lg p-8 border shadow-sm">
          <h1 className="text-3xl font-extrabold text-blue-900 mb-2">{listing.originalTitle}</h1>
          <div className="text-gray-400 text-base font-medium mb-4">{listing.area} • {listing.building}</div>
          <div className="text-4xl font-bold text-blue-700 mb-2">AED {listing.currentPrice?.toLocaleString()}</div>
          <div className="flex gap-4 mb-2 text-lg">
            <span>{listing.propertyType}</span>
            <span>{listing.bedrooms} Bedrooms</span>
          </div>
          <div className="mb-2">
            <strong>Bayut Link:</strong> <a href={listing.bayutLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View on Bayut</a>
          </div>
          <div className="mb-2">
            <strong>Building URL:</strong> <a href={listing.buildingUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">View Building</a>
          </div>
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Top 3 Cheapest Listings in Same Building & Bedroom Type</h3>
            <ul className="list-disc ml-6">
              {listing.top3Prices && listing.top3Prices.map((price, idx) => (
                <li key={idx}>
                  AED {price.price?.toLocaleString()} - <a href={price.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Listing</a> {price.is_today_listing ? "(Today)" : ""}
                </li>
              ))}
            </ul>
            {cheapest && (
              <div className="mt-4 p-3 bg-green-50 rounded">
                <strong>Cheapest of Top 3:</strong> AED {cheapest.price?.toLocaleString()} - <a href={cheapest.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Listing</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
