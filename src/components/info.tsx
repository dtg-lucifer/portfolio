"use client";

import React from "react";
import { motion } from "framer-motion";

const Info = () => {
  return (
    <motion.header
      className="hidden md:block p-6 md:p-20"
      initial={{ x: 100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, type: "spring", bounce: 0.4 }}
    >
      <nav className="flex justify-between items-center">
        <ul className="flex flex-col gap-4">
          <a
            href="#about"
            className="hover:bg-[#00341d] px-4 py-2 hover:text-[#dddad1] text-xl"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:bg-[#00341d] px-4 py-2 hover:text-[#dddad1] text-xl"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:bg-[#00341d] px-4 py-2 hover:text-[#dddad1] text-xl"
          >
            Contact
          </a>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Info;
