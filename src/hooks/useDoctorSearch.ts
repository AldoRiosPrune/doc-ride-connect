
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import featuredDoctors from '@/data/doctors';

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

interface SearchFilters {
  specialty: string;
  location: string;
  searchTerm: string;
}

export const useDoctorSearch = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(featuredDoctors);
  const [filteredDoctors, setFilteredDoctors] = useState<Doctor[]>(featuredDoctors);
  const [filters, setFilters] = useState<SearchFilters>({
    specialty: '',
    location: '',
    searchTerm: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const searchDoctors = (searchTerm: string, location: string) => {
    setIsLoading(true);
    
    // Simulate search delay
    setTimeout(() => {
      const filtered = doctors.filter(doctor => {
        const matchesSearch = searchTerm === '' || 
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase());
        
        const matchesLocation = location === '' ||
          doctor.location.toLowerCase().includes(location.toLowerCase());
        
        return matchesSearch && matchesLocation;
      });
      
      setFilteredDoctors(filtered);
      setFilters(prev => ({ ...prev, searchTerm, location }));
      setIsLoading(false);
      
      // Navigate to doctors page with search results
      navigate('/doctors');
    }, 500);
  };

  const filterBySpecialty = (specialty: string) => {
    const filtered = doctors.filter(doctor => 
      specialty === '' || doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
    );
    setFilteredDoctors(filtered);
    setFilters(prev => ({ ...prev, specialty }));
  };

  const clearFilters = () => {
    setFilters({ specialty: '', location: '', searchTerm: '' });
    setFilteredDoctors(doctors);
  };

  const getSpecialties = () => {
    const specialties = [...new Set(doctors.map(doctor => doctor.specialty))];
    return specialties.sort();
  };

  const getLocations = () => {
    const locations = [...new Set(doctors.map(doctor => doctor.location))];
    return locations.sort();
  };

  return {
    filteredDoctors,
    filters,
    isLoading,
    searchDoctors,
    filterBySpecialty,
    clearFilters,
    getSpecialties,
    getLocations,
    totalResults: filteredDoctors.length
  };
};
