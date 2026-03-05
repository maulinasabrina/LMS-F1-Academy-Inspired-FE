import { useParams, useNavigate } from "react-router-dom";
import { modules } from "../data/lmsData";
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { ArrowLeft, CheckCircle2, Circle, Play, FileText, HelpCircle, PenLine, Clock } from "lucide-react";

const typeIcons = { video: Play, reading: FileText, quiz: HelpCircle, exercise: PenLine, reflection: PenLine };
const typeLabels = { video: "Video", reading: "Reading", quiz: "Quiz", exercise: "Exercise", reflection: "Reflection" };

export default function ModuleDetail() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const module = modules.find(m => m.id === moduleId);

  if (!module) return <div className="text-center py-20 text-muted-foreground">Module not found.</div>;

  const completedCount = module.lessons.filter(l => l.completed).length;
  const nextLesson = module.lessons.find(l => !l.completed);

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Button variant="ghost" onClick={() => navigate("/modules")} className="text-muted-foreground mb-4">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Modules
        </Button>

        <div className="flex items-start gap-4 mb-2">
          <div className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl" style={{ backgroundColor: `hsl(var(--level-${module.level}) / 0.15)` }}>
            {module.icon}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium uppercase tracking-wider" style={{ color: `hsl(var(--level-${module.level}))` }}>
              Level {module.level} — {module.subtitle}
            </p>
            <h1 className="text-3xl font-display font-bold text-foreground">{module.title}</h1>
            <p className="text-muted-foreground mt-1">{module.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-6 mt-4">
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{completedCount}</span> / {module.lessons.length} lessons completed
          </div>
          <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all" style={{ width: `${module.progress}%`, backgroundColor: `hsl(var(--level-${module.level}))` }} />
          </div>
          <span className="font-display font-bold text-lg" style={{ color: `hsl(var(--level-${module.level}))` }}>
            {module.progress}%
          </span>
        </div>
      </motion.div>

      {nextLesson && (
        <Card className="glass-card border-primary/20 glow-primary">
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
              <Play className="w-5 h-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <p className="text-xs text-primary uppercase tracking-wider font-medium">Continue where you left off</p>
              <h3 className="font-display font-semibold text-foreground text-lg">{nextLesson.title}</h3>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-0.5">
                <Clock className="w-3 h-3" /> {nextLesson.duration} · {typeLabels[nextLesson.type]}
              </p>
            </div>
            <Button onClick={() => !module.locked && navigate(`/modules/${module.id}/lessons/${nextLesson.id}`)} className="gradient-primary border-0 text-primary-foreground">Start Lesson</Button>
          </CardContent>
        </Card>
      )}

      <div className="space-y-2">
        {module.lessons.map((lesson, i) => {
          const Icon = typeIcons[lesson.type];
          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              onClick={() => !module.locked && navigate(`/modules/${module.id}/lessons/${lesson.id}`)}
            >
              <Card className="glass-card hover:border-primary/20 transition-all cursor-pointer group">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center">
                    {lesson.completed ? (
                      <CheckCircle2 className="w-5 h-5 text-success" />
                    ) : (
                      <Circle className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                    <Icon className="w-4 h-4 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-sm font-medium text-foreground">{lesson.title}</h4>
                    <p className="text-xs text-muted-foreground">{typeLabels[lesson.type]} · {lesson.duration}</p>
                  </div>
                  <Button variant="ghost" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity text-primary">
                    {lesson.completed ? "Review" : "Start"}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
