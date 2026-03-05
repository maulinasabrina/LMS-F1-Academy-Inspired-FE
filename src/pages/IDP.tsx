import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import SkillRadar from "../components/dashboard/SkillRadar";
import { skillProfile } from "../data/lmsData";
import { Target, TrendingDown, ArrowUpRight } from "lucide-react";

const idpGoals = [
  { area: "Tactical", current: 5, target: 8, priority: "High", actions: ["Complete Race Intelligence module", "Practice scenario quizzes weekly", "Study race replays"] },
  { area: "Mental", current: 6, target: 8, priority: "High", actions: ["Build pre-race routine", "Daily visualization practice", "Complete Mental Performance module"] },
  { area: "Technical", current: 7, target: 9, priority: "Medium", actions: ["Refine braking technique", "Practice trail braking", "Corner phase mastery"] },
];

export default function IDP() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold text-foreground">Individual Development Plan</h1>
        <p className="text-muted-foreground mt-1">Your personalized growth roadmap based on performance analysis.</p>
      </motion.div>

      <div className="grid grid-cols-2 gap-6">
        <Card className="glass-card">
          <CardHeader><CardTitle className="text-lg font-display">Performance Radar</CardTitle></CardHeader>
          <CardContent><SkillRadar /></CardContent>
        </Card>

        <Card className="glass-card">
          <CardHeader><CardTitle className="text-lg font-display">Skill Breakdown</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {skillProfile.map(skill => (
              <div key={skill.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-foreground font-medium">{skill.label}</span>
                  <span className="text-primary font-display font-bold">{skill.value}/{skill.max}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full rounded-full gradient-primary transition-all" style={{ width: `${(skill.value / skill.max) * 100}%` }} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div>
        <h2 className="text-xl font-display font-bold text-foreground mb-4 flex items-center gap-2">
          <Target className="w-5 h-5 text-primary" /> Focus Areas & Action Plan
        </h2>
        <div className="space-y-4">
          {idpGoals.map((goal, i) => (
            <motion.div key={goal.area} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
              <Card className="glass-card">
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <TrendingDown className="w-5 h-5 text-warning" />
                      <h3 className="font-display font-semibold text-foreground text-lg">{goal.area}</h3>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-warning/15 text-warning font-medium">
                        {goal.priority} Priority
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">Current: <strong className="text-foreground">{goal.current}</strong></span>
                      <ArrowUpRight className="w-4 h-4 text-success" />
                      <span className="text-muted-foreground">Target: <strong className="text-success">{goal.target}</strong></span>
                    </div>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden mb-4">
                    <div className="h-full bg-warning/60 rounded-full" style={{ width: `${(goal.current / goal.target) * 100}%` }} />
                  </div>
                  <div className="space-y-2">
                    {goal.actions.map((action, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {action}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
