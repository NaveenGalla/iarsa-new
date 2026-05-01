export type Stat = {
  value: number;
  suffix: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 500, suffix: "+", label: "Students Trained" },
  { value: 20, suffix: "+", label: "Years Active" },
  { value: 45, suffix: "+", label: "State Champions" },
  { value: 12, suffix: "", label: "National Medals" },
];
