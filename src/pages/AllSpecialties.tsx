
import Header from "@/components/Header";
import Specialties from "@/components/Specialties";
import PunctuationSearch from "@/components/PunctuationSearch";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, Users, Clock, Award, Heart, Brain, Eye, Bone, Baby, Stethoscope } from "lucide-react";
import { Link } from "react-router-dom";

const AllSpecialties = () => {
  const featuredSpecialties = [
    {
      name: "Cardiología",
      icon: Heart,
      description: "Especialistas en el diagnóstico y tratamiento de enfermedades del corazón y sistema cardiovascular.",
      doctors: 45,
      avgRating: 4.8,
      color: "text-red-500"
    },
    {
      name: "Neurología",
      icon: Brain,
      description: "Expertos en trastornos del sistema nervioso, cerebro y médula espinal.",
      doctors: 32,
      avgRating: 4.9,
      color: "text-purple-500"
    },
    {
      name: "Oftalmología",
      icon: Eye,
      description: "Cuidado integral de la salud visual y tratamiento de enfermedades oculares.",
      doctors: 28,
      avgRating: 4.7,
      color: "text-blue-500"
    },
    {
      name: "Traumatología",
      icon: Bone,
      description: "Especialistas en lesiones y enfermedades del sistema músculo-esquelético.",
      doctors: 38,
      avgRating: 4.6,
      color: "text-orange-500"
    },
    {
      name: "Pediatría",
      icon: Baby,
      description: "Atención médica especializada para bebés, niños y adolescentes.",
      doctors: 52,
      avgRating: 4.9,
      color: "text-pink-500"
    },
    {
      name: "Medicina General",
      icon: Stethoscope,
      description: "Atención médica integral y primera línea para toda la familia.",
      doctors: 67,
      avgRating: 4.5,
      color: "text-green-500"
    }
  ];

  const statistics = [
    { label: "Especialidades Médicas", value: "25+", icon: Stethoscope },
    { label: "Doctores Certificados", value: "500+", icon: Users },
    { label: "Consultas Completadas", value: "10,000+", icon: Clock },
    { label: "Calificación Promedio", value: "4.8/5", icon: Star }
  ];

  const testimonials = [
    {
      name: "María González",
      specialty: "Cardiología",
      text: "Excelente atención médica. El Dr. Ramírez me ayudó a controlar mi presión arterial de manera efectiva.",
      rating: 5
    },
    {
      name: "Carlos Mendoza",
      specialty: "Traumatología",
      text: "Después de mi lesión deportiva, encontré al especialista perfecto. Recuperación completa en tiempo récord.",
      rating: 5
    },
    {
      name: "Ana Ruiz",
      specialty: "Pediatría",
      text: "La Dra. López es increíble con los niños. Mi hijo siempre sale contento de sus consultas.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">
            Todas las Especialidades Médicas
          </h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Encuentra al especialista que necesitas entre nuestra amplia red de profesionales médicos certificados. 
            Desde medicina general hasta especialidades avanzadas, tenemos el experto ideal para tu salud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Buscar Especialista
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Ver Doctores Disponibles
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-2">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Busca por Especialidad
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Utiliza nuestra búsqueda inteligente para encontrar rápidamente el especialista que necesitas
            </p>
          </div>
          
          <PunctuationSearch />
        </div>
      </section>

      {/* Featured Specialties */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Especialidades Destacadas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Nuestras especialidades más solicitadas con los mejores profesionales
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredSpecialties.map((specialty, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-4 mx-auto`}>
                    <specialty.icon className={`w-8 h-8 ${specialty.color}`} />
                  </div>
                  <CardTitle className="text-xl font-bold">{specialty.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600 mb-4">{specialty.description}</p>
                  
                  <div className="flex justify-center items-center gap-4 mb-4">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{specialty.doctors} doctores</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-semibold">{specialty.avgRating}</span>
                    </div>
                  </div>

                  <Link to={`/especialidades/${specialty.name.toLowerCase()}`}>
                    <Button className="w-full">
                      Ver Especialistas
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Lo que Dicen Nuestros Pacientes
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Testimonios reales de pacientes satisfechos con nuestros especialistas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <Badge variant="secondary" className="mt-2">
                      {testimonial.specialty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* All Specialties Grid */}
      <Specialties />

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            ¿No Encuentras lo que Buscas?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Nuestro equipo está aquí para ayudarte a encontrar el especialista perfecto para tus necesidades de salud.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Contactar Soporte
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Ver Todos los Doctores
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllSpecialties;
