export interface Project {
  name: string;
  description: string;
  image: string;
  repoUrl: string;
  demoUrl: string;
  tags: string[];
  wip: boolean;
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
  wip: false,
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
  wip: false,
}, {
  name: "RustyKV",
  description:
    "Rusty KV Store is a lightweight Redis-compatible server that implements Redis commands using Rust's async I/O capabilities with Tokio. This project aims to provide a high-performance, memory-efficient alternative to Redis while maintaining protocol compatibility. It comes with pre-built cli client built with C++",
  repoUrl: "https://github.com/rusty-org/rusty-kv",
  demoUrl: "https://github.com/rusty-org/rusty-kv",
  image: "/projects/rustykv_demo.webp",
  tags: [
    "Rust",
    "C++",
    "Multithreading",
    "Redis",
  ],
  wip: true,
}, {
  name: "Everato",
  description:
    "Open source solution for in-person and online event organisation and management, in replacement of Konfhub",
  repoUrl: "https://github.com/dtg-lucifer/everato",
  demoUrl: "https://github.com/dtg-lucifer/everato",
  image: "/projects/wip.webp",
  tags: [
    "Go",
    "Next.js@15",
  ],
  wip: true,
}, {
  name: "CI CD Pipeline to deploy on GCP (Docker Swarm)",
  description:
    "This project includes a python application to monitor server health which stores last 5 logs into redis cache which is replicated and deployed on 2 node docker swarm cluster on GCP",
  repoUrl: "https://github.com/dtg-lucifer/redis-docker-swarm-devops-project",
  demoUrl:
    "https://devpiush.hashnode.dev/learn-to-deploy-your-application-on-a-docker-swarm-cluster-step-by-step-guide-with-code",
  image: "/projects/docker_swarm_demo.webp",
  tags: [
    "Docker Swarm",
    "GCP",
    "Redis",
    "Python",
    "Microservices",
  ],
  wip: false,
}, {
  name: "Inside Out Tea",
  description:
    "Collaboration on a Tea Business Startup that offers a unique tea selection based on individual moods. Whether you're feeling stressed, happy, or adventurous, our platform helps you find the perfect tea flavor to match your mood",
  repoUrl: "https://github.com/dtg-lucifer/inside-out-tea",
  demoUrl: "https://inside-out-tea.vercel.app/",
  image: "/projects/insideout_demo.webp",
  tags: [
    "Next.js@15",
    "TailwindCSS",
  ],
  wip: false,
}];

export const useProjects = async (): Promise<Project[]> => {
  return projects;
};
