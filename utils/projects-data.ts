export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  colorScheme: string;
  link?: string;
  github?: string;
  coverImage: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Spark",
    description:
      "A fast paced puzzle platformer based on Metriod with an emphasis on speed and movement.",
    technologies: ["Unity", "C#", "Blender", "Maya", "Substance Painter"],
    colorScheme: "blue",
    link: "https://official-itchio.itch.io/spark",
    coverImage:
      "https://img.itch.zone/aW1nLzIwODMwMTQ0LnBuZw==/original/%2FSpod7.png",
  },
  {
    id: "project-2",
    title: "Hi:Core",
    description:
      "Retro arcade twin stick shooter and overall winner of 2024 Fall TAGD game jam!",
    technologies: ["Unity", "C#", "Aseprite"],
    colorScheme: "cyan",
    link: "https://pineapple120.itch.io/hi-core",
    coverImage:
      "https://img.itch.zone/aW1nLzE4NjkyMzQ1LmdpZg==/original/wVNvu%2B.gif",
  },
  {
    id: "project-3",
    title: "Silent Vote",
    description:
      "Privacy-focused decentralized voting application using 4 proofs: voter eligibility, results, progress, and verification",
    technologies: ["Midnight"],
    colorScheme: "gray",
    link: "https://www.youtube.com/watch?v=cXCmqtDvojw",
    github: "https://github.com/SriramGaddam5/SilentVote/",
    coverImage:
      "https://raw.githubusercontent.com/SriramGaddam5/SilentVote/04faff952c61f9704d2a0255fac76b31efc6599c/frontend/public/images/Silent%20Vote%20Icon.svg",
  },
  {
    id: "project-4",
    title: "Slime Swing",
    description:
      "Chill pixel art 2D platformer and submission to 2024 Chillenium Game Jam",
    technologies: ["Unity", "C#", "Photoshop"],
    colorScheme: "green",
    link: "https://official-itchio.itch.io/slime-swing",
    coverImage:
      "https://img.itch.zone/aW1nLzE1MjU4MTAyLnBuZw==/original/QH5Gxq.png",
  },
];
