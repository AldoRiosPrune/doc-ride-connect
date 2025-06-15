
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import { Search, MapPin, Filter, X } from "lucide-react";
import { useDoctorSearch } from "@/hooks/useDoctorSearch";
import { useState } from "react";

const DoctorFilters = () => {
  const { 
    filters, 
    searchDoctors, 
    filterBySpecialty, 
    clearFilters, 
    getSpecialties, 
    getLocations,
    totalResults,
    isLoading 
  } = useDoctorSearch();
  
  const [localSearchTerm, setLocalSearchTerm] = useState(filters.searchTerm);
  const [localLocation, setLocalLocation] = useState(filters.location);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    searchDoctors(localSearchTerm, localLocation);
  };

  const handleSpecialtyChange = (specialty: string) => {
    filterBySpecialty(specialty);
  };

  const hasActiveFilters = filters.searchTerm || filters.location || filters.specialty;

  return (
    <Card className="mb-6">
      <CardContent className="p-6">
        <div className="space-y-4">
          {/* Search Form */}
          <form onSubmit={handleSearch} className="grid md:grid-cols-4 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Buscar doctor o especialidad..."
                value={localSearchTerm}
                onChange={(e) => setLocalSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Ubicación..."
                value={localLocation}
                onChange={(e) => setLocalLocation(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select onValueChange={handleSpecialtyChange} value={filters.specialty}>
              <SelectTrigger>
                <SelectValue placeholder="Especialidad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Todas las especialidades</SelectItem>
                {getSpecialties().map((specialty) => (
                  <SelectItem key={specialty} value={specialty}>
                    {specialty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Button 
              type="submit" 
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              <Filter className="w-4 h-4 mr-2" />
              {isLoading ? "Filtrando..." : "Filtrar"}
            </Button>
          </form>

          {/* Active Filters & Results */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                {totalResults} doctores encontrados
              </span>
              {hasActiveFilters && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={clearFilters}
                  className="text-xs"
                >
                  <X className="w-3 h-3 mr-1" />
                  Limpiar filtros
                </Button>
              )}
            </div>
            
            {hasActiveFilters && (
              <div className="flex gap-2 text-xs">
                {filters.searchTerm && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                    Búsqueda: {filters.searchTerm}
                  </span>
                )}
                {filters.location && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    Ubicación: {filters.location}
                  </span>
                )}
                {filters.specialty && (
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded">
                    Especialidad: {filters.specialty}
                  </span>
                )}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorFilters;
