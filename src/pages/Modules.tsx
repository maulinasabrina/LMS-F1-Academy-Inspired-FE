import { motion } from "framer-motion";
import { modules } from "../data/lmsData";
import ModuleCard from "../components/dashboard/ModuleCard";

export default function Modules() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-3xl font-display font-bold text-foreground">Learning Modules</h1>
        <p className="text-muted-foreground mt-1">Progress through each level to unlock the next stage of your development.</p>
      </motion.div>

      {/* Level pathway visual */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4">
        {modules.map((m, i) => (
          <div key={m.id} className="flex items-center">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-display shrink-0 border-2 transition-all"
              style={{
                borderColor: `hsl(var(--level-${m.level}))`,
                backgroundColor: m.progress === 100 ? `hsl(var(--level-${m.level}))` : "transparent",
                color: m.progress === 100 ? "white" : `hsl(var(--level-${m.level}))`,
              }}
            >
              {m.level}
            </div>
            {i < modules.length -1 && (
              <div className="w-8 h-0.5 bg-border mx-1" />
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-5">
        {modules.map((module, i) => (
          <ModuleCard key={module.id} module={module} index={i} />
        ))}
      </div>
    </div>
  );
}
