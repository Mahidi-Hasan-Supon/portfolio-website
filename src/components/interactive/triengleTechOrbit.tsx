
"use client";

import { motion, useReducedMotion } from "framer-motion";

const technologies = [
  {
    name: "Next.js",
    label: "NEXT",
    position: "left-1/2 -top-5 -translate-x-1/2",
    color: "border-white/20 text-white",
  },
  {
    name: "TypeScript",
    label: "TS",
    position: "-left-5 top-[72%]",
    color: "border-blue-400/30 text-blue-300",
  },
  {
    name: "React",
    label: "React",
    position: "-right-5 top-[72%]",
    color: "border-cyan-400/30 text-cyan-300",
  },
];

export default function TriangleTechOrbit() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center">
      {/* Triangle orbit */}
      <motion.div
        animate={reduceMotion ? undefined : { rotate: 360 }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="relative h-[290px] w-[290px] sm:h-[340px] sm:w-[340px] lg:h-[390px] lg:w-[390px]"
      >
        {/* Three-sided frame */}
        <svg
          viewBox="0 0 300 300"
          fill="none"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient
              id="triangleGradient"
              x1="40"
              y1="30"
              x2="260"
              y2="270"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#22d3ee" stopOpacity="0.8" />
              <stop offset="0.5" stopColor="#3b82f6" stopOpacity="0.45" />
              <stop offset="1" stopColor="#22d3ee" stopOpacity="0.8" />
            </linearGradient>
          </defs>

          <path
            d="M150 18 L282 258 L18 258 Z"
            stroke="url(#triangleGradient)"
            strokeWidth="1.5"
            strokeDasharray="7 9"
            strokeLinejoin="round"
          />

          {/* Corner nodes */}
          <circle cx="150" cy="18" r="4" fill="#67e8f9" />
          <circle cx="282" cy="258" r="4" fill="#60a5fa" />
          <circle cx="18" cy="258" r="4" fill="#67e8f9" />
        </svg>

        {/* Technology labels */}
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className={`absolute ${tech.position} flex items-center justify-center`}
          >
            <div
              className={`flex h-12 min-w-12 items-center justify-center rounded-xl border bg-slate-950/95 px-3 text-xs font-bold shadow-[0_0_25px_rgba(34,211,238,0.12)] backdrop-blur-xl ${tech.color}`}
            >
              {tech.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Express.js badge */}
      <motion.div
        animate={reduceMotion ? undefined : { y: [0, -7, 0] }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[8%] left-1/2 -translate-x-1/2 rounded-xl border border-white/15 bg-slate-950/95 px-4 py-2.5 text-xs font-semibold text-slate-200 shadow-xl shadow-black/20 backdrop-blur-xl"
      >
        <span className="mr-2 text-emerald-300">{"{ }"}</span>
        Express.js
      </motion.div>
    </div>
  );
}
