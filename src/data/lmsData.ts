export interface Lesson {
  id: string;
  title: string;
  type: "video" | "reading" | "quiz" | "reflection" | "exercise";
  lessonUrl?: string; // for videos
  content?: string; // for readings
  questions?: { id: string; question: string; options: string[] }[]; // for quizzes/exercises
  duration: string;
  completed: boolean;
}

export interface Module {
  id: string;
  level: number;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  icon: string;
  lessons: Lesson[];
  locked: boolean;
  progress: number;
}

export interface SkillProfile {
  label: string;
  value: number;
  max: number;
}

export const userProfile = {
  name: "Sophia Martinez",
  avatar: "SM",
  role: "F1 Academy Driver",
  overallProgress: 42,
  currentLevel: 2,
  streak: 12,
  points: 2840,
  rank: "Rising Star",
};

export const skillProfile: SkillProfile[] = [
  { label: "Technical", value: 7, max: 10 },
  { label: "Tactical", value: 5, max: 10 },
  { label: "Physical", value: 8, max: 10 },
  { label: "Mental", value: 6, max: 10 },
  { label: "Social", value: 7, max: 10 },
];

export const modules: Module[] = [
  {
    id: "orientation",
    level: 0,
    title: "Orientation",
    subtitle: "Mindset & Pathway",
    description: "Understand the motorsport landscape, performance factors, and set your career vision.",
    color: "level-0",
    icon: "🏁",
    locked: false,
    progress: 100,
    lessons: [
      { id: "o1", title: "The Motorsport Pathway", type: "video", lessonUrl: "https://example.com/video1",  duration: "12 min", completed: true },
      { id: "o2", title: "Performance Factors Overview", type: "reading", content: "Content for Performance Factors Overview...", duration: "8 min", completed: true },
      { id: "o3", title: "Why Talent Isn't Enough", type: "video", lessonUrl: "https://example.com/video2", duration: "10 min", completed: true },
      { id: "o4", title: "Introduction to IDP", type: "reading", content: "Content for Introduction to IDP...", duration: "6 min", completed: true },
      { id: "o5", title: "Career Vision Statement", type: "exercise", questions: [{ id: "q1", question: "What is your long-term career goal?", options: ["Become a Formula 1 driver", "Work in motorsport engineering", "Coaching aspiring drivers"] }], duration: "15 min", completed: true },
    ],
  },
  {
    id: "self-assessment",
    level: 1,
    title: "Self-Assessment & IDP",
    subtitle: "Know Yourself",
    description: "Build your performance profile, understand marginal gains, and create your Individual Development Plan.",
    color: "level-1",
    icon: "🎯",
    locked: false,
    progress: 75,
    lessons: [
      { id: "s1", title: "Performance Profile Tool", type: "exercise", questions: [{ id: "q1", question: "What is your performance strength?", options: ["Communication", "Decision Making", "Technical Skills"] }], duration: "20 min", completed: true },
      { id: "s2", title: "Marginal Gains Concept", type: "video", lessonUrl: "https://example.com/video3", duration: "14 min", completed: true },
      { id: "s3", title: "Goal Setting Framework", type: "reading", content: "Content for Goal Setting Framework...", duration: "10 min", completed: true },
      { id: "s4", title: "Action Plan Template", type: "exercise", questions: [{ id: "q1", question: "What is your next step?", options: ["Set a specific goal", "Create a timeline", "Identify resources"] }], duration: "25 min", completed: false },
      { id: "s5", title: "IDP Reflection", type: "reflection", content: "Content for IDP Reflection...", duration: "15 min", completed: false },
    ],
  },
  {
    id: "technical",
    level: 2,
    title: "Technical Foundations",
    subtitle: "Driving Mastery",
    description: "Master racing lines, corner phases, braking mechanics, throttle application, and car control.",
    color: "level-2",
    icon: "🏎️",
    locked: false,
    progress: 30,
    lessons: [
      { id: "t1", title: "Racing Line Fundamentals", type: "video", lessonUrl: "https://example.com/video4", duration: "18 min", completed: true },
      { id: "t2", title: "Corner Phases (6 Phase Model)", type: "video", lessonUrl: "https://example.com/video5", duration: "22 min", completed: true },
      { id: "t3", title: "Braking Mechanics", type: "reading", content: "Content for Braking Mechanics...", duration: "12 min", completed: false },
      { id: "t4", title: "Throttle & Acceleration", type: "video", lessonUrl: "https://example.com/video6", duration: "15 min", completed: false },
      { id: "t5", title: "Steering & Vision Control", type: "video", lessonUrl: "https://example.com/video7", duration: "16 min", completed: false },
      { id: "t6", title: "Understeer vs Oversteer", type: "reading", content: "Content for Understeer vs Oversteer...", duration: "10 min", completed: false },
      { id: "t7", title: "Flags & Regulations", type: "quiz", duration: "8 min", completed: false },
      { id: "t8", title: "Technical Checkpoint Test", type: "quiz", duration: "20 min", completed: false },
    ],
  },
  {
    id: "physical",
    level: 3,
    title: "Physical Development",
    subtitle: "Body Performance",
    description: "Build driver-specific fitness: reaction time, neck strength, core stability, nutrition, and recovery.",
    color: "level-3",
    icon: "💪",
    locked: true,
    progress: 0,
    lessons: [
      { id: "p1", title: "Reaction Training", type: "video", lessonUrl: "https://example.com/video8", duration: "14 min", completed: false },
      { id: "p2", title: "Neck Strength Program", type: "exercise", questions: [{ id: "q1", question: "What is your current fitness level?" , options: ["Beginner", "Intermediate", "Advanced"] }], duration: "20 min", completed: false },
      { id: "p3", title: "Core Stability Drills", type: "video", lessonUrl: "https://example.com/video9", duration: "18 min", completed: false },
      { id: "p4", title: "Endurance Building", type: "reading", content: "Content for Endurance Building...", duration: "12 min", completed: false },
      { id: "p5", title: "Nutrition for Drivers", type: "reading", content: "Content for Nutrition for Drivers...", duration: "15 min", completed: false },
      { id: "p6", title: "Sleep & Recovery", type: "reading", content: "Content for Sleep & Recovery...", duration: "10 min", completed: false },
      { id: "p7", title: "Fitness Benchmark Test", type: "exercise", questions: [{ id: "q1", question: "What is your current fitness level?" , options: ["Beginner", "Intermediate", "Advanced"] }], duration: "30 min", completed: false },
    ],
  },
  {
    id: "mental",
    level: 4,
    title: "Mental Performance",
    subtitle: "Mind Mastery",
    description: "Develop focus control, pressure management, confidence, visualization, and pre-race routines.",
    color: "level-4",
    icon: "🧠",
    locked: true,
    progress: 0,
    lessons: [
      { id: "m1", title: "Focus Control Techniques", type: "video", lessonUrl: "https://example.com/video10", duration: "16 min", completed: false },
      { id: "m2", title: "Managing Race Pressure", type: "video", lessonUrl: "https://example.com/video11", duration: "20 min", completed: false },
      { id: "m3", title: "Confidence Building", type: "reflection", content: "Content for Confidence Building...", duration: "15 min", completed: false },
      { id: "m4", title: "Mistake Recovery System", type: "reading", content: "Content for Mistake Recovery System...", duration: "12 min", completed: false },
      { id: "m5", title: "Visualization Training", type: "exercise", questions: [{ id: "q1", question: "What is the main benefit of visualization?" , options: ["Improved focus", "Better decision-making", "Enhanced performance"] }], duration: "18 min", completed: false },
      { id: "m6", title: "Pre-Race Routine Builder", type: "exercise", questions: [{ id: "q1", question: "What is your pre-race routine?" , options: ["Meditation", "Physical warm-up", "Mental rehearsal"] }], duration: "25 min", completed: false },
    ],
  },
  {
    id: "tactical",
    level: 5,
    title: "Race Intelligence",
    subtitle: "Tactical Mastery",
    description: "Learn overtaking strategy, defending, tyre management, pace control, and race strategy.",
    color: "level-5",
    icon: "⚡",
    locked: true,
    progress: 0,
    lessons: [
      { id: "r1", title: "Overtaking Strategy", type: "video", lessonUrl: "https://example.com/video12", duration: "20 min", completed: false },
      { id: "r2", title: "Defending Positions", type: "video", lessonUrl: "https://example.com/video13", duration: "18 min", completed: false },
      { id: "r3", title: "First Corner Approach", type: "reading", content: "Content for First Corner Approach...", duration: "12 min", completed: false },
      { id: "r4", title: "Tyre Management", type: "video", lessonUrl: "https://example.com/video14", duration: "22 min", completed: false },
      { id: "r5", title: "Race Strategy Basics", type: "reading", content: "Content for Race Strategy Basics...", duration: "15 min", completed: false },
      { id: "r6", title: "Tactical Scenario Quiz", type: "quiz", questions: [{ id: "q1", question: "What is the main benefit of tactical scenario planning?" , options: ["Improved decision-making", "Better resource allocation", "Enhanced team coordination"] }], duration: "25 min", completed: false },
    ],
  },
  {
    id: "professional",
    level: 6,
    title: "Professional Development",
    subtitle: "Career Building",
    description: "Build your personal brand, support network, media skills, and sponsor relationships.",
    color: "level-6",
    icon: "🌟",
    locked: true,
    progress: 0,
    lessons: [
      { id: "d1", title: "Personal Performance Team", type: "reading", content: "Content for Personal Performance Team...", duration: "12 min", completed: false },
      { id: "d2", title: "Sponsor Communication", type: "video", lessonUrl: "https://example.com/video15", duration: "16 min", completed: false },
      { id: "d3", title: "Media Training Basics", type: "video", lessonUrl: "https://example.com/video16", duration: "20 min", completed: false },
      { id: "d4", title: "Personal Branding", type: "exercise", questions: [{ id: "q1", question: "What is the main benefit of personal branding?" , options: ["Increased visibility", "Better job opportunities", "Enhanced credibility"] }], duration: "25 min", completed: false },
      { id: "d5", title: "Support Network Map", type: "exercise", questions: [{ id: "q1", question: "How can you strengthen your support network?" , options: ["Attend industry events", "Volunteer for causes you care about", "Reach out to mentors"] }], duration: "18 min", completed: false },
    ],
  },
  {
    id: "review",
    level: 7,
    title: "High Performance Loop",
    subtitle: "Review & Iterate",
    description: "Re-assess your performance profile, compare progress, adjust your IDP, and plan next quarter.",
    color: "level-7",
    icon: "🔄",
    locked: true,
    progress: 0,
    lessons: [
      { id: "h1", title: "Re-do Performance Profile", type: "exercise", questions: [{ id: "q1", question: "What is the main benefit of re-doing your performance profile?" , options: ["Better self-awareness", "Improved goal setting", "Enhanced accountability"] }], duration: "20 min", completed: false },
      { id: "h2", title: "Progress Comparison", type: "reading", content: "Content for Progress Comparison...", duration: "12 min", completed: false },
      { id: "h3", title: "IDP Adjustment", type: "exercise", questions: [{ id: "q1", question: "What is the main benefit of adjusting your IDP?" , options: ["Better alignment with goals", "Improved motivation", "Enhanced learning"] }], duration: "25 min", completed: false },
      { id: "h4", title: "Quarterly Review Report", type: "reflection", content: "Content for Quarterly Review Report...", duration: "30 min", completed: false },
    ],
  },
  
];

export const recentActivity = [
  { action: "Completed", item: "Corner Phases (6 Phase Model)", time: "2 hours ago", type: "video" as const },
  { action: "Started", item: "Braking Mechanics", time: "3 hours ago", type: "reading" as const },
  { action: "Achieved", item: "Level 1 Complete", time: "1 day ago", type: "quiz" as const },
  { action: "Submitted", item: "Performance Profile", time: "2 days ago", type: "exercise" as const },
  { action: "Completed", item: "Marginal Gains Concept", time: "3 days ago", type: "video" as const },
];

export const weeklyGoals = [
  { title: "Complete Braking Mechanics", done: false },
  { title: "30 min physical training", done: true },
  { title: "Journal reflection entry", done: false },
  { title: "Watch throttle control video", done: false },
];
