import React from "react";

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
      <h2 className="w-full font-black text-6xl sm:text-8xl">
        Who am I?
      </h2>
      <h3 className="w-full font-secondary font-bold text-2xl">
        Cloud & DevOps Facilitator ~ Google DGoC TIU
      </h3>
      <h3 className="w-full font-secondary font-bold text-2xl">
        Ex. Full Stack Developer ~ The Entrepreneurship Network
      </h3>
      <p className="mt-4 w-full text-base sm:text-2xl">
        I am a software engineer with a passion for building applications that
        make a difference. I have experience in various technologies and love to
        learn new things.
      </p>

      <hr className="bg-dark my-4 mt-20 sm:mt-[10rem] w-full h-[1px]" />

      <h2 className="w-full font-black text-2xl sm:text-4xl">
        Let&apos;s just be honest, I am a nerd, and I love to learn new things.
      </h2>

      <hr className="bg-dark my-4 mb-20 sm:mb-[10rem] w-full h-[1px]" />

      <h2 className="w-full font-black text-4xl">
        Frameworks I love
      </h2>
      <p className="flex flex-wrap gap-4 mt-4 mb-8 w-full text-base sm:text-2xl">
        <FaReact size={40} />
        <RiNextjsFill size={40} />
        <SiTailwindcss size={40} />
        <SiExpress size={40} />
        <SiHono size={40} />
        <SiVite size={40} />
        <SiNestjs size={40} />
        <SiGin size={40} />
        <SiActix size={40} />
      </p>
      <hr className="md:hidden bg-dark my-4 mt-20 sm:mt-[10rem] w-full h-[1px]" />
      <h2 className="w-full font-black text-4xl">
        Languages I know
      </h2>
      <p className="flex flex-wrap gap-4 mt-4 mb-8 w-full text-base sm:text-2xl y-4">
        <SiTypescript size={35} />
        <FaGolang size={40} />
        <FaRust size={40} />
        <FaJava size={40} />
        <FaPython size={40} />
        <SiCplusplus size={35} />
      </p>
      <hr className="md:hidden bg-dark my-4 mt-20 sm:mt-[10rem] w-full h-[1px]" />
      <h2 className="w-full font-black text-4xl">
        Tools I use
      </h2>
      <p className="flex flex-wrap gap-4 mt-4 mb-8 w-full text-base sm:text-2xl">
        <BiLogoVisualStudio size={40} />
        <SiIntellijidea size={35} />
        <SiPostman size={35} />
        <SiDocker size={35} />
      </p>
      <hr className="md:hidden bg-dark my-4 mt-20 sm:mt-[10rem] w-full h-[1px]" />
      <h2 className="w-full font-black text-4xl">
        Cloud & DevOps stuffs that I use
      </h2>
      <p className="flex flex-wrap gap-4 mt-4 mb-8 w-full text-base sm:text-2xl">
        <SiGooglecloud size={35} />
        <FaAws size={40} />
        <SiKubernetes size={35} />
        <SiAnsible size={35} />
        <SiTerraform size={35} />
        <SiGitlab size={35} />
        <SiGrafana size={35} />
        <SiPrometheus size={35} />
      </p>
      <hr className="md:hidden bg-dark my-4 mt-20 sm:mt-[10rem] w-full h-[1px]" />
    </div>
  );
};

export default About;
