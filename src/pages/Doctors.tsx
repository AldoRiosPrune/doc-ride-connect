
import FeaturedDoctors from "@/components/FeaturedDoctors";
import DoctorFilters from "@/components/DoctorFilters";
import Header from "@/components/Header";
import { useDoctorSearch } from "@/hooks/useDoctorSearch";

const Doctors = () => {
  const { filteredDoctors } = useDoctorSearch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <div className="pt-20 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Encuentra tu Doctor Ideal
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Busca y filtra entre los mejores profesionales de la salud
            </p>
          </div>
          
          <DoctorFilters />
          
          <FeaturedDoctors 
            doctors={filteredDoctors}
            title="Resultados de Búsqueda"
            subtitle={`${filteredDoctors.length} doctores encontrados`}
          />
        </div>
      </div>
    </div>
  );
};

export default Doctors;
