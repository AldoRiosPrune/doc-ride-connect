
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Calendar, Lock } from "lucide-react";
import { useAuthStatus } from "@/hooks/useAuthStatus";
import { Tooltip } from "@/components/ui/tooltip";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: string;
  location: string;
  image: string;
  price: string;
  available: boolean;
  nextAvailable: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard = ({ doctor }: DoctorCardProps) => {
  const { isLoggedIn } = useAuthStatus();

  // El botón solo debe poder clickearse si está logueado y el doctor está disponible
  const canSchedule = doctor.available && isLoggedIn;

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Doctor Image */}
      <div className="relative">
        <img
          src={doctor.image}
          alt={doctor.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3">
          {doctor.available ? (
            <Badge className="bg-green-500 hover:bg-green-600 text-white">
              Disponible
            </Badge>
          ) : (
            <Badge variant="secondary" className="bg-gray-500 text-white">
              Ocupado
            </Badge>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Doctor Info */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
          <p className="text-blue-600 font-medium mb-2">{doctor.specialty}</p>
          
          {/* Rating */}
          <div className="flex items-center mb-2">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-semibold">{doctor.rating}</span>
            <span className="ml-1 text-sm text-gray-500">({doctor.reviews} reseñas)</span>
          </div>

          {/* Experience */}
          <div className="flex items-center text-sm text-gray-600 mb-2">
            <Clock className="h-4 w-4 mr-1" />
            <span>{doctor.experience} de experiencia</span>
          </div>

          {/* Location */}
          <div className="flex items-center text-sm text-gray-600 mb-3">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{doctor.location}</span>
          </div>
        </div>

        {/* Price and Availability */}
        <div className="border-t pt-4">
          <div className="flex items-center justify-between mb-3">
            <div>
              <span className="text-2xl font-bold text-green-600">{doctor.price}</span>
              <span className="text-sm text-gray-500 ml-1">por consulta</span>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray-600 mb-4">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Próxima cita: {doctor.nextAvailable}</span>
          </div>

          {/* Botón: solo activo si existe sesión y doctor disponible */}
          <Tooltip.Provider>
            <Tooltip.Root>
              <Tooltip.Trigger asChild>
                <span>
                  <Button
                    className={`w-full ${
                      canSchedule
                        ? "bg-gradient-to-r from-blue-600 to-green-500 hover:from-blue-700 hover:to-green-600"
                        : "bg-gray-300 hover:bg-gray-400 cursor-not-allowed"
                    } text-white`}
                    disabled={!canSchedule}
                  >
                    {!isLoggedIn ? (
                      <span className="flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        Inicia sesión para agendar
                      </span>
                    ) : doctor.available ? (
                      "Agendar Cita"
                    ) : (
                      "Ver Disponibilidad"
                    )}
                  </Button>
                </span>
              </Tooltip.Trigger>
              {/* Mostrar tooltip solo si no está logueado */}
              {!isLoggedIn && (
                <Tooltip.Content side="top" align="center">
                  Inicia sesión para poder agendar una cita.
                </Tooltip.Content>
              )}
            </Tooltip.Root>
          </Tooltip.Provider>
        </div>
      </div>
    </Card>
  );
};

export default DoctorCard;
