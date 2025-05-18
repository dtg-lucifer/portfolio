export interface Project {
  name: string;
  description: string;
  image: string;
  repoUrl: string;
  demoUrl: string;
  tags: string[];
}

export const projects: Project[] = [{
  name: "Chat-O-Cord",
  description:
    "A full stack end to end chat application built with React as the frontend, Express.js as the backend, PostgreSQL as the database, Redis for session cache, Socket.io for real-time communication, Cloudinary for image storage. Last but not the least, it is then built with Electron to make it a desktop application.",
  image: "/projects/chatocord_demo.webp",
  repoUrl: "https://github.com/dtg-lucifer/Chat-O-Cord",
  demoUrl: "https://github.com/dtg-lucifer/Chat-O-Cord",
  tags: [
    "React",
    "Redis",
    "Socket.io",
    "Electron",
  ],
}, {
  name: "Starty",
  description:
    "A centralised reddit like platform to share and find out more startups matching your interests. Build with Next.js v15, TailwindCSS, and Sanity.io for the headless CMS and handling all of the data.",
  image: "/projects/starty_demo.webp",
  repoUrl: "https://github.com/dtg-lucifer/starty",
  demoUrl: "https://github.com/dtg-lucifer/starty",
  tags: [
    "Next.js@15",
    "TailwindCSS",
    "Sanity.io",
  ],
}];

export const useProjects = async (): Promise<Project[]> => {
  return projects;
};
