
import React from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChartContainer } from "@/components/ui/chart";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { useIsMobile } from "@/hooks/use-mobile";

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
  label?: string;
}

interface DashboardAnalyticsChartProps {
  analyticsData: any[];
  timeframe: string;
  setTimeframe: (timeframe: string) => void;
  userName: string;
}

const CustomTooltip = ({ active, payload, label }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-4 rounded-lg shadow-lg">
        <p className="font-medium text-gray-900 dark:text-gray-100">{`${label}`}</p>
        <p className="text-adept font-semibold">{`${payload[0].value} jobs`}</p>
      </div>
    );
  }
  return null;
};

const DashboardAnalyticsChart: React.FC<DashboardAnalyticsChartProps> = ({
  analyticsData,
  timeframe,
  setTimeframe,
  userName
}) => {
  const isMobile = useIsMobile();
  
  return (
    <Card className="border shadow-lg bg-white dark:bg-gray-900 relative overflow-hidden">
      <CardHeader className="pb-0">
        <div className="flex flex-col space-y-4 md:flex-row md:items-center md:justify-between md:space-y-0 md:space-x-4">
          <div>
            <CardTitle className="text-xl md:text-2xl font-bold">Welcome back, {userName}</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Here's an overview of your job posting analytics
            </CardDescription>
          </div>
          <div className="flex space-x-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1 self-start md:self-auto">
            <Button 
              variant={timeframe === "week" ? "default" : "ghost"} 
              size="sm" 
              className={timeframe === "week" ? "bg-adept text-white" : ""}
              onClick={() => setTimeframe("week")}
            >
              Week
            </Button>
            <Button 
              variant={timeframe === "month" ? "default" : "ghost"} 
              size="sm" 
              className={timeframe === "month" ? "bg-adept text-white" : ""}
              onClick={() => setTimeframe("month")}
            >
              Month
            </Button>
            <Button 
              variant={timeframe === "year" ? "default" : "ghost"} 
              size="sm" 
              className={timeframe === "year" ? "bg-adept text-white" : ""}
              onClick={() => setTimeframe("year")}
            >
              Year
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-6 relative">
        <div className=" w-full relative">
          <ChartContainer config={{ value: { theme: { light: '#5E19E6', dark: '#4F46E5' } } }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={analyticsData} 
                margin={{ 
                  top: 20, 
                  right: isMobile ? 10 : 30, 
                  bottom: 35, 
                  left: isMobile ? 0 : 20 
                }}
                barSize={isMobile ? 20 : 40}
              >
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: isMobile ? 10 : 12, fontWeight: 500, fill: '#666' }}
                  dy={10}
                  interval={isMobile ? 1 : 0}
                />
                <YAxis 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: isMobile ? 10 : 12, fill: '#666' }}
                  width={30}
                />
                <Tooltip 
                  content={<CustomTooltip />}
                  cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
                  wrapperStyle={{ zIndex: 20 }}
                  position={{ x: 0, y: 0 }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: 15 }}
                  verticalAlign={isMobile ? "bottom" : undefined}
                  height={36}
                />
                <Bar 
                  dataKey="value" 
                  fill="url(#colorGradient)" 
                  name="Job Postings" 
                  radius={[4, 4, 0, 0]}
                />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#5E19E6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#5E19E6" stopOpacity={0.4}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardAnalyticsChart;
