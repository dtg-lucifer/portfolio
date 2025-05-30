"use client";

import React from "react";
import { motion } from "framer-motion";

const Hero = ({}: { height: number }) => {
  return (
    <div
      className={`grid flex-1 place-items-center min-h-screen`}
    >
      <motion.div
        className="flex flex-col justify-center md:justify-end items-start p-4 sm:p-20 w-full h-[100dvh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <h1 className="flex gap-2 font-black">
          <motion.span
            className="block sm:text-[128px] text-6xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
          >
            Piush Bose
          </motion.span>
          <span className="hidden md:inline bg-dark rounded-[5px] sm:text-[128px] text-6xl animate-caret-blink select-none fg-dark">
            s
          </span>
        </h1>
        <motion.h3
          className="text-lg sm:text-4xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            delay: 0.250,
            bounce: 0.4,
          }}
        >
          Full Stack Developer
        </motion.h3>
        <motion.h3
          className="text-lg sm:text-4xl"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            duration: 0.3,
            type: "spring",
            delay: 0.500,
            bounce: 0.4,
          }}
        >
          DevOps Engineer
        </motion.h3>
        <motion.div
          className="md:hidden flex justify-center items-center w-full"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.75 }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            width={20}
            style={{ pointerEvents: "none" }}
            className=""
          >
            <source src="/scroll.webm" type="video/webm" />
          </video>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
