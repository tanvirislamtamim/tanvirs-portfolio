"use client";

import React from "react";
import { User, GraduationCap, Calendar } from "lucide-react";

export default function About() {
  const educationHistory = [
    {
      degree: "Diploma in Computer Science & Technology",
      institution: "Jhenaidah Polytechnic Institute",
      duration: "2024 - 2027 (Ongoing)",
      description: "Currently pursuing a Diploma in Computer Science & Technology. Focuses on data structures, algorithms, database management systems, and modern web development paradigms.",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Kashiani G.C Pilot High School",
      duration: "2023",
      description: "Graduated from the Vocational group, establishing early fundamentals in technical learning and engineering concepts.",
    },
  ];

  const personalDetails = [
    { label: "Name", value: "Tanvir Islam Tamim" },
    { label: "Profile", value: "MERN Stack Developer" },
    { label: "Email", value: "ti414815@gmail.com" },
    { label: "Location", value: "Faridpur, Dhaka, Bangladesh" },
    { label: "Availability", value: "Open for remote jobs" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            <User className="w-4 h-4" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            My Biography &amp; Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
        </div>

        {/* Section Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Side: About bio & quick details */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-semibold text-white">
              Who am I?
            </h3>
            <p className="text-zinc-400 leading-relaxed">
              I am a passionate and dedicated MERN Stack Developer based in Dhaka, Bangladesh. With a solid foundation in computer science and modern web technologies, I love creating clean, fast, and secure web applications.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              My expertise lies in crafting scalable backends using Node.js and Express.js, integrating MongoDB databases, and designing intuitive, interactive frontends with React and Next.js. I constantly strive to write clean, maintainable code and follow industry best practices.
            </p>

            {/* Details Grid */}
            <div className="glass rounded-2xl p-6 border-white/5 space-y-4">
              <h4 className="text-sm uppercase tracking-wider text-zinc-500 font-bold mb-2">Personal Information</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalDetails.map((detail) => (
                  <div key={detail.label} className="flex flex-col">
                    <span className="text-xs text-zinc-500 font-semibold">{detail.label}</span>
                    <span className="text-sm text-zinc-200 mt-0.5 font-medium">{detail.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side: Education History */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-secondary" />
              Education Journey
            </h3>

            {/* Timeline wrapper */}
            <div className="relative pl-6 border-l border-zinc-800 space-y-8">
              {educationHistory.map((edu, index) => (
                <div key={index} className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-secondary group-hover:border-primary transition-colors duration-300 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary group-hover:bg-primary transition-colors duration-300" />
                  </div>

                  {/* Card Content */}
                  <div className="glass rounded-2xl p-6 border-white/5 hover:border-secondary/20 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <h4 className="text-lg font-bold text-white group-hover:text-secondary transition-colors">
                        {edu.degree}
                      </h4>
                      <div className="flex items-center gap-1.5 text-xs text-zinc-400 font-medium bg-zinc-900/80 px-2.5 py-1 rounded-full border border-zinc-800">
                        <Calendar className="w-3.5 h-3.5 text-secondary" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    
                    <span className="text-sm font-semibold text-zinc-400 block mb-2">
                      {edu.institution}
                    </span>
                    
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
