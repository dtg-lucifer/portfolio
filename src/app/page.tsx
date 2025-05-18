"use client";

import About from "@/components/about";
import Hero from "@/components/hero";
import Info from "@/components/info";
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
    const handleScroll = () => {
      setScrollX(window.scrollX);
      setScrollY(window.scrollY);

      console.log("Scroll Y:", scrollY, "Scroll X:", scrollX);
    };

    (
      async () => {
        const locomotiveScroll = (await import("locomotive-scroll")).default;
        scroll.current = new locomotiveScroll();
      }
    )();

    window.addEventListener("scroll", handleScroll);
    const t = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
            />
          </div>
        )
        : (
          <React.Fragment>
            <div className="flex flex-col w-full min-h-screen">
              <section
                className={`flex justify-between min-w-[${screenWidth}px] h-full relative gap-6`}
              >
                <Hero height={screenHeight} />
                <Info />
              </section>
              <section id="about" className="p-20 about__section">
                <About />
              </section>
            </div>
            <Image
              alt="bg"
              src="/bg.svg"
              width={screenWidth}
              height={screenHeight}
              className="-z-10 fixed inset-0 w-full h-full object-cover"
            />
          </React.Fragment>
        )}
    </main>
  );
}
