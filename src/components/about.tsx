import React from "react";

import { motion } from "framer-motion";

import { FaReact } from "react-icons/fa";
import { FaAws, FaGolang, FaJava, FaPython, FaRust } from "react-icons/fa6";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiActix,
  SiAnsible,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiGin,
  SiGitlab,
  SiGooglecloud,
  SiGrafana,
  SiHono,
  SiIntellijidea,
  SiKubernetes,
  SiNestjs,
  SiPostman,
  SiPrometheus,
  SiTailwindcss,
  SiTerraform,
  SiTypescript,
  SiVite,
} from "react-icons/si";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <motion.h2
        className="w-full font-black text-6xl sm:text-8xl"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Who am I?
      </motion.h2>
      <motion.h3
        className="w-full font-secondary font-bold text-lg md:text-2xl"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Cloud & DevOps Facilitator ~ Google DGoC TIU
      </motion.h3>
      <motion.h3
        className="w-full font-secondary font-bold text-lg md:text-2xl"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 0.4 }}
        viewport={{ once: true }}
      >
        Ex. Full Stack Developer ~ The Entrepreneurship Network
      </motion.h3>
      <motion.p
        className="mt-4 w-full text-base sm:text-2xl"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 0.6 }}
        viewport={{ once: true }}
      >
        I am a software engineer with a passion for building applications that
        make a difference. I have experience in various technologies and love to
        learn new things.
      </motion.p>

      <motion.hr
        className="bg-dark my-4 mt-20 sm:mt-[10rem] w-full h-[1px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.8 }}
        viewport={{ once: true }}
      />

      <motion.h2
        className="w-full font-black text-2xl sm:text-4xl"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 1.0 }}
        viewport={{ once: true }}
      >
        Let&apos;s just be honest, I am a nerd, and I love to learn new things.
      </motion.h2>

      <motion.hr
        className="bg-dark my-4 mb-20 sm:mb-[10rem] w-full h-[1px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.1 }}
        viewport={{ once: true }}
      />

      <motion.h2
        className="w-full font-black text-4xl"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 1.2 }}
        viewport={{ once: true }}
      >
        Frameworks I love
      </motion.h2>
      <motion.p
        className="flex flex-wrap gap-4 mt-4 mb-8 w-full text-base sm:text-2xl"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 1.3 }}
        viewport={{ once: true }}
      >
        <FaReact className="text-[25px] md:text-[40px]" />
        <RiNextjsFill className="text-[25px] md:text-[40px]" />
        <SiTailwindcss className="text-[25px] md:text-[40px]" />
        <SiExpress className="text-[25px] md:text-[40px]" />
        <SiHono className="text-[25px] md:text-[40px]" />
        <SiVite className="text-[25px] md:text-[40px]" />
        <SiNestjs className="text-[25px] md:text-[40px]" />
        <SiGin className="text-[25px] md:text-[40px]" />
        <SiActix className="text-[25px] md:text-[40px]" />
      </motion.p>

      <motion.hr
        className="md:hidden bg-dark my-4 mt-20 sm:mt-[10rem] w-full h-[1px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.4 }}
        viewport={{ once: true }}
      />

      <motion.h2
        className="w-full font-black text-4xl"
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 1.5 }}
        viewport={{ once: true }}
      >
        Languages I know
      </motion.h2>
      <motion.p
        className="flex flex-wrap gap-4 mt-4 mb-8 w-full text-base sm:text-2xl y-4"
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 1.6 }}
        viewport={{ once: true }}
      >
        <SiTypescript className="text-[25px] md:text-[40px]" />
        <FaGolang className="text-[25px] md:text-[40px]" />
        <FaRust className="text-[25px] md:text-[40px]" />
        <FaJava className="text-[25px] md:text-[40px]" />
        <FaPython className="text-[25px] md:text-[40px]" />
        <SiCplusplus className="text-[25px] md:text-[40px]" />
      </motion.p>

      <motion.hr
        className="md:hidden bg-dark my-4 mt-20 sm:mt-[10rem] w-full h-[1px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 1.7 }}
        viewport={{ once: true }}
      />

      <motion.h2
        className="w-full font-black text-4xl"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 1.8 }}
        viewport={{ once: true }}
      >
        Tools I use
      </motion.h2>
      <motion.p
        className="flex flex-wrap gap-4 mt-4 mb-8 w-full text-base sm:text-2xl"
        initial={{ x: -300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 1.9 }}
        viewport={{ once: true }}
      >
        <BiLogoVisualStudio className="text-[25px] md:text-[40px]" />
        <SiIntellijidea className="text-[25px] md:text-[40px]" />
        <SiPostman className="text-[25px] md:text-[40px]" />
        <SiDocker className="text-[25px] md:text-[40px]" />
      </motion.p>

      <motion.hr
        className="md:hidden bg-dark my-4 mt-20 sm:mt-[10rem] w-full h-[1px]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 2.0 }}
        viewport={{ once: true }}
      />

      <motion.h2
        className="w-full font-black text-4xl"
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 2.1 }}
        viewport={{ once: true }}
      >
        Cloud & DevOps stuffs that I use
      </motion.h2>
      <motion.p
        className="flex flex-wrap gap-4 mt-4 mb-8 w-full text-base sm:text-2xl"
        initial={{ x: 300, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.4, delay: 2.2 }}
        viewport={{ once: true }}
      >
        <SiGooglecloud className="text-[25px] md:text-[40px]" />
        <FaAws className="text-[25px] md:text-[40px]" />
        <SiKubernetes className="text-[25px] md:text-[40px]" />
        <SiAnsible className="text-[25px] md:text-[40px]" />
        <SiTerraform className="text-[25px] md:text-[40px]" />
        <SiGitlab className="text-[25px] md:text-[40px]" />
        <SiGrafana className="text-[25px] md:text-[40px]" />
        <SiPrometheus className="text-[25px] md:text-[40px]" />
      </motion.p>
    </div>
  );
};

export default About;
