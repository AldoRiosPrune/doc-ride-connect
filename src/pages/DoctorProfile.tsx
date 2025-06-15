
import React from "react";
import { useParams, Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Clock, Calendar, ArrowLeft, Award, GraduationCap, Shield, Users } from "lucide-react";
import { useAuthStatus } from "@/hooks/useAuthStatus";
import { useToast } from "@/hooks/use-toast";
import featuredDoctors from "@/data/doctors";

const DoctorProfile = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuthStatus();
  const { toast } = useToast();
  
  const doctor = featuredDoctors.find(d => d.id === parseInt(id || "0"));

  const handleScheduleAppointment = () => {
    if (!isAuthenticated) {
      toast({
        title: "Acceso requerido",
        description: "Por favor, inicia sesión para agendar una cita.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "¡Cita agendada exitosamente!",
      description: `Tu cita con ${doctor?.name} ha sido programada. Recibirás una confirmación por email.`,
    });
  };

  if (!doctor) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Doctor no encontrado</h1>
          <Link to="/doctors">
            <Button variant="outline">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Doctores
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // Datos simulados de validación profesional
  const professionalValidation = {
    cedula: "12345678",
    university: "Universidad Nacional Autónoma de México (UNAM)",
    specialty_certification: "Consejo Mexicano de " + doctor.specialty,
    years_licensed: parseInt(doctor.experience),
    hospital_affiliations: ["Hospital General de México", "Hospital ABC"],
    certifications: ["Certificación Nacional", "Diplomado Internacional"]
  };

  // Reseñas simuladas
  const reviews = [
    {
      id: 1,
      patient: "María González",
      rating: 5,
      date: "15 de Mayo, 2024",
      comment: "Excelente atención, muy profesional y empático. Me explicó todo detalladamente y el tratamiento fue efectivo."
    },
    {
      id: 2,
      patient: "Carlos Martínez",
      rating: 5,
      date: "10 de Mayo, 2024",
      comment: "El Dr. es muy conocedor de su especialidad. La consulta fue muy completa y me sentí en buenas manos."
    },
    {
      id: 3,
      patient: "Ana López",
      rating: 4,
      date: "5 de Mayo, 2024",
      comment: "Muy buen doctor, puntual y profesional. El diagnóstico fue acertado y el tratamiento efectivo."
    },
    {
      id: 4,
      patient: "Roberto Silva",
      rating: 5,
      date: "28 de Abril, 2024",
      comment: "Recomiendo ampliamente al doctor. Su experiencia y trato humano son excepcionales."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header con botón de regreso */}
        <div className="mb-6">
          <Link to="/doctors">
            <Button variant="outline" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver a Doctores
            </Button>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Columna principal - Información del doctor */}
          <div className="lg:col-span-2 space-y-6">
            {/* Información básica */}
            <Card>
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-48 h-48 mx-auto md:mx-0 flex-shrink-0">
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-2">{doctor.name}</h1>
                        <p className="text-xl text-blue-600 font-medium mb-2">{doctor.specialty}</p>
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          <span className="text-lg font-medium">{doctor.rating}</span>
                          <span className="text-gray-500">({doctor.reviews} reseñas)</span>
                        </div>
                      </div>
                      <Badge className="bg-green-500">Disponible</Badge>
                    </div>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{doctor.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Clock className="w-4 h-4" />
                        <span>{doctor.nextAvailable}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Award className="w-4 h-4" />
                        <span>{doctor.experience} de experiencia</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-green-600">{doctor.price}</span>
                      <Button onClick={handleScheduleAppointment} className="px-8">
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar Cita
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Validación Profesional */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  Validación Profesional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Cédula Profesional</h4>
                    <p className="text-gray-600">#{professionalValidation.cedula}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Universidad</h4>
                    <p className="text-gray-600">{professionalValidation.university}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Certificación de Especialidad</h4>
                    <p className="text-gray-600">{professionalValidation.specialty_certification}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-700 mb-1">Años con Licencia</h4>
                    <p className="text-gray-600">{professionalValidation.years_licensed} años</p>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Afiliaciones Hospitalarias</h4>
                  <div className="flex flex-wrap gap-2">
                    {professionalValidation.hospital_affiliations.map((hospital, index) => (
                      <Badge key={index} variant="outline">{hospital}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-700 mb-2">Certificaciones Adicionales</h4>
                  <div className="flex flex-wrap gap-2">
                    {professionalValidation.certifications.map((cert, index) => (
                      <Badge key={index} variant="outline" className="bg-blue-50">
                        <GraduationCap className="w-3 h-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reseñas */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Reseñas de Pacientes ({reviews.length})
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews.map((review) => (
                  <div key={review.id} className="border-b pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h5 className="font-medium text-gray-800">{review.patient}</h5>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`w-4 h-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Sidebar derecho */}
          <div className="space-y-6">
            {/* Información de contacto rápido */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Información de Contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h4 className="font-medium text-gray-700">Próxima Disponibilidad</h4>
                  <p className="text-green-600 font-medium">{doctor.nextAvailable}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Ubicación</h4>
                  <p className="text-gray-600">{doctor.location}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-700">Costo de Consulta</h4>
                  <p className="text-2xl font-bold text-green-600">{doctor.price}</p>
                </div>
                <Button className="w-full" onClick={handleScheduleAppointment}>
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Cita Ahora
                </Button>
              </CardContent>
            </Card>

            {/* Estadísticas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Estadísticas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total de Consultas</span>
                  <span className="font-semibold">1,250+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pacientes Atendidos</span>
                  <span className="font-semibold">890+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Años de Experiencia</span>
                  <span className="font-semibold">{doctor.experience}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Rating Promedio</span>
                  <span className="font-semibold">{doctor.rating}/5.0</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
