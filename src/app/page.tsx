"use client";

import About from "@/components/about";
import Hero from "@/components/hero";
import Info from "@/components/info";
import Projects from "@/components/projects";
import LocomotiveScroll from "locomotive-scroll";
import Image from "next/image";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

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

  return (
    <main className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      {loading
        ? (
          <div className="z-50 fixed inset-0 flex justify-center items-center">
            <Image
              src="/loading.svg"
              alt="Loading..."
              width={100}
              height={100}
              priority
            />
          </div>
        )
        : (
          <React.Fragment>
            <div className="flex flex-col w-full min-h-screen">
              <section className="relative flex md:flex-row flex-col justify-between gap-4 md:gap-6 w-full hero-info-container">
                <Hero height={screenHeight} />
                <Info />
              </section>
              <section id="about" className="p-4 lg:p-20 about__section">
                <About />
              </section>
              <section id="projects" className="p-4 lg:p-20 projects__section">
                <Projects />
              </section>
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
