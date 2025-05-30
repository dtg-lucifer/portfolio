"use client";

import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Info from "@/components/info";
import Projects from "@/components/projects";
import LocomotiveScroll from "locomotive-scroll";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const [screenHeight, setScreenHeight] = useState<number>(0);
  const [screenWidth, setScreenWidth] = useState<number>(0);

  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollX, setScrollX] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(true);

  const scroll = useRef<LocomotiveScroll | null>(null);

  useLayoutEffect(() => {
    const handleResize = () => {
      setScreenHeight(window.innerHeight);
      setScreenWidth(window.innerWidth);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    (
      async () => {
        const locomotiveScroll = (await import("locomotive-scroll")).default;
        scroll.current = new locomotiveScroll();
      }
    )();

    const t = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  // Section animation variants
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <main className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      {loading
        ? (
          <motion.div
            className="z-50 fixed inset-0 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Image
              src="/loading.svg"
              alt="Loading..."
              width={100}
              height={100}
              priority
            />
          </motion.div>
        )
        : (
          <React.Fragment>
            <div className="flex flex-col w-full min-h-screen">
              <motion.section
                className="relative flex md:flex-row flex-col justify-between gap-4 md:gap-6 w-full hero-info-container"
                initial="hidden"
                animate="visible"
                variants={sectionVariants}
              >
                <Hero height={screenHeight} />
                <Info />
              </motion.section>

              <motion.section
                id="about"
                className="p-4 lg:p-20 about__section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <About />
              </motion.section>

              <motion.section
                id="projects"
                className="p-4 lg:p-20 projects__section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Projects />
              </motion.section>

              <motion.section
                id="contact"
                className="p-4 lg:p-20 projects__section"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Contact />
              </motion.section>
            </div>
            <div className="-z-10 fixed inset-0 w-full h-full pointer-events-none select-none">
              <Image
                alt="bg"
                src="/bg.svg"
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            </div>
          </React.Fragment>
        )}
    </main>
  );
}
