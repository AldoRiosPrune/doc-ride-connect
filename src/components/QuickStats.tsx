
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Clock, User, TrendingUp } from "lucide-react";

interface QuickStatsProps {
  userType: "patient" | "doctor";
}

const QuickStats = ({ userType }: QuickStatsProps) => {
  const patientStats = [
    {
      title: "Citas Este Mes",
      value: "3",
      change: "+1 vs mes anterior",
      icon: Calendar,
      color: "text-blue-600"
    },
    {
      title: "Próxima Cita",
      value: "Mañana",
      change: "10:00 AM",
      icon: Clock,
      color: "text-green-600"
    },
    {
      title: "Doctores Visitados",
      value: "8",
      change: "En los últimos 6 meses",
      icon: User,
      color: "text-purple-600"
    },
    {
      title: "Salud General",
      value: "Excelente",
      change: "Basado en últimos chequeos",
      icon: TrendingUp,
      color: "text-orange-600"
    }
  ];

  const stats = userType === "patient" ? patientStats : patientStats;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <stat.icon className={`w-5 h-5 ${stat.color}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-800">{stat.value}</div>
            <p className="text-xs text-gray-500 mt-1">{stat.change}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;
