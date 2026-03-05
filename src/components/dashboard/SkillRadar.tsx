import { skillProfile } from "../../data/lmsData";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export default function SkillRadar() {
  return (
    <div className="h-[280px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart data={skillProfile} cx="50%" cy="50%" outerRadius="75%">
          <PolarGrid stroke="hsl(220 15% 18%)" />
          <PolarAngleAxis 
            dataKey="label" 
            tick={{ fill: "hsl(215 15% 55%)", fontSize: 12, fontFamily: "Space Grotesk" }}
          />
          <PolarRadiusAxis 
            angle={90} 
            domain={[0, 10]} 
            tick={{ fill: "hsl(215 15% 55%)", fontSize: 10 }}
            axisLine={false}
          />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="hsl(250 60% 55%)"
            fill="hsl(250 60% 55%)"
            fillOpacity={0.25}
            strokeWidth={2}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
}
