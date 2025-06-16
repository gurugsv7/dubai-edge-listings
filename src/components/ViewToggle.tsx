
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";
import { ViewMode } from "@/pages/Index";

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center bg-gray-100 rounded-lg p-1">
      <Button
        variant={viewMode === "grid" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewModeChange("grid")}
        className="rounded-md"
      >
        <Grid3X3 className="h-4 w-4 mr-2" />
        Grid
      </Button>
      <Button
        variant={viewMode === "table" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewModeChange("table")}
        className="rounded-md"
      >
        <List className="h-4 w-4 mr-2" />
        Table
      </Button>
    </div>
  );
};
