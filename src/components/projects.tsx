"use client";

import { Project, useProjects } from "@/hooks/useProjects";
import React, { useEffect, useState } from "react";
import ProjectCard from "./project-card";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const p = await useProjects();
      setProjects(p);
    };
    fetchProjects();
  }, []);
  return (
    <div className="flex flex-col justify-center items-center mt-40 md:mt-0 w-full min-h-screen">
      <h2 className="mb-6 md:mb-10 lg:mb-20 w-full font-black text-5xl md:text-7xl">
        Some of my best projects
      </h2>
      <aside className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project) => (
          <ProjectCard
            key={project.name.split(" ").join("-").toLowerCase()}
            project={project}
          />
        ))}
      </aside>
    </div>
  );
};

export default Projects;
