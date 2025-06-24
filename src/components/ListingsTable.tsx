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
import { MapPin, ExternalLink, TrendingDown } from "lucide-react";
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
    <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Property</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Price Drop</TableHead>
            <TableHead>Features</TableHead>
            <TableHead>Opportunity</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {listings.map((listing) => (
            <TableRow 
              key={listing.id} 
              className="hover:bg-gray-50 cursor-pointer"
              onClick={() => handleViewListing(listing.id)}
            >
              <TableCell>
                <div>
                  <p className="font-medium">{listing.propertyType}</p>
                  <p className="text-sm text-gray-500">{listing.bedrooms} Bedrooms</p>
                </div>
              </TableCell>
              
              <TableCell>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1 text-gray-400" />
                  <div>
                    <p className="font-medium">{listing.area}</p>
                    <p className="text-sm text-gray-500">{listing.building}</p>
                  </div>
                </div>
              </TableCell>
              
              <TableCell>
                <p className="font-bold text-blue-600">
                  {listing.currentPrice.toLocaleString()} AED
                </p>
              </TableCell>
              
              <TableCell>
                {listing.priceDropAmount ? (
                  <div className="flex items-center text-red-600">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    <div>
                      <p className="font-medium">-{listing.priceDropPercentage}%</p>
                      <p className="text-sm">({listing.priceDropAmount.toLocaleString()} AED)</p>
                    </div>
                  </div>
                ) : (
                  <span className="text-gray-400">-</span>
                )}
              </TableCell>
              
              <TableCell>
                <div className="flex flex-wrap gap-1 max-w-48">
                  {listing.keyFeatures.slice(0, 2).map((feature, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {feature}
                    </Badge>
                  ))}
                  {listing.keyFeatures.length > 2 && (
                    <Badge variant="outline" className="text-xs">
                      +{listing.keyFeatures.length - 2}
                    </Badge>
                  )}
                </div>
              </TableCell>
              
              <TableCell>
                <Badge variant="secondary" className="bg-blue-50 text-blue-800">
                  {listing.opportunityReason}
                </Badge>
              </TableCell>
              
              <TableCell>
                <Button 
                  size="sm" 
                  variant="outline"
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
