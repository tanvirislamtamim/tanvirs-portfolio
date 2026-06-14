"use client";

import React from "react";
import { Mail, Terminal, ArrowUp } from "lucide-react";

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


export default function Footer() {
  const handleScrollToTop = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 py-12 relative overflow-hidden">
      {/* Background Subtle Line */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
        {/* Brand Details */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-white group"
          >
            <Terminal className="w-5 h-5 text-primary group-hover:rotate-12 transition-transform duration-300" />
            <span>
              Tanvir <span className="text-primary">Islam Tamim</span>
            </span>
          </a>
          <p className="text-zinc-500 text-xs mt-1">
            Crafting scalable MERN stack web applications.
          </p>
        </div>

        {/* Copyright info */}
        <p className="text-zinc-500 text-xs text-center order-3 md:order-2">
          &copy; {new Date().getFullYear()} Tanvir Islam Tamim. All rights reserved. Designed with modern aesthetics.
        </p>

        {/* Social Links & Back to Top */}
        <div className="flex items-center gap-6 order-2 md:order-3">
          {/* Socials */}
          <div className="flex gap-4">
            <a
              href="https://github.com/tanvirislamtamim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-5 h-5" />
            </a>

            <a
              href="https://facebook.com/tanvirislamtamim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="Facebook Profile"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>

            <a
              href="https://instagram.com/tanvirislamtamim"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="Instagram Profile"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            
            <a
              href="mailto:ti414815@gmail.com"
              className="text-zinc-500 hover:text-white transition-colors"
              aria-label="Email Me"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Back to top Button */}
          <button
            onClick={handleScrollToTop}
            className="w-9 h-9 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-zinc-850 hover:border-zinc-700 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
            aria-label="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
