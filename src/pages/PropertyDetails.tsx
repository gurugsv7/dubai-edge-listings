import { Button } from "@/components/ui/button";
import { useParams, useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { mockListings } from "@/data/mockListings";
import { Home, BedDouble, ExternalLink, Tag, TrendingDown, Trophy } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const listing = mockListings.find((listing) => listing.id === id);

  const isMobile = useIsMobile();
  const [showPrices, setShowPrices] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [listing?.id]);

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

  const cheapest =
    listing.top3Prices && listing.top3Prices.length > 0
      ? listing.top3Prices.reduce(
          (min, curr) => (curr.price < min.price ? curr : min),
          listing.top3Prices[0]
        )
      : null;

  // --- MOBILE VIEW ---
  if (isMobile) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-2 py-4">
          <Button
            onClick={() => navigate("/")}
            variant="outline"
            size="sm"
            className="mb-3"
          >
            Back to Listings
          </Button>
          <div className="bg-white rounded-lg p-3 border shadow-sm flex flex-col gap-4">
            <h1 className="text-xl font-extrabold text-blue-900 mb-1">{listing.originalTitle}</h1>
            <div className="text-gray-400 text-sm font-medium mb-1">
              {listing.area} • {listing.building}
            </div>
            <div className="flex items-center gap-2 text-base mb-1">
              <Home className="h-4 w-4 text-gray-500" />
              <span>{listing.propertyType}</span>
              <span className="mx-1 text-gray-400">|</span>
              <BedDouble className="h-4 w-4 text-gray-500" />
              <span>
                {listing.bedrooms} Bedroom{listing.bedrooms === 1 ? "" : "s"}
              </span>
            </div>
            <div className="text-2xl font-bold text-blue-700 mb-1 flex items-center gap-2">
              AED {listing.currentPrice?.toLocaleString()}
              {listing.priceDropToday && (
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-semibold ml-2">
                  <TrendingDown className="h-4 w-4 mr-1" /> Today
                </span>
              )}
            </div>
            {listing.priceDropAmount && (
              <div className="text-xs text-red-600 flex items-center mb-1">
                <TrendingDown className="h-4 w-4 mr-1" />
                -{listing.priceDropPercentage}% ({listing.priceDropAmount.toLocaleString()} AED)
              </div>
            )}
            {/* Quick Links */}
            <div className="flex gap-2 mt-2">
              <Button
                asChild
                className="flex-1"
                size="sm"
              >
                <a href={listing.bayutLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View on Bayut
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1"
                size="sm"
              >
                <a href={listing.buildingUrl} target="_blank" rel="noopener noreferrer">
                  🏢 View Building
                </a>
              </Button>
            </div>
            {/* Accordion for details */}
            <Accordion type="multiple" className="mt-3">
              <AccordionItem value="features">
                <AccordionTrigger>Key Features</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2">
                    {listing.keyFeatures?.map((f, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs font-medium"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="opportunity">
                <AccordionTrigger>Why is this an opportunity?</AccordionTrigger>
                <AccordionContent>
                  <span className="text-blue-800 font-semibold flex items-center">
                    <Tag className="h-4 w-4 mr-1" /> {listing.opportunityReason}
                  </span>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="prices">
                <AccordionTrigger>Top 3 Cheapest Listings</AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-2">
                    {listing.top3Prices &&
                      listing.top3Prices.map((price, idx) => {
                        const isCheapest =
                          cheapest && price.price === cheapest.price;
                        return (
                          <a
                            key={idx}
                            href={price.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border transition
                              ${
                                price.is_today_listing
                                  ? "bg-green-100 border-green-400 text-green-800"
                                  : "bg-gray-100 border-gray-300 text-gray-700"
                              }
                              hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800`}
                          >
                            <span className="mr-1">
                              AED {price.price?.toLocaleString()}
                            </span>
                            {price.is_today_listing && (
                              <span className="ml-1 flex items-center text-green-700">
                                <TrendingDown className="h-3 w-3 mr-0.5" /> Today
                              </span>
                            )}
                            {isCheapest && (
                              <span className="ml-1 flex items-center text-yellow-700">
                                <Trophy className="h-3 w-3 mr-0.5" /> Cheapest
                              </span>
                            )}
                          </a>
                        );
                      })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    );
  }

  // --- DESKTOP VIEW ---
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <Button onClick={() => navigate("/")} variant="outline" className="mb-4">
          Back to Listings
        </Button>
        <div className="bg-white rounded-lg p-4 md:p-8 border shadow-sm flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-3xl font-extrabold text-blue-900 mb-2">{listing.originalTitle}</h1>
            <div className="text-gray-400 text-base font-medium mb-2">{listing.area} • {listing.building}</div>
            {/* Inline icons for property type and bedrooms */}
            <div className="flex items-center gap-3 text-lg mb-2">
              <Home className="h-5 w-5 text-gray-500" />
              <span>{listing.propertyType}</span>
              <span className="mx-2 text-gray-400">|</span>
              <BedDouble className="h-5 w-5 text-gray-500" />
              <span>{listing.bedrooms} Bedroom{listing.bedrooms === 1 ? "" : "s"}</span>
            </div>
            <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2 flex items-center gap-2">
              AED {listing.currentPrice?.toLocaleString()}
              {listing.priceDropToday && (
                <span className="inline-flex items-center px-2 py-0.5 rounded bg-red-100 text-red-700 text-xs font-semibold ml-2">
                  <TrendingDown className="h-4 w-4 mr-1" /> Today
                </span>
              )}
            </div>
            {listing.priceDropAmount && (
              <div className="text-sm text-red-600 flex items-center mb-2">
                <TrendingDown className="h-4 w-4 mr-1" />
                -{listing.priceDropPercentage}% ({listing.priceDropAmount.toLocaleString()} AED)
              </div>
            )}
            <div className="mb-2">
              <strong>Bayut Link:</strong>{" "}
              <a href={listing.bayutLink} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-flex items-center">
                View on Bayut <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            <div className="mb-2">
              <strong>Building URL:</strong>{" "}
              <a href={listing.buildingUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline inline-flex items-center">
                View Building <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
            {/* Key features */}
            <div className="flex flex-wrap gap-2 mt-4">
              {listing.keyFeatures?.slice(0, 3).map((f, i) => (
                <span key={i} className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs font-medium">{f}</span>
              ))}
              {listing.keyFeatures?.length > 3 && (
                <span className="bg-blue-50 text-blue-800 px-2 py-1 rounded text-xs font-medium">
                  +{listing.keyFeatures.length - 3} more
                </span>
              )}
            </div>
            {/* Opportunity reason */}
            <div className="mt-4 bg-blue-50 p-2 rounded">
              <span className="text-blue-800 font-semibold flex items-center">
                <Tag className="h-4 w-4 mr-1" /> {listing.opportunityReason}
              </span>
            </div>
            {/* Quick Links */}
            <div className="mt-6 flex gap-3">
              <Button
                asChild
                className="flex-1"
                size="lg"
              >
                <a href={listing.bayutLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Bayut
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="flex-1"
                size="lg"
              >
                <a href={listing.buildingUrl} target="_blank" rel="noopener noreferrer">
                  🏢 View Building
                </a>
              </Button>
            </div>
          </div>
          {/* Right Column: sticky on desktop */}
          <div className="md:w-2/5 md:max-w-sm flex-shrink-0">
            <div className="md:sticky md:top-24">
              {/* Top 3 Cheapest Listings */}
              <div className="mb-4">
                <h3 className="font-semibold mb-2 text-base md:text-lg">Top 3 Cheapest Listings</h3>
                {/* Mobile: collapsible */}
                <div className="md:hidden">
                  <Button
                    variant="outline"
                    size="sm"
                    className="mb-2"
                    onClick={() => setShowPrices((v) => !v)}
                  >
                    {showPrices ? "Hide" : "Show"} Price Comparison
                  </Button>
                  {showPrices && (
                    <div className="flex flex-wrap gap-2">
                      {listing.top3Prices && listing.top3Prices.map((price, idx) => {
                        const isCheapest = cheapest && price.price === cheapest.price;
                        return (
                          <a
                            key={idx}
                            href={price.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border transition
                              ${price.is_today_listing ? "bg-green-100 border-green-400 text-green-800" : "bg-gray-100 border-gray-300 text-gray-700"}
                              hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800`}
                          >
                            <span className="mr-1">AED {price.price?.toLocaleString()}</span>
                            {price.is_today_listing && (
                              <span className="ml-1 flex items-center text-green-700">
                                <TrendingDown className="h-3 w-3 mr-0.5" /> Today
                              </span>
                            )}
                            {isCheapest && (
                              <span className="ml-1 flex items-center text-yellow-700">
                                <Trophy className="h-3 w-3 mr-0.5" /> Cheapest
                              </span>
                            )}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
                {/* Desktop: always visible */}
                <div className="hidden md:flex flex-wrap gap-2">
                  {listing.top3Prices && listing.top3Prices.map((price, idx) => {
                    const isCheapest = cheapest && price.price === cheapest.price;
                    return (
                      <a
                        key={idx}
                        href={price.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold border transition
                          ${price.is_today_listing ? "bg-green-100 border-green-400 text-green-800" : "bg-gray-100 border-gray-300 text-gray-700"}
                          hover:bg-blue-100 hover:border-blue-400 hover:text-blue-800`}
                      >
                        <span className="mr-1">AED {price.price?.toLocaleString()}</span>
                        {price.is_today_listing && (
                          <span className="ml-1 flex items-center text-green-700">
                            <TrendingDown className="h-3 w-3 mr-0.5" /> Today
                          </span>
                        )}
                        {isCheapest && (
                          <span className="ml-1 flex items-center text-yellow-700">
                            <Trophy className="h-3 w-3 mr-0.5" /> Cheapest
                          </span>
                        )}
                      </a>
                    );
                  })}
                </div>
              </div>
              {/* CTA */}
              <Button
                asChild
                className="w-full mt-2"
                size="lg"
              >
                <a href={listing.bayutLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View on Bayut
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
