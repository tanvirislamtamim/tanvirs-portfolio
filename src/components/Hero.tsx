"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Mail, ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const [showIntro, setShowIntro] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }

    let timerId: NodeJS.Timeout;
    const deferTimer = setTimeout(() => {
      setMounted(true);
      setShowIntro(true);
      timerId = setTimeout(() => setShowIntro(false), 3200);
    }, 0);

    return () => {
      clearTimeout(deferTimer);
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  if (!mounted) {
    return null;
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      <AnimatePresence>
        {showIntro && (
          <motion.div
            exit={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center px-6"
          >
            <motion.div
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 bg-zinc-950 z-[-1]"
            />
            <div className="text-center space-y-4">
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white whitespace-nowrap">
                <motion.span
                  layoutId="hero-name"
                  transition={{ type: "spring", stiffness: 60, damping: 15 }}
                  className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent inline-block whitespace-nowrap"
                >
                  <Typewriter
                    words={["Tanvir Islam Tamim"]}
                    typeSpeed={55}
                    cursor
                    cursorStyle="|"
                  />
                </motion.span>
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-zinc-400 text-lg sm:text-xl md:text-2xl font-light tracking-wide"
              >
                <Typewriter
                  words={["MERN Stack Developer"]}
                  typeSpeed={45}
                  delaySpeed={1200}
                />
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background Glowing Blobs */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-primary/20 blur-3xl animate-float pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-secondary/15 blur-3xl animate-float-delayed pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* Intro Text / Details */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass border-white/5 w-fit">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            <span className="text-xs font-semibold text-white tracking-wider uppercase">
              Available for New Opportunities
            </span>
          </div>

          {(!showIntro || !mounted) && (
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I&apos;m{" "}
              <motion.span
                layoutId="hero-name"
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className="bg-gradient-to-r from-primary via-purple-400 to-secondary bg-clip-text text-transparent inline-block whitespace-nowrap"
              >
                Tanvir Islam Tamim
              </motion.span>
              <br />
              <span className="text-2xl sm:text-3xl md:text-4xl text-zinc-300 font-semibold mt-2 block">
                MERN Stack Developer
              </span>
            </h1>
          )}

          <motion.div
            initial={showIntro ? { opacity: 0, y: 15 } : { opacity: 1, y: 0 }}
            animate={!showIntro ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="space-y-6 flex flex-col"
          >
            <p className="text-zinc-400 text-base sm:text-lg max-w-xl leading-relaxed">
              I build modern, high-performance web applications using MongoDB, Express.js, React, and Node.js. Focused on crafting clean code, premium user interfaces, and robust backend architectures.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projects"
                onClick={(e) => handleScrollTo(e, "#projects")}
                className="group flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-primary to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a
                href="/Tanvir_Islam_Tamim_Resume.pdf"
                download="Tanvir_Islam_Tamim_Resume.pdf"
                className="px-6 py-3.5 glass hover:bg-zinc-800/50 text-white font-semibold rounded-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-5 pt-6 border-t border-zinc-900 w-fit">
              <span className="text-xs uppercase tracking-wider text-zinc-500 font-bold">Follow me:</span>
              <div className="flex gap-4">
                <a
                  href="https://github.com/tanvirislamtamim"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.facebook.com/Tanvirislamtamim41"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300"
                  aria-label="Facebook Profile"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/tanvir_islam_tamim_41/?__pwa=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300"
                  aria-label="Instagram Profile"
                >
                  <InstagramIcon className="w-5 h-5" />
                </a>

                <a
                  href="mailto:ti414815@gmail.com"
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all duration-300"
                  aria-label="Email Me"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Profile Avatar Image */}
        <motion.div
          initial={showIntro ? { opacity: 0, scale: 0.95 } : { opacity: 1, scale: 1 }}
          animate={!showIntro ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 group">
            {/* Ambient glows behind the picture */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-40 group-hover:opacity-70 transition duration-1000 group-hover:duration-200 animate-tilt"></div>

            {/* Profile Avatar Container */}
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-900 bg-zinc-950 flex items-center justify-center shadow-2xl">
              <Image
                src="/TanvirProfile.jpeg"
                alt="Tanvir Islam Tamim Portfolio Avatar"
                fill
                priority
                className="object-cover scale-105 group-hover:scale-110 transition-transform duration-500"
                sizes="(max-w-768px) 100vw, 384px"
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Scroll Down</span>
        <a
          href="#about"
          onClick={(e) => handleScrollTo(e, "#about")}
          className="w-8 h-8 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-white hover:-translate-y-0.5 transition-all duration-300"
          aria-label="Scroll to About Section"
        >
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
