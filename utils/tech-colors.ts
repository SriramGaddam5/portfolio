export interface TechColor {
  name: string;
  colorScheme: string;
  category: string;
}

export const techColors: TechColor[] = [
  // Programming Languages
  { name: "JavaScript", colorScheme: "yellow", category: "language" },
  { name: "TypeScript", colorScheme: "blue", category: "language" },
  { name: "Python", colorScheme: "green", category: "language" },
  { name: "Kotlin", colorScheme: "purple", category: "language" },
  { name: "C++", colorScheme: "pink", category: "language" },
  { name: "Ruby", colorScheme: "red", category: "language" },

  // Frontend Technologies
  { name: "React", colorScheme: "cyan", category: "frontend" },
  { name: "HTML", colorScheme: "orange", category: "frontend" },
  { name: "CSS", colorScheme: "blue", category: "frontend" },

  // Development Tools
  { name: "Android Studio", colorScheme: "green", category: "tool" },
  { name: "Figma", colorScheme: "purple", category: "tool" },
  { name: "Arduino", colorScheme: "teal", category: "tool" },

  // Cloud & Infrastructure
  { name: "AWS S3", colorScheme: "orange", category: "cloud" },
  { name: "AWS Lambda", colorScheme: "orange", category: "cloud" },
  { name: "AWS CloudWatch", colorScheme: "orange", category: "cloud" },
  { name: "Jenkins", colorScheme: "red", category: "infrastructure" },

  // APIs & Services
  { name: "Figma API", colorScheme: "purple", category: "api" },
  { name: "JFrog Artifactory", colorScheme: "blue", category: "service" },
  { name: "SauceLabs TestFairy", colorScheme: "green", category: "service" },
];

// Helper function to get color scheme for a technology
export const getTechColor = (techName: string): string => {
  const tech = techColors.find(
    (t) => t.name.toLowerCase() === techName.toLowerCase()
  );
  return tech?.colorScheme || "gray"; // Default to gray if not found
};

// Helper function to get all technologies by category
export const getTechsByCategory = (category: string): string[] => {
  return techColors.filter((t) => t.category === category).map((t) => t.name);
};
