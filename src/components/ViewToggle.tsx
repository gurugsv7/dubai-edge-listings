
import { Button } from "@/components/ui/button";
import { Grid3X3, List } from "lucide-react";
import { ViewMode } from "@/pages/Index";

interface ViewToggleProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

export const ViewToggle = ({ viewMode, onViewModeChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center bg-slate-100 rounded-xl p-1 border border-slate-200">
      <Button
        variant={viewMode === "grid" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewModeChange("grid")}
        className={`rounded-lg font-medium transition-all duration-200 ${
          viewMode === "grid" 
            ? "bg-white shadow-sm text-slate-900 hover:bg-white" 
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }`}
      >
        <Grid3X3 className="h-4 w-4 mr-2" />
        Grid View
      </Button>
      <Button
        variant={viewMode === "table" ? "default" : "ghost"}
        size="sm"
        onClick={() => onViewModeChange("table")}
        className={`rounded-lg font-medium transition-all duration-200 ${
          viewMode === "table" 
            ? "bg-white shadow-sm text-slate-900 hover:bg-white" 
            : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
        }`}
      >
        <List className="h-4 w-4 mr-2" />
        Table View
      </Button>
    </div>
  );
};
