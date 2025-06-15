
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Video, Phone, User } from "lucide-react";

const UpcomingAppointments = () => {
  const appointments = [
    {
      id: 1,
      doctor: "Dr. María García",
      specialty: "Cardiología",
      date: "2025-06-18",
      time: "10:30",
      type: "presencial",
      location: "Consulta 205, Piso 2",
      avatar: "MG"
    },
    {
      id: 2,
      doctor: "Dr. Luis Rodríguez",
      specialty: "Análisis de Laboratorio",
      date: "2025-06-20",
      time: "09:00",
      type: "laboratorio",
      location: "Lab Central, Planta Baja",
      avatar: "LR"
    },
    {
      id: 3,
      doctor: "Dra. Ana Martín",
      specialty: "Dermatología",
      date: "2025-06-22",
      time: "16:15",
      type: "videoconsulta",
      location: "Consulta Online",
      avatar: "AM"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'videoconsulta':
        return <Video className="w-4 h-4" />;
      case 'laboratorio':
        return <Phone className="w-4 h-4" />;
      default:
        return <User className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'videoconsulta':
        return 'bg-purple-100 text-purple-600';
      case 'laboratorio':
        return 'bg-blue-100 text-blue-600';
      default:
        return 'bg-green-100 text-green-600';
    }
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2 text-xl">
            <Calendar className="w-6 h-6 text-blue-600" />
            Próximas Citas
          </CardTitle>
          <Button variant="outline" size="sm">
            Ver todas las citas
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {appointments.map((appointment) => (
            <div
              key={appointment.id}
              className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {appointment.avatar}
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-gray-800">{appointment.doctor}</h3>
                  <p className="text-sm text-gray-600">{appointment.specialty}</p>
                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(appointment.date).toLocaleDateString('es-ES', {
                        weekday: 'short',
                        day: 'numeric',
                        month: 'short'
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {appointment.time}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {appointment.location}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${getTypeColor(appointment.type)}`}>
                  {getTypeIcon(appointment.type)}
                  {appointment.type === 'videoconsulta' ? 'Online' : 
                   appointment.type === 'laboratorio' ? 'Análisis' : 'Presencial'}
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Reprogramar
                  </Button>
                  <Button size="sm">
                    {appointment.type === 'videoconsulta' ? 'Unirse' : 'Confirmar'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingAppointments;
