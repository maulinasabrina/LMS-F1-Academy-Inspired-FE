import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { userProfile } from "../data/lmsData";
import { Settings, Award } from "lucide-react";

const badges = [
  { name: "Quick Learner", desc: "Complete 5 lessons in one day", earned: true },
  { name: "Streak Master", desc: "Maintain a 10-day streak", earned: true },
  { name: "Level Up", desc: "Complete Level 0", earned: true },
  { name: "Perfectionist", desc: "Score 100% on a quiz", earned: false },
  { name: "Team Player", desc: "Complete Support Network Map", earned: false },
  { name: "Race Ready", desc: "Complete all tactical modules", earned: false },
];

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Card className="glass-card overflow-hidden">
          <div className="h-32 gradient-primary relative" />
          <CardContent className="relative px-6 pb-6">
            <div className="flex items-end gap-5 -mt-12">
              <div className="w-24 h-24 rounded-2xl gradient-primary border-4 border-card flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
                {userProfile.avatar}
              </div>
              <div className="flex-1 pb-1">
                <h1 className="text-2xl font-display font-bold text-foreground">{userProfile.name}</h1>
                <p className="text-muted-foreground">{userProfile.role}</p>
              </div>
              <Button variant="outline" size="sm"><Settings className="w-4 h-4 mr-2" /> Settings</Button>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-6">
              {[
                { label: "Points", value: userProfile.points.toLocaleString() },
                { label: "Level", value: userProfile.currentLevel },
                { label: "Streak", value: `${userProfile.streak} days` },
                { label: "Rank", value: userProfile.rank },
              ].map(s => (
                <div key={s.label} className="text-center p-3 rounded-lg bg-secondary/50">
                  <p className="text-lg font-display font-bold text-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground">{s.label}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Card className="glass-card">
        <CardHeader><CardTitle className="text-lg font-display flex items-center gap-2"><Award className="w-5 h-5 text-warning" /> Badges</CardTitle></CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-3">
            {badges.map(badge => (
              <div key={badge.name} className={`p-4 rounded-lg border text-center transition-all ${badge.earned ? "border-warning/30 bg-warning/5" : "border-border opacity-40"}`}>
                <p className="font-display font-semibold text-sm text-foreground">{badge.name}</p>
                <p className="text-xs text-muted-foreground mt-1">{badge.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
