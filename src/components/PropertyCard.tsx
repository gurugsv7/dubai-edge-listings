import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, TrendingDown, TrendingUp, Star, ExternalLink } from "lucide-react";
import { PropertyListing } from "@/data/mockListings";
import { useNavigate } from "react-router-dom";

interface PropertyCardProps {
  listing: PropertyListing;
}

export const PropertyCard = ({ listing }: PropertyCardProps) => {
  const navigate = useNavigate();

  const handleViewListing = () => {
    navigate(`/property/${listing.id}`);
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer" onClick={handleViewListing}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <MapPin className="h-4 w-4 mr-1" />
            {listing.area} • {listing.building}
          </div>
          {listing.priceDropToday && (
            <Badge variant="destructive" className="bg-red-500">
              <TrendingDown className="h-3 w-3 mr-1" />
              Today
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Home className="h-4 w-4 mr-2 text-gray-500" />
            <span className="font-medium">{listing.propertyType}</span>
            <span className="text-gray-500 ml-2">• {listing.bedrooms} BR</span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-bold text-blue-600">
              {listing.currentPrice.toLocaleString()} AED
            </p>
            {listing.priceDropAmount && (
              <p className="text-sm text-red-600 flex items-center">
                <TrendingDown className="h-3 w-3 mr-1" />
                -{listing.priceDropPercentage}% ({listing.priceDropAmount.toLocaleString()} AED)
              </p>
            )}
          </div>
          
          <div className="text-right">
            <p className="text-lg font-semibold text-green-600 flex items-center">
              <TrendingUp className="h-4 w-4 mr-1" />
              {listing.roiPercentage}%
            </p>
            <p className="text-xs text-gray-500">ROI</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex flex-wrap gap-1">
            {listing.keyFeatures.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {listing.keyFeatures.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{listing.keyFeatures.length - 3} more
              </Badge>
            )}
          </div>

          <div className="bg-blue-50 p-2 rounded-md">
            <p className="text-sm font-medium text-blue-800 flex items-center">
              <Star className="h-3 w-3 mr-1" />
              {listing.opportunityReason}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {listing.isOffPlan && <Badge variant="secondary">Off-Plan</Badge>}
          {listing.hasPaymentPlan && <Badge variant="secondary">Payment Plan</Badge>}
          {listing.isMotivatedSeller && <Badge variant="secondary">Motivated Seller</Badge>}
        </div>
      </CardContent>

      <CardFooter>
        <Button className="w-full" size="sm" onClick={(e) => {
          e.stopPropagation();
          handleViewListing();
        }}>
          <ExternalLink className="h-4 w-4 mr-2" />
          View Listing
        </Button>
      </CardFooter>
    </Card>
  );
};
