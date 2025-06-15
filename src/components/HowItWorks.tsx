
import { Card } from "@/components/ui/card";
import { Search, Calendar, Video, Star } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Busca tu doctor",
    description: "Encuentra especialistas por ubicación, especialidad o síntomas",
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: Calendar,
    title: "Agenda tu cita",
    description: "Selecciona el horario que mejor se adapte a tu agenda",
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: Video,
    title: "Consulta médica",
    description: "Recibe atención presencial o virtual según tu preferencia",
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: Star,
    title: "Califica la experiencia",
    description: "Ayuda a otros pacientes compartiendo tu experiencia",
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            ¿Cómo funciona?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Obtén atención médica de calidad en 4 simples pasos
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <Card className="p-8 h-full hover:shadow-lg transition-all duration-300 border-gray-100">
                <div className={`${step.bgColor} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6`}>
                  <step.icon className={`h-10 w-10 ${step.color}`} />
                </div>
                
                <div className="mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {step.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
