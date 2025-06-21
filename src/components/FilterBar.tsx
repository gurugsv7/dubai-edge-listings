import { Filters } from "@/pages/Index";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface FilterBarProps {
  filters: Filters;
  onFiltersChange: (filters: Filters) => void;
}

export const FilterBar = ({ filters, onFiltersChange }: FilterBarProps) => {
  // Only two filters: Studio Apartments (toggle) and Bedroom Type (dropdown)
  return (
    <div className="bg-white rounded-lg shadow-sm border mb-6 sticky top-0 z-10">
      <div className="p-4 flex flex-wrap items-center gap-4">
        <Button
          variant={filters.studioApartments ? "default" : "outline"}
          size="sm"
          onClick={() => onFiltersChange({ ...filters, studioApartments: !filters.studioApartments })}
        >
          Studio Apartments
        </Button>
        <Select value={filters.bedroomType} onValueChange={(value) => onFiltersChange({ ...filters, bedroomType: value })}>
          <SelectTrigger className="w-48">
            <SelectValue placeholder="Bedroom Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Bedrooms</SelectItem>
            <SelectItem value="0">Studio</SelectItem>
            <SelectItem value="1">1 Bedroom</SelectItem>
            <SelectItem value="2">2 Bedrooms</SelectItem>
            <SelectItem value="3">3 Bedrooms</SelectItem>
            <SelectItem value="4">4 Bedrooms</SelectItem>
            <SelectItem value="5">5 Bedrooms</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
