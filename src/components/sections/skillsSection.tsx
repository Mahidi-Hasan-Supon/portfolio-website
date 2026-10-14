"use client";

import { motion, useReducedMotion } from "framer-motion";
import Tech3DCard from "../interactive/tech3DCard";

type SkillGroup = {
  category: string;
  items: string[];
};

const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "TypeScript",
      "React.js",
      "Next.js",
      "Tailwind CSS",
      "Responsive Design",
      "Framer Motion",
    ],
  },
  {
    category: "UI & State Management",
    items: [
      "Shadcn UI",
      "React Icons",
      "TanStack Query",
      "TanStack Form",
      "Zod",
      "Component-Based UI",
    ],
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "API Integration",
      "Middleware",
      "MVC Architecture",
    ],
  },
  {
    category: "Database & ORM",
    items: [
      "MongoDB",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "Database Design",
      "CRUD Operations",
    ],
  },
  {
    category: "Authentication & Security",
    items: [
      "JWT",
      "Cookie-Based Authentication",
      "Role-Based Access Control",
      "Password Hashing",
      "Request Validation",
      "CORS",
    ],
  },
  {
    category: "Payments & Integrations",
    items: [
      "Stripe Integration",
      "bKash Sandbox",
      "Google OAuth",
      "Nodemailer",
      "EJS Templates",
      "Webhook Basics",
    ],
  },
  {
    category: "Tools & Deployment",
    items: ["Git", "GitHub", "Postman", "Vercel", "npm", "VS Code"],
  },
  {
    category: "Programming & Core Concepts",
    items: [
      "JavaScript ES6+",
      "TypeScript Basics",
      "Asynchronous JavaScript",
      "Promises & Async/Await",
      "Error Handling",
      "Object-Oriented Programming",
    ],
  },
];

export default function SkillsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative mx-auto w-full max-w-7xl scroll-mt-24 overflow-hidden px-5 py-24 sm:px-8 lg:px-10"
    >
      {/* Background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-20 -z-10 size-72 rounded-full bg-cyan-500/[0.07] blur-[100px]"
      />

      {/* Heading */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
        className="mb-14 text-center"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
          My technical toolkit
        </p>

        <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
          Technical{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills
          </span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
          Technologies, tools, and concepts I use while building modern web
          applications and full-stack projects.
        </p>

        <div className="mx-auto mt-5 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
      </motion.div>

      {/* Skill cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((skillGroup, index) => (
          <motion.div
            key={skillGroup.category}
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.45,
              delay: reduceMotion ? 0 : (index % 3) * 0.08,
            }}
            className="h-full"
          >
            <Tech3DCard>
              <div className="h-full rounded-2xl p-4 sm:p-5">
                <h3 className="mb-5 border-b border-slate-700/70 pb-3 text-lg font-bold text-cyan-400">
                  {skillGroup.category}
                </h3>

                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-slate-700/70 bg-slate-900/90 px-3 py-2 text-sm font-medium text-slate-200 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/50 hover:bg-cyan-400/[0.06] hover:text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Tech3DCard>
          </motion.div>
        ))}
      </div>

      <p className="mt-10 text-center text-xs leading-6 text-slate-500">
        Continuously learning, practicing, and improving through real projects.
      </p>
    </section>
  );
}
