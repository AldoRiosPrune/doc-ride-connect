
import Header from "@/components/Header";
import Specialties from "@/components/Specialties";
import PunctuationSearch from "@/components/PunctuationSearch";

const AllSpecialties = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Todas las Especialidades
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explora todas nuestras especialidades médicas y encuentra el cuidado que necesitas
            </p>
          </div>
          
          <PunctuationSearch />
        </div>
      </section>

      <Specialties />
    </div>
  );
};

export default AllSpecialties;
