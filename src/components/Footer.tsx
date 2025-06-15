
import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-gradient-to-r from-blue-600 to-green-500 p-2 rounded-lg">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DocUber</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Conectamos pacientes con los mejores doctores para brindar atención médica de calidad cuando la necesites.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-gray-400 hover:text-blue-400 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultas presenciales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Telemedicina</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Urgencias</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Seguimiento médico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Recetas digitales</a></li>
            </ul>
          </div>

          {/* For Doctors */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Para Doctores</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Únete como doctor</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Gestión de agenda</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Herramientas digitales</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Soporte técnico</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Capacitación</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span className="text-gray-400">+34 900 123 456</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-500" />
                <span className="text-gray-400">contacto@docuber.es</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-red-500" />
                <span className="text-gray-400">Madrid, España</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 DocUber. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacidad</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Términos</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
