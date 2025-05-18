import { Project } from "@/hooks/useProjects";
import React from "react";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article>
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-4xl">{project.name}</h3>
        <p className="text-lg">{project.description}</p>
        <div className="flex gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#00341d] px-2 py-1 rounded text-[#dddad1]"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Code
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Demo
          </a>
        </div>
      </div>
      <img src={project.image} alt={project.name} className="w-full h-auto" />
    </article>
  );
};

export default ProjectCard;
