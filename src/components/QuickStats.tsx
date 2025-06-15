
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import * as React from "react";

interface Stat {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  color: string;
}

interface QuickStatsProps {
  stats: Stat[];
}

const QuickStats = ({ stats }: QuickStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
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
