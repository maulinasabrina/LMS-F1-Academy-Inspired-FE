import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { modules, userProfile } from "../data/lmsData";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid, Tooltip, LineChart, Line } from "recharts";

const weeklyData = [
  { day: "Mon", minutes: 45 },
  { day: "Tue", minutes: 30 },
  { day: "Wed", minutes: 60 },
  { day: "Thu", minutes: 20 },
  { day: "Fri", minutes: 50 },
  { day: "Sat", minutes: 75 },
  { day: "Sun", minutes: 40 },
];

const monthlyProgress = [
  { week: "W1", progress: 15 },
  { week: "W2", progress: 22 },
  { week: "W3", progress: 30 },
  { week: "W4", progress: 42 },
];

export default function Progress() {
  const totalLessons = modules.reduce((acc, m) => acc + m.lessons.length, 0);
  const completedLessons = modules.reduce((acc, m) => acc + m.lessons.filter(l => l.completed).length, 0);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold text-foreground">Progress Tracker</h1>
        <p className="text-muted-foreground mt-1">Track your learning journey and stay consistent.</p>
      </motion.div>

      <div className="grid grid-cols-3 gap-4">
        {[
          { label: "Lessons Completed", value: `${completedLessons}/${totalLessons}` },
          { label: "Modules Completed", value: `${modules.filter(m => m.progress === 100).length}/${modules.length}` },
          { label: "Overall Score", value: `${userProfile.overallProgress}%` },
        ].map(stat => (
          <Card key={stat.label} className="glass-card">
            <CardContent className="p-5 text-center">
              <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader><CardTitle className="text-lg font-display">Weekly Study Time</CardTitle></CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={weeklyData}>
                  <CartesianGrid stroke="hsl(220 15% 18%)" vertical={false} />
                  <XAxis dataKey="day" tick={{ fill: "hsl(215 15% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "hsl(215 15% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "hsl(220 18% 10%)", border: "1px solid hsl(220 15% 18%)", borderRadius: 8, color: "hsl(210 20% 95%)" }} />
                  <Bar dataKey="minutes" fill="hsl(250 60% 55%)" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader><CardTitle className="text-lg font-display">Monthly Progress</CardTitle></CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={monthlyProgress}>
                  <CartesianGrid stroke="hsl(220 15% 18%)" vertical={false} />
                  <XAxis dataKey="week" tick={{ fill: "hsl(215 15% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fill: "hsl(215 15% 55%)", fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Tooltip contentStyle={{ background: "hsl(220 18% 10%)", border: "1px solid hsl(220 15% 18%)", borderRadius: 8, color: "hsl(210 20% 95%)" }} />
                  <Line type="monotone" dataKey="progress" stroke="hsl(195 90% 50%)" strokeWidth={2} dot={{ fill: "hsl(195 90% 50%)", r: 5 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Module breakdown */}
      <Card className="glass-card">
        <CardHeader><CardTitle className="text-lg font-display">Module Progress</CardTitle></CardHeader>
        <CardContent className="space-y-4">
          {modules.map(m => (
            <div key={m.id} className="flex items-center gap-4">
              <span className="text-lg w-8">{m.icon}</span>
              <span className="text-sm text-foreground font-medium w-48 truncate">{m.title}</span>
              <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                <div className="h-full rounded-full transition-all" style={{ width: `${m.progress}%`, backgroundColor: `hsl(var(--level-${m.level}))` }} />
              </div>
              <span className="text-sm font-display font-bold w-12 text-right" style={{ color: `hsl(var(--level-${m.level}))` }}>
                {m.progress}%
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
