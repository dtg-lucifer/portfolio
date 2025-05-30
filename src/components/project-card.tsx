import { Project } from "@/hooks/useProjects";
import Image from "next/image";
import React from "react";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="grid grid-rows-[auto_1fr_auto_auto_auto] bg-light/50 sm:p-6 md:p-4 pb-8 rounded-lg h-full">
      <h3 className="mb-2 sm:mb-4 font-bold text-2xl sm:text-3xl md:text-4xl">
        {project.name}
      </h3>
      <p className="self-start mb-3 sm:mb-4 text-base sm:text-lg">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="bg-[#00341d] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[#dddad1] text-sm sm:text-base"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-4 mb-3 sm:mb-4">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm sm:text-base hover:underline"
        >
          View Code
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 text-sm sm:text-base hover:underline"
        >
          View Demo
        </a>
      </div>
      <div className="relative mb-8 w-full h-48 sm:h-56 md:h-64">
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="rounded object-cover"
          style={{ objectPosition: "center" }}
        />
      </div>
      <hr className="md:hidden bg-dark w-full h-[2px]" />
    </article>
  );
};

export default ProjectCard;
