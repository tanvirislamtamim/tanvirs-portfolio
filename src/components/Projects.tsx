"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  X,
} from "lucide-react";

// Brand GitHub Icon
const GithubIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
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

interface Decision {
  challenge: string;
  solution: string;
}

interface ProjectData {
  number: string;
  kind: string;
  title: string;
  tagline: string;
  architectureLine: string;
  description: string;
  technologies: string[];
  metrics: string[];
  images: string[];
  live: string;
  code: string;
  problem: string;
  architecture: string;
  architectureFlow: string[];
  challengeSolutions: Decision[];
  devOps: string[];
}

export default function Projects() {
  const [currentSlides, setCurrentSlides] = useState<number[]>([0, 0]);
  const [openModalIndex, setOpenModalIndex] = useState<number | null>(null);

  const projects: ProjectData[] = [
    {
      number: "01",
      kind: "Tournament Platform",
      title: "Aro Ekdin — Volleyball Tournament Platform",
      tagline:
        "A full-stack volleyball tournament management platform built with Next.js, React, Node.js, Express.js, MongoDB and Socket.io. Features include real-time bracket generation, match scheduling, playoff brackets, team standings, video highlights and tournament management.",
      architectureLine: "Next.js 15 · React 19 · Express.js · MongoDB · Socket.io",
      description:
        "A full-stack sports platform engineered for competitive and local volleyball leagues: dynamic playoff trees, supervisor rule dashboards, automated point calculations, and streaming highlights playback.",
      technologies: [
        "Next.js 15",
        "React 19",
        "MongoDB",
        "Express.js",
        "Node.js",
        "Socket.io",
        "Tailwind CSS",
        "Cloudinary SDK",
      ],
      metrics: [
        "Live on aro-ekdin.vercel.app",
        "Dynamic SVG playoff brackets with automated winners propagation",
        "Cloudinary streaming SDK integration for tournament highlights playback",
        "Multi-role captain registration & referee scoring management dashboard",
      ],
      images: [
        "/project_1.png",
        "/project_2.png",
        "/project_3.png",
        "/project_4.png",
      ],
      live: "https://aro-ekdin.vercel.app/",
      code: "https://github.com/tanvirislamtamim/aro-ekdin-client-next",
      problem:
        "Organizing local and professional volleyball tournaments traditionally suffers from fragmented communication, delayed fixture schedules, manual paper scorecards, and a lack of real-time visibility for audiences and team captains.",
      architecture:
        "The system separates responsibilities between an Express.js coordinator API backed by MongoDB for fixture state management and a Next.js client for real-time tree bracket visualization. Socket.io delivers live score events, while Cloudinary handles tournament video asset streaming.",
      architectureFlow: [
        "Captains register teams & rosters through authenticated role-gated flow",
        "Admins define tournament stages, point formulas, and fixture matchups",
        "Interactive playoff engine calculates standings and propagates winning seeds",
        "Socket.io relays live game events & Cloudinary serves high-definition replays",
      ],
      challengeSolutions: [
        {
          challenge: "Dynamic Bracket Trees",
          solution:
            "Implemented an adaptive playoff tree structure that recalculates connector paths and propagates advancing teams seamlessly from quarterfinals to the final.",
        },
        {
          challenge: "Referees & Supervisors Control",
          solution:
            "Engineered a dedicated scoring panel enabling supervisors to set point structures, check fault regulations, and verify matches instantly.",
        },
        {
          challenge: "Video Highlights Delivery",
          solution:
            "Integrated Cloudinary's streaming player SDK with adaptive bitrates, ensuring smooth mobile-friendly highlight playback without burdening primary server compute.",
        },
      ],
      devOps: [
        "Vercel (Next.js Frontend)",
        "Railway / Node.js (API)",
        "MongoDB Atlas (Database)",
        "Cloudinary Media CDN",
      ],
    },
    {
      number: "02",
      kind: "Dealership & Distribution",
      title: "Tanvir Traders — Dealership Management Portal",
      tagline:
        "Official dealership management portal for Akij Bakers (Fantastic) and Meghna Beverage (Fresh) in Alfadanga, Faridpur — handling daily sales, stock inward, and inventory.",
      architectureLine: "Next.js 14 · React 18 · TypeScript · Tailwind CSS · PWA",
      description:
        "A centralized dealership operations system custom-built for an authorized distributor in Faridpur. Connects two independent brand portals, tracks inward inventory batches, and streamlines local wholesale retail distribution.",
      technologies: [
        "Next.js 14",
        "React 18",
        "TypeScript",
        "Tailwind CSS",
        "PWA Manifest",
        "Schema.org SEO",
        "Lucide Icons",
      ],
      metrics: [
        "Live on tanvir-traders.surge.sh",
        "2 dedicated dealership management gateways (Akij Bakers & Fresh)",
        "Real-time stock inward intake, inventory logs, and product pricing",
        "Bilingual Bangla-first UI with Plus Code (7P5J+Q9) location services",
      ],
      images: [
        "/Tanvir-Traders 1.png",
        "/Tanvir-Traders 2.png",
        "/Tanvir-Traders 3.png",
        "/Tanvir-Traders 4.png",
      ],
      live: "https://tanvir-traders.surge.sh/",
      code: "https://github.com/tanvirislamtamim/Tanvir-Traders-Main",
      problem:
        "Regional FMCG dealerships representing multiple corporations struggle with unorganized paper challans, manual inward reconciliations, and lost retail client orders across rural and municipal markets.",
      architecture:
        "Built with static-first Next.js 14 and Tailwind CSS for instant load speeds across field cellular connections. Modular routing cleanly segments Akij Bakers and Meghna Beverage operations, while Schema.org LocalBusiness structured data ensures premier local SEO indexing.",
      architectureFlow: [
        "Unified landing hub routes staff to Akij Bakers or Meghna Beverage portals",
        "Inward factory delivery challans are audited and logged with pricing tiers",
        "Wholesale van routes are scheduled for retail shop supply across Alfadanga",
        "Local retailers discover depot location, product catalogs, and contacts online",
      ],
      challengeSolutions: [
        {
          challenge: "Multi-Brand Separation",
          solution:
            "Created modular sub-portal structures that allow personnel to switch between Akij Bakers and Fresh drinks workflows without data overlap.",
        },
        {
          challenge: "Field Reliability & Speed",
          solution:
            "Configured Progressive Web App (PWA) caching and lightweight client bundles so delivery personnel can access depot details seamlessly even in low-connectivity areas.",
        },
        {
          challenge: "Local SEO & Geographic Identity",
          solution:
            "Embedded structured JSON-LD schemas and exact geographic Plus Code coordinates to make the dealership officially discoverable across search engines.",
        },
      ],
      devOps: [
        "Surge.sh (Global Edge CDN)",
        "Next.js 14 Static Export",
        "PWA Service Worker",
        "Custom DNS & HTTPS",
      ],
    },
  ];

  const handlePrev = (projectIndex: number, total: number) => {
    setCurrentSlides((prev) => {
      const updated = [...prev];
      updated[projectIndex] =
        updated[projectIndex] === 0 ? total - 1 : updated[projectIndex] - 1;
      return updated;
    });
  };

  const handleNext = (projectIndex: number, total: number) => {
    setCurrentSlides((prev) => {
      const updated = [...prev];
      updated[projectIndex] =
        updated[projectIndex] === total - 1 ? 0 : updated[projectIndex] + 1;
      return updated;
    });
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenModalIndex(null);
      }
    };
    if (openModalIndex !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openModalIndex]);

  return (
    <section id="projects" className="relative z-10 scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full min-w-0 px-4 sm:px-6 lg:px-8 xl:px-12 max-w-7xl">
        {/* Section Header */}
        <div className="mb-10 max-w-2xl sm:mb-12 lg:mb-16">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-teal-400 font-medium mb-3">
            Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.375rem] font-bold tracking-tight text-zinc-50 leading-[1.15]">
            Featured Projects
          </h2>
          <p className="mt-3 text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed text-pretty">
            Featured production systems — open a case study for problem, architecture, decisions, and how the pieces fit together.
          </p>
        </div>

        {/* Projects List */}
        <div id="projects-list">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;
            const currentSlide = currentSlides[index] ?? 0;
            const displayedTags = project.technologies.slice(0, 5);
            const remainingTagsCount = project.technologies.length - displayedTags.length;

            return (
              <article
                key={index}
                className="grid items-center gap-8 border-b border-zinc-700/50 py-12 last:border-b-0 sm:gap-10 sm:py-14 lg:grid-cols-12 lg:gap-x-12 lg:py-16 xl:gap-x-14"
              >
                {/* Visual / Carousel Column */}
                <div
                  className={`group/visual min-w-0 lg:col-span-7 ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <div className="overflow-hidden rounded-lg border border-zinc-700/40 bg-zinc-800 transition duration-500 ease-out motion-safe:group-hover/visual:-translate-y-0.5 shadow-xl">
                    <figure className="w-full">
                      {/* Main Aspect Ratio 16/10 Container */}
                      <div className="relative w-full overflow-hidden bg-zinc-800 aspect-[16/10]">
                        <Image
                          src={project.images[currentSlide]}
                          alt={`${project.title} — ${project.kind} built with ${project.architectureLine} — Screenshot ${currentSlide + 1}`}
                          fill
                          className="object-cover transition-opacity duration-300"
                          sizes="(max-width: 1024px) 100vw, 58vw"
                          priority={index === 0}
                        />

                        {/* Navigation Arrows */}
                        {project.images.length > 1 && (
                          <>
                            <button
                              type="button"
                              onClick={() => handlePrev(index, project.images.length)}
                              className="absolute left-3 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md bg-zinc-950/70 text-zinc-50 transition hover:bg-zinc-950 border border-zinc-800/80 cursor-pointer"
                              aria-label="Previous screenshot"
                            >
                              <ChevronLeft className="w-4.5 h-4.5" />
                            </button>
                            <button
                              type="button"
                              onClick={() => handleNext(index, project.images.length)}
                              className="absolute right-3 top-1/2 z-10 inline-flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-md bg-zinc-950/70 text-zinc-50 transition hover:bg-zinc-950 border border-zinc-800/80 cursor-pointer"
                              aria-label="Next screenshot"
                            >
                              <ChevronRight className="w-4.5 h-4.5" />
                            </button>
                          </>
                        )}
                      </div>

                      {/* Thumbnails Row */}
                      {project.images.length > 1 && (
                        <div
                          className="flex gap-2 overflow-x-auto px-3 py-3 sm:px-4 bg-zinc-900/60 border-t border-zinc-700/30"
                          aria-label={`${project.title} screenshot thumbnails`}
                        >
                          {project.images.map((img, imgIdx) => (
                            <button
                              key={imgIdx}
                              type="button"
                              onClick={() =>
                                setCurrentSlides((prev) => {
                                  const updated = [...prev];
                                  updated[index] = imgIdx;
                                  return updated;
                                })
                              }
                              className={`relative h-12 w-[4.75rem] shrink-0 overflow-hidden rounded-md border transition sm:h-14 sm:w-[5.5rem] cursor-pointer ${
                                currentSlide === imgIdx
                                  ? "border-teal-400 ring-1 ring-teal-400/50"
                                  : "border-zinc-700 opacity-60 hover:opacity-100"
                              }`}
                              aria-label={`Show screenshot ${imgIdx + 1} of ${project.images.length}`}
                            >
                              <Image
                                src={img}
                                alt={`Thumbnail ${imgIdx + 1}`}
                                fill
                                className="object-cover"
                              />
                            </button>
                          ))}
                        </div>
                      )}
                    </figure>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`min-w-0 lg:col-span-5 ${
                    isReversed ? "lg:order-1" : ""
                  }`}
                >
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-teal-400 font-medium">
                    {project.number} · {project.kind}
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-50 mt-2.5 leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-[0.9375rem] text-zinc-400 leading-[1.65] mt-3 line-clamp-3 max-w-md text-pretty">
                    {project.tagline}
                  </p>

                  <p className="font-mono text-xs uppercase tracking-wider text-teal-400/90 mt-2.5">
                    {project.architectureLine}
                  </p>

                  {/* Technologies Badges */}
                  <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Technologies">
                    {displayedTags.map((tech, techIdx) => (
                      <li key={techIdx}>
                        <span className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700/60 bg-zinc-800/80 px-2.5 py-1 text-xs font-medium text-zinc-200">
                          {tech}
                        </span>
                      </li>
                    ))}
                    {remainingTagsCount > 0 && (
                      <li>
                        <span className="inline-flex items-center rounded-md border border-zinc-700/40 bg-zinc-800/40 px-2 py-1 text-xs font-medium text-zinc-500">
                          +{remainingTagsCount}
                        </span>
                      </li>
                    )}
                  </ul>

                  {/* Highlights Bullet List */}
                  {project.metrics.length > 0 && (
                    <ul className="mt-5 max-w-md space-y-2" aria-label="Highlights">
                      {project.metrics.slice(0, 2).map((metric, metricIdx) => (
                        <li
                          key={metricIdx}
                          className="flex gap-2.5 text-sm leading-relaxed text-zinc-400"
                        >
                          <span
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/80"
                            aria-hidden="true"
                          />
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Action Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-1.5 sm:gap-2">
                    <button
                      type="button"
                      onClick={() => setOpenModalIndex(index)}
                      className="min-h-[2.5rem] inline-flex items-center justify-center gap-1.5 rounded-md bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-semibold px-4 py-2 text-sm transition active:scale-[0.98] cursor-pointer shadow-sm"
                    >
                      Case study
                    </button>

                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[2.5rem] inline-flex items-center justify-center gap-1.5 rounded-md border border-zinc-600 hover:border-zinc-400 bg-zinc-900/60 hover:bg-zinc-900 text-zinc-200 hover:text-zinc-50 font-medium px-3.5 py-2 text-sm transition active:scale-[0.98] cursor-pointer group/cta"
                    >
                      Live
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" />
                    </a>

                    <a
                      href={project.code}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[2.5rem] inline-flex items-center justify-center gap-1.5 rounded-md hover:bg-zinc-800/60 text-zinc-400 hover:text-zinc-50 font-medium px-3 py-2 text-sm transition active:scale-[0.98] cursor-pointer"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      Source
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Case Study Modal (Reazul Design) */}
      {openModalIndex !== null && (() => {
        const project = projects[openModalIndex];
        return (
          <div
            className="fixed inset-0 z-[9999] flex items-end justify-center p-0 sm:items-center sm:p-4 overscroll-none"
            onClick={(e) => {
              if (e.target === e.currentTarget) setOpenModalIndex(null);
            }}
          >
            {/* Backdrop */}
            <div className="fixed inset-0 bg-zinc-950/75 backdrop-blur-md" aria-hidden="true" />

            {/* Modal Box */}
            <div
              role="dialog"
              aria-modal="true"
              className="relative z-10 flex max-h-[min(92vh,880px)] w-full max-w-xl sm:max-w-2xl lg:max-w-4xl flex-col overflow-hidden rounded-t-xl sm:rounded-xl border border-zinc-700 bg-zinc-950 text-zinc-100 shadow-2xl"
            >
              {/* Header */}
              <header className="relative shrink-0 border-b border-zinc-700/80 bg-zinc-900/90 px-5 py-4 sm:px-7 sm:py-5">
                <div className="flex items-start justify-between gap-4">
                  <div className="min-w-0 space-y-1">
                    <p className="font-mono text-xs uppercase tracking-[0.16em] text-teal-400 font-medium">
                      Case Study
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-50">
                      {project.title}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpenModalIndex(null)}
                    className="shrink-0 p-2 rounded-md border border-zinc-700 bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-800 transition cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4.5 h-4.5" />
                  </button>
                </div>
              </header>

              {/* Scrollable Content */}
              <div className="min-h-0 flex-1 overflow-y-auto px-5 py-5 sm:px-7 sm:py-6 space-y-6">
                {/* Hero Image */}
                <div className="overflow-hidden rounded-lg border border-zinc-700/60 bg-zinc-900 aspect-[16/9] relative">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Details Grid */}
                <div className="mt-6 lg:grid lg:grid-cols-12 lg:gap-8">
                  {/* Left Column (7 cols) */}
                  <div className="lg:col-span-7 space-y-6">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.16em] text-teal-400 font-medium">
                        {project.kind}
                      </p>
                      <p className="font-mono text-xs text-teal-400/90 mt-1">
                        {project.architectureLine}
                      </p>
                    </div>

                    <section className="border-t border-zinc-700/60 pt-5">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold">
                        Problem
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                        {project.problem}
                      </p>
                    </section>

                    <section className="border-t border-zinc-700/60 pt-5">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold">
                        Architecture
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                        {project.architecture}
                      </p>
                    </section>

                    {project.architectureFlow && project.architectureFlow.length > 0 && (
                      <section className="border-t border-zinc-700/60 pt-5">
                        <h4 className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold mb-3">
                          System flow
                        </h4>
                        <ol className="space-y-0" aria-label="Architecture layers">
                          {project.architectureFlow.map((flowItem, flowIdx) => (
                            <li
                              key={flowIdx}
                              className="grid grid-cols-[1.75rem_minmax(0,1fr)] gap-x-2 border-t border-zinc-700/40 py-2.5 first:border-t-0 first:pt-0"
                            >
                              <span className="font-mono text-xs pt-0.5 text-teal-400/90 font-medium" aria-hidden="true">
                                {String(flowIdx + 1).padStart(2, "0")}
                              </span>
                              <span className="text-sm leading-snug text-zinc-200">
                                {flowItem}
                              </span>
                            </li>
                          ))}
                        </ol>
                      </section>
                    )}

                    <section className="border-t border-zinc-700/60 pt-5">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold mb-3">
                        Decisions &amp; Solutions
                      </h4>
                      <ul className="space-y-4">
                        {project.challengeSolutions.map((item, itemIdx) => (
                          <li key={itemIdx}>
                            <p className="text-sm font-semibold text-zinc-100">
                              {item.challenge}
                            </p>
                            <p className="mt-1 text-sm text-zinc-400 leading-relaxed">
                              {item.solution}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  {/* Right Column (5 cols) */}
                  <div className="mt-6 lg:mt-0 lg:col-span-5 space-y-6">
                    <section className="border-t border-zinc-700/60 pt-5 lg:border-t-0 lg:pt-0">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold">
                        What shipped
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                        {project.description}
                      </p>
                    </section>

                    <section className="border-t border-zinc-700/60 pt-5">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold mb-3">
                        In production
                      </h4>
                      <ul className="space-y-2">
                        {project.metrics.map((metric, mIdx) => (
                          <li key={mIdx} className="flex gap-2.5 text-sm text-zinc-300">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-400/80" aria-hidden="true" />
                            <span>{metric}</span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="border-t border-zinc-700/60 pt-5">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold mb-3">
                        Stack
                      </h4>
                      <ul className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech, tIdx) => (
                          <li key={tIdx}>
                            <span className="inline-flex items-center rounded-md border border-zinc-700/60 bg-zinc-800 px-2.5 py-1 text-xs font-medium text-zinc-200">
                              {tech}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </section>

                    <section className="border-t border-zinc-700/60 pt-5">
                      <h4 className="font-mono text-xs uppercase tracking-wider text-teal-400 font-semibold mb-2">
                        Where it runs
                      </h4>
                      <p className="text-xs font-mono text-zinc-400 leading-relaxed">
                        {project.devOps.join(" · ")}
                      </p>
                    </section>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <footer className="shrink-0 border-t border-zinc-700/80 bg-zinc-900/95 px-5 py-4 sm:px-7">
                <div className="flex flex-col gap-2.5 sm:flex-row">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[2.5rem] flex-1 inline-flex items-center justify-center gap-1.5 rounded-md bg-zinc-50 hover:bg-zinc-200 text-zinc-950 font-semibold px-4 py-2 text-sm transition active:scale-[0.98] cursor-pointer shadow-sm"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Live project
                  </a>
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="min-h-[2.5rem] sm:flex-initial inline-flex items-center justify-center gap-1.5 rounded-md border border-zinc-600 hover:border-zinc-400 bg-zinc-800 hover:bg-zinc-700 text-zinc-100 font-medium px-4 py-2 text-sm transition active:scale-[0.98] cursor-pointer"
                  >
                    <GithubIcon className="w-4 h-4 text-zinc-300" />
                    View on GitHub
                  </a>
                </div>
              </footer>
            </div>
          </div>
        );
      })()}
    </section>
  );
}
