"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import { Button } from "../ui/button";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Change navbar appearance on scroll.
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Highlight the section currently visible on screen.
  useEffect(() => {
    const sections = navLinks
      .map(({ href }) => document.querySelector(href))
      .filter((section): section is Element => section !== null);

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(`#${visibleSections[0].target.id}`);
        }
      },
      {
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Close the mobile menu when Escape is pressed.
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  // Prevent background scrolling while the mobile menu is open.
  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav
        aria-label="Main navigation"
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "border-b border-cyan-400/15 bg-slate-950/90 shadow-[0_8px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl"
            : "border-b border-white/[0.06] bg-slate-950/55 backdrop-blur-lg"
        }`}
      >
        {/* Subtle cyan accent */}
        <div
          className={`absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        />

        <div
          className={`mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8 transition-all duration-300 ${
            isScrolled ? "h-16" : "h-20"
          }`}
        >
          {/* Logo */}
          <Link
            href="/"
            onClick={closeMenu}
            aria-label="Mahidi home"
            className="group relative shrink-0 text-2xl font-extrabold tracking-tight"
          >
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent transition-all duration-300 group-hover:brightness-125">
              Mahidi
            </span>
            {/* <span className="text-white">.dev</span> */}
            <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-cyan-400 transition-all duration-300 group-hover:w-full" />
          </Link>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "location" : undefined}
                  className={`group relative rounded-full px-3.5 py-2 text-sm font-medium transition-colors duration-300 xl:px-4 ${
                    isActive
                      ? "text-cyan-300"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>

                  <span
                    className={`absolute inset-0 rounded-full bg-cyan-400/[0.08] transition-all duration-300 ${
                      isActive
                        ? "scale-100 opacity-100"
                        : "scale-95 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                  />

                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-cyan-400 transition-all duration-300 ${
                      isActive
                        ? "w-5 opacity-100"
                        : "w-0 opacity-0 group-hover:w-5 group-hover:opacity-100"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Desktop actions */}
          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="https://github.com/Mahidi-Hasan-Supon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="rounded-full border border-transparent p-2.5 text-slate-400 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-white"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="https://www.linkedin.com/in/mahidi-hasan-supon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-full border border-transparent p-2.5 text-slate-400 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.06] hover:text-cyan-300"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="/resume.pdf"
              download
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-cyan-400/30 bg-cyan-400/10 px-5 py-2.5 text-sm font-semibold text-cyan-200 transition-all duration-300 hover:border-cyan-300/60 hover:bg-cyan-400/20 hover:shadow-[0_0_24px_rgba(34,211,238,0.12)]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative">Resume</span>
              <FiArrowUpRight
                size={16}
                className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsOpen((previous) => !previous)}
            className="relative z-[60] size-10 rounded-full border border-white/10 bg-white/[0.04] text-white transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300 lg:hidden"
          >
            {isOpen ? <FiX size={21} /> : <FiMenu size={21} />}
          </Button>
        </div>
      </nav>

      {/* Mobile menu backdrop */}
      <div
        aria-hidden="true"
        onClick={closeMenu}
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          isOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Mobile navigation panel */}
      <output
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        className={`fixed inset-x-0 top-0 z-50 origin-top border-b border-cyan-400/15 bg-slate-950/95 px-5 pb-7 pt-24 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-300 ease-out lg:hidden sm:px-8 ${
          isOpen
            ? "visible translate-y-0 scale-100 opacity-100"
            : "invisible -translate-y-3 scale-[0.98] opacity-0"
        }`}
      >
        <div className="mx-auto max-w-xl">
          <p className="mb-4 px-3 text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            Navigation
          </p>

          <div className="flex flex-col gap-1">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={isOpen ? 0 : -1}
                  aria-current={isActive ? "location" : undefined}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: isOpen ? `${index * 45}ms` : "0ms",
                  }}
                  className={`group flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "border-cyan-400/20 bg-cyan-400/[0.08] text-cyan-300"
                      : "border-transparent text-slate-300 hover:border-white/[0.06] hover:bg-white/[0.04] hover:text-white"
                  } ${
                    isOpen
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-3 opacity-0"
                  }`}
                >
                  {link.name}
                  <FiArrowUpRight
                    size={16}
                    className={`transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                      isActive
                        ? "text-cyan-300"
                        : "text-slate-600 group-hover:text-cyan-300"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 border-t border-white/[0.08] pt-5">
            <div className="flex items-center gap-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                tabIndex={isOpen ? 0 : -1}
                className="rounded-full border border-white/10 p-3 text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-white"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                tabIndex={isOpen ? 0 : -1}
                className="rounded-full border border-white/10 p-3 text-slate-300 transition-colors hover:border-cyan-400/30 hover:text-white"
              >
                <FaLinkedin size={18} />
              </a>
            </div>

            <a
              href="/resume.pdf"
              download
              tabIndex={isOpen ? 0 : -1}
              onClick={closeMenu}
              className="inline-flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_24px_rgba(34,211,238,0.2)]"
            >
              Download Resume
              <FiArrowUpRight size={17} />
            </a>
          </div>
        </div>
      </output>
    </>
  );
}
