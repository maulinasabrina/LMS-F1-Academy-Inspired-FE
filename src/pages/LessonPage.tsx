import { useParams, useNavigate } from "react-router-dom";
import { modules } from "../data/lmsData";
import { motion } from "framer-motion";
import { CheckCircle2, PlayCircle } from "lucide-react";
import { cn } from "../lib/utils";
import { ChevronRight } from "lucide-react";

export default function LessonPage() {
  const { moduleId, lessonId } = useParams();
  const navigate = useNavigate();

  const module = modules.find((m) => m.id === moduleId);
  const lesson = module?.lessons.find((l) => l.id === lessonId);

  if (!module || !lesson) {
    return <div className="p-10">Lesson not found</div>;
  }

  const lessonIndex = module.lessons.findIndex((l) => l.id === lessonId);

  const nextLesson = module.lessons[lessonIndex + 1];
  const prevLesson = module.lessons[lessonIndex - 1];

  return (
    <div className="grid grid-cols-[280px_1fr] min-h-screen bg-background">

      {/* SIDEBAR */}

      <aside className="border-r border-border p-6">
        <h2 className="font-display font-semibold mb-4">{module.title}</h2>

        <div className="space-y-2">
          {module.lessons.map((l) => (
            <button
              key={l.id}
              onClick={() =>
                navigate(`/modules/${module.id}/lessons/${l.id}`)
              }
              className={cn(
                "w-full text-left p-3 rounded-lg flex items-center gap-3 transition",
                l.id === lessonId
                  ? "bg-primary/10 border border-primary/20"
                  : "hover:bg-secondary"
              )}
            >
              {l.completed ? (
                <CheckCircle2 className="w-4 h-4 text-success" />
              ) : (
                <PlayCircle className="w-4 h-4 text-muted-foreground" />
              )}

              <span className="text-sm">{l.title}</span>
            </button>
          ))}
        </div>
      </aside>

      {/* MAIN CONTENT */}

      <main className="p-10 overflow-y-auto">

        {/* BREADCRUMB */}

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">

            <button
                onClick={() => navigate("/modules")}
                className="hover:text-foreground transition"
            >
                Modules
            </button>

            <ChevronRight className="w-4 h-4 opacity-50" />

            <button
                onClick={() => navigate(`/modules/${module.id}`)}
                className="hover:text-foreground transition"
            >
                {module.title}
            </button>

            <ChevronRight className="w-4 h-4 opacity-50" />

            <span className="text-foreground font-medium">
                {lesson.title}
            </span>

            </div>

        {/* HEADER */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <p className="text-xs uppercase text-muted-foreground tracking-wider">
            Lesson {lessonIndex + 1} • {lesson.duration}
          </p>

          <h1 className="text-3xl font-display font-semibold mt-1">
            {lesson.title}
          </h1>
        </motion.div>

        {/* VIDEO */}

        {lesson.type === "video" && lesson.lessonUrl && (
          <div className="aspect-video rounded-xl overflow-hidden border border-border mb-10">
            <iframe
              src={lesson.lessonUrl}
              className="w-full h-full"
              allowFullScreen
            />
          </div>
        )}

        {/* READING */}

        {lesson.type === "reading" && (
          <div className="prose max-w-none mb-10">
            {lesson.content}
          </div>
        )}

        {/* QUIZ */}

        {lesson.type === "quiz" && (
          <div className="space-y-6 mb-10">
            {lesson.questions?.map((q) => (
              <div key={q.id} className="glass-card p-6 rounded-xl">
                <p className="font-medium mb-4">{q.question}</p>

                <div className="space-y-2">
                  {q.options.map((opt) => (
                    <button
                      key={opt}
                      className="w-full text-left border border-border rounded-lg p-3 hover:bg-secondary transition"
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* EXERCISE */}

        {lesson.type === "exercise" && (
          <div className="space-y-6 mb-10">
            {lesson.questions?.map((q) => (
              <div key={q.id} className="glass-card p-6 rounded-xl">
                <p className="font-medium mb-4">{q.question}</p>

                <textarea
                  className="w-full border border-border rounded-lg p-3 min-h-[120px] bg-background"
                  placeholder="Write your answer..."
                />
              </div>
            ))}
          </div>
        )}

        {/* REFLECTION */}

        {lesson.type === "reflection" && (
          <div className="glass-card p-8 rounded-xl mb-10">
            <p className="text-lg font-medium mb-4">
              Reflection
            </p>

            <textarea
              className="w-full border border-border rounded-lg p-4 min-h-[160px] bg-background"
              placeholder="Reflect on what you've learned..."
            />
          </div>
        )}

        {/* NAVIGATION */}

        <div className="flex items-center justify-between border-t border-border pt-6">

          {prevLesson ? (
            <button
              onClick={() =>
                navigate(`/modules/${module.id}/lessons/${prevLesson.id}`)
              }
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              ← Previous
            </button>
          ) : (
            <div />
          )}

          <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90">
            Mark Complete
          </button>

          {nextLesson ? (
            <button
              onClick={() =>
                navigate(`/modules/${module.id}/lessons/${nextLesson.id}`)
              }
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Next →
            </button>
          ) : (
            <div />
          )}
        </div>

      </main>
    </div>
  );
}