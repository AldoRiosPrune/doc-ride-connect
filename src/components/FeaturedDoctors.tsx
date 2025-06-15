
import DoctorCard from "./DoctorCard";

// Hacemos el componente más flexible:
interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  experience: string;
  location: string;
  image: string;
  price: string;
  available: boolean;
  nextAvailable: string;
}

interface FeaturedDoctorsProps {
  doctors: Doctor[];
  title?: string;
  subtitle?: string;
}

const FeaturedDoctors = ({
  doctors,
  title = "Doctores Destacados",
  subtitle = "Los profesionales mejor valorados por nuestros pacientes"
}: FeaturedDoctorsProps) => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedDoctors;

