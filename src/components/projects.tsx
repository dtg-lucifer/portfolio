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
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="w-full font-black text-8xl text-right">
        Some great stuffs I built
      </h2>
      {projects.map((project) => (
        <ProjectCard
          key={project.name.split(" ").join("-").toLowerCase()}
          project={project}
        />
      ))}
    </div>
  );
};

export default Projects;
