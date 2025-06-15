
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Calendar, Clock, MapPin, Phone, User, Heart, Bell, Settings, LogOut, Plus, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import AppointmentCard from "@/components/AppointmentCard";
import QuickStats from "@/components/QuickStats";
import UpcomingAppointments from "@/components/UpcomingAppointments";

const Dashboard = () => {
  const [userType, setUserType] = useState<"patient" | "doctor">("patient");
  
  // Simulamos datos de citas para demostración
  const upcomingAppointments = [
    {
      id: 1,
      doctorName: "Dr. María González",
      specialty: "Cardiología",
      date: "2025-06-16",
      time: "10:00 AM",
      status: "confirmed",
      location: "Clínica Central",
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      doctorName: "Dr. Carlos Méndez",
      specialty: "Dermatología",
      date: "2025-06-18",
      time: "2:30 PM",
      status: "pending",
      location: "Hospital San Juan",
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      doctorName: "Dra. Ana López",
      specialty: "Neurología",
      date: "2025-06-20",
      time: "11:15 AM",
      status: "confirmed",
      location: "Centro Médico Norte",
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <Heart className="w-8 h-8" />
              Alldoctor
            </Link>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon">
                <Bell className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="w-5 h-5" />
              </Button>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <span className="font-medium">Juan Pérez</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            ¡Bienvenido de vuelta, Juan! 👋
          </h1>
          <p className="text-gray-600">
            Aquí tienes un resumen de tus citas médicas y actividad reciente.
          </p>
        </div>

        {/* Quick Stats */}
        <QuickStats userType={userType} />

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Appointments */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="upcoming" className="w-full">
              <div className="flex items-center justify-between mb-6">
                <TabsList className="grid w-full grid-cols-3 max-w-md">
                  <TabsTrigger value="upcoming">Próximas</TabsTrigger>
                  <TabsTrigger value="completed">Completadas</TabsTrigger>
                  <TabsTrigger value="cancelled">Canceladas</TabsTrigger>
                </TabsList>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="w-4 h-4 mr-2" />
                    Filtros
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <Plus className="w-4 h-4 mr-2" />
                    Nueva Cita
                  </Button>
                </div>
              </div>

              <TabsContent value="upcoming">
                <UpcomingAppointments appointments={upcomingAppointments} />
              </TabsContent>

              <TabsContent value="completed">
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">No hay citas completadas</h3>
                  <p className="text-gray-500">Cuando completes citas, aparecerán aquí.</p>
                </div>
              </TabsContent>

              <TabsContent value="cancelled">
                <div className="text-center py-12">
                  <Calendar className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-600 mb-2">No hay citas canceladas</h3>
                  <p className="text-gray-500">Esperamos que no necesites cancelar ninguna cita.</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Next Appointment */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Próxima Cita
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Dr. María González</p>
                      <p className="text-sm text-gray-600">Cardiología</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      Mañana, 16 de Junio
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="w-4 h-4" />
                      10:00 AM
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      Clínica Central
                    </div>
                  </div>
                  <Button className="w-full mt-4" size="sm">
                    Ver Detalles
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Plus className="w-4 h-4 mr-2" />
                  Agendar Nueva Cita
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <User className="w-4 h-4 mr-2" />
                  Buscar Doctores
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Phone className="w-4 h-4 mr-2" />
                  Contactar Soporte
                </Button>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Tip de Salud</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-3">
                  Recuerda mantenerte hidratado bebiendo al menos 8 vasos de agua al día.
                </p>
                <Button variant="link" className="p-0 h-auto text-blue-600">
                  Ver más tips →
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
