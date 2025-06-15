
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Loader2, Brain, AlertCircle } from "lucide-react";
import { usePunctuationRecognition } from "@/hooks/usePunctuationRecognition";
import { useNavigate } from "react-router-dom";

const PunctuationSearch = () => {
  const [searchText, setSearchText] = useState('');
  const { processText, isProcessing, lastResult, resetResults } = usePunctuationRecognition();
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (!searchText.trim()) return;
    
    resetResults();
    await processText(searchText);
  };

  const handleSpecialtyClick = (specialty: string) => {
    navigate(`/especialidades/${specialty}`);
  };

  const getIntentColor = (intent: string) => {
    switch (intent) {
      case 'urgent_consultation':
      case 'emergency_request':
        return 'bg-red-100 text-red-800';
      case 'location_query':
      case 'time_query':
        return 'bg-blue-100 text-blue-800';
      case 'information_query':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPunctuationIcon = (type: string) => {
    switch (type) {
      case 'question': return '❓';
      case 'exclamation': return '❗';
      case 'enumeration': return '📝';
      case 'pause': return '⏸️';
      default: return '💬';
    }
  };

  return (
    <Card className="p-6 mb-8 bg-gradient-to-r from-blue-50 to-green-50 border-blue-200">
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-2">
          <Brain className="w-6 h-6 text-blue-600" />
          Búsqueda Inteligente con Análisis de Puntuación
        </h3>
        <p className="text-gray-600">
          Describe tus síntomas o necesidades. Nuestro algoritmo analizará tu texto para sugerir especialidades.
        </p>
      </div>

      <div className="flex gap-2 mb-4">
        <Input
          placeholder="Ej: Me duele el pecho! o ¿Necesito un cardiólogo? o Dolor de cabeza, mareos, náuseas..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
          className="flex-1"
        />
        <Button 
          onClick={handleSearch}
          disabled={isProcessing || !searchText.trim()}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isProcessing ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Search className="w-4 h-4" />
          )}
        </Button>
      </div>

      {lastResult && (
        <Card className="p-4 bg-white border-l-4 border-l-blue-500">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl">{getPunctuationIcon(lastResult.punctuationType)}</span>
              <span className="font-medium">Tipo de puntuación:</span>
              <Badge variant="outline">{lastResult.punctuationType}</Badge>
            </div>

            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-blue-600" />
              <span className="font-medium">Intención detectada:</span>
              <Badge className={getIntentColor(lastResult.intent)}>
                {lastResult.intent} ({Math.round(lastResult.confidence * 100)}% confianza)
              </Badge>
            </div>

            {lastResult.suggestedSpecialties.length > 0 && (
              <div>
                <p className="font-medium mb-2">Especialidades sugeridas:</p>
                <div className="flex flex-wrap gap-2">
                  {lastResult.suggestedSpecialties.map((specialty) => (
                    <Badge 
                      key={specialty}
                      variant="secondary"
                      className="cursor-pointer hover:bg-blue-100 hover:text-blue-800"
                      onClick={() => handleSpecialtyClick(specialty)}
                    >
                      {specialty.replace('-', ' ')}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            <div className="text-xs text-gray-500 bg-gray-50 p-2 rounded">
              💡 Algoritmo preparado para backend: Este análisis se mejorará cuando se conecte la API
            </div>
          </div>
        </Card>
      )}
    </Card>
  );
};

export default PunctuationSearch;
