export type TeamMember = {
  name: string;
  role: string;
  badge?: string;
  bio: string;
};

export const TEAM: TeamMember[] = [
  {
    name: "S. Lakshman Rao",
    role: "Head Coach & Founder",
    badge: "National Champion",
    bio: "Former national roller skating champion with 20+ years of coaching experience. Founded IARSA to bring world-class skating training to Visakhapatnam.",
  },
  {
    name: "Priya Sharma",
    role: "Artistic Skating Coach",
    badge: "State Medalist",
    bio: "Specialises in artistic and figure skating. Has coached 15+ students to state podium finishes.",
  },
  {
    name: "Ravi Kumar",
    role: "Speed Skating Coach",
    badge: "District Champion",
    bio: "Speed skating specialist and former district champion. Focuses on race technique and endurance training.",
  },
];
