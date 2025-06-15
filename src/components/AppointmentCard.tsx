
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Phone, User } from "lucide-react";

interface AppointmentCardProps {
  id: number;
  doctorName: string;
  specialty: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
  location: string;
  avatar: string;
}

const AppointmentCard = ({ 
  doctorName, 
  specialty, 
  date, 
  time, 
  status, 
  location 
}: AppointmentCardProps) => {
  const statusColors = {
    confirmed: "bg-green-100 text-green-800",
    pending: "bg-yellow-100 text-yellow-800",
    cancelled: "bg-red-100 text-red-800"
  };

  const statusLabels = {
    confirmed: "Confirmada",
    pending: "Pendiente",
    cancelled: "Cancelada"
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-ES', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">{doctorName}</h3>
              <p className="text-sm text-gray-600">{specialty}</p>
            </div>
          </div>
          <Badge className={statusColors[status]}>
            {statusLabels[status]}
          </Badge>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Calendar className="w-4 h-4" />
            {formatDate(date)}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Clock className="w-4 h-4" />
            {time}
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <MapPin className="w-4 h-4" />
            {location}
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="flex-1">
            <Phone className="w-4 h-4 mr-2" />
            Contactar
          </Button>
          <Button size="sm" className="flex-1">
            Ver Detalles
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default AppointmentCard;
