import type { Module } from "../../data/lmsData";
import { Lock, CheckCircle2, ChevronRight } from "lucide-react";
import { cn } from "../../lib/utils";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function ModuleCard({ module, index }: { module: Module; index: number }) {
  const navigate = useNavigate();         

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      onClick={() => !module.locked && navigate(`/modules/${module.id}`)}
      className={cn(
        "group relative glass-card rounded-xl p-5 transition-all duration-300",
        module.locked 
          ? "opacity-50 cursor-not-allowed" 
          : "cursor-pointer hover:glow-primary hover:border-primary/30 "
      )}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center text-lg",
            `bg-${module.color}/15`
          )}
            style={{ backgroundColor: `hsl(var(--level-${module.level}) / 0.15)` }}
          >
            {module.icon}
          </div>
          <div>
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
              Level {module.level}
            </p>
            <h3 className="font-display font-semibold text-foreground">{module.title}</h3>
          </div>
        </div>
        {module.locked ? (
          <Lock className="w-4 h-4 text-muted-foreground" />
        ) : module.progress === 100 ? (
          <CheckCircle2 className="w-5 h-5 text-success" />
        ) : (
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        )}
      </div>

      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{module.description}</p>

      {!module.locked && (
        <div>
          <div className="flex justify-between text-xs mb-1.5">
            <span className="text-muted-foreground">{module.lessons.filter(l => l.completed).length}/{module.lessons.length} lessons</span>
            <span className="font-medium" style={{ color: `hsl(var(--level-${module.level}))` }}>{module.progress}%</span>
          </div>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-500"
              style={{ 
                width: `${module.progress}%`,
                backgroundColor: `hsl(var(--level-${module.level}))`,
              }}
            />
          </div>
        </div>
      )}
    </motion.div>
  );
}
