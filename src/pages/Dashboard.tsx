
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow, TableCaption } from "@/components/ui/table";
import { Heart, Bell, Settings, LogOut, User, Phone, FlaskRound, Zap, FileText, UserPlus, Stethoscope, HeartPulse, Baby, BrainCircuit } from "lucide-react";
import { Link } from "react-router-dom";
import QuickStats from "@/components/QuickStats";

const Dashboard = () => {
  const promoStats = [
    {
      title: "Análisis de Laboratorio",
      value: "+50 tipos",
      change: "Resultados rápidos y fiables",
      icon: FlaskRound,
      color: "text-blue-600"
    },
    {
      title: "Consultas Flash",
      value: "Desde 15€",
      change: "Habla con un doctor ahora",
      icon: Zap,
      color: "text-green-600"
    },
    {
      title: "Resultados Online",
      value: "En 24h",
      change: "Accede desde tu perfil",
      icon: FileText,
      color: "text-purple-600"
    },
    {
      title: "Nuevos Especialistas",
      value: "+10 esta semana",
      change: "Cardiología, Derma y más",
      icon: UserPlus,
      color: "text-orange-600"
    }
  ];

  const labTests = [
    { name: "Perfil Lipídico", price: "25€", details: "Colesterol, triglicéridos..." },
    { name: "Hemograma Completo", price: "15€", details: "Glóbulos rojos, blancos..." },
    { name: "Glucosa en Ayunas", price: "10€", details: "Nivel de azúcar en sangre" },
    { name: "Función Tiroidea (TSH)", price: "20€", details: "Control de tiroides" },
  ];

  const flashConsultations = [
    { specialty: "Medicina General", icon: Stethoscope, color: "bg-blue-100 text-blue-600" },
    { specialty: "Cardiología", icon: HeartPulse, color: "bg-red-100 text-red-600" },
    { specialty: "Pediatría", icon: Baby, color: "bg-purple-100 text-purple-600" },
    { specialty: "Psicología", icon: BrainCircuit, color: "bg-orange-100 text-orange-600" },
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
            Explora nuestros servicios destacados 🔬
          </h1>
          <p className="text-gray-600">
            Encuentra análisis de laboratorio y consultas médicas al instante.
          </p>
        </div>

        {/* Quick Stats */}
        <QuickStats stats={promoStats} />

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Left Column - Promotional Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Lab Tests Section */}
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <FlaskRound className="w-6 h-6 text-blue-600" />
                  Análisis de Laboratorio Populares
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableCaption>Precios competitivos y resultados rápidos.</TableCaption>
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
                      <TableRow key={test.name}>
                        <TableCell className="font-medium">{test.name}</TableCell>
                        <TableCell className="text-gray-600">{test.details}</TableCell>
                        <TableCell className="text-right font-semibold">{test.price}</TableCell>
                        <TableCell className="text-right">
                          <Button size="sm" variant="outline">Agendar</Button>
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
                  Consultas Flash por Especialidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {flashConsultations.map((consult) => (
                    <Card key={consult.specialty} className="hover:bg-gray-50 transition-colors">
                      <CardContent className="p-4 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                           <div className={`w-10 h-10 rounded-full flex items-center justify-center ${consult.color}`}>
                            <consult.icon className="w-5 h-5" />
                           </div>
                          <span className="font-medium">{consult.specialty}</span>
                        </div>
                        <Button size="sm">Consultar</Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <FlaskRound className="w-4 h-4 mr-2" />
                  Agendar Análisis
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Zap className="w-4 h-4 mr-2" />
                  Iniciar Consulta Flash
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
