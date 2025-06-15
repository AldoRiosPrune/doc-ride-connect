import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Star, Clock, MapPin, Users, Heart, Shield, Zap } from "lucide-react";
import { useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Specialties from "@/components/Specialties";
import FeaturedDoctors from "@/components/FeaturedDoctors";
import DoctorCTA from "@/components/DoctorCTA";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import featuredDoctors from "@/data/doctors";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <Header />
      <Hero />
      <Specialties />
      <FeaturedDoctors doctors={featuredDoctors} />
      <DoctorCTA />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
