"use client";

import React from "react";
import { Cpu } from "lucide-react";
import {
  SiHtml5,
  SiCss,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
} from "react-icons/si";

export default function Skills() {
  const skillsList = [
    {
      name: "HTML5",
      icon: <SiHtml5 className="w-12 h-12 text-[#E34F26] transition-transform duration-300 group-hover:scale-110" />,
      shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(227,79,38,0.35)] hover:border-[#E34F26]/40",
    },
    {
      name: "CSS3",
      icon: <SiCss className="w-12 h-12 text-[#1572B6] transition-transform duration-300 group-hover:scale-110" />,
      shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(21,114,182,0.35)] hover:border-[#1572B6]/40",
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="w-12 h-12 text-[#38BDF8] transition-transform duration-300 group-hover:scale-110" />,
      shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.35)] hover:border-[#38BDF8]/40",
    },
    {
      name: "JavaScript",
      icon: <SiJavascript className="w-12 h-12 text-[#F7DF1E] transition-transform duration-300 group-hover:scale-110" />,
      shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(247,223,30,0.25)] hover:border-[#F7DF1E]/40",
    },
    {
      name: "React",
      icon: <SiReact className="w-12 h-12 text-[#61DAFB] transition-transform duration-300 group-hover:scale-110 group-hover:animate-[spin_8s_linear_infinite]" />,
      shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(97,218,251,0.35)] hover:border-[#61DAFB]/40",
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="w-12 h-12 text-[#47A248] transition-transform duration-300 group-hover:scale-110" />,
      shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(71,162,72,0.35)] hover:border-[#47A248]/40",
    },
    {
      name: "Express.js",
      icon: <SiExpress className="w-12 h-12 text-white transition-transform duration-300 group-hover:scale-110" />,
      shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.15)] hover:border-zinc-500/40",
    },
    {
      name: "Node.js",
      icon: <SiNodedotjs className="w-12 h-12 text-[#339933] transition-transform duration-300 group-hover:scale-110" />,
      shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(51,153,51,0.35)] hover:border-[#339933]/40",
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="w-12 h-12 text-white transition-transform duration-300 group-hover:scale-110" />,
      shadowColor: "hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.2)] hover:border-white/40",
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-secondary mb-2">
            <Cpu className="w-4 h-4" />
            <span>My Stack</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Skills &amp; Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mt-4 rounded-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {skillsList.map((skill, index) => (
            <div
              key={index}
              className={`glass rounded-2xl p-6 flex flex-col items-center justify-center gap-4 border border-white/5 transition-all duration-300 hover:-translate-y-1.5 ${skill.shadowColor} group cursor-default`}
            >
              {/* Brand Logo Wrapper */}
              <div className="p-4 bg-zinc-900/40 rounded-2xl border border-zinc-850/60 shadow-inner group-hover:bg-zinc-900 group-hover:border-zinc-800 transition-all duration-300">
                {skill.icon}
              </div>

              {/* Brand Name */}
              <span className="text-sm font-bold tracking-wide text-zinc-400 group-hover:text-white transition-colors duration-300 text-center">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
