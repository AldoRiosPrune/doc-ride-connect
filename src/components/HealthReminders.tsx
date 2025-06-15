
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Pill, Calendar, Activity, CheckCircle } from "lucide-react";

const HealthReminders = () => {
  const reminders = [
    {
      id: 1,
      type: "medication",
      title: "Tomar Enalapril",
      time: "09:00",
      status: "pending",
      description: "10mg - Con desayuno"
    },
    {
      id: 2,
      type: "appointment",
      title: "Cita con Dr. García",
      time: "Mañana 10:30",
      status: "upcoming",
      description: "Cardiología - Consulta 205"
    },
    {
      id: 3,
      type: "exercise",
      title: "Caminar 30 minutos",
      time: "18:00",
      status: "pending",
      description: "Meta diaria de ejercicio"
    },
    {
      id: 4,
      type: "medication",
      title: "Vitamina D",
      time: "Completado",
      status: "completed",
      description: "1000 UI - Tomado a las 08:30"
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'medication':
        return <Pill className="w-4 h-4" />;
      case 'appointment':
        return <Calendar className="w-4 h-4" />;
      case 'exercise':
        return <Activity className="w-4 h-4" />;
      default:
        return <Bell className="w-4 h-4" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'text-green-600 bg-green-50';
      case 'upcoming':
        return 'text-blue-600 bg-blue-50';
      case 'pending':
        return 'text-orange-600 bg-orange-50';
      default:
        return 'text-gray-600 bg-gray-50';
    }
  };

  const handleComplete = (id: number) => {
    console.log(`Marking reminder ${id} as completed`);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg flex items-center gap-2">
          <Bell className="w-5 h-5 text-orange-600" />
          Recordatorios
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {reminders.map((reminder) => (
            <div
              key={reminder.id}
              className={`p-3 rounded-lg border ${getStatusColor(reminder.status)} ${
                reminder.status === 'completed' ? 'opacity-60' : ''
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-2">
                  {getIcon(reminder.type)}
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium">{reminder.title}</h4>
                    <p className="text-xs text-gray-600">{reminder.description}</p>
                    <p className="text-xs font-medium">{reminder.time}</p>
                  </div>
                </div>
                {reminder.status === 'pending' && (
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => handleComplete(reminder.id)}
                    className="h-6 w-6 p-0"
                  >
                    <CheckCircle className="w-4 h-4" />
                  </Button>
                )}
                {reminder.status === 'completed' && (
                  <CheckCircle className="w-4 h-4 text-green-600" />
                )}
              </div>
            </div>
          ))}
        </div>
        <Button variant="outline" className="w-full mt-4" size="sm">
          Ver todos los recordatorios
        </Button>
      </CardContent>
    </Card>
  );
};

export default HealthReminders;
