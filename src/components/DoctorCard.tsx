
import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Calendar } from "lucide-react";
import { useAuthStatus } from "@/hooks/useAuthStatus";
import { useToast } from "@/hooks/use-toast";

interface DoctorCardProps {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviewCount: number;
  location: string;
  availability: string;
  image: string;
  price: string;
  experience: string;
}

const DoctorCard = ({ id, name, specialty, rating, reviewCount, location, availability, image, price, experience }: DoctorCardProps) => {
  const { isAuthenticated } = useAuthStatus();
  const { toast } = useToast();

  const handleScheduleAppointment = () => {
    if (!isAuthenticated) {
      toast({
        title: "Acceso requerido",
        description: "Por favor, inicia sesión para agendar una cita.",
        variant: "destructive",
      });
      return;
    }

    // Simulate scheduling appointment
    console.log(`Agendando cita con ${name}`);
    
    toast({
      title: "¡Cita agendada exitosamente!",
      description: `Tu cita con ${name} ha sido programada. Recibirás una confirmación por email.`,
    });
  };

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-2 right-2 bg-green-500">
            Disponible
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          <p className="text-blue-600 font-medium">{specialty}</p>
          
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-sm text-gray-500">({reviewCount} reseñas)</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            <span>{availability}</span>
          </div>
          
          <div className="flex items-center justify-between pt-2">
            <span className="text-lg font-bold text-green-600">{price}</span>
            <span className="text-sm text-gray-500">{experience}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <Button 
          className="w-full" 
          onClick={handleScheduleAppointment}
        >
          <Calendar className="w-4 h-4 mr-2" />
          Agendar Cita
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
