"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  FolderGit2,
  ExternalLink,
  Code,
  ChevronLeft,
  ChevronRight,
  Layers,
  X,
  CheckCircle2,
  Info,
  Calendar,
  Award,
} from "lucide-react";

// Brand GitHub Icon
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

export default function Projects() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projectList = [
    {
      title: "Aro Ekdin",
      subtitle: "Volleyball Tournament Management Website",
      description: "A comprehensive volleyball tournament management platform featuring real-time chat, match scheduling, dynamic playoff brackets, and automated team standings.",
      tags: ["Next.js 15", "React 19", "MongoDB", "Express.js", "Node.js", "Socket.io", "Tailwind CSS"],
      extraTagsCount: 4,
      images: ["/project_1.png", "/project_2.png", "/project_3.png", "/project_4.png"],
      githubLink: "https://github.com/tanvirislamtamim/aro-ekdin",
      liveLink: "https://aro-ekdin.surge.sh/",
    },
  ];

  const handlePrev = (total: number) => {
    setCurrentSlide((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = (total: number) => {
    setCurrentSlide((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-zinc-950/40">
      {/* Background Glowing Ambient Blobs */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
            <FolderGit2 className="w-4 h-4" />
            <span>My Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-4 rounded-full" />
        </div>

        {/* Projects Center List */}
        <div className="flex flex-wrap justify-center gap-8">
          {projectList.map((project, index) => (
            <div
              key={index}
              className="w-full max-w-2xl bg-[#0b0e10]/80 border border-zinc-900 rounded-3xl p-6 flex flex-col gap-6 shadow-2xl transition-all duration-300 hover:border-zinc-800/80"
            >
              {/* Image Carousel / Slideshow Container */}
              <div className="relative w-full aspect-[16/10] bg-[#121619] rounded-2xl overflow-hidden border border-zinc-900 group/slider flex items-center justify-center">
                {/* Active Image */}
                <div className="relative w-full h-full">
                  <Image
                    src={project.images[currentSlide]}
                    alt={`${project.title} Screenshot ${currentSlide + 1}`}
                    fill
                    className="object-cover transition-all duration-500"
                    sizes="(max-w-768px) 100vw, 672px"
                    priority
                  />
                </div>

                {/* Left navigation arrow */}
                <button
                  onClick={() => handlePrev(project.images.length)}
                  className="absolute left-4 w-10 h-10 rounded-full bg-zinc-950/70 backdrop-blur hover:bg-zinc-900/90 text-white flex items-center justify-center border border-zinc-800/60 shadow-lg cursor-pointer hover:scale-105 transition-all opacity-0 group-hover/slider:opacity-100 duration-300"
                  aria-label="Previous screenshot"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {/* Right navigation arrow */}
                <button
                  onClick={() => handleNext(project.images.length)}
                  className="absolute right-4 w-10 h-10 rounded-full bg-zinc-950/70 backdrop-blur hover:bg-zinc-900/90 text-white flex items-center justify-center border border-zinc-800/60 shadow-lg cursor-pointer hover:scale-105 transition-all opacity-0 group-hover/slider:opacity-100 duration-300"
                  aria-label="Next screenshot"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide Indicators / Dots */}
              <div className="flex justify-center gap-2 -mt-2">
                {project.images.map((_, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => setCurrentSlide(imgIndex)}
                    className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                      currentSlide === imgIndex ? "w-8 bg-[#03bca0]" : "w-2 bg-zinc-800 hover:bg-zinc-700"
                    }`}
                    aria-label={`Go to slide ${imgIndex + 1}`}
                  />
                ))}
              </div>

              {/* Project Text & Tech stack Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                    {project.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mt-2.5">
                    {project.subtitle} — {project.description}
                  </p>
                </div>

                {/* Badges Grid */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="border border-zinc-900 bg-zinc-950/60 text-zinc-300 rounded-lg px-3.5 py-1.5 text-xs font-semibold tracking-wide"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.extraTagsCount > 0 && (
                    <span className="border border-zinc-900 bg-zinc-950/60 text-zinc-500 rounded-lg px-2.5 py-1.5 text-xs font-semibold">
                      +{project.extraTagsCount}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons Section */}
              <div className="flex flex-col gap-3 pt-2">
                {/* Primary Button: Live Demo */}
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-[#eef1f6] hover:bg-[#e2e6ed] text-[#0b0e10] font-bold rounded-xl flex items-center justify-center gap-2 shadow-lg transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                >
                  <ExternalLink className="w-4.5 h-4.5" />
                  <span>See live demo</span>
                </a>

                {/* Secondary Button Row */}
                <div className="grid grid-cols-2 gap-4">
                  {/* GitHub link */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 bg-[#121619]/40 hover:bg-[#121619]/80 border border-zinc-900 hover:border-zinc-800 text-white font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <GithubIcon className="w-4.5 h-4.5 text-zinc-400 group-hover:text-white" />
                    <span>GitHub</span>
                  </a>

                  {/* Case study link (Opens Modal) */}
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="py-3 bg-[#121619]/40 hover:bg-[#121619]/80 border border-zinc-900 hover:border-zinc-800 text-[#03bca0] hover:text-[#00b289] font-bold rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 cursor-pointer"
                  >
                    <Layers className="w-4.5 h-4.5 text-[#03bca0]" />
                    <span>Case study</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-zinc-950/80 backdrop-blur-md overflow-hidden">
          {/* Modal Container */}
          <div className="relative w-full max-w-4xl h-full max-h-[85vh] bg-[#0c1012] border border-zinc-800/80 rounded-3xl overflow-y-auto flex flex-col p-6 sm:p-8 md:p-10 shadow-2xl text-left">
            {/* Close button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-xl bg-zinc-900/50 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white cursor-pointer transition-all duration-300 hover:scale-105"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="border-b border-zinc-900 pb-6 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#03bca0]">
                Case Study
              </span>
              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mt-1.5">
                Aro Ekdin (আরো একদিন)
              </h3>
              <p className="text-zinc-500 text-sm mt-1">
                Full-Stack Volleyball Tournament &amp; League Management System
              </p>
            </div>

            {/* Modal Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Detailed Case Study */}
              <div className="lg:col-span-8 space-y-6">
                <div>
                  <h4 className="text-lg font-bold text-white mb-2.5 flex items-center gap-2">
                    <Info className="w-5 h-5 text-[#03bca0]" /> Project Overview
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    <strong>Aro Ekdin</strong> is a custom MERN-stack web portal built to handle tournament management for professional and local volleyball leagues. By integrating team registrations, dynamic bracket generation, and video highlights playback, the platform serves as a central hub for tournament administrators, team captains, and audiences.
                  </p>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#03bca0]" /> Core System Features
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex gap-2.5 items-start text-zinc-400 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#03bca0] shrink-0 mt-0.5" />
                      <span>
                        <strong>Dynamic Tournament Brackets:</strong> An interactive frontend playoff tree illustrating brackets from Quarterfinals, Semifinals, to the Finals. Winning teams are tracked and connectors adjust dynamically.
                      </span>
                    </li>
                    <li className="flex gap-2.5 items-start text-zinc-400 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#03bca0] shrink-0 mt-0.5" />
                      <span>
                        <strong>Rules &amp; Scoring Panel:</strong> Built-in dashboard modules (/dashboard/rules) for game supervisors to set point structures, check fault regulations, and review matches.
                      </span>
                    </li>
                    <li className="flex gap-2.5 items-start text-zinc-400 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#03bca0] shrink-0 mt-0.5" />
                      <span>
                        <strong>Integrated Cloudinary Video Player:</strong> Full-page highlight players and video libraries utilizing Cloudinary’s streaming SDK to deliver smooth playback of tournament actions.
                      </span>
                    </li>
                    <li className="flex gap-2.5 items-start text-zinc-400 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-[#03bca0] shrink-0 mt-0.5" />
                      <span>
                        <strong>Unified Login &amp; Team Register:</strong> Fully secure multi-role auth flow allowing captains to register squads and admins to manage fixtures securely.
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-white mb-2.5 flex items-center gap-2">
                    <Code className="w-5 h-5 text-[#03bca0]" /> Architectural Architecture
                  </h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    The platform splits concerns by deploying a robust Express.js API acting as the coordinator layer, backed by MongoDB. React on the frontend ensures bracket nodes update in real-time. Cloudinary acts as the file service for the tournament video libraries and image gallery assets.
                  </p>
                </div>
              </div>

              {/* Right Column: Quick Details, Tech Stack & Top Performers */}
              <div className="lg:col-span-4 space-y-6">
                {/* Tech Stack Box */}
                <div className="glass p-5 rounded-2xl border-white/5 space-y-3.5">
                  <h5 className="text-xs uppercase tracking-wider text-zinc-500 font-extrabold">
                    Tech Stack Specs
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {["Next.js", "React 19", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "Socket.io", "Cloudinary Player SDK"].map((stack, i) => (
                      <span
                        key={i}
                        className="text-[10px] font-bold text-zinc-300 bg-zinc-900 border border-zinc-800 px-2 py-1.5 rounded-lg"
                      >
                        {stack}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Team Spotlight Spot */}
                <div className="glass p-5 rounded-2xl border-white/5 space-y-3.5">
                  <h5 className="text-xs uppercase tracking-wider text-zinc-500 font-extrabold flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#03bca0]" /> Spotlight Performers
                  </h5>
                  <div className="space-y-3 text-xs">
                    <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                      <span className="text-zinc-300 font-semibold">Mizba Al Naim</span>
                      <span className="text-[#03bca0] font-bold">Captain</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b border-zinc-900">
                      <span className="text-zinc-300 font-semibold">S.Sajjad</span>
                      <span className="text-[#03bca0] font-bold">Game Changer</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-zinc-300 font-semibold">MD Shehad</span>
                      <span className="text-[#03bca0] font-bold">Star Performer</span>
                    </div>
                  </div>
                </div>

                {/* External links in Modal */}
                <div className="flex flex-col gap-2.5">
                  <a
                    href="https://aro-ekdin.surge.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3 bg-[#03bca0] hover:bg-[#00b289] text-zinc-950 font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all shadow-md"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Live Website</span>
                  </a>
                  <a
                    href="https://github.com/tanvirislamtamim/aro-ekdin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-3 bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 text-white font-bold rounded-xl text-xs flex items-center justify-center gap-1.5 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
