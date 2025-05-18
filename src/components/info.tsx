"use client";

import React from "react";

const Info = () => {
  return (
    <header className="p-20">
      <nav className="flex justify-between items-center">
        <ul className="flex flex-col gap-4">
          <a
            href="#about"
            className="hover:bg-[#00341d] px-4 py-2 hover:text-[#dddad1]"
          >
            About
          </a>
          <a
            href="#projects"
            className="hover:bg-[#00341d] px-4 py-2 hover:text-[#dddad1]"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:bg-[#00341d] px-4 py-2 hover:text-[#dddad1]"
          >
            Contact
          </a>
        </ul>
      </nav>
    </header>
  );
};

export default Info;
