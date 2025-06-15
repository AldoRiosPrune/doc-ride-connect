
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Activity, Pill, FileText, TrendingUp, Clock } from "lucide-react";

const PatientHealthCards = () => {
  const healthData = [
    {
      title: "Presión Arterial",
      value: "120/80",
      status: "Normal",
      lastUpdate: "Hace 3 días",
      icon: Heart,
      color: "text-green-600",
      bgColor: "bg-green-50",
      trend: "stable"
    },
    {
      title: "Peso Corporal",
      value: "75.2 kg",
      status: "Meta alcanzada",
      lastUpdate: "Hace 1 semana",
      icon: Activity,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      trend: "down"
    },
    {
      title: "Glucosa",
      value: "95 mg/dL",
      status: "En rango",
      lastUpdate: "Hace 5 días",
      icon: TrendingUp,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      trend: "stable"
    }
  ];

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Tu Estado de Salud</h2>
        <Button variant="outline" size="sm">
          <FileText className="w-4 h-4 mr-2" />
          Ver Historial Completo
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {healthData.map((item, index) => (
          <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${item.bgColor} border-l-4 border-l-current`}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className={`text-lg ${item.color}`}>
                  <div className="flex items-center gap-2">
                    <item.icon className="w-5 h-5" />
                    {item.title}
                  </div>
                </CardTitle>
                <div className={`w-8 h-8 rounded-full ${item.bgColor} ${item.color} flex items-center justify-center`}>
                  {item.trend === 'up' && '↗'}
                  {item.trend === 'down' && '↘'}
                  {item.trend === 'stable' && '→'}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-gray-800">{item.value}</div>
                <div className={`text-sm font-medium ${item.color}`}>{item.status}</div>
                <div className="flex items-center text-xs text-gray-500">
                  <Clock className="w-3 h-3 mr-1" />
                  {item.lastUpdate}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PatientHealthCards;
