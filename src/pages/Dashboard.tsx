import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { userProfile, modules, recentActivity, weeklyGoals } from "../data/lmsData";
import SkillRadar from "../components/dashboard/SkillRadar";
// import ModuleCard from "../components/dashboard/ModuleCard";
import { Flame, Zap, TrendingUp, Target, Play, CheckCircle2, Circle, FileText, HelpCircle, PenLine } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";

const typeIcons = { video: Play, reading: FileText, quiz: HelpCircle, exercise: PenLine, reflection: PenLine };

export default function Dashboard() {
  const navigate = useNavigate();
  const currentModule = modules.find(m => m.progress > 0 && m.progress < 100);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-display font-bold text-foreground">
            Welcome back, <span className="gradient-text">{userProfile.name.split(" ")[0]}</span>
          </h1>
          <p className="text-muted-foreground mt-1">Continue your journey to becoming a professional driver.</p>
        </div>
        <Button onClick={() => currentModule && navigate(`/modules/${currentModule.id}`)} className="gradient-primary border-0 text-primary-foreground font-semibold">
          <Play className="w-4 h-4 mr-2" /> Continue Learning
        </Button>
      </motion.div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { label: "Overall Progress", value: `${userProfile.overallProgress}%`, icon: TrendingUp, accent: "primary" },
          { label: "Current Level", value: userProfile.currentLevel, icon: Target, accent: "accent" },
          { label: "Day Streak", value: userProfile.streak, icon: Flame, accent: "warning" },
          { label: "Total Points", value: userProfile.points.toLocaleString(), icon: Zap, accent: "primary" },
        ].map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Card className="glass-card border-border/50">
              <CardContent className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className="w-5 h-5 text-primary" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider">{stat.label}</span>
                </div>
                <p className="text-2xl font-display font-bold text-foreground">{stat.value}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Skill Radar */}
        <Card className="glass-card col-span-1">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-display">Skill Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <SkillRadar />
            <Button variant="ghost" className="w-full mt-2 text-primary" onClick={() => navigate("/idp")}>
              View Full IDP →
            </Button>
            
          </CardContent>
        </Card>

        {/* Current Module */}
        <Card className="glass-card col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-display">Current Module</CardTitle>
          </CardHeader>
          <CardContent>
            {currentModule && (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{currentModule.icon}</span>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">Level {currentModule.level}</p>
                    <h3 className="font-display font-semibold text-lg text-foreground">{currentModule.title}</h3>
                  </div>
                  <div className="ml-auto text-right">
                    <p className="text-2xl font-display font-bold text-primary">{currentModule.progress}%</p>
                  </div>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden mb-5">
                  <div className="h-full rounded-full gradient-primary transition-all" style={{ width: `${currentModule.progress}%` }} />
                </div>
                <div className="space-y-2">
                  {currentModule.lessons.slice(0, 5).map(lesson => {
                    const Icon = typeIcons[lesson.type];
                    return (
                      <div key={lesson.id} className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer">
                        {lesson.completed ? (
                          <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                        ) : (
                          <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                        )}
                        <Icon className="w-4 h-4 text-muted-foreground shrink-0" />
                        <span className="text-sm text-foreground flex-1">{lesson.title}</span>
                        <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Bottom row */}
      <div className="grid grid-cols-2 gap-6">
        {/* Recent Activity */}
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-display">Recent Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex items-center gap-3 text-sm">
                  <div className="w-2 h-2 rounded-full bg-primary shrink-0" />
                  <span className="text-muted-foreground">{activity.action}</span>
                  <span className="text-foreground font-medium truncate">{activity.item}</span>
                  <span className="text-xs text-muted-foreground ml-auto shrink-0">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Weekly Goals */}
        <Card className="glass-card">
          <CardHeader className="pb-2">
            <CardTitle className="text-lg font-display">Weekly Goals</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {weeklyGoals.map((goal, i) => (
                <div key={i} className="flex items-center gap-3">
                  {goal.done ? (
                    <CheckCircle2 className="w-4 h-4 text-success shrink-0" />
                  ) : (
                    <Circle className="w-4 h-4 text-muted-foreground shrink-0" />
                  )}
                  <span className={`text-sm ${goal.done ? "text-muted-foreground line-through" : "text-foreground"}`}>
                    {goal.title}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
