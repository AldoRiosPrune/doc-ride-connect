
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Edit, Save, X, Heart, Users, Clock, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const DoctorPreferences = () => {
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [preferences, setPreferences] = useState({
    gender: "sin_preferencia",
    ageRange: "sin_preferencia",
    languages: ["español"],
    specialtyAreas: [],
    communicationStyle: "amigable",
    appointmentTime: "mañana",
    maxDistance: "10",
    insurance: "",
    additionalNotes: ""
  });

  const genderOptions = [
    { value: "sin_preferencia", label: "Sin preferencia" },
    { value: "masculino", label: "Masculino" },
    { value: "femenino", label: "Femenino" }
  ];

  const ageRangeOptions = [
    { value: "sin_preferencia", label: "Sin preferencia" },
    { value: "joven", label: "Joven (25-40)" },
    { value: "experimentado", label: "Experimentado (40-60)" },
    { value: "senior", label: "Senior (60+)" }
  ];

  const languageOptions = [
    { id: "español", label: "Español" },
    { id: "inglés", label: "Inglés" },
    { id: "francés", label: "Francés" },
    { id: "alemán", label: "Alemán" },
    { id: "italiano", label: "Italiano" }
  ];

  const specialtyOptions = [
    { id: "pediatria", label: "Pediatría" },
    { id: "geriatria", label: "Geriatría" },
    { id: "medicina_deportiva", label: "Medicina Deportiva" },
    { id: "medicina_preventiva", label: "Medicina Preventiva" },
    { id: "telemedicina", label: "Telemedicina" }
  ];

  const communicationStyles = [
    { value: "directo", label: "Directo y conciso" },
    { value: "amigable", label: "Amigable y cercano" },
    { value: "detallado", label: "Detallado y explicativo" },
    { value: "empático", label: "Empático y comprensivo" }
  ];

  const timePreferences = [
    { value: "mañana", label: "Mañana (8:00 - 12:00)" },
    { value: "tarde", label: "Tarde (12:00 - 18:00)" },
    { value: "noche", label: "Noche (18:00 - 21:00)" },
    { value: "flexible", label: "Flexible" }
  ];

  const handleLanguageChange = (languageId: string, checked: boolean) => {
    setPreferences(prev => ({
      ...prev,
      languages: checked 
        ? [...prev.languages, languageId]
        : prev.languages.filter(id => id !== languageId)
    }));
  };

  const handleSpecialtyChange = (specialtyId: string, checked: boolean) => {
    setPreferences(prev => ({
      ...prev,
      specialtyAreas: checked 
        ? [...prev.specialtyAreas, specialtyId]
        : prev.specialtyAreas.filter(id => id !== specialtyId)
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Preferencias guardadas",
      description: "Tus preferencias de doctor han sido actualizadas exitosamente.",
    });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-2">
          <Heart className="w-5 h-5 text-blue-600" />
          <CardTitle>Preferencias de Doctor</CardTitle>
        </div>
        <div className="flex gap-2">
          {isEditing ? (
            <>
              <Button size="sm" onClick={handleSave}>
                <Save className="w-4 h-4 mr-2" />
                Guardar
              </Button>
              <Button size="sm" variant="outline" onClick={handleCancel}>
                <X className="w-4 h-4 mr-2" />
                Cancelar
              </Button>
            </>
          ) : (
            <Button size="sm" variant="outline" onClick={() => setIsEditing(true)}>
              <Edit className="w-4 h-4 mr-2" />
              Editar
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Género preferido */}
        <div className="space-y-3">
          <Label className="text-sm font-medium flex items-center gap-2">
            <Users className="w-4 h-4" />
            Género preferido del doctor
          </Label>
          <RadioGroup
            value={preferences.gender}
            onValueChange={(value) => setPreferences(prev => ({ ...prev, gender: value }))}
            disabled={!isEditing}
            className="flex flex-wrap gap-4"
          >
            {genderOptions.map((option) => (
              <div key={option.value} className="flex items-center space-x-2">
                <RadioGroupItem value={option.value} id={option.value} />
                <Label htmlFor={option.value} className="text-sm">{option.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Rango de edad */}
        <div className="space-y-2">
          <Label htmlFor="ageRange">Rango de edad preferido</Label>
          <Select
            value={preferences.ageRange}
            onValueChange={(value) => setPreferences(prev => ({ ...prev, ageRange: value }))}
            disabled={!isEditing}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona rango de edad" />
            </SelectTrigger>
            <SelectContent>
              {ageRangeOptions.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Idiomas */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Idiomas que debe hablar</Label>
          <div className="grid grid-cols-2 gap-3">
            {languageOptions.map((language) => (
              <div key={language.id} className="flex items-center space-x-2">
                <Checkbox
                  id={language.id}
                  checked={preferences.languages.includes(language.id)}
                  onCheckedChange={(checked) => handleLanguageChange(language.id, checked as boolean)}
                  disabled={!isEditing}
                />
                <Label htmlFor={language.id} className="text-sm">{language.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Áreas de especialidad adicionales */}
        <div className="space-y-3">
          <Label className="text-sm font-medium">Áreas de especialidad de interés</Label>
          <div className="grid grid-cols-2 gap-3">
            {specialtyOptions.map((specialty) => (
              <div key={specialty.id} className="flex items-center space-x-2">
                <Checkbox
                  id={specialty.id}
                  checked={preferences.specialtyAreas.includes(specialty.id)}
                  onCheckedChange={(checked) => handleSpecialtyChange(specialty.id, checked as boolean)}
                  disabled={!isEditing}
                />
                <Label htmlFor={specialty.id} className="text-sm">{specialty.label}</Label>
              </div>
            ))}
          </div>
        </div>

        {/* Estilo de comunicación */}
        <div className="space-y-2">
          <Label htmlFor="communicationStyle">Estilo de comunicación preferido</Label>
          <Select
            value={preferences.communicationStyle}
            onValueChange={(value) => setPreferences(prev => ({ ...prev, communicationStyle: value }))}
            disabled={!isEditing}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona estilo de comunicación" />
            </SelectTrigger>
            <SelectContent>
              {communicationStyles.map((style) => (
                <SelectItem key={style.value} value={style.value}>
                  {style.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Horario preferido */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">
            <Clock className="w-4 h-4" />
            Horario preferido para citas
          </Label>
          <RadioGroup
            value={preferences.appointmentTime}
            onValueChange={(value) => setPreferences(prev => ({ ...prev, appointmentTime: value }))}
            disabled={!isEditing}
            className="grid grid-cols-2 gap-2"
          >
            {timePreferences.map((time) => (
              <div key={time.value} className="flex items-center space-x-2">
                <RadioGroupItem value={time.value} id={time.value} />
                <Label htmlFor={time.value} className="text-sm">{time.label}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>

        {/* Distancia máxima */}
        <div className="space-y-2">
          <Label className="text-sm font-medium flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Distancia máxima (km)
          </Label>
          <Select
            value={preferences.maxDistance}
            onValueChange={(value) => setPreferences(prev => ({ ...prev, maxDistance: value }))}
            disabled={!isEditing}
          >
            <SelectTrigger>
              <SelectValue placeholder="Selecciona distancia máxima" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="5">5 km</SelectItem>
              <SelectItem value="10">10 km</SelectItem>
              <SelectItem value="20">20 km</SelectItem>
              <SelectItem value="50">50 km</SelectItem>
              <SelectItem value="sin_limite">Sin límite</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Notas adicionales */}
        <div className="space-y-2">
          <Label htmlFor="additionalNotes">Notas adicionales</Label>
          <Textarea
            id="additionalNotes"
            placeholder="Escribe cualquier preferencia adicional o información relevante..."
            value={preferences.additionalNotes}
            onChange={(e) => setPreferences(prev => ({ ...prev, additionalNotes: e.target.value }))}
            disabled={!isEditing}
            className="min-h-[100px]"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default DoctorPreferences;
