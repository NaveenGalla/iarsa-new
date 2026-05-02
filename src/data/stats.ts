export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 10, suffix: "+", label: "Years of Excellence" },
  { value: 4, suffix: "", label: "Competition Levels" },
  { value: 3, suffix: "", label: "Programs Offered" },
];
