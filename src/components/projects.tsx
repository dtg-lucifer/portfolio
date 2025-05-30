"use client";

import { Project, useProjects } from "@/hooks/useProjects";
import React, { useEffect, useState } from "react";
import ProjectCard from "./project-card";
import { delay, motion } from "framer-motion";

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const p = await useProjects();
      setProjects(p);
    };
    fetchProjects();
  }, []);

  const container = {
    hidden: { opacity: 0 },
    show: {
      delay: 0.1,
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Increased from 0.1 to 0.2
        delayChildren: 0.3,
      },
    },
  };

  return (
    <div className="flex flex-col justify-center items-center mt-40 md:mt-0 w-full min-h-screen">
      <motion.h2
        className="mb-6 md:mb-10 lg:mb-20 w-full font-black text-5xl md:text-7xl"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
        viewport={{ once: true }}
      >
        Some of my best projects
      </motion.h2>
      <motion.aside
        className="gap-4 sm:gap-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-4 w-full"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, index) => (
          <ProjectCard
            key={project.name.split(" ").join("-").toLowerCase()}
            project={project}
            index={index}
          />
        ))}
      </motion.aside>
      <motion.div
        className="p-8 w-full text-4xl md:text-6xl text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        viewport={{ once: true }}
      >
        And many more...
      </motion.div>
    </div>
  );
};

export default Projects;
