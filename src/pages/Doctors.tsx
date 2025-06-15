
import FeaturedDoctors from "@/components/FeaturedDoctors";
import featuredDoctors from "@/data/doctors";

const Doctors = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Puedes poner aquí un header o simplemente mostrar los doctores */}
      <FeaturedDoctors doctors={featuredDoctors} />
    </div>
  );
};

export default Doctors;

