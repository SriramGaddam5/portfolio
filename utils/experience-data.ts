export interface WorkExperience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
  logo: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: "exp-1",
    company: "Nike",
    position: "Software Engineering Intern",
    duration: "2025",
    description: "Optimized Nike mobile app for Android",
    technologies: [
      "Kotlin",
      "Ruby",
      "Android Studio",
      "JFrog Artifactory",
      "SauceLabs TestFairy",
      "Jenkins",
    ],
    logo: "/images/nike-logo.svg",
  },
  {
    id: "exp-2",
    company: "Sennu AI (YC W25)",
    position: "Winter Software Engineering Intern",
    duration: "2024",
    description:
      "Built responsive user interfaces and implemented new features",
    technologies: ["React", "JavaScript", "TypeScript", "Figma", "CSS", "HTML"],
    logo: "/images/sennu-logo.svg",
  },
  {
    id: "exp-3",
    company: "Amazon",
    position: "Design Technologist Intern",
    duration: "2024",
    description: "Created Figma plugin to export designs to TCL RayNeo X2",
    technologies: [
      "JavaScript",
      "HTML",
      "CSS",
      "TypeScript",
      "C++",
      "Figma API",
      "AWS S3",
      "AWS Lambda",
      "AWS CloudWatch",
      "Python",
      "Kotlin",
      "Android Studio",
      "Arduino",
    ],
    logo: "/images/amazon-logo.svg",
  },
];
