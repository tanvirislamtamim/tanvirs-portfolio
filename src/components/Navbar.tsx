"use client";

import React, { useState, useEffect, useRef } from "react";
import { Menu, X, Terminal, Sun, Moon } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const lastScrollYRef = useRef(0);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  // Initialize theme from storage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    const activeTheme = savedTheme || systemTheme || "dark";

    const deferTimer = setTimeout(() => {
      setTheme(activeTheme);
      if (activeTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    }, 0);
    return () => clearTimeout(deferTimer);
  }, []);

  // Toggle theme handler
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  // Track scroll position and direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const lastScrollY = lastScrollYRef.current;

      // 1. Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollYRef.current = currentScrollY;

      // 2. Change background styling when scrolled
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 3. Determine active section based on scroll position
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = currentScrollY + 100; // Offset for navbar height

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      setIsOpen(false); // Close mobile menu if open
      const offsetTop = targetElement.offsetTop - 80; // Offset for header height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 transform ${isVisible ? "translate-y-0" : "-translate-y-full"
        } ${isScrolled
          ? "bg-white/80 dark:bg-zinc-950/75 backdrop-blur-md py-4 shadow-xl"
          : "bg-transparent py-6"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Brand/Logo */}
        <a
          href="#home"
          onClick={(e) => handleScrollTo(e, "#home")}
          className="flex items-center gap-2 text-xl font-bold tracking-tight text-zinc-900 dark:text-white group"
        >
          <Terminal className="w-6 h-6 text-primary group-hover:rotate-12 transition-transform duration-300" />
          <span>
            Tanvir <span className="text-primary">Islam Tamim</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-sm font-medium transition-colors duration-300 relative py-1 ${activeSection === link.href.substring(1)
                  ? "text-primary font-semibold"
                  : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full" />
              )}
            </a>
          ))}

          {/* Theme Toggle Switch */}
          <button
            onClick={toggleTheme}
            className="relative h-9 w-18 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300/80 dark:border-zinc-850 p-1 transition-colors duration-300 cursor-pointer flex items-center justify-between shrink-0"
            aria-label="Toggle Theme"
          >
            <div
              className={`absolute top-[3px] bottom-[3px] left-[3px] w-7 h-7 rounded-full bg-white dark:bg-zinc-800 shadow-sm transition-transform duration-300 ${theme === "dark" ? "translate-x-9" : "translate-x-0"
                }`}
            />
            <span className={`z-10 flex h-7 w-7 items-center justify-center transition-colors duration-300 ${theme === "light" ? "text-primary" : "text-zinc-500"}`}>
              <Sun className="w-4 h-4" />
            </span>
            <span className={`z-10 flex h-7 w-7 items-center justify-center transition-colors duration-300 ${theme === "dark" ? "text-secondary" : "text-zinc-500"}`}>
              <Moon className="w-4 h-4" />
            </span>
          </button>

          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-secondary rounded-full hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Toggle & Theme Toggler */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={toggleTheme}
            className="relative h-9 w-18 rounded-full bg-zinc-200 dark:bg-zinc-900 border border-zinc-300/80 dark:border-zinc-850 p-1 transition-colors duration-300 cursor-pointer flex items-center justify-between shrink-0"
            aria-label="Toggle Theme"
          >
            <div
              className={`absolute top-[3px] bottom-[3px] left-[3px] w-7 h-7 rounded-full bg-white dark:bg-zinc-800 shadow-sm transition-transform duration-300 ${theme === "dark" ? "translate-x-9" : "translate-x-0"
                }`}
            />
            <span className={`z-10 flex h-7 w-7 items-center justify-center transition-colors duration-300 ${theme === "light" ? "text-primary" : "text-zinc-500"}`}>
              <Sun className="w-4 h-4" />
            </span>
            <span className={`z-10 flex h-7 w-7 items-center justify-center transition-colors duration-300 ${theme === "dark" ? "text-secondary" : "text-zinc-500"}`}>
              <Moon className="w-4 h-4" />
            </span>
          </button>

          <button
            ref={hamburgerRef}
            onClick={() => setIsOpen(!isOpen)}
            className="text-zinc-600 dark:text-zinc-400 hover:text-zinc-950 dark:hover:text-white transition-colors duration-300 cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 top-[72px] z-40 w-full bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg border-t border-zinc-200 dark:border-zinc-800 transition-all duration-300 md:hidden ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
          }`}
      >
        <div
          ref={mobileMenuRef}
          onClick={(e) => e.stopPropagation()}
          className="flex flex-col p-8 gap-6 glass"
          style={{ backdropFilter: "blur(32px)", WebkitBackdropFilter: "blur(32px)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={`text-lg font-medium transition-all duration-300 px-5 py-3.5 rounded-xl border flex items-center ${activeSection === link.href.substring(1)
                  ? "text-white bg-gradient-to-r from-primary to-purple-600 border-primary/50 shadow-lg font-bold"
                  : "text-zinc-700 dark:text-zinc-300 bg-zinc-300 dark:bg-zinc-900/90 border-zinc-300/80 dark:border-zinc-800 hover:bg-zinc-200/50 dark:hover:bg-zinc-800/80"
                }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleScrollTo(e, "#contact")}
            className="w-full text-center py-3 font-semibold text-white bg-gradient-to-r from-primary to-secondary rounded-xl hover:shadow-lg border border-primary/25 dark:border-primary/40 transition-all duration-300 mt-4"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
}
