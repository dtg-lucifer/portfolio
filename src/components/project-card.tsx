import { Project } from "@/hooks/useProjects";
import Image from "next/image";
import React from "react";
import Chip from "./ui/chip";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <article className="grid grid-rows-[auto_1fr_auto_auto_auto] bg-light/50 sm:p-6 md:p-4 pb-8 rounded-lg h-full">
      <div className="flex items-center gap-2 mb-2 sm:mb-4">
        <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl">
          {project.name}
        </h3>
        {project.wip && <Chip>Wip</Chip>}
      </div>
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
          className="hover:bg-[#822bf3] px-2 py-1 text-[#822bf3] hover:text-[#dddad1] text-sm sm:text-base"
        >
          View Code
        </a>
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#822bf3] px-2 py-1 text-[#822bf3] hover:text-[#dddad1] text-sm sm:text-base"
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
