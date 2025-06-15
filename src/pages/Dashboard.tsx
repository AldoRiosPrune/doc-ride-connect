
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { Heart, Bell, Settings, LogOut, User, Phone, FlaskRound, Zap, FileText, UserPlus, Stethoscope, HeartPulse, Baby, BrainCircuit, Calendar, Clock, Activity, Pill, Shield, AlertCircle, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import QuickStats from "@/components/QuickStats";
import { useAuthStatus } from "@/hooks/useAuthStatus";
import { useToast } from "@/hooks/use-toast";
import UserProfileDropdown from "@/components/UserProfileDropdown";
import PatientHealthCards from "@/components/PatientHealthCards";
import UpcomingAppointments from "@/components/UpcomingAppointments";
import HealthReminders from "@/components/HealthReminders";

const Dashboard = () => {
  const { isAuthenticated } = useAuthStatus();
  const { toast } = useToast();

  const handleScheduleLabTest = (testName: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Acceso requerido",
        description: "Por favor, inicia sesión para agendar un análisis.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Análisis agendado!",
      description: `Tu ${testName} ha sido agendado exitosamente. Recibirás una confirmación por email.`,
    });
  };

  const handleFlashConsultation = (specialty: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Acceso requerido", 
        description: "Por favor, inicia sesión para iniciar una consulta.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Consulta iniciada!",
      description: `Conectando con un especialista en ${specialty}...`,
    });
  };

  const handleQuickAction = (action: string) => {
    if (!isAuthenticated) {
      toast({
        title: "Acceso requerido",
        description: "Por favor, inicia sesión para continuar.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Acción ejecutada",
      description: `${action} iniciado exitosamente.`,
    });
  };

  const healthStats = [
    {
      title: "Próximas Citas",
      value: "3 esta semana",
      change: "2 consultas, 1 análisis",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Resultados Pendientes",
      value: "2 disponibles",
      change: "Consulta tus análisis",
      icon: FileText,
      color: "text-green-600"
    },
    {
      title: "Medicamentos",
      value: "4 activos",
      change: "Recordatorios configurados",
      icon: Pill,
      color: "text-purple-600"
    },
    {
      title: "Última Consulta",
      value: "Hace 2 semanas",
      change: "Con Dr. García - Cardiología",
      icon: Activity,
      color: "text-orange-600"
    }
  ];

  const labTests = [
    { name: "Perfil Lipídico", price: "25€", details: "Colesterol, triglicéridos...", urgency: "normal" },
    { name: "Hemograma Completo", price: "15€", details: "Glóbulos rojos, blancos...", urgency: "normal" },
    { name: "Glucosa en Ayunas", price: "10€", details: "Nivel de azúcar en sangre", urgency: "recomendado" },
    { name: "Función Tiroidea (TSH)", price: "20€", details: "Control de tiroides", urgency: "normal" },
  ];

  const flashConsultations = [
    { specialty: "Medicina General", icon: Stethoscope, color: "bg-blue-100 text-blue-600", available: true },
    { specialty: "Cardiología", icon: HeartPulse, color: "bg-red-100 text-red-600", available: true },
    { specialty: "Pediatría", icon: Baby, color: "bg-purple-100 text-purple-600", available: false },
    { specialty: "Psicología", icon: BrainCircuit, color: "bg-orange-100 text-orange-600", available: true },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
              <Heart className="w-8 h-8" />
              Alldoctor
            </Link>
            
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative">
                <Bell className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">3</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="w-5 h-5" />
              </Button>
              <UserProfileDropdown userName="Juan Pérez" />
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            ¡Hola Juan! 👋 Tu centro de salud personal
          </h1>
          <p className="text-gray-600">
            Gestiona tu salud de forma integral con nuestros servicios especializados.
          </p>
        </div>

        {/* Health Overview Stats */}
        <QuickStats stats={healthStats} />

        {/* Patient Health Cards */}
        <div className="mt-8">
          <PatientHealthCards />
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8 mt-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-8">
            {/* Upcoming Appointments */}
            <UpcomingAppointments />

            {/* Lab Tests Section */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <FlaskRound className="w-6 h-6 text-blue-600" />
                  Análisis de Laboratorio Recomendados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>Precios competitivos y resultados en 24h.</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[200px]">Análisis</TableHead>
                      <TableHead>Detalles</TableHead>
                      <TableHead className="text-right">Precio</TableHead>
                      <TableHead className="text-right">Acción</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {labTests.map((test) => (
                      <TableRow key={test.name} className={test.urgency === 'recomendado' ? 'bg-yellow-50' : ''}>
                        <TableCell className="font-medium">
                          <div className="flex items-center gap-2">
                            {test.urgency === 'recomendado' && <AlertCircle className="w-4 h-4 text-yellow-600" />}
                            {test.name}
                          </div>
                        </TableCell>
                        <TableCell className="text-gray-600">{test.details}</TableCell>
                        <TableCell className="text-right font-semibold">{test.price}</TableCell>
                        <TableCell className="text-right">
                          <Button 
                            size="sm" 
                            variant={test.urgency === 'recomendado' ? 'default' : 'outline'}
                            onClick={() => handleScheduleLabTest(test.name)}
                          >
                            Agendar
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Flash Consultations Section */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <Zap className="w-6 h-6 text-green-600" />
                  Consultas Flash Disponibles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {flashConsultations.map((consult) => (
                    <Card key={consult.specialty} className={`hover:bg-gray-50 transition-colors ${!consult.available ? 'opacity-60' : ''}`}>
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className={`w-10 h-10 rounded-full flex items-center justify-center ${consult.color}`}>
                            <consult.icon className="w-5 h-5" />
                           </div>
                          <div>
                            <span className="font-medium block">{consult.specialty}</span>
                            <span className="text-xs text-gray-500">
                              {consult.available ? 'Disponible ahora' : 'No disponible'}
                            </span>
                          </div>
                        </div>
                        <Button 
                          size="sm"
                          disabled={!consult.available}
                          onClick={() => handleFlashConsultation(consult.specialty)}
                        >
                          {consult.available ? 'Consultar' : 'Ocupado'}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Health Reminders */}
            <HealthReminders />

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  Acciones Rápidas
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleQuickAction("Agendar Análisis")}
                >
                  <FlaskRound className="w-4 h-4 mr-2" />
                  Agendar Análisis
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleQuickAction("Consulta Flash")}
                >
                  <Zap className="w-4 h-4 mr-2" />
                  Iniciar Consulta Flash
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleQuickAction("Ver Historial")}
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Ver Historial Médico
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => handleQuickAction("Contactar Soporte")}
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contactar Soporte
                </Button>
              </CardContent>
            </Card>

            {/* Health Tips */}
            <Card className="bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <Heart className="w-5 h-5 text-green-600" />
                  Tip de Salud
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-sm text-gray-700 font-medium">
                    💧 Mantente hidratado
                  </p>
                  <p className="text-sm text-gray-600">
                    Bebe al menos 8 vasos de agua al día para mantener tu cuerpo funcionando correctamente.
                  </p>
                  <Button variant="link" className="p-0 h-auto text-blue-600">
                    Ver más consejos de salud →
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-red-200 bg-red-50">
              <CardHeader>
                <CardTitle className="text-lg text-red-700 flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Emergencias
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-red-600 mb-3">
                  ¿Necesitas atención médica urgente?
                </p>
                <Button variant="destructive" className="w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  Llamar 112
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
