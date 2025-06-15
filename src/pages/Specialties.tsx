
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import FeaturedDoctors from "@/components/FeaturedDoctors";
import featuredDoctors from "@/data/doctors";
import { Card } from "@/components/ui/card";
import { 
  Heart, 
  Brain, 
  Eye, 
  Bone, 
  Baby, 
  Stethoscope,
  Pill,
  User
} from "lucide-react";

const specialtyInfo = {
  "cardiologia": {
    name: "Cardiología",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
    description: "Especialistas en el cuidado del corazón y sistema cardiovascular"
  },
  "neurologia": {
    name: "Neurología",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    description: "Expertos en trastornos del sistema nervioso y cerebro"
  },
  "oftalmologia": {
    name: "Oftalmología",
    icon: Eye,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    description: "Cuidado especializado de la vista y enfermedades oculares"
  },
  "traumatologia": {
    name: "Traumatología",
    icon: Bone,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    description: "Especialistas en lesiones y trastornos del sistema musculoesquelético"
  },
  "pediatria": {
    name: "Pediatría",
    icon: Baby,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    description: "Atención médica especializada para niños y adolescentes"
  },
  "medicina-general": {
    name: "Medicina General",
    icon: Stethoscope,
    color: "text-green-500",
    bgColor: "bg-green-50",
    description: "Atención médica integral y preventiva para toda la familia"
  },
  "psiquiatria": {
    name: "Psiquiatría",
    icon: User,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    description: "Cuidado de la salud mental y trastornos psiquiátricos"
  },
  "farmacologia": {
    name: "Farmacología",
    icon: Pill,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    description: "Especialistas en medicamentos y tratamientos farmacológicos"
  }
};

const Specialties = () => {
  const { specialty } = useParams<{ specialty: string }>();
  
  const currentSpecialty = specialty ? specialtyInfo[specialty as keyof typeof specialtyInfo] : null;
  
  // Filtrar doctores por especialidad
  const filteredDoctors = specialty && currentSpecialty 
    ? featuredDoctors.filter(doctor => 
        doctor.specialty.toLowerCase() === currentSpecialty.name.toLowerCase()
      )
    : featuredDoctors;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      {currentSpecialty && (
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <div className={`${currentSpecialty.bgColor} w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6`}>
                <currentSpecialty.icon className={`h-12 w-12 ${currentSpecialty.color}`} />
              </div>
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                {currentSpecialty.name}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                {currentSpecialty.description}
              </p>
            </div>
          </div>
        </section>
      )}

      <FeaturedDoctors 
        doctors={filteredDoctors}
        title={currentSpecialty ? `Especialistas en ${currentSpecialty.name}` : "Todas las Especialidades"}
        subtitle={currentSpecialty ? `Los mejores profesionales en ${currentSpecialty.name.toLowerCase()}` : "Encuentra el especialista que necesitas"}
      />
    </div>
  );
};

export default Specialties;
