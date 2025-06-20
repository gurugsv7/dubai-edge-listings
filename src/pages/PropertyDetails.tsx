import { useParams, useNavigate } from "react-router-dom";
import { mockListings, PropertyListing } from "@/data/mockListings";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, MapPin, Home, TrendingDown, Star, Calendar, Calculator, Building, Users } from "lucide-react";

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
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Listings
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Calculate market value from top 3 prices
  let marketValue = undefined;
  let marketDiff = undefined;
  if (listing.top3Prices && listing.top3Prices.length > 0) {
    const avg =
      listing.top3Prices.reduce((sum, item) => sum + item.price, 0) /
      listing.top3Prices.length;
    marketValue = Math.round(avg);
    marketDiff = listing.currentPrice - marketValue;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button onClick={() => navigate("/")} variant="outline" className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Listings
          </Button>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {listing.propertyType} in {listing.area}
              </h1>
              <div className="flex items-center text-gray-600">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-lg">{listing.building}</span>
              </div>
            </div>
            {listing.priceDropToday && (
              <Badge variant="outline" className="border-red-200 text-red-700 bg-red-50 px-4 py-2 text-sm">
                <TrendingDown className="h-4 w-4 mr-2" />
                Price Drop Today
              </Badge>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Price Analysis */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Calculator className="h-5 w-5 mr-2 text-gray-600" />
                  Price Analysis & Market Value
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-gray-600">Current Price</p>
                    <p className="text-3xl font-bold text-blue-700">
                      AED {listing.currentPrice.toLocaleString()}
                    </p>
                  </div>
                  {marketValue && (
                    <div className="bg-gray-100 border border-gray-200 p-4 rounded-lg mt-2">
                      <p className="text-sm text-gray-700 font-medium">Market Value (Avg. of Top 3)</p>
                      <p className="text-xl font-bold text-gray-900">
                        AED {marketValue.toLocaleString()}
                      </p>
                      <p className={`text-sm font-semibold mt-1 ${marketDiff < 0 ? 'text-green-600' : 'text-red-600'}`}>{marketDiff < 0 ? `Below market by AED ${Math.abs(marketDiff).toLocaleString()}` : `Above market by AED ${marketDiff.toLocaleString()}`}</p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Property Features */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Home className="h-5 w-5 mr-2 text-gray-600" />
                  Property Details & Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Basic Information</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Property Type:</span>
                        <span className="font-medium">{listing.propertyType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Bedrooms:</span>
                        <span className="font-medium">{listing.bedrooms} BR</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Area:</span>
                        <span className="font-medium">{listing.area}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Building:</span>
                        <span className="font-medium">{listing.building}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {listing.keyFeatures.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs border-gray-300 text-gray-700">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top 3 Prices Section */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <span className="mr-2">🏆</span> Top 3 Lowest Prices in this Building
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {listing.top3Prices && listing.top3Prices.length > 0 ? (
                    listing.top3Prices.map((item, idx) => (
                      <div key={idx} className="flex items-center justify-between bg-gray-50 border rounded px-3 py-2">
                        <span className="font-semibold text-blue-700">AED {item.price.toLocaleString()}</span>
                        <Button
                          size="sm"
                          variant="outline"
                          className="ml-2"
                          onClick={() => window.open(item.link, '_blank')}
                        >
                          View
                        </Button>
                      </div>
                    ))
                  ) : (
                    <span className="text-gray-500">No comparison data</span>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Opportunity Reason */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-gray-800">
                  <Star className="h-5 w-5 mr-2 text-gray-600" />
                  Why This Opportunity?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-100 border border-gray-200 p-4 rounded-lg">
                  <p className="font-medium text-gray-800">{listing.opportunityReason}</p>
                  <p className="text-sm text-gray-600 mt-2">
                    This property offers exceptional value in today's market
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Market Indicators */}
            <Card>
              <CardHeader>
                <CardTitle className="text-gray-800">Market Indicators</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {listing.isOffPlan && (
                  <div className="flex items-center justify-between p-3 bg-gray-100 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <Building className="h-4 w-4 mr-2 text-gray-600" />
                      <span className="text-sm font-medium text-gray-800">Off-Plan</span>
                    </div>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">New</Badge>
                  </div>
                )}
                
                {listing.hasPaymentPlan && (
                  <div className="flex items-center justify-between p-3 bg-gray-100 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2 text-gray-600" />
                      <span className="text-sm font-medium text-gray-800">Payment Plan</span>
                    </div>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Available</Badge>
                  </div>
                )}
                
                {listing.isMotivatedSeller && (
                  <div className="flex items-center justify-between p-3 bg-gray-100 border border-gray-200 rounded-lg">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2 text-gray-600" />
                      <span className="text-sm font-medium text-gray-800">Motivated Seller</span>
                    </div>
                    <Badge variant="outline" className="border-gray-300 text-gray-700">Urgent</Badge>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
