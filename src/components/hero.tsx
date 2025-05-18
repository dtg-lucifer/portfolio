"use client";

import React from "react";

const Hero = ({}: { height: number }) => {
  return (
    <div
      className={`grid flex-1 place-items-center min-h-screen`}
    >
      <div className="flex flex-col justify-end items-start p-20 w-full h-full">
        <h1 className="font-black text-[128px]">
          Piush Bose
        </h1>
        <h3 className="text-4xl">Full Stack Developer</h3>
        <h3 className="text-4xl">DevOps Engineer</h3>
      </div>
    </div>
  );
};

export default Hero;
