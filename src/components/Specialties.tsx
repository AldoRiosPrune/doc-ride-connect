
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

const specialties = [
  {
    name: "Cardiología",
    icon: Heart,
    color: "text-red-500",
    bgColor: "bg-red-50",
    doctors: 45
  },
  {
    name: "Neurología",
    icon: Brain,
    color: "text-purple-500",
    bgColor: "bg-purple-50",
    doctors: 32
  },
  {
    name: "Oftalmología",
    icon: Eye,
    color: "text-blue-500",
    bgColor: "bg-blue-50",
    doctors: 28
  },
  {
    name: "Traumatología",
    icon: Bone,
    color: "text-orange-500",
    bgColor: "bg-orange-50",
    doctors: 38
  },
  {
    name: "Pediatría",
    icon: Baby,
    color: "text-pink-500",
    bgColor: "bg-pink-50",
    doctors: 42
  },
  {
    name: "Medicina General",
    icon: Stethoscope,
    color: "text-green-500",
    bgColor: "bg-green-50",
    doctors: 65
  },
  {
    name: "Psiquiatría",
    icon: User,
    color: "text-indigo-500",
    bgColor: "bg-indigo-50",
    doctors: 25
  },
  {
    name: "Farmacología",
    icon: Pill,
    color: "text-yellow-500",
    bgColor: "bg-yellow-50",
    doctors: 18
  }
];

const Specialties = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Especialidades Médicas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Encuentra especialistas en todas las áreas de la medicina
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 border-gray-100"
            >
              <div className="text-center">
                <div className={`${specialty.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <specialty.icon className={`h-8 w-8 ${specialty.color}`} />
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">{specialty.name}</h3>
                <p className="text-sm text-gray-500">{specialty.doctors} doctores</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
