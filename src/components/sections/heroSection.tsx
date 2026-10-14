"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { FiArrowDown, FiArrowUpRight, FiCode, FiMail } from "react-icons/fi";
import { FaReact } from "react-icons/fa";
import TriangleTechOrbit from "../interactive/triengleTechOrbit";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut" as const,
    },
  },
};

export default function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const floatTransition = shouldReduceMotion
    ? {}
    : {
        duration: 4,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const,
      };

  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen scroll-mt-20 items-center overflow-hidden bg-slate-950 px-5 pb-16 pt-28 sm:px-8 md:pt-32 lg:px-10"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[100px]" />

        <div className="absolute -right-32 top-1/4 h-96 w-96 rounded-full bg-blue-600/[0.12] blur-[120px]" />

        <div className="absolute bottom-0 left-1/2 h-px w-3/4 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent" />

        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "radial-gradient(rgba(148,163,184,0.45) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Left: Introduction */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center lg:text-left"
        >
          {/* Availability badge */}
          <motion.div
            variants={itemVariants}
            className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-sm font-medium text-cyan-200 shadow-[0_0_30px_rgba(34,211,238,0.04)]"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-400" />
            </span>
            Full-Stack Web Developer
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl"
          >
            Hi, I&apos;m
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text pb-2 text-transparent">
              Mahidi Hasan Supon
            </span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-400 sm:text-lg lg:mx-0"
          >
            I build modern, responsive web applications with thoughtful user
            experiences and reliable backend systems using{" "}
            <span className="font-medium text-slate-200">
              React, Next.js, TypeScript, and Node.js.
            </span>
          </motion.p>

          {/* Technology chips */}
          <motion.div
            variants={itemVariants}
            className="mt-6 flex flex-wrap items-center justify-center gap-2 lg:justify-start"
          >
            {["React", "Next.js", "TypeScript", "Node.js"].map((technology) => (
              <span
                key={technology}
                className="rounded-lg border border-white/[0.08] bg-white/[0.035] px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.06] hover:text-cyan-200 sm:text-sm"
              >
                {technology}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-9 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start"
          >
            <Link
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-cyan-400 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/15 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl hover:shadow-cyan-500/20 sm:px-7"
            >
              Explore My Work
              <FiArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>

            <a
              href="/resume.pdf"
              download="Mahidi-Hasan-Supon-Resume.pdf"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-cyan-400/[0.07] hover:text-cyan-200 sm:px-7"
            >
              Download Resume
              <FiArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </motion.div>

          {/* Contact shortcut */}
          <motion.div
            variants={itemVariants}
            className="mt-7 flex items-center justify-center gap-2 text-sm text-slate-500 lg:justify-start"
          >
            <FiMail className="text-cyan-400" size={16} />
            <span>Have a project in mind?</span>
            <Link
              href="#contact"
              className="font-medium text-slate-300 underline decoration-cyan-400/40 underline-offset-4 transition-colors hover:text-cyan-300"
            >
              Let&apos;s talk
            </Link>
          </motion.div>
        </motion.div>

        {/* Right: Profile visual */}
        <motion.div
          initial={
            shouldReduceMotion ? false : { opacity: 0, scale: 0.92, x: 25 }
          }
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[420px] lg:max-w-[460px]"
        >
          {/* Ambient glow */}
          <div
            aria-hidden="true"
            className="absolute inset-[10%] rounded-full bg-cyan-400/15 blur-[70px]"
          />

          {/* Decorative outer ring */}
          {/* <motion.div
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-cyan-400/20"
          /> */}
          {/* Rotating rounded border with tech stack */}
          <motion.div
            aria-hidden="true"
            animate={shouldReduceMotion ? undefined : { rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="pointer-events-none absolute -inset-3 rounded-[2.5rem] border border-dashed border-cyan-400/30"
          >
            {/* Next.js */}
            <span className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-lg border border-white/15 bg-slate-950 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
              Next.js
            </span>

            {/* TypeScript */}
            <span className="absolute top-[22%] -right-5 rounded-lg border border-blue-400/30 bg-slate-950 px-3 py-1.5 text-xs font-bold text-blue-300 shadow-lg">
              TS
            </span>

            {/* JavaScript */}
            <span className="absolute -left-5 top-[42%] rounded-lg border border-yellow-400/30 bg-slate-950 px-3 py-1.5 text-xs font-bold text-yellow-300 shadow-lg">
              JS
            </span>

            {/* React */}
            <span className="absolute -right-4 bottom-[25%] rounded-lg border border-cyan-400/30 bg-slate-950 px-3 py-1.5 text-xs font-bold text-cyan-300 shadow-lg">
              React
            </span>

            {/* Express.js */}
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-lg border border-emerald-400/30 bg-slate-950 px-3 py-1.5 text-xs font-bold text-emerald-300 shadow-lg">
              Express.js
            </span>
          </motion.div>

          {/* Technology labels around the outside */}
          {/* {[
            {
              name: "Next.js",
              className: "-top-7 left-1/2 -translate-x-1/2",
            },
            {
              name: "TypeScript",
              className: "-left-8 top-1/3",
            },
            {
              name: "React",
              className: "-right-7 top-1/2",
            },
            {
              name: "Express.js",
              className: "bottom-8 -right-5",
            },
          ].map((tech) => (
            <motion.div
              key={tech.name}
              animate={shouldReduceMotion ? undefined : { y: [0, -4, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className={`absolute z-20 rounded-lg border border-cyan-400/25 bg-slate-950 px-3 py-2 text-xs font-semibold text-cyan-200 shadow-lg shadow-cyan-500/10 ${tech.className}`}
            >
              {tech.name}
            </motion.div>
          ))} */}
          {/* <TriangleTechOrbit/> */}

          {/* Main glass card */}
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/60 p-3 shadow-[0_25px_100px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-4">
            {/* Card top bar */}
            <div className="flex items-center justify-between px-3 py-3">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-red-400/80" />
                <span className="size-2.5 rounded-full bg-amber-400/80" />
                <span className="size-2.5 rounded-full bg-emerald-400/80" />
              </div>

              <span className="font-mono text-xs text-slate-500">
                developer.profile
              </span>

              <FiCode className="text-cyan-300" size={18} />
            </div>

            {/* Profile image */}
            <div className="relative aspect-[4/4.3] overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-slate-800 via-slate-900 to-cyan-950">
              <Image
                src="/profile.jpg"
                alt="Mahidi Hasan Supon - Full-Stack Web Developer"
                fill
                priority
                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 460px"
                className="object-cover object-center"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/10" />

              {/* Image caption */}
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                <p className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
                  Building for the web
                </p>
                <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Ideas into reality.
                </p>
              </div>
            </div>

            {/* Card footer */}
            <div className="flex items-center justify-between gap-3 px-3 py-4">
              <div>
                <p className="text-sm font-semibold text-white">
                  Mahidi Hasan Supon
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Full-Stack Web Developer
                </p>
              </div>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/[0.07] px-3 py-1.5 text-xs font-medium text-emerald-300">
                Open to opportunities
              </span>
            </div>
          </div>

          {/* Floating React badge */}
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, -9, 0] }}
            transition={floatTransition}
            className="absolute -left-5 top-[23%] flex items-center gap-2 rounded-2xl border border-cyan-400/20 bg-slate-900/90 px-3 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:-left-8 sm:px-4"
          >
            <FaReact className="text-cyan-300" size={24} />
            <div>
              <p className="text-xs font-semibold text-white">React</p>
              <p className="text-[10px] text-slate-400">Frontend</p>
            </div>
          </motion.div>

          {/* Floating code badge */}
          <motion.div
            animate={shouldReduceMotion ? undefined : { y: [0, 9, 0] }}
            transition={{
              ...floatTransition,
              duration: 4.5,
              delay: 0.5,
            }}
            className="absolute -right-3 bottom-[25%] flex items-center gap-2 rounded-2xl border border-blue-400/20 bg-slate-900/95 px-3 py-3 shadow-xl shadow-black/20 backdrop-blur-xl sm:-right-7 sm:px-4"
          >
            <div className="flex size-9 items-center justify-center rounded-xl bg-blue-400/10 text-blue-300">
              <FiCode size={21} />
            </div>
            <div>
              <p className="text-xs font-semibold text-white">Clean Code</p>
              <p className="text-[10px] text-slate-400">Build & improve</p>
            </div>
          </motion.div>

          {/* Scroll hint */}
          <motion.a
            href="#about"
            aria-label="Scroll to About section"
            animate={shouldReduceMotion ? undefined : { y: [0, 5, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mx-auto mt-8 flex w-fit items-center gap-2 text-xs font-medium text-slate-500 transition-colors hover:text-cyan-300"
          >
            <FiArrowDown size={15} />
            Scroll to explore
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
