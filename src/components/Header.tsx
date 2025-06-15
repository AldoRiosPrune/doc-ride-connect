
import { Button } from "@/components/ui/button";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-blue-600">
            <Heart className="w-8 h-8" />
            Alldoctor
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
              Inicio
            </Link>
            <Link to="/doctors" className="text-gray-600 hover:text-blue-600 transition-colors">
              Doctores
            </Link>
            <Link to="/specialties" className="text-gray-600 hover:text-blue-600 transition-colors">
              Especialidades
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
              Nosotros
            </Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
              Contacto
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Iniciar Sesión
              </Button>
            </Link>
            <Link to="/register">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Registrarse
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t pt-4">
            <nav className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Inicio
              </Link>
              <Link to="/doctors" className="text-gray-600 hover:text-blue-600 transition-colors">
                Doctores
              </Link>
              <Link to="/specialties" className="text-gray-600 hover:text-blue-600 transition-colors">
                Especialidades
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                Nosotros
              </Link>
              <Link to="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contacto
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Link to="/login">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                    Iniciar Sesión
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Registrarse
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
