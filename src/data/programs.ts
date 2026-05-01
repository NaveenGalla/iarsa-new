export type Program = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Specialty";
  ageRange: string;
  duration: string;
  fee: string;
  description: string;
  highlights: string[];
  accent: string;
};

export const PROGRAMS: Program[] = [
  {
    id: "beginner",
    title: "Beginner Skating",
    level: "Beginner",
    ageRange: "4–10 years",
    duration: "3 months",
    fee: "₹1,500/month",
    description: "Introduction to roller skating — balance, basic moves, and confidence on wheels.",
    highlights: ["Safety gear provided", "Patient instructors", "Small batch sizes"],
    accent: "from-blue-500/20",
  },
  {
    id: "intermediate",
    title: "Intermediate Skating",
    level: "Intermediate",
    ageRange: "8–16 years",
    duration: "6 months",
    fee: "₹2,000/month",
    description: "Build speed, agility, and technique. Prepares students for district-level competitions.",
    highlights: ["Slalom & cone drills", "Speed work", "Competition prep"],
    accent: "from-teal-500/20",
  },
  {
    id: "advanced",
    title: "Advanced Training",
    level: "Advanced",
    ageRange: "12+ years",
    duration: "Ongoing",
    fee: "₹2,500/month",
    description: "Intensive training for state and national level competition. Personalised coaching.",
    highlights: ["State team pathway", "Video analysis", "Nutrition guidance"],
    accent: "from-indigo-500/20",
  },
  {
    id: "speed",
    title: "Speed Skating",
    level: "Specialty",
    ageRange: "10+ years",
    duration: "6 months",
    fee: "₹2,200/month",
    description: "Dedicated speed skating track training. Focus on race starts, cornering, and stamina.",
    highlights: ["Track sessions", "Timing gates", "Race strategy"],
    accent: "from-cyan-500/20",
  },
  {
    id: "artistic",
    title: "Artistic Skating",
    level: "Specialty",
    ageRange: "6–18 years",
    duration: "6 months",
    fee: "₹2,200/month",
    description: "Creative skating combining dance and figure elements. Ideal for performances and artistic competitions.",
    highlights: ["Choreography", "Music sync", "Solo & pairs"],
    accent: "from-violet-500/20",
  },
];
