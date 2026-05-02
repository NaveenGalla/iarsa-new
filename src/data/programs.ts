export type Program = {
  id: string;
  title: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  ageRange: string;
  schedule: string;
  timings: string[];
  description: string;
  highlights: string[];
  accent: string;
};

export const PROGRAMS: Program[] = [
  {
    id: "beginners",
    title: "Beginners",
    level: "Beginner",
    ageRange: "All ages welcome",
    schedule: "Tue, Wed, Fri, Sat & Sun",
    timings: ["Morning: 5:00 AM – 6:30 AM", "Evening: 5:00 PM – 6:30 PM"],
    description:
      "Introduction to roller skating — balance, basic moves, and confidence on wheels in a safe and fun environment.",
    highlights: [
      "Certified professional instructors",
      "Safe, caring environment",
      "Morning & evening batches",
      "Mon & Thu are holidays",
    ],
    accent: "from-blue-500/20",
  },
  {
    id: "juniors-artistic",
    title: "Juniors Artistic",
    level: "Intermediate",
    ageRange: "Juniors",
    schedule: "Mon – Sun",
    timings: [
      "Weekdays: 4:00 PM – 5:30 PM",
      "Weekends: 5:00 AM – 8:30 AM & 4:00 PM – 5:30 PM",
    ],
    description:
      "Artistic skating program combining technique and creativity. Prepares juniors for state and national competitions.",
    highlights: [
      "Artistic & figure skating",
      "Weekend morning sessions",
      "Competition preparation",
      "Professional coaching",
    ],
    accent: "from-teal-500/20",
  },
  {
    id: "senior-artistic",
    title: "Senior Artistic",
    level: "Advanced",
    ageRange: "Seniors",
    schedule: "Mon – Sun",
    timings: [
      "Weekdays: 6:00 PM – 8:30 PM",
      "Weekends: 5:00 AM – 8:30 AM & 6:00 PM – 8:30 PM",
    ],
    description:
      "Advanced artistic skating for experienced skaters. Intensive training for International, National, State and District competitions.",
    highlights: [
      "International level training",
      "Gold, Silver & Bronze medalists",
      "Extended weekend sessions",
      "Performance & competition focus",
    ],
    accent: "from-violet-500/20",
  },
];
