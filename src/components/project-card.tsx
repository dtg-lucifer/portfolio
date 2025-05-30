import { Project } from "@/hooks/useProjects";
import Image from "next/image";
import React from "react";
import Chip from "./ui/chip";
import { delay, motion } from "framer-motion";

const ProjectCard = (
  { project, index }: { project: Project; index: number },
) => {
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      delay: 0.2 + index * 0.1, // Staggering effect based on index
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        type: "spring",
        bounce: 0.4,
        delay: 0.2 * index, // Add index-based delay for additional staggering
      },
    },
  };

  return (
    <motion.article
      className="grid grid-rows-[auto_1fr_auto_auto_auto] bg-light/50 sm:p-6 md:p-4 pb-8 rounded-lg h-full"
      variants={item}
    >
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
          <motion.span
            key={tag}
            className="bg-[#00341d] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[#dddad1] text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            {tag}
          </motion.span>
        ))}
      </div>
      <div className="flex gap-4 mb-3 sm:mb-4">
        <motion.a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#822bf3] px-2 py-1 text-[#822bf3] hover:text-[#dddad1] text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          View Code
        </motion.a>
        <motion.a
          href={project.demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:bg-[#822bf3] px-2 py-1 text-[#822bf3] hover:text-[#dddad1] text-sm sm:text-base"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          View Demo
        </motion.a>
      </div>
      <motion.div
        className="relative mb-8 w-full h-48 sm:h-56 md:h-64"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={project.image}
          alt={project.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          className="rounded object-cover"
          style={{ objectPosition: "center" }}
        />
      </motion.div>
      <hr className="md:hidden bg-dark w-full h-[2px]" />
    </motion.article>
  );
};

export default ProjectCard;
