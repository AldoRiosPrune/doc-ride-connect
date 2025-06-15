
import { useState, useEffect } from 'react';

interface PunctuationPattern {
  pattern: RegExp;
  type: 'question' | 'exclamation' | 'statement' | 'enumeration' | 'pause';
  weight: number;
}

interface RecognitionResult {
  intent: string;
  confidence: number;
  suggestedSpecialties: string[];
  punctuationType: string;
}

const punctuationPatterns: PunctuationPattern[] = [
  { pattern: /\?+$/, type: 'question', weight: 0.9 },
  { pattern: /!+$/, type: 'exclamation', weight: 0.8 },
  { pattern: /\.{3,}$/, type: 'pause', weight: 0.6 },
  { pattern: /[,;:]+/, type: 'enumeration', weight: 0.5 },
  { pattern: /\.$/, type: 'statement', weight: 0.7 },
];

const specialtyKeywords = {
  'cardiologia': ['corazón', 'cardio', 'presión', 'latidos', 'arritmia'],
  'neurologia': ['cerebro', 'neuro', 'dolor de cabeza', 'migraña', 'memoria'],
  'pediatria': ['niño', 'bebé', 'infantil', 'pediátrico', 'vacuna'],
  'oftalmologia': ['ojo', 'vista', 'visión', 'lentes', 'ceguera'],
  'traumatologia': ['hueso', 'fractura', 'lesión', 'articulación', 'músculo'],
  'medicina-general': ['general', 'chequeo', 'consulta', 'síntoma', 'malestar'],
  'psiquiatria': ['ansiedad', 'depresión', 'mental', 'estrés', 'psico'],
  'farmacologia': ['medicamento', 'pastilla', 'dosis', 'farmaco', 'tratamiento']
};

export const usePunctuationRecognition = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [lastResult, setLastResult] = useState<RecognitionResult | null>(null);

  const recognizePunctuation = (text: string): string => {
    for (const pattern of punctuationPatterns) {
      if (pattern.pattern.test(text)) {
        return pattern.type;
      }
    }
    return 'statement';
  };

  const analyzeIntent = (text: string, punctuationType: string): { intent: string; confidence: number } => {
    const lowerText = text.toLowerCase();
    
    // Algoritmo básico de análisis de intención basado en puntuación
    switch (punctuationType) {
      case 'question':
        if (lowerText.includes('dónde') || lowerText.includes('donde')) {
          return { intent: 'location_query', confidence: 0.8 };
        }
        if (lowerText.includes('cuándo') || lowerText.includes('cuando')) {
          return { intent: 'time_query', confidence: 0.8 };
        }
        if (lowerText.includes('qué') || lowerText.includes('que')) {
          return { intent: 'information_query', confidence: 0.7 };
        }
        return { intent: 'general_question', confidence: 0.6 };
      
      case 'exclamation':
        if (lowerText.includes('dolor') || lowerText.includes('duele')) {
          return { intent: 'urgent_consultation', confidence: 0.9 };
        }
        if (lowerText.includes('ayuda') || lowerText.includes('emergencia')) {
          return { intent: 'emergency_request', confidence: 0.95 };
        }
        return { intent: 'emotional_expression', confidence: 0.7 };
      
      case 'enumeration':
        return { intent: 'multiple_symptoms', confidence: 0.8 };
      
      case 'pause':
        return { intent: 'uncertain_query', confidence: 0.5 };
      
      default:
        return { intent: 'general_statement', confidence: 0.5 };
    }
  };

  const suggestSpecialties = (text: string): string[] => {
    const suggestions: string[] = [];
    const lowerText = text.toLowerCase();

    Object.entries(specialtyKeywords).forEach(([specialty, keywords]) => {
      const matches = keywords.filter(keyword => lowerText.includes(keyword));
      if (matches.length > 0) {
        suggestions.push(specialty);
      }
    });

    return suggestions;
  };

  const processText = async (text: string): Promise<RecognitionResult> => {
    setIsProcessing(true);
    
    // Simular procesamiento asíncrono (preparado para API del backend)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    try {
      const punctuationType = recognizePunctuation(text);
      const { intent, confidence } = analyzeIntent(text, punctuationType);
      const suggestedSpecialties = suggestSpecialties(text);
      
      const result: RecognitionResult = {
        intent,
        confidence,
        suggestedSpecialties,
        punctuationType
      };
      
      setLastResult(result);
      
      // TODO: Aquí se conectará con el backend
      // const backendResult = await fetch('/api/punctuation-analysis', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ text, localResult: result })
      // });
      
      console.log('Algoritmo de puntuación procesado:', result);
      return result;
      
    } finally {
      setIsProcessing(false);
    }
  };

  const resetResults = () => {
    setLastResult(null);
  };

  return {
    processText,
    isProcessing,
    lastResult,
    resetResults
  };
};
