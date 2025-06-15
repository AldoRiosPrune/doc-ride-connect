
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Stethoscope, Users, Star, TrendingUp, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const DoctorCTA = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Stethoscope className="w-4 h-4" />
              Para Profesionales de la Salud
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Eres doctor?{" "}
              <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                Únete a nosotros
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Aumenta tu base de pacientes y haz crecer tu práctica médica. 
              Sé recomendado por miles de usuarios que buscan atención médica de calidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Beneficios */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Beneficios de unirte a Alldoctor
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Más pacientes</h4>
                    <p className="text-gray-600">Conecta con miles de usuarios que buscan atención médica en tu especialidad.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Star className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Reputación online</h4>
                    <p className="text-gray-600">Recibe reseñas y calificaciones que fortalezcan tu reputación profesional.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Crecimiento garantizado</h4>
                    <p className="text-gray-600">Gestiona tu agenda y optimiza tu tiempo con nuestra plataforma inteligente.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Proceso simple</h4>
                    <p className="text-gray-600">Registro rápido y verificación profesional para comenzar de inmediato.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="relative">
              <Card className="p-8 bg-white shadow-xl border-0 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-10 transform translate-x-16 -translate-y-16"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-4">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      Comienza hoy mismo
                    </h3>
                    <p className="text-gray-600">
                      Únete a más de 500+ doctores que ya confían en nuestra plataforma
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Link to="/login" className="block">
                      <Button className="w-full h-12 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold">
                        Registrarme como Doctor
                      </Button>
                    </Link>
                    
                    <div className="text-center">
                      <p className="text-sm text-gray-500">
                        ¿Ya tienes cuenta?{" "}
                        <Link to="/login" className="text-blue-600 hover:text-blue-800 font-medium">
                          Inicia sesión aquí
                        </Link>
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-green-600">500+</div>
                        <div className="text-xs text-gray-500">Doctores</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">10K+</div>
                        <div className="text-xs text-gray-500">Pacientes</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">4.9★</div>
                        <div className="text-xs text-gray-500">Rating</div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorCTA;
