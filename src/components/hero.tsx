"use client";

import React from "react";

const Hero = ({}: { height: number }) => {
  return (
    <div
      className={`grid flex-1 place-items-center min-h-screen`}
    >
      <div className="flex flex-col justify-end items-start p-4 sm:p-20 w-full lg:h-[100dvh]">
        <h1 className="flex gap-2 font-black">
          <span className="block sm:text-[128px] text-6xl">
            Piush Bose
          </span>
          <span className="bg-dark rounded-[5px] sm:text-[128px] text-6xl animate-caret-blink fg-dark">
            s
          </span>
        </h1>
        <h3 className="text-lg sm:text-4xl">Full Stack Developer</h3>
        <h3 className="text-lg sm:text-4xl">DevOps Engineer</h3>
      </div>
    </div>
  );
};

export default Hero;
