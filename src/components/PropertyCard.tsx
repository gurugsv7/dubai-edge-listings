
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Home, TrendingDown, TrendingUp, Star, ExternalLink, Zap } from "lucide-react";
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
    <Card className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-slate-200 hover:border-blue-300 hover:-translate-y-1 bg-white" onClick={handleViewListing}>
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-3">
          <div className="flex items-center text-sm text-slate-600">
            <MapPin className="h-4 w-4 mr-1 text-slate-400" />
            <span className="font-medium">{listing.area}</span>
            <span className="mx-2 text-slate-300">•</span>
            <span>{listing.building}</span>
          </div>
          {listing.priceDropToday && (
            <Badge className="bg-red-50 text-red-700 border-red-200 hover:bg-red-100">
              <TrendingDown className="h-3 w-3 mr-1" />
              Today
            </Badge>
          )}
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-slate-100 rounded-lg p-2 mr-3">
              <Home className="h-5 w-5 text-slate-600" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-lg">{listing.propertyType}</h3>
              <p className="text-slate-600 text-sm">{listing.bedrooms} Bedrooms</p>
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
          <div>
            <p className="text-2xl font-bold text-slate-900">
              {listing.currentPrice.toLocaleString()} AED
            </p>
            {listing.priceDropAmount && (
              <p className="text-sm text-red-600 flex items-center font-medium">
                <TrendingDown className="h-3 w-3 mr-1" />
                -{listing.priceDropPercentage}% ({listing.priceDropAmount.toLocaleString()} AED)
              </p>
            )}
          </div>
          
          <div className="text-right">
            <div className="bg-green-100 rounded-lg px-3 py-2">
              <p className="text-lg font-bold text-green-700 flex items-center">
                <TrendingUp className="h-4 w-4 mr-1" />
                {listing.roiPercentage}%
              </p>
              <p className="text-xs text-green-600 font-medium">ROI</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {listing.keyFeatures.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs border-slate-300 text-slate-700 bg-slate-50">
                {feature}
              </Badge>
            ))}
            {listing.keyFeatures.length > 3 && (
              <Badge variant="outline" className="text-xs border-slate-300 text-slate-700 bg-slate-50">
                +{listing.keyFeatures.length - 3} more
              </Badge>
            )}
          </div>

          <div className="bg-amber-50 border border-amber-200 p-3 rounded-lg">
            <p className="text-sm font-semibold text-amber-800 flex items-center">
              <Zap className="h-4 w-4 mr-2 text-amber-600" />
              {listing.opportunityReason}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {listing.isOffPlan && (
            <Badge className="bg-purple-100 text-purple-700 border-purple-200">
              Off-Plan
            </Badge>
          )}
          {listing.hasPaymentPlan && (
            <Badge className="bg-blue-100 text-blue-700 border-blue-200">
              Payment Plan
            </Badge>
          )}
          {listing.isMotivatedSeller && (
            <Badge className="bg-orange-100 text-orange-700 border-orange-200">
              Motivated Seller
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Button 
          className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold group-hover:shadow-lg transition-all duration-300" 
          size="sm" 
          onClick={(e) => {
            e.stopPropagation();
            handleViewListing();
          }}
        >
          <ExternalLink className="h-4 w-4 mr-2" />
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
