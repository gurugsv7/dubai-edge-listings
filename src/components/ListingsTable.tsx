
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, TrendingDown, TrendingUp, ExternalLink, Zap } from "lucide-react";
import { PropertyListing } from "@/data/mockListings";
import { useNavigate } from "react-router-dom";

interface ListingsTableProps {
  listings: PropertyListing[];
}

export const ListingsTable = ({ listings }: ListingsTableProps) => {
  const navigate = useNavigate();

  const handleViewListing = (id: string) => {
    navigate(`/property/${id}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50 border-b border-slate-200">
            <TableHead className="font-semibold text-slate-900">Property</TableHead>
            <TableHead className="font-semibold text-slate-900">Location</TableHead>
            <TableHead className="font-semibold text-slate-900">Price</TableHead>
            <TableHead className="font-semibold text-slate-900">Price Drop</TableHead>
            <TableHead className="font-semibold text-slate-900">ROI %</TableHead>
            <TableHead className="font-semibold text-slate-900">Features</TableHead>
            <TableHead className="font-semibold text-slate-900">Opportunity</TableHead>
            <TableHead className="font-semibold text-slate-900">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow 
              key={listing.id} 
              className="hover:bg-slate-50 cursor-pointer transition-colors duration-200 border-b border-slate-100"
              onClick={() => handleViewListing(listing.id)}
            >
              <TableCell className="py-4">
                <div>
                  <p className="font-semibold text-slate-900">{listing.propertyType}</p>
                  <p className="text-sm text-slate-600">{listing.bedrooms} Bedrooms</p>
                </div>
              </TableCell>
              
              <TableCell className="py-4">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2 text-slate-400" />
                  <div>
                    <p className="font-medium text-slate-900">{listing.area}</p>
                    <p className="text-sm text-slate-600">{listing.building}</p>
                  </div>
                </div>
              </TableCell>
              
              <TableCell className="py-4">
                <p className="font-bold text-slate-900 text-lg">
                  {listing.currentPrice.toLocaleString()} AED
                </p>
              </TableCell>
              
              <TableCell className="py-4">
                {listing.priceDropAmount ? (
                  <div className="flex items-center">
                    <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                      <div className="flex items-center text-red-700">
                        <TrendingDown className="h-4 w-4 mr-1" />
                        <div>
                          <p className="font-semibold">-{listing.priceDropPercentage}%</p>
                          <p className="text-xs">({listing.priceDropAmount.toLocaleString()} AED)</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <span className="text-slate-400">-</span>
                )}
              </TableCell>
              
              <TableCell className="py-4">
                <div className="bg-green-50 border border-green-200 rounded-lg px-3 py-2 w-fit">
                  <div className="flex items-center text-green-700">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span className="font-bold">{listing.roiPercentage}%</span>
                  </div>
                </div>
              </TableCell>
              
              <TableCell className="py-4">
                <div className="flex flex-wrap gap-1 max-w-48">
                  {listing.keyFeatures.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs border-slate-300 text-slate-700 bg-slate-50">
                      {feature}
                    </Badge>
                  ))}
                  {listing.keyFeatures.length > 2 && (
                    <Badge variant="outline" className="text-xs border-slate-300 text-slate-700 bg-slate-50">
                      +{listing.keyFeatures.length - 2}
                    </Badge>
                  )}
                </div>
              </TableCell>
              
              <TableCell className="py-4">
                <Badge className="bg-amber-50 text-amber-800 border-amber-200 flex items-center w-fit">
                  <Zap className="h-3 w-3 mr-1" />
                  {listing.opportunityReason}
                </Badge>
              </TableCell>
              
              <TableCell className="py-4">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="border-slate-300 hover:bg-slate-50 hover:border-blue-300"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleViewListing(listing.id);
                  }}
                >
                  <ExternalLink className="h-4 w-4 mr-1" />
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
